import React from 'react';
import PropTypes from 'prop-types';
import {TextField} from "@material-ui/core";

const GeneralTextField = (props) => {

    const {value, handleChange, label, type, setData} = props;

    return (

        <TextField
            autoFocus
            margin="dense"
            id={value}
            name={value}
            label={label}
            type={type}
            value={value}
            onChange={event => {handleChange(setData, event)} }
            fullWidth
        />
    );
};

GeneralTextField.propTypes = {

    value: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default GeneralTextField;
