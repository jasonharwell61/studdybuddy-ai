import { studySets as sampleStudySets } from '../data/studySets'

// The one place this name is written down
const STORAGE_KEY = 'studybuddy-study-sets'

// Checks that one saved item has everything the app expects
function isValidStudySet(set) {
  return (
    set !== null &&
    typeof set === 'object' &&
    typeof set.id === 'number' &&
    typeof set.title === 'string' &&
    typeof set.subject === 'string' &&
    typeof set.createdAt === 'string' &&
    typeof set.notes === 'string' &&
    typeof set.summary === 'string' &&
    Array.isArray(set.flashcards) &&
    Array.isArray(set.quiz)
  )
}

// Reads saved study sets from the browser, or falls back to the sample data
export function loadStudySets() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)

    // Nothing saved yet
    if (saved === null) {
      return sampleStudySets
    }

    const parsed = JSON.parse(saved)

    // Saved data is not a list: ignore it
    if (!Array.isArray(parsed)) {
      return sampleStudySets
    }

    // Keep only the items that look correct
    return parsed.filter(isValidStudySet)
  } catch {
    // Saved text could not be read at all
    return sampleStudySets
  }
}

// Saves the list to the browser
export function saveStudySets(studySets) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(studySets))
  } catch {
    console.warn('Could not save study sets to this browser.')
  }
}

// Deletes the saved list (used by the "Reset saved data" button)
export function clearSavedStudySets() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // Nothing more we can do; reloading is still worth trying
  }
}