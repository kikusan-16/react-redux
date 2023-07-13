import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, login } from './actions';

function App() {
  // stateの取得
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);

  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <h3>count: {counter}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogin ? <h3>ログインに成功</h3> : <h3>ログインしてください</h3>}
      <button onClick={() => dispatch(login())}>Login or Logout</button>
    </div>
  );
}

export default App;
