import './CSS/home.css'
import './CSS/contact.css'

function Contact() {
	const handleSubmit = (event) => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const name = String(formData.get('name') || '').trim()
		const email = String(formData.get('email') || '').trim()
		const message = String(formData.get('message') || '').trim()

		const subject = encodeURIComponent(`Portfolio Contact from ${name || 'Website Visitor'}`)
		const body = encodeURIComponent(
			`Name: ${name || 'N/A'}\nEmail: ${email || 'N/A'}\n\nMessage:\n${message || 'N/A'}`,
		)

		window.location.href = `mailto:kkprasad@ualberta.ca?subject=${subject}&body=${body}`
	}

	return (
		<section className='contact'>
            <h1>Get In Touch</h1>
            <div className='line'></div>
			<p className='contact-intro'>
				I’m currently open to internships, co-op opportunities, and project collaborations.
			</p>
			<form className='contact-form' onSubmit={handleSubmit}>
				<label htmlFor='name'>Name</label>
				<input id='name' name='name' type='text' placeholder='Your name' />

				<label htmlFor='email'>Email</label>
				<input id='email' name='email' type='email' placeholder='you@example.com' />

				<label htmlFor='message'>Message</label>
				<textarea id='message' name='message' rows='5' placeholder='Write your message here...' />

				<button type='submit' className='contact-btn'>Send Message</button>
			</form>
		</section>
	)
}

export default Contact