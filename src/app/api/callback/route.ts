import { inputNameToTitle, typeToMail } from "@/utils/consts";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    const formData = await request.json();
    
    console.log(formData.formType);

    const mailTo = typeToMail[formData.formType].mailTo.join();
    const mailTitle = typeToMail[formData.formType].title;

    const errorMessage: string[] = [];

    Object.entries(formData).forEach((item) => {
        if (item[1] === '') {
            errorMessage.push(`Заполните обязательное поле: ${inputNameToTitle[item[0]]}`);
        }
    });
    
    if (errorMessage.length !== 0) {
        return Response.json({
            errors: errorMessage,
            code: 'VALIDATION_ERROR',
        }, {status: 400});
    }

    const mailMessage = Object
                            .entries(formData)
                            .slice(1)
                            .map((item) => {
                                return `<p><b>${inputNameToTitle[item[0]]}:</b> ${item[1]}</p>`
                            }).join(' ');

    console.log(mailMessage);

    let userMessage = 'send';

    const transporter = nodemailer.createTransport({
        host: process.env.WEB_MAILER_SMTP,
        port: parseInt(process.env.WEB_MAILER_PORT || '465', 10),
        secure: true,
        auth: {
          user: process.env.WEB_MAILER,
          pass: process.env.WEB_MAILER_PASSWORD,
        },
    });

    const mailOptions = {
        to: mailTo,
        from: process.env.WEB_MAILER_FROM,
        subject: mailTitle,
        html: mailMessage
    };
  
    try {
        await transporter.sendMail(mailOptions);
        userMessage = 'Отправлено';
    } catch (error) {
        userMessage = `${error}`;
    }
  
    return Response.json(userMessage);
}