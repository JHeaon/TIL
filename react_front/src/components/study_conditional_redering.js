// 리엑트에서 조건에 따른 랜더링 방법은 아래와 같다.
// 우선 두개의 컴포넌트가 있다고 가정한다. 

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
return <h1>Please sign up.</h1>;
}


// 첫번쨰로는 js의 기능인 if문을 사용하여 처리하는 방법이 있다. 

function Greeting(props) {
const isLoggedIn = props.isLoggedIn;
if (isLoggedIn) {
    return <UserGreeting />;
}
return <GuestGreeting />;
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Greeting isLoggedIn={false} />);

// 두번째로는 조건부 연산자인 condition ? true: false를 사용하는 방법이 있다.
render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
      </div>
    );
}