import React from 'react';
import Select from 'react-select';
import Prototype from 'prop-types';

const DropdownComp = props => {

    const { name, onChange, value, options, label, error, errorText, disabled, id, placeholder, isMulti,key } = props
    return (
        <div>
            <label htmlFor={id}>{label}</label><br />
            <Select
            key={key}
                isMulti={isMulti}
                name={name}
                options={options}
                className={isMulti ? "basic-multi-select" : "basic-single"}
                classNamePrefix="select"
                value={value}
                onChange={onChange}
                isDisabled={disabled}
                id={id}
                placeholder={placeholder} />

            {error && <small className="text-danger">
                {errorText}</small>}

        </div>
    );
}

DropdownComp.protoType = {
    name: Prototype.string.isRequired,
    id: Prototype.string.isRequired,
    label: Prototype.string.isRequired,
    value: Prototype.string.isRequired,
    onChange: Prototype.func.isRequired,
    options: Prototype.array.isRequired,
    errorText: Prototype.string,
    placeholder: Prototype.string,
    error: Prototype.bool,
    isMulti: Prototype.bool,
    disabled: Prototype.bool
}
export default DropdownComp;