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
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS environment variables are missing.");
            }

            await emailjs.send(serviceId, templateId, {
                from_name: data.name,
                from_email: data.email,
                message: data.message,
            }, publicKey);

            setIsSuccess(true);
            reset();
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
