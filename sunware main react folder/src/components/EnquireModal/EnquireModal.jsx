import { useState } from 'react'
import './EnquireModal.css'

export default function EnquireModal() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const close = () => {
    document.getElementById('enquire-modal')?.classList.remove('active')
    document.body.style.overflow = ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enquiry submitted:', form)
    // TODO: integrate with API / EmailJS
    close()
  }

  return (
    <div id="enquire-modal" className="modal-overlay" onClick={(e) => { if (e.target.id === 'enquire-modal') close() }}>
      <div className="modal-content-wrapper">
        <div className="modal-header">
          <h3>Let&apos;s Talk</h3>
          <p>Submit your inquiry and our team will get back to you shortly.</p>
          <button className="modal-close" onClick={close} aria-label="Close modal">
            <i className="fal fa-times"></i>
          </button>
        </div>
        <form className="enquire-form" onSubmit={handleSubmit}>
          <div className="form-group mb-20">
            <input
              type="text" placeholder="Full Name" required
              value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="form-group mb-20">
            <input
              type="email" placeholder="Email Address" required
              value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="form-group mb-20">
            <input
              type="text" placeholder="Subject" required
              value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
            />
          </div>
          <div className="form-group mb-20">
            <textarea
              placeholder="Message" rows="4" required
              value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <button type="submit" className="default_button" style={{ width: '100%', justifyContent: 'center' }}>
            Send Inquiry <i className="flaticon-right-up"></i>
          </button>
        </form>
      </div>
    </div>
  )
}
