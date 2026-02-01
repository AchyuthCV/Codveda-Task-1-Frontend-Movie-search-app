import { useState } from 'react';
import Button from '../Components/Button';
import Card from '../Components/Card';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
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
          Get In Touch 📧
        </h1>
        <p style={{
          fontSize: '1.3em',
          maxWidth: '700px',
          margin: '0 auto',
          opacity: 0.95
        }}>
          Have questions or feedback? We'd love to hear from you!
        </p>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* Contact Info Cards */}
          <Card style={{ textAlign: 'center', padding: '40px' }}>
            <div style={{ fontSize: '3em', marginBottom: '20px' }}>📧</div>
            <h3 style={{ fontSize: '1.5em', marginBottom: '10px', color: '#333' }}>Email Us</h3>
            <p style={{ color: '#666', fontSize: '1.1em' }}>contact@myapp.com</p>
          </Card>

          <Card style={{ textAlign: 'center', padding: '40px' }}>
            <div style={{ fontSize: '3em', marginBottom: '20px' }}>📱</div>
            <h3 style={{ fontSize: '1.5em', marginBottom: '10px', color: '#333' }}>Call Us</h3>
            <p style={{ color: '#666', fontSize: '1.1em' }}>+1 (555) 123-4567</p>
          </Card>

          <Card style={{ textAlign: 'center', padding: '40px' }}>
            <div style={{ fontSize: '3em', marginBottom: '20px' }}>📍</div>
            <h3 style={{ fontSize: '1.5em', marginBottom: '10px', color: '#333' }}>Visit Us</h3>
            <p style={{ color: '#666', fontSize: '1.1em' }}>123 React Street, Web City</p>
          </Card>
        </div>

        {/* Contact Form */}
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <Card style={{ padding: '50px' }}>
            <h2 style={{
              fontSize: '2.5em',
              marginBottom: '30px',
              textAlign: 'center',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Send Us a Message
            </h2>

            {submitted && (
              <div style={{
                background: '#d4edda',
                border: '1px solid #c3e6cb',
                color: '#155724',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '20px',
                textAlign: 'center',
                fontSize: '1.1em'
              }}>
                ✅ Message sent successfully! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '25px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: '#333',
                  fontWeight: '600',
                  fontSize: '1.1em'
                }}>
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="John Doe"
                  style={{
                    width: '100%',
                    padding: '15px',
                    fontSize: '1.1em',
                    border: '2px solid #e0e0e0',
                    borderRadius: '10px',
                    transition: 'all 0.3s',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: '#333',
                  fontWeight: '600',
                  fontSize: '1.1em'
                }}>
                  Your Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="john@example.com"
                  style={{
                    width: '100%',
                    padding: '15px',
                    fontSize: '1.1em',
                    border: '2px solid #e0e0e0',
                    borderRadius: '10px',
                    transition: 'all 0.3s',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              <div style={{ marginBottom: '30px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: '#333',
                  fontWeight: '600',
                  fontSize: '1.1em'
                }}>
                  Your Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Tell us what's on your mind..."
                  rows="6"
                  style={{
                    width: '100%',
                    padding: '15px',
                    fontSize: '1.1em',
                    border: '2px solid #e0e0e0',
                    borderRadius: '10px',
                    transition: 'all 0.3s',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              <Button
                variant="primary"
                style={{
                  width: '100%',
                  padding: '18px',
                  fontSize: '1.2em',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none'
                }}
              >
                Send Message →
              </Button>
            </form>
          </Card>
        </div>

        {/* Social Links */}
        <div style={{
          marginTop: '80px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '2em',
            marginBottom: '30px',
            color: '#333'
          }}>
            Connect With Us
          </h3>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map(platform => (
              <div
                key={platform}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5em',
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                  boxShadow: '0 5px 15px rgba(102, 126, 234, 0.3)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {platform[0]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;