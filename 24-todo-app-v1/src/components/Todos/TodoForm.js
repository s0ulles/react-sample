import { useState } from 'react';
import styles from './TodoForm.module.css';
console.log(styles);

function TodoForm({ addTodo }) {
    const [text, setText] = useState('');

    function onSubmitHandler(event) {
        event.preventDefault();
        addTodo(text);
        setText('');
    }

    return (
        <div className={styles.TodoFormContainer}>
        <form onSubmit={onSubmitHandler}>
            <input
                placeholder="Enter new todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default TodoForm