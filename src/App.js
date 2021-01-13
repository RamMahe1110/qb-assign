import './App.scss'
import Premium from './pages/Premium'

function App() {
  return (
    <div className="app">
      <nav className="main-nav">
        <div className="content">
          <div className="brand-logo-cont">
            <img
              src="https://static.grammarly.com/assets/files/19fc696d4cf13c26d65fceffd734afff/grammarly_logo.svg"
              alt="brand-name"
            />
          </div>
          <div className="right-cont">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://grammarly.com"
              className="text-sec"
            >
              Log In
            </a>
            <button className="btn btn-sm btn-nav">Upgrade to Premium</button>
          </div>
        </div>
      </nav>
      <Premium />
    </div>
  )
}

export default App
