import Button from './Button';

function TodoItem({ todo, onDelete }) {
  return (
    <li style={{ 
      marginBottom: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      background: '#f9f9f9',
      borderRadius: '5px'
    }}>
      <span>{todo.text}</span>
      <Button onClick={() => onDelete(todo.id)} variant="danger" style={{ padding: '5px 15px' }}>
        Delete
      </Button>
    </li>
  );
}

export default TodoItem;