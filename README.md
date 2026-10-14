# StudyBuddy AI

A React app that turns your study notes into a summary, flashcards, and a quiz. Paste in your notes, pick a subject, and StudyBuddy AI builds a study set you can review anytime.

**Live demo:** [https://jasonharwell61.github.io/studybuddy-ai/#/](https://jasonharwell61.github.io/studybuddy-ai/#/)

## Features

- **Create** a study set from your own notes (with a 5,000-character limit)
- **Summary, Flashcards, and Quiz** tabs for every study set
- **Library** page with search, subject filter, and sorting
- **Delete** study sets you no longer need
- **Saved automatically** in your browser with localStorage
- **Responsive design** that works on phones and desktops
- **Error handling** with an error boundary and safe data loading

## Tech Stack

- React (built with Vite)
- JavaScript
- React Router (HashRouter for GitHub Pages)
- Bootstrap
- localStorage for saving data
- Deployed with GitHub Pages (gh-pages)

## Run It Locally

1. Clone the repo
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
4. Open the address shown in your terminal

## Notes on the AI Feature

The AI feature is currently simulated in `src/utils/generateStudySet.js`. It is built so a real AI API can be swapped in later without changing the rest of the app.