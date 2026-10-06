import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { generateStudySet } from '../utils/generateStudySet'

const MAX_NOTES_LENGTH = 5000

const subjects = [
  'Math',
  'Science',
  'History',
  'Language',
  'Computer Science',
  'Other',
]

function Create({ onAddStudySet }) {
  const navigate = useNavigate()

  // State: what the user has typed
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    notes: '',
  })

  // State: validation error messages
  const [errors, setErrors] = useState({})

  // State: are we generating right now?
  const [isLoading, setIsLoading] = useState(false)

  // State: an error message if generation fails
  const [submitError, setSubmitError] = useState('')

  // Runs every time the user types in any field
  function handleChange(event) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  // Checks the form and returns an object of error messages
  function validate() {
    const newErrors = {}

    if (formData.title.trim() === '') {
      newErrors.title = 'Please enter a title for your study set.'
    }
    if (formData.subject === '') {
      newErrors.subject = 'Please choose a subject.'
    }
    if (formData.notes.trim().length < 50) {
      newErrors.notes =
        'Please enter at least 50 characters so there is enough to work with.'
    } else if (formData.notes.length > MAX_NOTES_LENGTH) {
      newErrors.notes = `Please keep your notes under ${MAX_NOTES_LENGTH} characters. You can split long notes into several study sets.`
    }

    return newErrors
  }

  // Runs when the user clicks the submit button
  async function handleSubmit(event) {
    event.preventDefault()

    const newErrors = validate()
    setErrors(newErrors)

    // If there is at least one error, stop here
    if (Object.keys(newErrors).length > 0) {
      return
    }

    setSubmitError('')
    setIsLoading(true)

    try {
      // Wait for the (simulated) AI to finish
      const newStudySet = await generateStudySet(formData)

      // Ask App to add it to the shared list, then open it
      onAddStudySet(newStudySet)
      navigate(`/set/${newStudySet.id}`)
    } catch {
      setSubmitError(
        'Something went wrong while generating your study set. Please try again.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  const isOverLimit = formData.notes.length > MAX_NOTES_LENGTH

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-lg-8">
        <h1 className="mb-2">Create a Study Set</h1>
        <p className="text-muted mb-4">
          Paste your notes below and we'll turn them into study material.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Title */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className={`form-control ${errors.title ? 'is-invalid' : ''}`}
              placeholder="e.g. Chapter 4: Photosynthesis"
              value={formData.title}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.title && (
              <div className="invalid-feedback">{errors.title}</div>
            )}
          </div>

          {/* Subject */}
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              className={`form-select ${errors.subject ? 'is-invalid' : ''}`}
              value={formData.subject}
              onChange={handleChange}
              disabled={isLoading}
            >
              <option value="">Choose a subject...</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            {errors.subject && (
              <div className="invalid-feedback">{errors.subject}</div>
            )}
          </div>

          {/* Notes */}
          <div className="mb-3">
            <label htmlFor="notes" className="form-label">
              Your Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows="8"
              className={`form-control ${errors.notes ? 'is-invalid' : ''}`}
              placeholder="Paste or type your notes here. Full sentences work best."
              value={formData.notes}
              onChange={handleChange}
              disabled={isLoading}
            ></textarea>
            {errors.notes && (
              <div className="invalid-feedback">{errors.notes}</div>
            )}
            <div className={`form-text ${isOverLimit ? 'text-danger' : ''}`}>
              {formData.notes.length} / {MAX_NOTES_LENGTH} characters (minimum
              50)
            </div>
          </div>

          {/* Error from the generator */}
          {submitError && (
            <div className="alert alert-danger" role="alert">
              {submitError}
            </div>
          )}

          {/* Submit button */}
          <div className="d-grid d-md-block">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Generating...
                </>
              ) : (
                'Generate Study Set'
              )}
            </button>
          </div>
        </form>

        <p className="text-muted small mt-4">
          Demo mode: study sets are built by a simulated AI that works from the
          sentences in your own notes.
        </p>
      </div>
    </div>
  )
}

export default Create