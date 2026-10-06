// A pretend AI. Later we can replace this with a real API call.

const FALLBACK_WORDS = ['concept', 'process', 'system', 'result', 'method']

// Splits notes into sentences (at . ! ? or new lines)
function splitIntoSentences(notes) {
  const parts = notes.match(/[^.!?\n]+[.!?]*/g) || []
  const sentences = parts.map((part) => part.trim()).filter((part) => part.length > 15)
  return sentences.length > 0 ? sentences : [notes.trim()]
}

// Removes punctuation from a word: "cycle," becomes "cycle"
function cleanWord(word) {
  return word.replace(/[^a-zA-Z]/g, '')
}

// Returns a randomly ordered copy of an array (quick and simple, fine for a demo)
function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5)
}

function makeSummary(sentences) {
  return sentences.slice(0, 2).join(' ')
}

function makeFlashcards(sentences) {
  return sentences.slice(0, 4).map((sentence) => {
    const start = sentence.split(' ').slice(0, 4).join(' ')
    return {
      question: `Complete this idea: "${start}..."`,
      answer: sentence,
    }
  })
}

// Fill-in-the-blank questions using words from the notes
function makeQuiz(sentences, notes) {
  const allWords = notes
    .split(/\s+/)
    .map(cleanWord)
    .filter((word) => word.length >= 6)
    .map((word) => word.toLowerCase())
  const uniqueWords = [...new Set(allWords)]

  const questions = []

  for (const sentence of sentences.slice(0, 3)) {
    // Pick the first long word in the sentence to blank out
    const target = sentence
      .split(' ')
      .map(cleanWord)
      .find((word) => word.length >= 6)

    // No long word in this sentence? Skip it.
    if (!target) continue

    const answer = target.toLowerCase()

    // Wrong options: other long words from the notes, padded with fallback words
    const others = uniqueWords.filter((word) => word !== answer)
    const distractors = [...new Set([...shuffle(others), ...FALLBACK_WORDS])]
      .filter((word) => word !== answer)
      .slice(0, 3)

    const options = shuffle([answer, ...distractors])

    questions.push({
      question: `Fill in the blank: ${sentence.replace(target, '_____')}`,
      options: options,
      correctIndex: options.indexOf(answer),
    })
  }

  return questions
}

// The main function the rest of the app will use
export async function generateStudySet({ title, subject, notes }) {
  // Pretend the AI is thinking for 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const sentences = splitIntoSentences(notes)

  return {
    id: Date.now(),
    title: title.trim(),
    subject: subject,
    createdAt: new Date().toISOString(),
    notes: notes.trim(),
    summary: makeSummary(sentences),
    flashcards: makeFlashcards(sentences),
    quiz: makeQuiz(sentences, notes),
  }
}