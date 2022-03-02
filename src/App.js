import axios from "axios";
import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import PizzaForm from './PizzaForm'
import formSchema from './formSchema'
import * as yup from 'yup'
import { findAllByPlaceholderText } from "@testing-library/react";

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  mushrooms: false,
  olives: false,
  special: ''
}

const initialFormErrors = {
  name: ''
}


const initialPizza = []
const initialDisabled = true




const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [pizza, setPizza] = useState(initialPizza);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }
  
  const getPizza = () => {
    axios.get('https://reqres.in/api/orders')
      .then(resp => {
        setPizza(resp.data)
      })
      .catch(err => console.error(err))
  }

  const postNewPizza = newPizza => {
    axios.post('https://reqres.in/api/orders' , newPizza)
      .then(resp => {
        setPizza([resp.data, ...pizza])
        setFormValues(initialFormValues)
      })
      .catch(err => console.error(err))
  }

  

  const submitForm = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      mushrooms: formValues.mushrooms,
      olives: formValues.olives,
      special: formValues.special.trim()
    }
    
    postNewPizza(newPizza)
  }

  const validate = (name,value) => {
    yup.reach(formSchema, name)
      .validate(value)
        .then(() => setFormErrors({...formErrors, [name]: ''}))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
   }

  const inputChange = (name, value) => {
    validate(name,value);
    setFormValues({
      ...formValues,
      [name]: value
    }) 
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
            change={inputChange}
            update={updateForm}
            submit={submitForm}
            errors={formErrors}
          />
          
        </Route>
      </Switch>
    
    </div>
  );
};
export default App;
