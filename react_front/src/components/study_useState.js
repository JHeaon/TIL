// react에서 상태의 변화를 관찰하고 싶을때 useState()를 사용한다.
// useState()는 배열을 반환하며, 첫번째 요소는 상태값, 두번째 요소는 상태값을 변경하는 함수이다.

import React, { useState } from 'react';
import './styles.css';

export default function App() {
    
    const [price, setPrice] = useState(100)
    
    const buttonHandler = () => {
        setPrice(75)
    }
    
    return (
        <div>
            <p>${price}</p>
            <button onClick={buttonHandler}>Apply Discount</button>
        </div>
    );
}

// 만약 전에 있던 값을 참조하고 싶다면 핸들러에 event를 넘겨주고, event.target.value를 이용하여 참조할 수 있다.

import React, {useState} from 'react';
import './styles.css';

export default function App() {
    const [messageValidity, setMessageValidity] = React.useState('Invalid');
    
    function messageChangeHandler(event) {
        const value = event.target.value;
        if (value.trim().length < 3) {
            setMessageValidity('Invalid')
        } else {
            setMessageValidity('Valid');
        }
    }
    
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={messageChangeHandler} />
            <p>{messageValidity} message</p>
        </form>
    );
}
