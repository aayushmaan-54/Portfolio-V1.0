import { HR } from '../Exports';
import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validateField = (name: string, value: string) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value) {
          error = 'Name is required.';
        } else if (value.length < 2 || value.length > 50) {
          error = 'Name must be between 2 and 50 characters.';
        } else if (!/^[a-zA-Z\s'-]+$/.test(value)) {
          error = 'Name can only contain alphabets, spaces, and hyphens.';
        }
        break;
      case 'email':
        if (!value) {
          error = 'Email is required.';
        } else if (!validateEmail(value)) {
          error = 'Please enter a valid email address.';
        }
        break;
      case 'message':
        if (!value) {
          error = 'Message is required.';
        } else if (value.length < 10 || value.length > 1000) {
          error = 'Message must be between 10 and 1000 characters.';
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const nameError = !formData.name ? 'Name is required.' :
      (formData.name.length < 2 || formData.name.length > 50) ? 'Name must be between 2 and 50 characters.' :
        !/^[a-zA-Z\s'-]+$/.test(formData.name) ? 'Name can only contain alphabets, spaces, and hyphens.' : '';

    const emailError = !formData.email ? 'Email is required.' :
      (!validateEmail(formData.email) ? 'Please enter a valid email address.' : '');

    const messageError = !formData.message ? 'Message is required.' :
      (formData.message.length < 10 || formData.message.length > 1000) ? 'Message must be between 10 and 1000 characters.' : '';

    setErrors({ name: nameError, email: emailError, message: messageError });

    if (!nameError && !emailError && !messageError) {
      setIsSubmitting(true);
      setIsSent(false);

      emailjs.send('service_hktwlns', 'template_bc5p9sj', {
        name: formData.name,
        email: formData.email,
        message: formData.message
      }, '7J3d8BkvoIFaMc0LD')
        .then((response) => {
          console.log('Form submitted successfully', response.status, response.text);
          setIsSent(true);
          setFormData({ name: '', email: '', message: '' });
        }, (error) => {
          console.error('Form submission error:', error);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <section id='contact'>
      <HR text='Contact' />
      <div>
        <div className='relative text-[#F5F4EF] w-fit mx-auto'>
          <h1 className='text-7xl mb-16 w-fit mx-auto contactHeading dark:text-lhtMain text-main'>Contact Me</h1>
          <div className='flex items-center justify-center gap-2 bg-[#d3cfc2] dark:bg-[#2E2F2A] border-2 dark:border-[#41403D] border-[#99958a] rounded-full py-2 w-fit font-nb px-4 blinkingIndicator text-xs absolute top-10 -rotate-[15deg] left-34 shadow-xl'>
            <div className='size-2 bg-cherryRed rounded-full blink'></div>
            <h3 className='dark:text-lhtMain text-main'>Available for Hire</h3>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center font-nb'>
        <div className='mb-4'>
          <input
            type="text"
            name="name"
            required
            placeholder='Name'
            autoComplete='off'
            value={formData.name}
            onChange={handleChange}
            className='p-2'
          />
          {errors.name && <p className='text-cherryRed text-[10px] mt-[-14px] ml-2'>*{errors.name}</p>}
        </div>
        <div className='mb-4'>
          <input
            type="email"
            name="email"
            required
            placeholder='Email'
            autoComplete='off'
            value={formData.email}
            onChange={handleChange}
            className='p-2'
          />
          {errors.email && <p className='text-cherryRed text-[10px] mt-[-14px] ml-2'>*{errors.email}</p>}
        </div>
        <div className='mb-4'>
          <textarea
            name="message"
            placeholder='How can I help you?'
            required
            autoComplete='off'
            value={formData.message}
            onChange={handleChange}
            className='p-2 pb-16'
          ></textarea>
          {errors.message && <p className='text-cherryRed text-[10px] mt-[-18px] ml-2'>*{errors.message}</p>}
        </div>
        <button
          type="submit"
          className={`flex items-center sendBtn justify-center ${isSubmitting
              ? 'bg-yorange hover:bg-[#994a28] focus:ring-[#994a289c] text-lhtMain'
              : 'bg-yorange focus:ring-4 focus:outline-none focus:ring-[#994a289c] hover:bg-[#994a28] text-lhtMain'
            } font-nb rounded-lg py-3 outline-none`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg
                aria-hidden="true"
                role="status"
                className="inline size-5 mr-3 text-lhtMain animate-spin fill-lhtMain"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                />
              </svg>
              Sending...
            </>
          ) : isSent ? (
            'Send'
          ) : (
            'Send'
          )}
        </button>
      </form>
    </section>
  );
};