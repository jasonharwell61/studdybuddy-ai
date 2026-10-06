import { Component } from 'react'
import { clearSavedStudySets } from '../utils/storage'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  // React calls this when a child component throws while rendering
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  // A good place to log the technical details
  componentDidCatch(error, info) {
    console.error('StudyBuddy AI caught an error:', error, info)
  }

  handleReload() {
    window.location.reload()
  }

  handleResetData() {
    clearSavedStudySets()
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container text-center py-5">
          <div className="display-1">😕</div>
          <h1 className="display-6 fw-bold mt-3">Something went wrong</h1>
          <p className="text-muted">
            Sorry about that. Try reloading the page. If the problem keeps
            happening, resetting your saved data may help.
          </p>
          <div className="d-flex justify-content-center gap-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleReload}
            >
              Reload page
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={this.handleResetData}
            >
              Reset saved data
            </button>
          </div>
        </div>
      )
    }

    // No error: just show whatever is inside the boundary
    return this.props.children
  }
}

export default ErrorBoundary