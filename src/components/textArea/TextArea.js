import React from 'react';
import { Field } from 'formik';
import Prototype from 'prop-types';

const Input = props => {
    const { name, onPaste, type, autoComplete, placeholder, label, value, onChange, error, errorText, disabled, id, readOnly, inLine } = props
    const onPastValue = (e) => {
        e.preventDefault();
        return false;
    }
    return (
        <Field name={name}>
            {({ field }) => (
                <div style={{ display: `${ inLine ? 'flex': '' }`}}>
                    <label htmlFor={id}>{label} </label>
                    <textarea
                        // readOnly={ readOnly ? true: false }
                        className="form-control"
                        id={id}
                        name={name}
                        type={type}
                        // autoComplete={autoComplete}
                        placeholder={placeholder}
                        onPaste={onPaste && onPastValue}
                        value={value}
                        onChange={onChange}
                        disabled={disabled}
                        style={{ display: `${ inLine ? '': 'inline-block' }`}}
                        {...field}>
                        </textarea>
                    
                    {error &&  <div><small  className="text-danger">{errorText}</small></div>  }
                     
                   
                </div>
            )}
        </Field>
    );
}
// Input.protoType = {
//     name: Prototype.string.isRequired,
//     type: Prototype.string.isRequired,
//     placeholder: Prototype.string,
//     label: Prototype.string.isRequired,
//     id: Prototype.string.isRequired,
//     value: Prototype.string.isRequired,
//     errorText: Prototype.string,
//     onChange: Prototype.func.isRequired,
//     error: Prototype.bool,
//     disabled: Prototype.bool
// }
export default Input;