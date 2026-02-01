function Card({ title, children, style }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      marginBottom: '15px',
      ...style
    }}>
      {title && <h3 style={{ marginTop: 0, marginBottom: '15px' }}>{title}</h3>}
      {children}
    </div>
  );
}

export default Card;