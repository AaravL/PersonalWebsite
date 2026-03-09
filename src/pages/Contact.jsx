import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="content">
      <div className="hero">
        <h1>📧 Get In Touch</h1>
        <p>Let's shuffle some ideas together!</p>
      </div>
      
      <div className="container">
        <div className="contact-container">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem', color: '#d4af37', fontSize: '1.2rem' }}>
              <h2>✓ Message Sent!</h2>
              <p style={{ marginTop: '1rem', color: '#d0d0d0' }}>
                Thank you for reaching out. I'll get back to you soon!
              </p>
            </div>
          ) : (
            <>
              <h2 style={{ color: '#d4af37', marginBottom: '1.5rem', textAlign: 'center' }}>
                Send Me a Message
              </h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message ♠
                </button>
              </form>
            </>
          )}
        </div>

        <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: '800px', margin: '3rem auto 0' }}>
          <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '10px', border: '2px solid #d4af37' }}>
            <h3 style={{ color: '#d4af37', marginBottom: '0.5rem' }}>Email</h3>
            <a href="mailto:arv.loomba@gmail.com" style={{ color: '#d0d0d0', textDecoration: 'none' }}>
              arv.loomba@gmail.com
            </a>
          </div>
          
          <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '10px', border: '2px solid #d4af37' }}>
            <h3 style={{ color: '#d4af37', marginBottom: '0.5rem' }}>Phone</h3>
            <a href="tel:+16036578684" style={{ color: '#d0d0d0', textDecoration: 'none' }}>
              (603) 657-8684
            </a>
          </div>

          <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '10px', border: '2px solid #d4af37' }}>
            <h3 style={{ color: '#d4af37', marginBottom: '0.5rem' }}>GitHub</h3>
            <a href="https://github.com/AaravL" target="_blank" rel="noopener noreferrer" style={{ color: '#d0d0d0', textDecoration: 'none' }}>
              github.com/AaravL
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
