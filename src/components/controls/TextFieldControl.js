import React from 'react'
import { TextField } from '@material-ui/core';

export default function TextFieldControl(props) {

    const { name, label, value,error=null, onChange, ...other } = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
            {...other}
        />
    )
}
