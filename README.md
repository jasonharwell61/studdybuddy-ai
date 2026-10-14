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

## What I Learned

- **Components and props:** I empasized the use of reusable components like StudySetCard so the same code displays every study set in the library.
- **State and hooks:** I made sure to keep the list of study sets in state in app and passed it down so the Library, Create, and Study Set pages stay in sync.
- **Routing:** Utilizied React Router with a dynamic route so each study set gets its own page.
- **Saving data:** I saved sets in localstorsge so they are still there after a refresh. 
- **Handling errors:** Implemented an error boundary and safer loading so a bad piece of saved data does not crash the whole app.
- **Deployment:** I was able to learn the essential need that Github Pages has for base and HashRouter. This helped me to fix a blank page caused by a repo name mismatch. 
## Challenges I Solved

- **Blank Page Problem:** When I initially deployed to GitHub Pages, my site loaded blank because the base path in vite.config.js didnt match my GitHub repo name(due to an extra letter), so the browser couldnt find the app's files; I fixed it by making the two match exactly and then redeploying.
- **Moblie Layout:** Long pieces of text and crowded buttons broke the layout on small phone screens, so I added Bootstrap’s text-break class so long text wraps, and stacked the controls vertically on mobile.

## Future Improvements

- Connect to a real AI API instead of the simulated one
- Dark mode
- Adding Tests