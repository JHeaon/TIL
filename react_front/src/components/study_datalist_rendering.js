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




//


import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;