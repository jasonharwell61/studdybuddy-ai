import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Create from './pages/Create'
import Library from './pages/Library'
import StudySet from './pages/StudySet'
import NotFound from './pages/NotFound'
import { studySets as sampleStudySets } from './data/studySets'
import { loadStudySets, saveStudySets } from './utils/storage'

function App() {
  const [studySets, setStudySets] = useState(loadStudySets)

  // Save to the browser every time the list changes
  useEffect(() => {
    saveStudySets(studySets)
  }, [studySets])

  function handleAddStudySet(newStudySet) {
    // Put the new set first, then copy all the existing sets after it
    setStudySets([newStudySet, ...studySets])
  }

  function handleDeleteStudySet(id) {
    setStudySets(studySets.filter((set) => set.id !== id))
  }

  function handleResetStudySets() {
    setStudySets(sampleStudySets)
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />

      <main className="container py-4 flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/create"
            element={<Create onAddStudySet={handleAddStudySet} />}
          />
          <Route
            path="/library"
            element={
              <Library
                studySets={studySets}
                onDelete={handleDeleteStudySet}
                onReset={handleResetStudySets}
              />
            }
          />
          <Route path="/set/:id" element={<StudySet studySets={studySets} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App