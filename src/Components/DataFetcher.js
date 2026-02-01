import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

function DataFetcher() {
  const [posts] = useState([
    {
      id: 1,
      title: 'Getting Started with React in 2024',
      body: 'React continues to be one of the most popular frontend frameworks. In this article, we explore the best practices for starting a new React project, including modern tools like Vite, component libraries, and state management solutions.',
      category: 'Technology',
      author: 'Sarah Johnson',
      date: 'Jan 15, 2024',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The Rise of AI in Everyday Life',
      body: 'Artificial Intelligence is no longer just science fiction. From smart assistants to recommendation systems, AI is transforming how we interact with technology.',
      category: 'Technology',
      author: 'Mike Chen',
      date: 'Jan 18, 2024',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Top 10 Travel Destinations for 2024',
      body: 'Looking for your next adventure? We\'ve compiled a list of the most exciting travel destinations for this year.',
      category: 'Travel',
      author: 'Emma Wilson',
      date: 'Jan 20, 2024',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Healthy Eating Habits That Actually Work',
      body: 'Maintaining a healthy diet doesn\'t have to be complicated. This article breaks down simple strategies for eating better.',
      category: 'Health',
      author: 'Dr. James Rodriguez',
      date: 'Jan 22, 2024',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'The Future of Remote Work',
      body: 'Remote work has become the new normal for millions of professionals worldwide.',
      category: 'Business',
      author: 'Lisa Anderson',
      date: 'Jan 25, 2024',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Understanding Cryptocurrency: A Beginner\'s Guide',
      body: 'Cryptocurrency has taken the financial world by storm, but many people still don\'t understand how it works.',
      category: 'Finance',
      author: 'David Kim',
      date: 'Jan 27, 2024',
      readTime: '10 min read'
    },
    {
      id: 7,
      title: 'Climate Change: What You Can Do Today',
      body: 'Climate change is one of the biggest challenges facing our planet.',
      category: 'Environment',
      author: 'Rachel Green',
      date: 'Jan 28, 2024',
      readTime: '6 min read'
    },
    {
      id: 8,
      title: 'The Evolution of Cinema',
      body: 'The film industry has undergone incredible transformations over the past century.',
      category: 'Entertainment',
      author: 'Tom Martinez',
      date: 'Jan 30, 2024',
      readTime: '7 min read'
    },
    {
      id: 9,
      title: 'Boost Your Productivity with These Simple Tips',
      body: 'Struggling to stay focused and get things done? You\'re not alone.',
      category: 'Productivity',
      author: 'Anna Lee',
      date: 'Feb 01, 2024',
      readTime: '5 min read'
    },
    {
      id: 10,
      title: 'The Psychology of Social Media',
      body: 'Social media platforms are designed to keep us engaged, but at what cost?',
      category: 'Psychology',
      author: 'Dr. Kevin Brown',
      date: 'Feb 03, 2024',
      readTime: '9 min read'
    }
  ]);

  const categoryColors = {
    'Technology': '#007bff',
    'Travel': '#28a745',
    'Health': '#dc3545',
    'Business': '#6c757d',
    'Finance': '#ffc107',
    'Environment': '#17a2b8',
    'Entertainment': '#e83e8c',
    'Productivity': '#fd7e14',
    'Psychology': '#6f42c1'
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
          📰 Our Blog
        </h1>
        <p style={{
          fontSize: '1.3em',
          maxWidth: '700px',
          margin: '0 auto',
          opacity: 0.95
        }}>
          Insights on technology, travel, health, and everything in between
        </p>
      </div>

      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: '30px' }}>
          {posts.map(post => (
            <Card 
              key={post.id}
              style={{
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px', flexWrap: 'wrap' }}>
                <span style={{
                  display: 'inline-block',
                  background: categoryColors[post.category],
                  color: 'white',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  fontSize: '0.85em',
                  fontWeight: 'bold'
                }}>
                  {post.category}
                </span>
                <span style={{ color: '#999', fontSize: '0.9em' }}>{post.date}</span>
                <span style={{ color: '#999', fontSize: '0.9em' }}>• {post.readTime}</span>
              </div>

              <h2 style={{ 
                marginTop: 0, 
                marginBottom: '15px', 
                color: '#333',
                fontSize: '1.8em'
              }}>
                {post.title}
              </h2>

              <p style={{ 
                color: '#666', 
                lineHeight: '1.7', 
                marginBottom: '20px',
                fontSize: '1.05em'
              }}>
                {post.body}
              </p>

              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                paddingTop: '20px',
                borderTop: '1px solid #eee'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span style={{ color: '#555', fontWeight: '500' }}>{post.author}</span>
                </div>

                <Link 
                  to={`/post/${post.id}`}
                  style={{ 
                    color: '#007bff', 
                    textDecoration: 'none', 
                    fontWeight: 'bold',
                    fontSize: '1.05em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  Read Full Article →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DataFetcher;