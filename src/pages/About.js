function About() {
  return (
    <div>
      {/* Hero Section */}
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
          About MyApp 📖
        </h1>
        <p style={{
          fontSize: '1.3em',
          maxWidth: '700px',
          margin: '0 auto',
          opacity: 0.95
        }}>
          Built with modern React to showcase the power of component-based architecture
        </p>
      </div>

      {/* Story Section */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '80px 20px'
      }}>
        <div style={{
          background: 'white',
          padding: '50px',
          borderRadius: '20px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: '2.5em',
            marginBottom: '25px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Our Story
          </h2>
          <p style={{
            fontSize: '1.2em',
            lineHeight: '1.8',
            color: '#555',
            marginBottom: '20px'
          }}>
            MyApp was created as a comprehensive learning project to demonstrate modern React development 
            practices. From state management to API integration, this application showcases the essential 
            skills needed for building production-ready web applications.
          </p>
          <p style={{
            fontSize: '1.2em',
            lineHeight: '1.8',
            color: '#555'
          }}>
            What started as a simple tutorial has evolved into a full-featured platform that combines 
            entertainment (movie search), education (blog posts), and interactivity (live demos). 
            Every line of code represents hours of learning, debugging, and growth.
          </p>
        </div>

        {/* Tech Stack */}
        <h2 style={{
          fontSize: '2.5em',
          textAlign: 'center',
          marginBottom: '50px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Built With Modern Technologies
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3em', marginBottom: '15px' }}>⚛️</div>
            <h3 style={{ fontSize: '1.5em', marginBottom: '10px', color: '#333' }}>React 18</h3>
            <p style={{ color: '#666' }}>Modern JavaScript library for building user interfaces</p>
          </div>

          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3em', marginBottom: '15px' }}>🛣️</div>
            <h3 style={{ fontSize: '1.5em', marginBottom: '10px', color: '#333' }}>React Router</h3>
            <p style={{ color: '#666' }}>Declarative routing for React applications</p>
          </div>

          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3em', marginBottom: '15px' }}>📡</div>
            <h3 style={{ fontSize: '1.5em', marginBottom: '10px', color: '#333' }}>Axios</h3>
            <p style={{ color: '#666' }}>Promise-based HTTP client for API requests</p>
          </div>

          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3em', marginBottom: '15px' }}>🎨</div>
            <h3 style={{ fontSize: '1.5em', marginBottom: '10px', color: '#333' }}>Custom CSS</h3>
            <p style={{ color: '#666' }}>Inline styles with dynamic hover effects</p>
          </div>

          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3em', marginBottom: '15px' }}>🎬</div>
            <h3 style={{ fontSize: '1.5em', marginBottom: '10px', color: '#333' }}>TMDB API</h3>
            <p style={{ color: '#666' }}>The Movie Database for real-time movie data</p>
          </div>

          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3em', marginBottom: '15px' }}>🪝</div>
            <h3 style={{ fontSize: '1.5em', marginBottom: '10px', color: '#333' }}>React Hooks</h3>
            <p style={{ color: '#666' }}>useState, useEffect for state management</p>
          </div>
        </div>

        {/* Features List */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '50px',
          borderRadius: '20px',
          color: 'white'
        }}>
          <h2 style={{
            fontSize: '2.5em',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            Key Features
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            fontSize: '1.2em',
            lineHeight: '2.5'
          }}>
            <li>✅ Component-based architecture for reusability</li>
            <li>✅ React Router for seamless navigation</li>
            <li>✅ API integration with real-time data</li>
            <li>✅ State management with hooks (useState, useEffect)</li>
            <li>✅ Responsive design that works on all devices</li>
            <li>✅ Interactive demos showcasing React capabilities</li>
            <li>✅ Environment variables for secure API key management</li>
            <li>✅ Clean, maintainable, and well-organized code</li>
          </ul>
        </div>
      </div>

      {/* Mission Section */}
      <div style={{
        background: '#f8f9fa',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5em',
            marginBottom: '25px',
            color: '#333'
          }}>
            Our Mission
          </h2>
          <p style={{
            fontSize: '1.3em',
            lineHeight: '1.8',
            color: '#555'
          }}>
            To demonstrate that modern web development can be both powerful and accessible. 
            MyApp serves as a learning resource and inspiration for aspiring developers, 
            showing what's possible with React and dedication.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;