import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import PizzaForm from './PizzaForm'

const initialFormValues = {
  name: '',
  size: '',
  topping1: '',
  topping2: '',
  topping3: '',
  topping4: '',
  special: ''
}





const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [pizza, setPizza] = useState([]);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      topping1: formValues.topping1,
      topping2: formValues.topping2,
      topping3: formValues.topping3,
      topping4: formValues.topping4,
      special: formValues.special.trim()
    }
  }
  
  
  return (
    <div className='app-container'>
      <div className='order-pizza'>
        <Link to='/'>Home</Link>
        <Link to='/pizza' id='order-pizza'>Order Pizza</Link>
        
      </div>
      <Switch>
        <Route exact path='/'>
          <h1>Pizza Order Form</h1>
        </Route>
        <Route path='/pizza'>
          <h2>Give me some PiZzA</h2>
          <PizzaForm 
            values={formValues}
            update={updateForm}
            submit={submitForm}
          />
          
        </Route>
      </Switch>
    
    </div>
  );
};
export default App;
