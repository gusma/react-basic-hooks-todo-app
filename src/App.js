import React from 'react';
import './App.css';
import generateId from './helpers/helpers';

function App() {
  const [todos, setTodos] = React.useState([]);
	const [input, setInput] = React.useState('');
	const handleSubmit = () => {
		setTodos((todos) =>
			todos.concat({
				text: input,
				id: generateId(),
			})
		);
		setInput('');
	};

	const removeTodo = (id) =>
		setTodos((todos) => todos.filter((t) => t.id !== id));

	return (
		<div className='App'>
			<input
				type='text'
				value={input}
				placeholder='new todo'
				onChange={(e) => setInput(e.target.value)}
			></input>
			<button onClick={handleSubmit}>Submit</button>
			<ul>
				{todos.map(({ text, id }) => (
					<li key={id}>
						<span>{text}</span>
						<button onClick={() => removeTodo(id)}>x</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
