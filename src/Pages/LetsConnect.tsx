'use client'

import { useState, useRef, useCallback } from 'react';
import emailjs from '@emailjs/browser';

const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID!;
const templateID_send = process.env.NEXT_PUBLIC_TEMPLATEID_SEND!;
const templateID_recieve = process.env.NEXT_PUBLIC_TEMPLATE_RECIEVE!;
const publicKey = process.env.NEXT_PUBLIC_PUBLICKEY!;

const LetsconnectForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [userInputCode, setUserInputCode] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const generateVerificationCode = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };


  const sendVerificationCode = useCallback(async () => {
    setIsVerifying(true);
    setErrorMessage(null);
    const code = generateVerificationCode();
    setVerificationCode(code);

    try {
      await emailjs.send(
        serviceID,
        templateID_recieve, // Create a new EmailJS template for verification
        {
          to_email: email,
          verification_code: code,
        },
        publicKey // Replace with your actual public key
      );
      setSuccessMessage('Verification code sent. Please check your email.');
    } catch (err) {
      setErrorMessage('Failed to send verification code. Please try again.');
      console.error('EmailJS Error:', err);
    } finally {
      setIsVerifying(false);
    }
  }, [email]);

  const verifyCode = () => {
    if (userInputCode === verificationCode) {
      setIsVerified(true);
      setSuccessMessage('Email verified successfully!');
    } else {
      setErrorMessage('Invalid verification code. Please try again.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) {
      setErrorMessage('Please verify your email before sending a message.');
      return;
    }
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    if (form.current) {
 // Replace with your actual public key

      try {
        await emailjs.sendForm(serviceID, templateID_send, form.current, publicKey);
        setSuccessMessage('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        setIsVerified(false);
        setVerificationCode('');
        setUserInputCode('');
      } catch (err) {
        setErrorMessage('Failed to send the message. Please try again.');
        console.error('EmailJS Error:', err);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-full bg-gradient-to-b from-blue-200 to-blue-400 p-4">
      <h2
        className="text-3xl font-bold mb-6 text-center text-black"
        style={{ fontFamily: 'Courier New, monospace' }}
      >
        Let&apos;s Connect
      </h2>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="bg-gradient-to-b from-gray-100 to-gray-300 p-6 border-4 border-black rounded-lg w-full max-w-lg"
      >
        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="name"
            style={{ fontFamily: 'Verdana, sans-serif' }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white border-2 border-blue-500 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-blue-600"
            placeholder="Your Name"
            required
            style={{ fontFamily: 'Courier New, monospace' }}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="email"
            style={{ fontFamily: 'Verdana, sans-serif' }}
          >
            Email
          </label>
          <div className="flex">
            <input
              type="email"
              id="email"
              name="from_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white border-2 border-blue-500 rounded-l w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-blue-600"
              placeholder="Your Email"
              required
              style={{ fontFamily: 'Courier New, monospace' }}
            />
            <button title='Send'
              type="button"
              onClick={sendVerificationCode}
              disabled={isVerifying || isVerified}
              className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition-colors duration-200"
            >
              {isVerifying ? 'Sending...' : isVerified ? 'Verified' : 'Verify'}
            </button>
          </div>
        </div>

        {!isVerified && verificationCode && (
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="verificationCode"
              style={{ fontFamily: 'Verdana, sans-serif' }}
            >
              Verification Code
            </label>
            <div className="flex">
              <input
                type="text"
                id="verificationCode"
                value={userInputCode}
                onChange={(e) => setUserInputCode(e.target.value)}
                className="bg-white border-2 border-blue-500 rounded-l w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-blue-600"
                placeholder="Enter 4-digit code"
                required
                style={{ fontFamily: 'Courier New, monospace' }}
              />
              <button  title='Verify'
                type="button"
                onClick={verifyCode}
                className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600 transition-colors duration-200"
              >
                Verify
              </button>
            </div>
          </div>
        )}

        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="message"
            style={{ fontFamily: 'Verdana, sans-serif' }}
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-white border-2 border-blue-500 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-blue-600"
            placeholder="Your Message"
            required
            style={{ fontFamily: 'Courier New, monospace' }}
          />
        </div>

        <div className="flex justify-center">
          <button title='Send'
            type="submit"
            disabled={isSubmitting || !isVerified}
            className="font-sans bg-gray-200 text-base tracking-widest uppercase text-black cursor-pointer border-3 border-black px-2 py-1 sm:px-3 sm:py-1.5 shadow-[1px_1px_0px_0px,2px_2px_0px_0px,3px_3px_0px_0px,4px_4px_0px_0px,5px_5px_0px_0px] relative select-none active:shadow-none active:translate-x-1 active:translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {errorMessage && (
          <div
            className="text-red-600 text-sm mt-4 p-2 bg-red-100 border border-red-600 rounded"
            style={{ fontFamily: 'Courier New, monospace' }}
          >
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div
            className="text-green-600 text-sm mt-4 p-2 bg-green-100 border border-green-600 rounded"
            style={{ fontFamily: 'Courier New, monospace' }}
          >
            {successMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default LetsconnectForm;

