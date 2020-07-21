import React from 'react';
import './App.css';
import Heading from './component/heading/Heading.component';
import Input from './component/input/Input.component';
import Card from './component/Card/Card.component';


function App() {
  return (
    <React.Fragment>
      <Heading/>
      <Input/>
      <Card/>
    </React.Fragment>
  );
}

export default App;
