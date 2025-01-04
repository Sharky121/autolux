import Container from '../container/container';
import QuestionForm from '../question-form/question-form';

import styles from './contacts-feedback.module.scss';

type ContactsFeedbackType = {
    customClass?: string
}

const ContactsFeedback = ({customClass}: ContactsFeedbackType) => {
    return (
        <section className={`${styles.contactsFeedbackSection} ${customClass ? customClass : ''}`}>
            <Container customClassName={styles.contactsFeedbackContainer}>
                <QuestionForm />
            </Container>
        </section>
    )
}

export default ContactsFeedback;