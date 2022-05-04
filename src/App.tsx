import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Tracker from './Tracker';
import MyInput from './component/myInput/MyInput';
import ResourceList from './component/resourceList/ResourceList';



function App() {
  const [list,setList] = useState<string[]>([])
  const [tracker] = useState<Tracker>(new Tracker())

  const onAllocateHandler = (input:string) =>{
      const allocatedRes = tracker.allocate(input)
      setList([...allocatedRes])
  }

  const onDeallocateHandler = (item:string) =>{
    const allocatedRes = tracker.deallocate(item)
    setList([...allocatedRes])
  }

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Allocation Resources
        </p>
      </header>
      <main className ='App-main'>
          <MyInput onSubmitHandler={onAllocateHandler} />
          <ResourceList list={list} onDeleteHandler={onDeallocateHandler} />
      </main>
    </div>
  );
}

export default App;
