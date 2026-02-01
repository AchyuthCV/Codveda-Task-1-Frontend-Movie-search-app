import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '100px 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ 
          fontSize: '4.5em',
          marginBottom: '20px',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>
          Welcome to MyApp! 🚀
        </h1>
        <p style={{ 
          fontSize: '1.5em', 
          marginBottom: '40px',
          opacity: 0.95,
          maxWidth: '700px',
          margin: '0 auto 40px auto'
        }}>
          Your one-stop platform for movies, blogs, and interactive experiences
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/movies" style={{ textDecoration: 'none' }}>
            <button style={{
              background: 'white',
              color: '#667eea',
              padding: '15px 40px',
              fontSize: '1.1em',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 12px 30px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
            }}
            >
              🎬 Explore Movies
            </button>
          </Link>
          <Link to="/posts" style={{ textDecoration: 'none' }}>
            <button style={{
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              padding: '15px 40px',
              fontSize: '1.1em',
              border: '2px solid white',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 'bold',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#667eea';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.2)';
              e.target.style.color = 'white';
            }}
            >
              📰 Read Blog
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ 
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '3em',
          textAlign: 'center',
          marginBottom: '60px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold'
        }}>
          What Can You Do Here?
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px'
        }}>
          {/* Feature 1 */}
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            transition: 'all 0.3s',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 50px rgba(102, 126, 234, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
          }}
          >
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '150px',
              height: '150px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '50%',
              opacity: 0.1
            }}></div>
            <div style={{ fontSize: '4em', marginBottom: '20px' }}>🎬</div>
            <h3 style={{ fontSize: '1.8em', marginBottom: '15px', color: '#333' }}>Movie Database</h3>
            <p style={{ color: '#666', fontSize: '1.1em', lineHeight: '1.7' }}>
              Search through millions of movies powered by TMDB. Get detailed information including cast, 
              director, ratings, and plot summaries.
            </p>
          </div>

          {/* Feature 2 */}
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            transition: 'all 0.3s',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 50px rgba(102, 126, 234, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
          }}
          >
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '150px',
              height: '150px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '50%',
              opacity: 0.1
            }}></div>
            <div style={{ fontSize: '4em', marginBottom: '20px' }}>📰</div>
            <h3 style={{ fontSize: '1.8em', marginBottom: '15px', color: '#333' }}>Engaging Blog</h3>
            <p style={{ color: '#666', fontSize: '1.1em', lineHeight: '1.7' }}>
              Read insightful articles on technology, travel, health, psychology, and more. 
              Stay informed and inspired with our curated content.
            </p>
          </div>

          {/* Feature 3 */}
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            transition: 'all 0.3s',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 50px rgba(102, 126, 234, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
          }}
          >
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '150px',
              height: '150px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '50%',
              opacity: 0.1
            }}></div>
            <div style={{ fontSize: '4em', marginBottom: '20px' }}>⚡</div>
            <h3 style={{ fontSize: '1.8em', marginBottom: '15px', color: '#333' }}>Interactive Tools</h3>
            <p style={{ color: '#666', fontSize: '1.1em', lineHeight: '1.7' }}>
              Play with counters, toggles, and todo lists. Experience React's powerful 
              state management and component interactivity firsthand.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '60px 20px',
        marginTop: '40px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            textAlign: 'center',
            color: 'white'
          }}>
            <div>
              <div style={{ fontSize: '3em', fontWeight: 'bold', marginBottom: '10px' }}>1M+</div>
              <div style={{ fontSize: '1.2em', opacity: 0.9 }}>Movies Available</div>
            </div>
            <div>
              <div style={{ fontSize: '3em', fontWeight: 'bold', marginBottom: '10px' }}>10+</div>
              <div style={{ fontSize: '1.2em', opacity: 0.9 }}>Blog Articles</div>
            </div>
            <div>
              <div style={{ fontSize: '3em', fontWeight: 'bold', marginBottom: '10px' }}>100%</div>
              <div style={{ fontSize: '1.2em', opacity: 0.9 }}>Free to Use</div>
            </div>
            <div>
              <div style={{ fontSize: '3em', fontWeight: 'bold', marginBottom: '10px' }}>24/7</div>
              <div style={{ fontSize: '1.2em', opacity: 0.9 }}>Always Online</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        padding: '80px 20px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '2.5em',
          marginBottom: '20px',
          color: '#333'
        }}>
          Ready to Get Started?
        </h2>
        <p style={{
          fontSize: '1.2em',
          color: '#666',
          marginBottom: '40px',
          lineHeight: '1.7'
        }}>
          Explore our features and discover what makes MyApp special. 
          Whether you're looking for movies, reading blogs, or trying interactive demos, we've got you covered!
        </p>
        <Link to="/demo" style={{ textDecoration: 'none' }}>
          <button style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '18px 50px',
            fontSize: '1.2em',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4)';
          }}
          >
            Try Interactive Demo →
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;