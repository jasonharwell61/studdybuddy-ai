import { useState } from 'react'

function FlashcardDeck({ flashcards }) {
  // Which card we are on (starts at the first card, index 0)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Are we showing the answer side?
  const [isFlipped, setIsFlipped] = useState(false)

  // Missing data: if there are no flashcards, show a message and stop
  if (flashcards.length === 0) {
    return (
      <div className="alert alert-warning">
        This study set has no flashcards yet.
      </div>
    )
  }

  // Values we calculate from state
  const card = flashcards[currentIndex]
  const isFirst = currentIndex === 0
  const isLast = currentIndex === flashcards.length - 1
  const progressPercent = ((currentIndex + 1) / flashcards.length) * 100

  function handleFlip() {
    setIsFlipped(!isFlipped)
  }

  function handleNext() {
    if (!isLast) {
      setCurrentIndex(currentIndex + 1)
      setIsFlipped(false) // always show the question side on a new card
    }
  }

  function handlePrevious() {
    if (!isFirst) {
      setCurrentIndex(currentIndex - 1)
      setIsFlipped(false)
    }
  }

  function handleRestart() {
    setCurrentIndex(0)
    setIsFlipped(false)
  }

  return (
    <div className="mx-auto" style={{ maxWidth: '600px' }}>
      {/* Progress */}
      <div className="d-flex justify-content-between mb-2">
        <span className="text-muted">
          Card {currentIndex + 1} of {flashcards.length}
        </span>
        <span className="text-muted">
          {isFlipped ? 'Showing answer' : 'Showing question'}
        </span>
      </div>
      <div className="progress mb-3" style={{ height: '8px' }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      {/* The card (click to flip) */}
      <button
        type="button"
        onClick={handleFlip}
        className={`card w-100 border-2 shadow text-dark ${
          isFlipped ? 'border-success bg-success-subtle' : 'border-primary bg-white'
        }`}
        style={{ minHeight: '220px' }}
      >
        <div className="card-body d-flex flex-column justify-content-center align-items-center text-center p-4">
          <small className="text-uppercase text-muted fw-bold mb-3">
            {isFlipped ? 'Answer' : 'Question'}
          </small>
          <p className="fs-4 mb-0 text-break">
            {isFlipped ? card.answer : card.question}
          </p>
        </div>
      </button>
      <p className="text-center text-muted small mt-2">
        Click the card to flip it
      </p>

      {/* Controls */}
      <div className="d-flex justify-content-between gap-2 mt-3">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handlePrevious}
          disabled={isFirst}
        >
          ← Previous
        </button>

        {isLast ? (
          <button
            type="button"
            className="btn btn-success"
            onClick={handleRestart}
          >
            Start over
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleNext}
          >
            Next →
          </button>
        )}
      </div>
    </div>
  )
}

export default FlashcardDeck