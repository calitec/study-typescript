import React from 'react';
// import Greetings from './Greetings';
// import MyForm from './MyForm';
// import Counter from './Counter';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './SampleContext';


const App: React.FC = () => {
  //greetings
  // const onClick = ( name: string ) => {
  //   console.log(name);
  // };
  // return <Greetings name="리액트" onClick={onClick} />;

  //counter
  // return <Counter />

  // MyForm
  // const onSubmit = ( form: { name: string; description: string }) => {
  //   console.log(form);
  // } 
  // return <MyForm onSubmit={onSubmit}/>


  //counter with reducer
  // return <Counter />

  // ReducerSample
  return <SampleProvider><ReducerSample /></SampleProvider>
};

export default App;