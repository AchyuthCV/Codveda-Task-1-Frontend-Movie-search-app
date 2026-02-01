function Button({ children, onClick, variant = 'primary', style }) {
  const baseStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.3s',
  };

  const variants = {
    primary: {
      background: '#007bff',
      color: 'white',
    },
    danger: {
      background: '#dc3545',
      color: 'white',
    },
    success: {
      background: '#28a745',
      color: 'white',
    },
    secondary: {
      background: '#6c757d',
      color: 'white',
    }
  };

  return (
    <button 
      onClick={onClick}
      style={{ ...baseStyle, ...variants[variant], ...style }}
    >
      {children}
    </button>
  );
}

export default Button;