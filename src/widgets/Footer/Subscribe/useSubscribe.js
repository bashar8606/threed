
import { useState } from 'react';
import * as Yup from 'yup';


export const useSubscribe = ({ }) => {
    const [hasSubmitted, setHasSubmitted] = useState(false)


    const handleSubscribe = async (values, actions) => {
        try {
            const res = await fetch(`/api/subscribe`, {
                method: 'POST',
                body: JSON.stringify(values),
            });
            console.log("res", await res.json());
            if (res.status) {
                handleSubmit(values, actions);
            }
        } catch (error) {
            console.log(error || 'failed to fetch');
        }
    }

    const initialValues = {
        email: '',
    };
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
    });

    const handleSubmit = (values, { resetForm }) => {
        setHasSubmitted(true)
        resetForm();
        setTimeout(() => {
            setHasSubmitted(false)
        }, 5000);
    };

    return {
        initialValues,
        handleSubmit,
        hasSubmitted,
        validationSchema,
        handleSubscribe
    };
};
