"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Button from '../ui/Button';
import toast from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  message?: string;
}

type SubmissionState = 'idle' | 'sending' | 'success' | 'error';

const ContactSection = () => {
  const { register, handleSubmit,  reset, formState: { errors } } = useForm<FormData>();
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const onSubmit = async (data: FormData) => {
    try {
      setSubmissionState('sending');

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          message: data.message || 'No message provided',
          time: new Date().toLocaleString("en-US", { timeZone: "America/Lima"}),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // console.log('SUCCESS!', result.status, result.text);
      setSubmissionState('success');
      toast.success('Message sent successfully!, I will get back to you soon.');

      reset();
      setSubmissionState('idle');

    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
      console.error('Submission error:', error);
      setSubmissionState('error');

      // Reset to idle after showing error state
      setTimeout(() => {
        setSubmissionState('idle');
      }, 3000);
    }
  };

  const getButtonText = () => {
    switch (submissionState) {
      case 'sending':
        return 'Sending...';
      case 'success':
        return 'Message Sent!';
      case 'error':
        return 'Try Again';
      default:
        return 'Send Message';
    }
  };

  return (
    <section className="contact flex-1 flex-center" id="contact">
      <div className="container flex-center">
        <div className="contact__content">
          <h2 className="contact__title text-center">Let’s Connect</h2>
          <p className='contact__description text-center'>
            If you’re working on something cool (or want to), I’d love to hear about it — reach out anytime.
          </p>
          <form className="contact__form flex-column" onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
              <input
                {...register('name', { required: 'Name is required' })}
                id="name"
                autoComplete="name"
                placeholder=" "
                type="text"
                disabled={submissionState === 'sending'}
              />
              <label htmlFor="name">Name *</label>
              <div className="form__error">
                {errors.name && <p className='form__error-message'>{errors.name.message}</p>}
              </div>
            </div>
            <div className='form-group'>
              <input
                {...register('email', { required: 'Email is required' })}
                id="email"
                autoComplete='email'
                placeholder=" "
                type="email"
                disabled={submissionState === 'sending'}
              />
              <label htmlFor="email">Email *</label>
              <div className="form__error">
                {errors.email && <p className='form__error-message'>{errors.email.message}</p>}
              </div>
            </div>
            <div className='form-group'>
              <textarea
                {...register('message')}
                id="message"
                placeholder=" "
                rows={5}
                disabled={submissionState === 'sending'}
              />
              <label htmlFor="message">Message</label>
              <div className="form__error">
                {errors.message && <p className='form__error-message'>{errors.message.message}</p>}
              </div>
            </div>
            <Button
              size='small'
              variant='secondary'
              className='contact__button'
              disabled={submissionState === 'sending'}>
              {getButtonText()}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;