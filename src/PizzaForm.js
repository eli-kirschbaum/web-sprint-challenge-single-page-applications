import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import formSchema from './formSchema'

export default function PizzaForm (props) {

    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }
    
    
    return (
        <div onSubmit={onSubmit}>
        <form id='pizza-form'>
              
            
            <button id='order-button' disabled={disabled}>submit</button>
            <div className ='errors'>
                <div>{errors.name}</div>
            </div>
            
            <label>Name
                <input
                    id='name-input'
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                />
            </label>

            <label>Size
                <select
                    id='size-dropdown'
                    onChange={onChange}
                    value={values.size}
                    name='size'
                >
                    <option value=''> * Select a Size * </option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='extra-large'>Extra-Large</option>
                </select>
            </label>
            <div className='toppings-checkboxes'>
                <h4>Toppings</h4>
                <label>Pepperoni
                    <input
                        type='checkbox'
                        name='pepperoni'
                        checked={values.pepperoni}
                        onChange={onChange}
                        
                    />
                </label>
                <label>Sausage
                    <input
                        type='checkbox'
                        name='sausage'
                        checked={values.sausage}
                        onChange={onChange}
                        
                    />
                </label>
                <label>Mushrooms
                    <input
                        type='checkbox'
                        name='mushrooms'
                        checked={values.mushrooms}
                        onChange={onChange}
                    
                    />
                </label>
                <label>Olives
                    <input
                        type='checkbox'
                        name='olives'
                        checked={values.olives}
                        onChange={onChange}
                        
                    />
                </label>
            </div>
            <div className='special-container'>
                <label>Special Instructions
                    <input
                        id='special-text'
                        value={values.special}
                        onChange={onChange}
                        name='special'
                        type='text'
                    />
                </label>
            </div>
        </form>
        
        </div>
    )
}