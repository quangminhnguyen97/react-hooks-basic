import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
}

PostFilterForm.defaultProps = {
    onSubmit: null,
}

function PostFilterForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSerchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleChangeValue(e) {
        const value = e.target.value;
        setSerchTerm(e.target.value)
        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValue = {
                searchTerm: value
            }
            onSubmit(formValue)
        }, 300)
    }

    return (
        <form>
            <input type="text"
                value={searchTerm}
                onChange={handleChangeValue}
            />
        </form>
    )
}

export default PostFilterForm;