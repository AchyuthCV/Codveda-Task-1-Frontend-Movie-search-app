import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../Components/Card';
import Button from '../Components/Button';

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const posts = [
    {
      id: 1,
      title: 'Getting Started with React in 2024',
      body: 'React continues to be one of the most popular frontend frameworks. In this article, we explore the best practices for starting a new React project, including modern tools like Vite, component libraries, and state management solutions. Whether you\'re a beginner or experienced developer, these tips will help you build better React applications.',
      category: 'Technology',
      fullContent: 'React has evolved significantly over the years. Modern React development emphasizes functional components, hooks, and performance optimization. When starting a new project, consider using Vite for faster build times, React Router for navigation, and state management libraries like Zustand or Redux Toolkit for complex applications. Don\'t forget to implement proper error boundaries and loading states for a better user experience.'
    },
    {
      id: 2,
      title: 'The Rise of AI in Everyday Life',
      body: 'Artificial Intelligence is no longer just science fiction. From smart assistants to recommendation systems, AI is transforming how we interact with technology.',
      category: 'Technology',
      fullContent: 'AI technologies like machine learning and natural language processing are becoming increasingly sophisticated. Virtual assistants like Siri and Alexa use AI to understand and respond to voice commands. Recommendation algorithms on Netflix and Spotify analyze your preferences to suggest content. In healthcare, AI assists in diagnosing diseases and developing treatments. As AI continues to advance, it promises to revolutionize industries from transportation to education.'
    },
    {
      id: 3,
      title: 'Top 10 Travel Destinations for 2024',
      body: 'Looking for your next adventure? We\'ve compiled a list of the most exciting travel destinations for this year.',
      category: 'Travel',
      fullContent: 'Our top picks include the Maldives for pristine beaches, Iceland for natural wonders, Japan for culture and cuisine, New Zealand for adventure sports, Italy for history and art, Peru for ancient ruins, Morocco for exotic experiences, Norway for fjords, Greece for island hopping, and Costa Rica for eco-tourism. Each destination offers unique experiences that will create lasting memories.'
    },
    {
      id: 4,
      title: 'Healthy Eating Habits That Actually Work',
      body: 'Maintaining a healthy diet doesn\'t have to be complicated. This article breaks down simple strategies for eating better.',
      category: 'Health',
      fullContent: 'Start with small changes: drink more water, add vegetables to every meal, practice portion control, and plan your meals in advance. Avoid extreme diets and focus on sustainable habits. Include whole grains, lean proteins, healthy fats, and plenty of fruits and vegetables. Remember that consistency is more important than perfection, and occasional treats are part of a balanced lifestyle.'
    },
    {
      id: 5,
      title: 'The Future of Remote Work',
      body: 'Remote work has become the new normal for millions of professionals worldwide.',
      category: 'Business',
      fullContent: 'The shift to remote work has accelerated digital transformation across industries. Companies are investing in collaboration tools like Slack, Zoom, and project management software. Many organizations are adopting hybrid models that combine office and remote work. This flexibility can improve work-life balance and productivity, but also requires strong communication skills and self-discipline. The future workplace will likely be more distributed and technology-driven.'
    },
    {
      id: 6,
      title: 'Understanding Cryptocurrency: A Beginner\'s Guide',
      body: 'Cryptocurrency has taken the financial world by storm, but many people still don\'t understand how it works.',
      category: 'Finance',
      fullContent: 'Cryptocurrency is digital money secured by blockchain technology. Bitcoin was the first cryptocurrency, but thousands now exist including Ethereum, Cardano, and Solana. Blockchain is a decentralized ledger that records all transactions. While crypto offers potential benefits like lower transaction fees and financial inclusion, it also carries risks including volatility and regulatory uncertainty. Before investing, research thoroughly and only invest what you can afford to lose.'
    },
    {
      id: 7,
      title: 'Climate Change: What You Can Do Today',
      body: 'Climate change is one of the biggest challenges facing our planet.',
      category: 'Environment',
      fullContent: 'Individual actions can make a difference. Reduce energy consumption by using LED bulbs and energy-efficient appliances. Choose sustainable transportation like biking, walking, or public transit. Reduce meat consumption and food waste. Use reusable bags, bottles, and containers. Support companies with strong environmental policies. Plant trees and support reforestation efforts. While systemic change is necessary, personal choices collectively create significant impact.'
    },
    {
      id: 8,
      title: 'The Evolution of Cinema: From Silent Films to Streaming',
      body: 'The film industry has undergone incredible transformations over the past century.',
      category: 'Entertainment',
      fullContent: 'Cinema began with silent films in the late 1800s. The addition of sound in the 1920s revolutionized storytelling. Color film, special effects, and CGI continued to push boundaries. The rise of television challenged theaters, leading to innovations like widescreen formats and blockbuster productions. Today, streaming platforms like Netflix and Disney+ have transformed how we consume content, offering unprecedented access to films and series from around the world.'
    },
    {
      id: 9,
      title: 'Boost Your Productivity with These Simple Tips',
      body: 'Struggling to stay focused and get things done? You\'re not alone.',
      category: 'Productivity',
      fullContent: 'Try time-blocking: schedule specific tasks for specific times. Use the Pomodoro Technique: work for 25 minutes, then take a 5-minute break. Minimize distractions by turning off notifications and creating a dedicated workspace. Prioritize tasks using the Eisenhower Matrix. Break large projects into smaller, manageable steps. Get adequate sleep, exercise regularly, and take breaks to maintain mental clarity and energy throughout the day.'
    },
    {
      id: 10,
      title: 'The Psychology of Social Media',
      body: 'Social media platforms are designed to keep us engaged, but at what cost?',
      category: 'Psychology',
      fullContent: 'Social media triggers dopamine release when we receive likes and comments, creating addictive patterns. The fear of missing out (FOMO) keeps us constantly checking updates. Comparison with others\' curated posts can harm self-esteem. Platforms use algorithms to show engaging content, often prioritizing controversial or emotional posts. To use social media healthily: set time limits, curate your feed carefully, take regular breaks, and remember that what you see online is rarely the full picture.'
    }
  ];

  useEffect(() => {
    const foundPost = posts.find(p => p.id === parseInt(id));
    setPost(foundPost);
  }, [id]);

  if (!post) return <div style={{ padding: '20px' }}>Post not found!</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/posts">
        <Button variant="secondary">← Back to Posts</Button>
      </Link>
      
      <Card style={{ marginTop: '20px' }}>
        <div style={{ 
          display: 'inline-block', 
          background: '#007bff', 
          color: 'white', 
          padding: '6px 16px', 
          borderRadius: '12px', 
          fontSize: '0.9em',
          marginBottom: '15px'
        }}>
          {post.category}
        </div>
        <h1>Post #{post.id}</h1>
        <h2 style={{ color: '#333' }}>{post.title}</h2>
        <p style={{ lineHeight: '1.8', marginTop: '20px', fontSize: '1.1em' }}>
          {post.fullContent || post.body}
        </p>
      </Card>
    </div>
  );
}

export default PostDetails;