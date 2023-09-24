// react에서 이벤트를 처리하는 방법은 다음과 같다.
// 각 이벤트에 접근하기 위해서는 onClick을 이용하여 접근한다. 
// 이벤트에 대한 함수를 넘겨줄때에는 ()을 붙이지 않는다는 점을 유의하자. 

import React from 'react';
import './styles.css';

export default function App() {
    const buttonHandler = () => {
        console.log("Stored!");
    }
    
    return (
        <button onClick={buttonHandler}>Bookmark</button>
    );
}
