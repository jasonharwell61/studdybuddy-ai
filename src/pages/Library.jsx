import { useState } from 'react'
import { Link } from 'react-router-dom'
import StudySetCard from '../components/StudySetCard'

function Library({ studySets, onDelete, onReset }) {
  // What the user has chosen
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('All')
  const [sortBy, setSortBy] = useState('newest')

  // Empty state: nothing saved at all
  if (studySets.length === 0) {
    return (
      <div className="text-center py-5">
        <div className="display-1">📚</div>
        <h1 className="display-6 fw-bold mt-3">Your library is empty</h1>
        <p className="text-muted">
          Create a study set from your notes, or bring back the sample sets.
        </p>
        <div className="d-flex justify-content-center gap-2">
          <Link to="/create" className="btn btn-primary">
            Create a study set
          </Link>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onReset}
          >
            Restore sample sets
          </button>
        </div>
      </div>
    )
  }

  // Unique subjects found in the saved sets, with "All" first
  const subjects = ['All', ...new Set(studySets.map((set) => set.subject))]

  // If the chosen subject no longer exists (for example after deleting
  // the last set of that subject), fall back to "All"
  const activeSubject = subjects.includes(selectedSubject)
    ? selectedSubject
    : 'All'

  const search = searchTerm.trim().toLowerCase()

  // Calculated list: search, then filter by subject, then sort
  const visibleSets = studySets
    .filter((set) => set.title.toLowerCase().includes(search))
    .filter((set) => activeSubject === 'All' || set.subject === activeSubject)
    .sort((a, b) => {
      if (sortBy === 'oldest') {
        return new Date(a.createdAt) - new Date(b.createdAt)
      }
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title)
      }
      // default: newest first
      return new Date(b.createdAt) - new Date(a.createdAt)
    })

  const hasActiveFilters = search !== '' || activeSubject !== 'All'

  function handleClearFilters() {
    setSearchTerm('')
    setSelectedSubject('All')
  }

  return (
    <div>
      <h1 className="mb-2">Study Library</h1>
      <p className="text-muted mb-4">
        Your saved study sets. Open one to review the summary, flashcards,
        and quiz.
      </p>

      {/* Controls */}
      <div className="row g-2 mb-3">
        <div className="col-12 col-md-6">
          <label htmlFor="search" className="visually-hidden">
            Search study sets
          </label>
          <input
            type="search"
            id="search"
            className="form-control"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className="col-12 col-sm-6 col-md-3">
          <label htmlFor="subjectFilter" className="visually-hidden">
            Filter by subject
          </label>
          <select
            id="subjectFilter"
            className="form-select"
            value={activeSubject}
            onChange={(event) => setSelectedSubject(event.target.value)}
          >
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject === 'All' ? 'All subjects' : subject}
              </option>
            ))}
          </select>
        </div>

        <div className="col-12 col-sm-6 col-md-3">
          <label htmlFor="sortBy" className="visually-hidden">
            Sort study sets
          </label>
          <select
            id="sortBy"
            className="form-select"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="title">Title (A-Z)</option>
          </select>
        </div>
      </div>

      <p className="text-muted small mb-4">
        Showing {visibleSets.length} of {studySets.length} study sets
      </p>

      {/* Results, or a "no matches" message */}
      {visibleSets.length === 0 ? (
        <div className="text-center py-5">
          <div className="display-4">🔍</div>
          <h2 className="h4 mt-3">No study sets match your search</h2>
          <p className="text-muted">
            Try a different word, or clear your filters.
          </p>
          {hasActiveFilters && (
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={handleClearFilters}
            >
              Clear filters
            </button>
          )}
        </div>
      ) : (
        <div className="row g-4">
          {visibleSets.map((set) => (
            <div className="col-12 col-md-6 col-lg-4" key={set.id}>
              <StudySetCard studySet={set} onDelete={onDelete} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Library