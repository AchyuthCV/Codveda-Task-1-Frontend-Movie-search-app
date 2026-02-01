import { useState } from 'react';
import axios from 'axios';
import Card from '../Components/Card';
import Button from '../Components/Button';
import Loading from '../Components/Loading';

function Movies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const BASE_URL = 'https://api.themoviedb.org/3';
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  const searchMovies = () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);
    setSelectedMovie(null);

    axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}`)
      .then(response => {
        if (response.data.results.length > 0) {
          setMovies(response.data.results);
        } else {
          setError('No movies found! Try another search.');
          setMovies([]);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Failed to search movies. Please try again.');
        setMovies([]);
        setLoading(false);
      });
  };

  const getMovieDetails = (movieId) => {
    setLoading(true);
    
    axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`)
      .then(response => {
        setSelectedMovie(response.data);
        setLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Failed to load movie details.');
        setLoading(false);
      });
  };

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
          🎬 Movie Search
        </h1>
        <p style={{
          fontSize: '1.3em',
          maxWidth: '700px',
          margin: '0 auto 40px auto',
          opacity: 0.95
        }}>
          Search for ANY movie - powered by TMDB
        </p>
        
        {/* Search Bar in Hero */}
        <Card style={{ maxWidth: '700px', margin: '0 auto', padding: '30px' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && searchMovies()}
              placeholder="Search for any movie... (e.g., Titanic, Avatar, Joker)"
              style={{
                flex: 1,
                padding: '15px',
                fontSize: '1.1em',
                border: '2px solid #e0e0e0',
                borderRadius: '10px',
                outline: 'none'
              }}
            />
            <Button onClick={searchMovies} variant="primary" style={{ padding: '15px 40px', fontSize: '1.1em' }}>
              Search
            </Button>
          </div>
        </Card>
      </div>

      <div style={{ padding: '60px 20px', minHeight: '400px' }}>
        {loading && <Loading message="Searching movies..." />}

        {error && (
          <Card style={{ border: '2px solid red', maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ color: 'red', textAlign: 'center', fontSize: '1.1em' }}>{error}</p>
          </Card>
        )}

        {/* Movie Details View */}
        {selectedMovie && !loading && (
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <Button onClick={() => setSelectedMovie(null)} variant="secondary" style={{ marginBottom: '30px' }}>
              ← Back to Results
            </Button>
            
            <Card style={{ 
              background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', 
              color: 'white',
              padding: '40px'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '40px' }}>
                <div>
                  <img 
                    src={selectedMovie.poster_path 
                      ? `${IMAGE_BASE_URL}${selectedMovie.poster_path}` 
                      : 'https://via.placeholder.com/300x450?text=No+Poster'}
                    alt={selectedMovie.title}
                    style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                  />
                </div>
                <div>
                  <h1 style={{ margin: '0 0 15px 0', fontSize: '2.5em' }}>{selectedMovie.title}</h1>
                  <p style={{ fontSize: '1.2em', opacity: 0.9, marginBottom: '25px' }}>
                    {selectedMovie.release_date ? selectedMovie.release_date.split('-')[0] : 'N/A'}
                    {selectedMovie.runtime && ` • ${selectedMovie.runtime} min`}
                  </p>
                  
                  {selectedMovie.genres && selectedMovie.genres.length > 0 && (
                    <div style={{ margin: '25px 0' }}>
                      <strong style={{ fontSize: '1.1em' }}>Genre:</strong> 
                      <span style={{ marginLeft: '10px' }}>{selectedMovie.genres.map(g => g.name).join(', ')}</span>
                    </div>
                  )}
                  
                  {selectedMovie.credits && selectedMovie.credits.crew && (
                    <div style={{ margin: '25px 0' }}>
                      <strong style={{ fontSize: '1.1em' }}>Director:</strong>
                      <span style={{ marginLeft: '10px' }}>{
                        selectedMovie.credits.crew.find(person => person.job === 'Director')?.name || 'N/A'
                      }</span>
                    </div>
                  )}
                  
                  {selectedMovie.credits && selectedMovie.credits.cast && (
                    <div style={{ margin: '25px 0' }}>
                      <strong style={{ fontSize: '1.1em' }}>Cast:</strong>
                      <span style={{ marginLeft: '10px' }}>{
                        selectedMovie.credits.cast.slice(0, 5).map(actor => actor.name).join(', ')
                      }</span>
                    </div>
                  )}
                  
                  <div style={{ margin: '25px 0', lineHeight: '1.8' }}>
                    <strong style={{ fontSize: '1.1em' }}>Plot:</strong><br />
                    <p style={{ marginTop: '10px', fontSize: '1.05em' }}>{selectedMovie.overview || 'No plot available.'}</p>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '30px' }}>
                    {selectedMovie.vote_average && (
                      <div style={{ background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '12px', textAlign: 'center', minWidth: '120px' }}>
                        <div style={{ fontSize: '0.95em', marginBottom: '8px' }}>TMDB Rating</div>
                        <div style={{ fontSize: '2.2em', fontWeight: 'bold' }}>⭐ {selectedMovie.vote_average.toFixed(1)}</div>
                      </div>
                    )}
                    {selectedMovie.revenue && selectedMovie.revenue > 0 && (
                      <div style={{ background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '12px', textAlign: 'center', minWidth: '120px' }}>
                        <div style={{ fontSize: '0.95em', marginBottom: '8px' }}>Box Office</div>
                        <div style={{ fontSize: '1.8em', fontWeight: 'bold' }}>
                          ${(selectedMovie.revenue / 1000000).toFixed(0)}M
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Movies Grid */}
        {!selectedMovie && movies.length > 0 && !loading && (
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: '2em', 
              marginBottom: '30px',
              textAlign: 'center',
              color: '#333'
            }}>
              Found {movies.length} results for "{searchTerm}"
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '25px'
            }}>
              {movies.map(movie => (
                <div
                  key={movie.id}
                  onClick={() => getMovieDetails(movie.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <Card 
                    style={{ 
                      transition: 'all 0.3s',
                      padding: '0',
                      overflow: 'hidden',
                      height: '100%'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                    }}
                  >
                    <img 
                      src={movie.poster_path 
                        ? `${IMAGE_BASE_URL}${movie.poster_path}` 
                        : 'https://via.placeholder.com/220x330?text=No+Poster'}
                      alt={movie.title}
                      style={{ width: '100%', height: '330px', objectFit: 'cover' }}
                    />
                    <div style={{ padding: '20px' }}>
                      <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1em', lineHeight: '1.3', height: '2.6em', overflow: 'hidden' }}>
                        {movie.title}
                      </h3>
                      <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: '0.95em' }}>
                        {movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}
                      </p>
                      <p style={{ margin: '0', color: '#999', fontSize: '0.9em', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span style={{ fontSize: '1.2em' }}>⭐</span>
                        {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}

        {!loading && !error && movies.length === 0 && !selectedMovie && (
          <div style={{ textAlign: 'center', padding: '80px 20px' }}>
            <div style={{ fontSize: '5em', marginBottom: '20px' }}>🎬</div>
            <h2 style={{ fontSize: '2em', color: '#666', marginBottom: '15px' }}>
              Start Your Search
            </h2>
            <p style={{ fontSize: '1.2em', color: '#999' }}>
              Search for any movie using the search bar above
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Movies;