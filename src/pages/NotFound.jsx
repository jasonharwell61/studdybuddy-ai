import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="text-center py-5">
      <div className="display-1">🤔</div>
      <h1 className="display-5 fw-bold mt-3">Page not found</h1>
      <p className="lead text-muted">
        Sorry, we couldn't find the page you were looking for.
      </p>
      <Link to="/" className="btn btn-primary btn-lg mt-2">
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound