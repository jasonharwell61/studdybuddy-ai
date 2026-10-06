import { Link } from 'react-router-dom'

function StudySetCard({ studySet, onDelete }) {
  const { id, title, subject, createdAt, flashcards, quiz } = studySet

  function handleDeleteClick() {
    const confirmed = window.confirm(`Delete "${title}"? This cannot be undone.`)
    if (confirmed) {
      onDelete(id)
    }
  }

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <span className="badge bg-primary align-self-start mb-2">
          {subject}
        </span>
        <h5 className="card-title text-break">{title}</h5>
        <p className="card-text text-muted small">
          Created {new Date(createdAt).toLocaleDateString()}
        </p>
        <p className="card-text">
          {flashcards.length} flashcards · {quiz.length} quiz questions
        </p>
        <div className="d-flex gap-2 mt-auto">
          <Link to={`/set/${id}`} className="btn btn-outline-primary flex-grow-1">
            Open
          </Link>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default StudySetCard