import React from 'react';
import Prototype from 'prop-types';

export default function FleUpload(props) {
    const { labelText, id, onChange, name, error, errorText, disabled, value } = props
    return (
        <>
            <label htmlFor={id}>{labelText}</label> <br />
            <div className="bg-white py-4" style={{ width: '100%', textAlign: 'center'}}>
                <div className="fileUpload btn btn-outline-primary">
                    <span>Select files...</span>
                    <input
                        name={name}
                        onChange={onChange}
                        id={id}
                        type="file"
                        className="upload"
                        disabled={disabled} />
                </div>
                <input value={value} id="uploadFile" placeholder="or drag and drop files here" disabled="disabled" />
            </div>
            <div>
                {error && <small className="text-danger">{errorText}</small>}
            </div>
        </>

    )
}
FleUpload.protoType = {
    name: Prototype.string.isRequired,
    labelText: Prototype.string.isRequired,
    id: Prototype.string.isRequired,
    value: Prototype.string.isRequired,
    onChange: Prototype.func.isRequired,
    errorText: Prototype.string,
    error: Prototype.bool,
    disabled: Prototype.bool
}