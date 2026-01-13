import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export type ContactFormData = {
    name: string;
    email: string;
    message: string;
};

export const useContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setErrorMsg("");

        try {
            const serviceId = "YOUR_SERVICE_ID";
            const templateId = "YOUR_TEMPLATE_ID";
            const publicKey = "YOUR_PUBLIC_KEY";

            if (serviceId === "YOUR_SERVICE_ID") {
                await new Promise(resolve => setTimeout(resolve, 1000)); // Mock delay
                setIsSuccess(true);
                reset();
            } else {
                await emailjs.send(serviceId, templateId, {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                }, publicKey);
                setIsSuccess(true);
                reset();
            }
        } catch (error) {
            console.error(error);
            setErrorMsg("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setIsSuccess(false);
        reset();
    };

    return {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        isSuccess,
        errorMsg,
        onSubmit,
        resetForm
    };
};
