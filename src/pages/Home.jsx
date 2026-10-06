import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className="text-center py-5">
        <h1 className="display-4 fw-bold text-primary">
          Turn your notes into study material
        </h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
          Paste your notes and StudyBuddy AI creates a summary, flashcards,
          and a quiz so you can study smarter, not harder.
        </p>
        <Link to="/create" className="btn btn-primary btn-lg mt-3">
          Get Started
        </Link>
      </section>

      {/* How it works */}
      <section className="py-4">
        <h2 className="text-center mb-4">How it works</h2>
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <div className="display-5">📝</div>
                <h5 className="card-title mt-2">1. Paste your notes</h5>
                <p className="card-text">
                  Add a title, pick a subject, and paste the notes you want to study.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <div className="display-5">🤖</div>
                <h5 className="card-title mt-2">2. Let AI do the work</h5>
                <p className="card-text">
                  Get a short summary, flashcards, and quiz questions in seconds.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <div className="display-5">🎯</div>
                <h5 className="card-title mt-2">3. Study and test yourself</h5>
                <p className="card-text">
                  Flip flashcards, take quizzes, and save your study sets for later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home