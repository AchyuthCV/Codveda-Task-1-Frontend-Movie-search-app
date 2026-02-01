function UserCard(props) {
  return (
    <div style={{
      border: '2px solid #333',
      padding: '20px',
      margin: '10px',
      borderRadius: '8px',
      backgroundColor: '#f0f0f0'
    }}>
      <h2>{props.name}</h2>
      <p>Email: {props.email}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default UserCard;