import { useState } from 'react'

function Quiz({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  // Missing data: if there are no questions, show a message and stop
  if (questions.length === 0) {
    return (
      <div className="alert alert-warning">
        This study set has no quiz questions yet.
      </div>
    )
  }

  // Values we calculate from state
  const question = questions[currentIndex]
  const hasAnswered = selectedOption !== null
  const isLastQuestion = currentIndex === questions.length - 1

  function handleSelect(optionIndex) {
    // Once answered, ignore further clicks
    if (hasAnswered) return

    setSelectedOption(optionIndex)

    if (optionIndex === question.correctIndex) {
      setScore(score + 1)
    }
  }

  function handleNext() {
    if (isLastQuestion) {
      setIsFinished(true)
    } else {
      setCurrentIndex(currentIndex + 1)
      setSelectedOption(null)
    }
  }

  function handleRetry() {
    setCurrentIndex(0)
    setSelectedOption(null)
    setScore(0)
    setIsFinished(false)
  }

  // Decides the color of each answer button
  function getOptionClass(optionIndex) {
    if (!hasAnswered) return 'list-group-item-action'
    if (optionIndex === question.correctIndex) return 'list-group-item-success'
    if (optionIndex === selectedOption) return 'list-group-item-danger'
    return ''
  }

  // Screen 3: results
  if (isFinished) {
    const percent = Math.round((score / questions.length) * 100)

    let message = 'Keep practicing. You will get there!'
    if (percent >= 80) {
      message = 'Great job! You know this material well.'
    } else if (percent >= 50) {
      message = 'Good effort! A little more review will help.'
    }

    return (
      <div className="mx-auto text-center" style={{ maxWidth: '600px' }}>
        <div className="card shadow-sm">
          <div className="card-body p-4">
            <h2 className="mb-3">Quiz complete</h2>
            <p className="display-4 fw-bold text-primary mb-1">
              {score} / {questions.length}
            </p>
            <p className="text-muted">{percent}% correct</p>
            <p className="lead">{message}</p>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={handleRetry}
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Screens 1 and 2: a question (before and after answering)
  return (
    <div className="mx-auto" style={{ maxWidth: '600px' }}>
      <div className="d-flex justify-content-between mb-3">
        <span className="text-muted">
          Question {currentIndex + 1} of {questions.length}
        </span>
        <span className="text-muted">Score: {score}</span>
      </div>

      <div className="card shadow-sm">
        <div className="card-body p-4">
          <h4 className="mb-4 text-break">{question.question}</h4>

          <div className="list-group">
            {question.options.map((option, optionIndex) => (
              <button
                key={optionIndex}
                type="button"
                className={`list-group-item text-start text-break ${getOptionClass(optionIndex)}`}
                onClick={() => handleSelect(optionIndex)}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Feedback after answering */}
          {hasAnswered && (
            <div
              className={`alert mt-4 mb-0 ${
                selectedOption === question.correctIndex
                  ? 'alert-success'
                  : 'alert-danger'
              }`}
              role="alert"
            >
              {selectedOption === question.correctIndex ? (
                'Correct! 🎉'
              ) : (
                <>
                  Not quite. The correct answer is:{' '}
                  <strong>{question.options[question.correctIndex]}</strong>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {hasAnswered && (
        <div className="text-end mt-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleNext}
          >
            {isLastQuestion ? 'See results' : 'Next question →'}
          </button>
        </div>
      )}
    </div>
  )
}

export default Quiz