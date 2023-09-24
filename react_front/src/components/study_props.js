// props는 자식 컴포넌트에게 데이터를 넘겨주기 위한 하나의 장치이다. 
// 자식 컴포넌트를 만듬과 동시에, 여러 매개변수에다가 값을 넘겨주면 자식 컴포넌트에서 props.{data} 형식으로 접근하여 데이터를 사용한다. 
// 일반적으로 객체를 넘겨주어 사용하는 경우가 흔하다. 


// App.js
import React from 'react';

import Product from './Product';
import './styles.css';

export default function App() {
    return (
        <div>
            <h1>My Demo Shop</h1>
            <Product title="Product 1" price="10" description="First product" />
            <Product title="Product 2" price="20" description="Second product" />
        </div>
    );
}


// Product.js
import React from 'react';

export default function Product(props) {
    return (
        <article className="product">
            <h2>{props.title}</h2>
            <p className="price">${props.price}</p>
            <p>{props.description}</p>
        </article>
    );
}