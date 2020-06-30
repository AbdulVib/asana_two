import React from "react";
import { useDropzone } from "react-dropzone";

export default function dragTest(props) {
    const { setFieldValue,  labelText, id, onChange, name, error, errorText, disabled, value } = props;
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      // accept: "image/*",
      onDrop: acceptedFiles => {
        // const test = []
        // data.push(acceptedFiles[0])
        // console.log(data, ' qwert')
        setFieldValue(name, [...value, acceptedFiles[0]]);
      }
    });


    // console.log(value, 'qwerty')

    return (
     <>
        <label htmlFor={id}>{labelText}</label> <br />
        <div className="bg-white py-4" style={{ width: '100%', textAlign: 'center'}}> 
          <div {...getRootProps({ className: "fileUpload btn btn-outline-primary" })}>
            {isDragActive ? (
              <span>Drop files here ...</span>
            ) : (
              <span>{ value && value.length ? `${ value.length } files selected` : 'Select files...' }</span>
            )}
            <input {...getInputProps()} />
          </div>
            <input id="uploadFile" placeholder="or drag and drop files here" disabled="disabled" />
        </div>
        <div>
            {error && <small className="text-danger">{errorText}</small>}
        </div>
      </>
    )
}
