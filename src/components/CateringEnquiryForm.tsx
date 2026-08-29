import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { cateringEventTypes } from '../data/catering'
import { submitCateringEnquiry } from '../services/cateringEnquiries'
import type { CateringEnquiry } from '../types/content'

const emptyEnquiry: CateringEnquiry = {
  name: '',
  email: '',
  phone: '',
  eventDate: '',
  venue: '',
  guestCount: '',
  eventType: '',
  dietaryRequirements: '',
  additionalDetails: '',
}

function CateringEnquiryForm() {
  const [enquiry, setEnquiry] = useState<CateringEnquiry>(emptyEnquiry)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const successMessageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (status === 'success') successMessageRef.current?.focus()
  }, [status])

  const updateField = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setEnquiry((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')

    try {
      await submitCateringEnquiry(enquiry)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="catering-form__success" ref={successMessageRef} tabIndex={-1}>
        <p className="eyebrow">Enquiry prepared</p>
        <h3>Thanks — your event details are ready.</h3>
        <p>
          This prototype does not send or store your information yet. Wazzup's
          production enquiry contact still needs to be connected.
        </p>
      </div>
    )
  }

  return (
    <form className="catering-form" onSubmit={handleSubmit}>
      <p className="catering-form__prototype-note" id="catering-form-note">
        Prototype form — your details are not currently sent or stored.
      </p>

      <div className="catering-form__fields">
        <div className="form-field">
          <label htmlFor="catering-name">Name <span aria-hidden="true">*</span></label>
          <input
            id="catering-name"
            name="name"
            type="text"
            autoComplete="name"
            value={enquiry.name}
            onChange={updateField}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="catering-email">Email <span aria-hidden="true">*</span></label>
          <input
            id="catering-email"
            name="email"
            type="email"
            autoComplete="email"
            value={enquiry.email}
            onChange={updateField}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="catering-phone">Phone</label>
          <input
            id="catering-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={enquiry.phone}
            onChange={updateField}
          />
        </div>

        <div className="form-field">
          <label htmlFor="catering-date">Event date <span aria-hidden="true">*</span></label>
          <input
            id="catering-date"
            name="eventDate"
            type="date"
            value={enquiry.eventDate}
            onChange={updateField}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="catering-venue">Venue / suburb <span aria-hidden="true">*</span></label>
          <input
            id="catering-venue"
            name="venue"
            type="text"
            autoComplete="street-address"
            value={enquiry.venue}
            onChange={updateField}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="catering-guests">Approximate guest count <span aria-hidden="true">*</span></label>
          <input
            id="catering-guests"
            name="guestCount"
            type="number"
            min="1"
            inputMode="numeric"
            value={enquiry.guestCount}
            onChange={updateField}
            required
          />
        </div>

        <div className="form-field form-field--wide">
          <label htmlFor="catering-event-type">Event type</label>
          <select
            id="catering-event-type"
            name="eventType"
            value={enquiry.eventType}
            onChange={updateField}
          >
            <option value="">Select an option</option>
            {cateringEventTypes.map((eventType) => (
              <option key={eventType} value={eventType}>{eventType}</option>
            ))}
            <option value="Other / not sure">Other / not sure</option>
          </select>
        </div>

        <div className="form-field form-field--wide">
          <label htmlFor="catering-dietary">Dietary requirements / notes</label>
          <textarea
            id="catering-dietary"
            name="dietaryRequirements"
            rows={3}
            value={enquiry.dietaryRequirements}
            onChange={updateField}
          />
        </div>

        <div className="form-field form-field--wide">
          <label htmlFor="catering-details">Additional details</label>
          <textarea
            id="catering-details"
            name="additionalDetails"
            rows={5}
            value={enquiry.additionalDetails}
            onChange={updateField}
          />
        </div>
      </div>

      {status === 'error' && (
        <p className="catering-form__error" role="alert">
          The enquiry could not be prepared. Please check the form and try again.
        </p>
      )}

      <button
        className="button catering-form__submit"
        type="submit"
        aria-describedby="catering-form-note"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Preparing…' : 'Send enquiry'}
      </button>
    </form>
  )
}

export default CateringEnquiryForm
