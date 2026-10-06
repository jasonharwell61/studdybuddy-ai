function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-auto">
      <div className="container">
        <small>
          © {new Date().getFullYear()} StudyBuddy AI. Built with React and Bootstrap.
        </small>
      </div>
    </footer>
  )
}

export default Footer