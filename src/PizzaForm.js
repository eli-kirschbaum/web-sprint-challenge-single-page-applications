import React, { useState } from 'react'

export default function PizzaForm (props) {
    const [form, setForm] = useState({
        name: '',
        accepted: false
    })
    
    
    
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
        const val = evt.target.type === 'checkbox'? evt.target.checked : evt.target.value
        setForm({...form, [evt.target.name]:val})
    }
    
    
    return (
        <div onSubmit={onSubmit}>
        <form id='pizza-form'>
              
            
            <button id='order-button' disabled={disabled}>submit</button>
            
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
                        name='accepted'
                        checked={values.topping1}
                        onChange={onChange}
                        value={values.accepted}
                    />
                </label>
                <label>Sausage
                    <input
                        type='checkbox'
                        name='accepted'
                        checked={values.topping2}
                        onChange={onChange}
                        value={values.accepted}
                    />
                </label>
                <label>Mushrooms
                    <input
                        type='checkbox'
                        name='accepted'
                        checked={values.topping3}
                        onChange={onChange}
                        value={values.accepted}
                    />
                </label>
                <label>Olives
                    <input
                        type='checkbox'
                        name='accepted'
                        checked={values.topping4}
                        onChange={onChange}
                        value={values.accepted}
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