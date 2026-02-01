import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PostDetails from './pages/PostDetails';
import Counter from './Components/Counter';
import Toggle from './Components/Toggle';
import TodoList from './Components/TodoList';
import DataFetcher from './Components/DataFetcher';
import Movies from './pages/Movies';

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        {/* Navigation Menu */}
        <nav style={{ 
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          padding: '20px 40px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              🚀 MyApp
            </div>
            <div style={{ display: 'flex', gap: '30px' }}>
              <Link to="/" style={{ 
                color: 'white', 
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'all 0.3s',
                padding: '8px 16px',
                borderRadius: '8px'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}
              >Home</Link>
              
              <Link to="/about" style={{ 
                color: 'white', 
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'all 0.3s',
                padding: '8px 16px',
                borderRadius: '8px'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}
              >About</Link>
              
              <Link to="/contact" style={{ 
                color: 'white', 
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'all 0.3s',
                padding: '8px 16px',
                borderRadius: '8px'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}
              >Contact</Link>
              
              <Link to="/posts" style={{ 
                color: 'white', 
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'all 0.3s',
                padding: '8px 16px',
                borderRadius: '8px'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}
              >Posts</Link>
              
              <Link to="/movies" style={{ 
                color: 'white', 
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'all 0.3s',
                padding: '8px 16px',
                borderRadius: '8px'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}
              >Movies</Link>
              
              <Link to="/demo" style={{ 
                color: 'white', 
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'all 0.3s',
                padding: '8px 16px',
                borderRadius: '8px'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}
              >Demo</Link>
            </div>
          </div>
        </nav>

        {/* Content Area */}
        <div style={{ background: '#f5f7fa', minHeight: 'calc(100vh - 80px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts" element={<DataFetcher />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/demo" element={
              <div>
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  padding: '80px 20px',
                  textAlign: 'center',
                  color: 'white'
                }}>
                  <h1 style={{
                    fontSize: '4em',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                  }}>
                    ⚡ Interactive Demo
                  </h1>
                  <p style={{
                    fontSize: '1.3em',
                    maxWidth: '700px',
                    margin: '0 auto',
                    opacity: 0.95
                  }}>
                    Experience React's state management with these interactive components
                  </p>
                </div>
                
                <div style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
                  <Counter />
                  <Toggle />
                  <TodoList />
                </div>
              </div>
            } />
          </Routes>
        </div>

        {/* Footer */}
        <footer style={{
          background: 'rgba(0, 0, 0, 0.9)',
          color: 'white',
          padding: '30px 20px',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, fontSize: '14px', opacity: 0.8 }}>
            Built with ❤️ using React | © 2024 MyApp
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;