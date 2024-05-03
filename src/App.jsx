import './App.css'
import './components/navbar'
import Navbar from './components/navbar'
import Content from './components/content'

function App() {

  return (
    <div >
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col">
          
          {/* Navbar */}
          <Navbar />
          {/* Page content here */}
          <Content />
          
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li><a>Inicio</a></li>
            <li><a>Notas</a></li>
            <li><a>Competencias</a></li>
            <li><a>Ayuda</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
