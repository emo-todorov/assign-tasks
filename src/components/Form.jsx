import React, { useState } from 'react'

const Form = ({
    id = '',
    name = '',
    placeholder = '',
    type = 'text',
    onSubmit = () => { }
}) => {
    const [value, setValue] = useState('');

    const onChangeHandler = (event) => {
        const curValue = event.target.value;

        setValue(curValue);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        onSubmit(value);
    };

    return (
        <form onSubmit={submitHandler}>
            <input
                value={value}
                onChange={onChangeHandler}
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
            />
            <button>Submit</button>
        </form>
    )
}

export default Form;