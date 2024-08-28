'use server';
import React from 'react';
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    if (!validateString(senderEmail, 500) ) {
        return {
            error: 'Invalid Sender email',
        }
    }
    if (!validateString(message, 5000)){
        return {
            error: 'Invalid message',
        }
    }
    let data;
    try {
        await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: `carrycold69@gmail.com`,
        subject: 'New message from your portfolio website',
        replyTo: senderEmail as string,
        // react: <ContactFormEmail message={message} senderEmail={senderEmail}/>
        react: React.createElement(ContactFormEmail, {
            message: message as string,
            senderEmail: senderEmail as string})
    })}
    catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        }
    }

    return { data };
}