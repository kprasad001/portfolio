import React, { useRef, useState } from 'react'
import './CSS/home.css'
import './CSS/contact.css'
import { sendForm } from '@emailjs/browser'

function Contact() {
	const formRef = useRef(null)
	const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

	const handleSubmit = async (event) => {
		event.preventDefault()
		setStatus('sending')

		const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
		const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
		const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

		if (!serviceId || !templateId || !publicKey) {
			setStatus('error')
			console.error('EmailJS is not configured. Set VITE_EMAILJS_* env vars.')
			return
		}

		try {
			await sendForm(serviceId, templateId, formRef.current, publicKey)
			setStatus('success')
			formRef.current.reset()
		} catch (err) {
			console.error('Email send failed', err)
			setStatus('error')
		}
	}

	return (
		<section id="contact-section" className='contact'>
			<h1>get in touch</h1>
				<ul>
					<li className='contact-intro'>
						currently open to internships, co-op opportunities, and project collaborations.
					</li>
				</ul>
			<form className='contact-form' ref={formRef} onSubmit={handleSubmit}>
				<label htmlFor='name'>Name</label>
				<input id='name' name='from_name' type='text' placeholder='Your name' required />

				<label htmlFor='email'>Email</label>
				<input id='email' name='reply_to' type='email' placeholder='you@example.com' required />

				<label htmlFor='message'>Message</label>
				<textarea id='message' name='message' rows='5' placeholder='Write your message here...' required />

				<button type='submit' className='contact-btn'>
					<span className="text">{status === 'sending' ? 'Sending…' : 'Send message'}</span>
					<span>Thanks!</span>
				</button>

				{status === 'success' && <p className='contact-status success'>Message sent — thanks!</p>}
				{status === 'error' && (
					<p className='contact-status error'>
						Sending failed. Check console and EmailJS env vars, or use mailto as fallback.
					</p>
				)}
			</form>
		</section>
	)
}

export default Contact