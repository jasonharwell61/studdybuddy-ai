import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import FlashcardDeck from '../components/FlashcardDeck'
import Quiz from '../components/Quiz'

const tabs = [
  { key: 'summary', label: 'Summary' },
  { key: 'flashcards', label: 'Flashcards' },
  { key: 'quiz', label: 'Quiz' },
]

function StudySet({ studySets }) {
  // Read the :id part of the address (it arrives as text)
  const { id } = useParams()

  // Which tab is currently showing
  const [activeTab, setActiveTab] = useState('summary')

  // Find the study set whose id matches the address
  const studySet = studySets.find((set) => set.id === Number(id))

  // If nothing matched, show a friendly message and stop here
  if (!studySet) {
    return (
      <div className="text-center py-5">
        <div className="display-1">📭</div>
        <h1 className="display-6 fw-bold mt-3">Study set not found</h1>
        <p className="text-muted">
          We couldn't find a study set with that link. It may have been deleted.
        </p>
        <Link to="/library" className="btn btn-primary">
          Back to Library
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <Link to="/library" className="text-decoration-none">
        ← Back to Library
      </Link>

      <div className="mt-3 mb-4">
        <span className="badge bg-primary mb-2">{studySet.subject}</span>
        <h1 className="mb-1 text-break">{studySet.title}</h1>
        <p className="text-muted">
          Created {new Date(studySet.createdAt).toLocaleDateString()}
        </p>
      </div>

      {/* Tabs */}
      <ul className="nav nav-tabs mb-4">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.key}>
            <button
              type="button"
              className={`nav-link ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Summary tab */}
      {activeTab === 'summary' && (
        <div>
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">Summary</h5>
              <p className="card-text text-break">{studySet.summary}</p>
            </div>
          </div>

          <div className="card bg-light">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">Original notes</h6>
              <p className="card-text mb-0 text-break" style={{ whiteSpace: 'pre-wrap' }}>
                {studySet.notes}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Flashcards tab */}
      {activeTab === 'flashcards' && (
        <FlashcardDeck key={studySet.id} flashcards={studySet.flashcards} />
      )}

      {/* Quiz tab */}
      {activeTab === 'quiz' && (
        <Quiz key={studySet.id} questions={studySet.quiz} />
      )}
    </div>
  )
}

export default StudySet