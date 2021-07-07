import React, {useState} from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmited: PropTypes.func
};

TodoForm.defaultProps = {
    onSubmited: null
}


function TodoForm(props) {
    const { onSubmited } = props;
    const [value, setValue] = useState('')

    function handleChangeValue(event) {
        setValue(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (!onSubmited) return;
        const formValue = {
            title: value
        }
        onSubmited(formValue)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChangeValue} />
        </form>
    );
}

export default TodoForm;