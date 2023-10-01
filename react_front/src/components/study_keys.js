// 여러개의 컴포넌트를 렌더링 하기 위해서는 js의 map()을 이용하여 배열을 반복한다.
const numbers = [1, 2, 3, 4, 5];

const listItems = numbers.map((number) =>
  <li>{number}</li>
);

const numbers = [1, 2, 3, 4, 5];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NumberList numbers={numbers} />);

// 해당 코드를 실행하게 되면 각 항목에 key을 넣어야 한다는 경고가 표시된다.
// key는 엘리먼트 리스트를 만들때 포함해야 하는 특수 문자열 어트리뷰트이다. 
// 따라서 아래와 같이 해결할 수 있다. 

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
}

// key는 React가 어떤 항목을 변경, 추가 또는 삭제할지에 대한 식별을 돕는 도구이다. 
// key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 한다. 
// 대체로 데이터의 ID를 key로 사용한다.

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);

const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);