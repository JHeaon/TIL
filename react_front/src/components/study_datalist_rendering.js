// 배열이 주어 졌을 떄, 하드코딩 없이 데이터를 컴포넌트에 넣고 jsx을 반환하게 하기 위해서
// js의 map() 함수를 이용한다. 


// app.js
import Todo from './Todo';

const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

export default function App() {
    return (
        <ul>
          {DUMMY_TODOS.map(element => <Todo text={element}/>)}
        </ul>
    );
}


// todo.js
export default function Todo(props) {
    return <li>{props.text}</li>;
}