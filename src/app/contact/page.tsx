// app/contact/page.tsx
import { Resend } from 'resend';

export default function ContactPage() {
  async function handleSubmit(formData: FormData) {
    'use server';
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'contact@yourdomain.com',
      to: 'your@email.com',
      subject: 'New contact form submission',
      text: `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nMessage: ${formData.get('message')}`
    });
  }

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows={5} 
            required 
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <button 
          type="submit" 
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}