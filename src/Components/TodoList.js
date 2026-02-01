import { useState } from 'react';
import TodoItem from './TodoItem';
import Button from './Button';
import Card from './Card';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Card title="Todo List" style={{ border: '2px solid red' }}>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Enter a todo..."
          style={{ 
            padding: '10px', 
            flex: 1,
            border: '1px solid #ddd',
            borderRadius: '5px'
          }}
        />
        <Button onClick={addTodo} variant="success">
          Add Todo
        </Button>
      </div>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
      
      {todos.length === 0 && (
        <p style={{ color: '#999', textAlign: 'center' }}>No todos yet. Add one above!</p>
      )}
    </Card>
  );
}

export default TodoList;