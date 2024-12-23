'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { z } from 'zod';
import { contactUs } from '@/utils/imageConstants';

const schema = z.object({
  lastName: z
    .string()
    .min(1, { message: 'Last name must be atleast 1 chars' })
    .max(50, { message: 'Last name must be less than 50 chars' })
    .regex(/^[A-Za-z]+$/, { message: 'Last name must only contain letters' })
    .optional()
    .or(z.literal('')),
  firstName: z
    .string()
    .nonempty({ message: 'First name is required' })
    .min(2, { message: 'First name must be atleast 2 chars' })
    .max(50, { message: 'First name must be less than 50 chars' })
    .regex(/^[A-Za-z]+$/, { message: 'First name must only contain letters' }),
  email: z
    .string()
    .nonempty({ message: 'Email is required' })
    .email({ message: 'Email must be a valid email address' }),
  phoneNumber: z
    .string()
    .length(10, { message: 'Phone number must be exactly 10 digits' })
    .regex(/^\+?[1-9]\d{1,14}$/, { message: 'Phone number must be valid' })
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 chars' })
    .max(500, { message: 'Message must be less than 500 chars' })
    .optional()
    .or(z.literal('')),
});

type FormFields = z.infer<typeof schema>;

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const apiUrl = process.env.NEXT_PUBLIC_AWS_API_URL || '';
    const apiKey = process.env.NEXT_PUBLIC_API_KEY || '';

    const adminEmailBody = {
      subject: 'New Contact Us Form Submission',
      htmlBody: `
          <html>
              <body>
                  <h1>Contact Us Form Submission</h1>
                  <p>First Name: ${data.firstName}</p>
                  <p>Last Name: ${data.firstName}</p>
                  <p>Email Address: ${data.email}</p>
                  <p>Phone Number: ${data.phoneNumber}</p>
                  <p>Message: ${data.message}</p>
              </body>
          </html>
      `,
    };
    try {
      const adminResponse = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify(adminEmailBody),
      });
      if (adminResponse.ok) {
        toast.success('Form Submission Successful');
        await new Promise((resolve) => setTimeout(resolve, 1000));
        reset();
      } else {
        toast.error('Form Submission Failed');
      }
    } catch (error) {
      toast.error('Form Submission Failed');
    }
  };

  const handleBlur = async (field: keyof FormFields) => {
    await trigger(field);
  };

  return (
    <main className="min-h-dvh w-full px-20 py-6 md:px-8">
      <h1 className="mb-10 text-center text-[82px] font-extrabold text-white sm:text-[24px]">
        Get in <span className="text-[#1A81F3]">touch</span>
      </h1>
      <div className="warpper flex w-full items-center justify-between gap-12">
        <section className="md:text-center">
          <h2 className="text-[30px] font-semibold text-[#1A81F3] sm:text-[20px]">Let us connect</h2>
          <p className="mb-7 w-[75%] text-[16px] leading-tight -tracking-[0.01em] text-white md:w-full">
            Let us align our constellations! Reach out and Collaborate with Beyond Media
          </p>
          <form action="/submit" method="post" className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full gap-5 xs:flex-wrap">
              <div className="flex-grow">
                <div className="relative">
                  <input
                    type="text"
                    {...register('lastName')}
                    placeholder="Last Name"
                    autoComplete="off"
                    className="w-full flex-grow"
                    onBlur={() => handleBlur('lastName')}
                  />
                  {errors.lastName && (
                    <div className="error text-left text-[10px] text-red-500">{errors.lastName.message}</div>
                  )}
                </div>
              </div>
              <div className="flex-grow">
                <div className="relative">
                  <input
                    type="text"
                    {...register('firstName')}
                    placeholder="First Name*"
                    autoComplete="off"
                    className="w-full flex-grow"
                    onBlur={() => handleBlur('firstName')}
                  />
                  {errors.firstName && <div className="error text-[10px] text-red-500">{errors.firstName.message}</div>}
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <input
                  type="email"
                  {...register('email')}
                  placeholder="Email*"
                  autoComplete="off"
                  className="w-full"
                  onBlur={() => handleBlur('email')}
                />
                {errors.email && <div className="error text-[10px] text-red-500">{errors.email.message}</div>}
              </div>
            </div>
            <div className="">
              <div className="relative">
                <input
                  type="number"
                  {...register('phoneNumber')}
                  placeholder="Phone Number"
                  autoComplete="off"
                  className="w-full"
                  onBlur={() => handleBlur('phoneNumber')}
                />
                {errors.phoneNumber && (
                  <div className="error text-[10px] text-red-500">{errors.phoneNumber.message}</div>
                )}
              </div>
            </div>
            <div className="relative">
              <textarea
                {...register('message')}
                placeholder="Message"
                rows={3}
                className="w-full"
                onBlur={() => handleBlur('message')}
              ></textarea>
              {errors.message && <div className="error text-[10px] text-red-500">{errors.message.message}</div>}
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className={`w-full rounded-md bg-[#1A81F3] px-2.5 py-3 text-white`}
            >
              {isSubmitting ? 'Loading...' : 'Send'}
            </button>
            {errors.root && <div className="error text-[10px] text-red-500">{errors.root.message}</div>}
          </form>
        </section>
        <section className="mx-auto">
          <Image src={contactUs} alt="contact-us-image" />
        </section>
      </div>
    </main>
  );
};

export default ContactUs;
