type typeToMailType = {
    [key: string]: {
        title: string;
        mailTo: string[];
    }
}

export const typeToMail: typeToMailType = {
    'calculate': {
        title: 'Заявка на расчёт стоимости',
        mailTo: ['loginov@cherryline.ru', 'mail@netcats.pro']
    },
    'partners': {
        title: 'Стать партнёром',
        mailTo: ['loginov@cherryline.ru', 'mail@netcats.pro']
    },
    'question': {
        title: 'Вопрос с сайта',
        mailTo: ['loginov@cherryline.ru', 'mail@netcats.pro']
    },
    'drivers': {
        title: 'Хочу стать водителем',
        mailTo: ['loginov@cherryline.ru', 'mail@netcats.pro']
    }
}

export const inputNameToTitle: {
    [key: string]: string
} = {
    'formType': 'Тема письма',
    'name': 'ФИО',
    'phone': 'Телефон',
    'inn': 'ИНН',
    'from': 'Откуда',
    'to': 'Куда',
    'city': 'Город',
    'company_name': 'Название компании',
    'transport_count': 'Кол-во ТС'
}