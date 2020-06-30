import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { Formik, Form, Field } from 'formik';
import { Link, useHistory } from 'react-router-dom';

//comps
import Input from '../../../components/input/Input'
import DropdownComp from '../../../components/dropdown/Dropdown'
import TextAreaComp from '../../../components/textArea/TextArea'
import Footer from '../../../components/partials/footer/Footer'
import SubBtn from '../../../components/submitButton/SubmitBtn'

//upload
import DragUpload from '../../../components/drag/DragUpload'
 
import FileUpload from '../../../components/fileUpload/FileUpload';
import { getBase64 } from '../../../utils/Converter';

//validation

import { AddSubmissionSchema } from '../../../validation/ValidationSchema';

export default function Home() {

    const browserOptions = [{ value: "", label: "please select" }]
    const submissionOptions = [{ value: "", label: "please select" }]

    const handleFileChange = (name, e, setFieldValue) => {
        setFieldValue(name, e.currentTarget.files[0])
        getBase64(e.currentTarget.files[0], res => {
            setFieldValue(`${name}Base64`, res)            
        })
    }

    return (
        <Formik
            validationSchema={AddSubmissionSchema}
            initialValues={{
                name: '',
                bridgeUsername: '',
                email: '',
                browserUsing: '',
                submission: '',
                issue: '',
                issueDetails: '',

                screenShots: [],

                supportingDocs: [],
            }}
            onSubmit={(values, { resetForm }) => {
                console.log(values, ' valuess')
                resetForm()
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
                isSubmitting,
                setFieldValue

            }) => {
                return (
                    <div className="container-fluid bg-light">
                        <div className="row">
                            <div className="col-sm-8 mx-auto">
                                    <div className="table-head my-4 text-center">
                                        <h6 className="sec-header text-center">
                                            To view your previous tickets, Click on view tickets button below
                                        </h6>
                                        <Link to="/add">
                                            <button type="button" className="btn btn-primary mt-3">View Tickets</button>
                                        </Link>
                                    </div>
                                    <div style={{ borderTop: '1px solid #EDEFF5'}}>

                                        <div className="card-body gatepass-saveoutput">
                                                <Form onSubmit={handleSubmit}>
                                                    {/* // */}
                                                    <div className="form-row">
                                                        <div className="form-group col-md-6">
                                                            <Input
                                                                id="name"
                                                                name="name"
                                                                placeholder="Enter your Name"
                                                                type="text"
                                                                label="Name"
                                                                value={values.name}
                                                                onChange={handleChange}
                                                                error={touched.name && errors.name}
                                                                errorText={errors.name}
                                                                disabled={isSubmitting} />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <Input
                                                                id="bridgeUsername"
                                                                name="bridgeUsername"
                                                                placeholder="Enter your answer"
                                                                type="text"
                                                                label="Bridge username"
                                                                value={values.bridgeUsername}
                                                                onChange={handleChange}
                                                                error={touched.bridgeUsername && errors.bridgeUsername}
                                                                errorText={errors.bridgeUsername}
                                                                disabled={isSubmitting} />
                                                        </div>
                                                    </div>

                                                     {/*  */}

                                                     <div className="form-row">
                                                        <div className="form-group col-md-6">
                                                            <Input
                                                                id="email"
                                                                name="email"
                                                                placeholder="Enter your email address"
                                                                type="email"
                                                                label="Email Address"
                                                                value={values.email}
                                                                onChange={handleChange}
                                                                error={touched.email && errors.email}
                                                                errorText={errors.email}
                                                                disabled={isSubmitting} />
                                                        </div>
                                                        
                                                        <div className="form-group col-md-6">
                                                            <DropdownComp
                                                                id="browserUsing"
                                                                name="browserUsing"
                                                                onChange={(selectedValue) => {
                                                                    setFieldValue("browserUsing", selectedValue)
                                                                }}
                                                                value={values.browserUsing}
                                                                options={browserOptions}
                                                                label="What browser is the user currently working in?"
                                                                placeholder="Choose one"
                                                                error={touched.browserUsing && errors.browserUsing}
                                                                errorText={errors.browserUsing}
                                                                disabled={isSubmitting} />
                                                        </div>
                                                    </div>

                                                    {/*  */}
                                                     <div className="form-row">
                                                         <div className="form-group col-md-6">
                                                            <DropdownComp
                                                                id="submission"
                                                                name="submission"
                                                                onChange={(selectedValue) => {
                                                                    setFieldValue("submission", selectedValue)
                                                                }}
                                                                value={values.submission}
                                                                options={submissionOptions}
                                                                label="Type of submission"
                                                                placeholder="Choose one"
                                                                error={touched.submission && errors.submission}
                                                                errorText={errors.submission}
                                                                disabled={isSubmitting} />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <Input
                                                                id="issue"
                                                                name="issue"
                                                                placeholder="This should be a one line description of what the user is submitting"
                                                                type="text"
                                                                label="Request/Issue short description"
                                                                value={values.issue}
                                                                onChange={handleChange}
                                                                error={touched.issue && errors.issue}
                                                                errorText={errors.issue}
                                                                disabled={isSubmitting} />
                                                        </div>
                                                    </div>

                                                     <div className="form-row">
                                                         
                                                        <div className="form-group col-md-12">
                                                            <TextAreaComp
                                                                    id="issueDetails"
                                                                    name="issueDetails"
                                                                    placeholder="This section should be a detailed summary of the issue that the user is experiencing and the steps they followed that led to the issue.If its a request for a change, this section should include the reason for the change request"
                                                                    label="User Request/Issue details"
                                                                    value={values.issueDetails}
                                                                    onChange={handleChange}
                                                                    error={touched.issueDetails && errors.issueDetails}
                                                                    errorText={errors.issueDetails}
                                                                    disabled={isSubmitting} />
                                                        </div>
                                                    </div>

                                                     {/*  */}
                                                     <div className="form-row">
                                                         
                                                        <div className="form-group col-md-6">
                                                            <DragUpload
                                                                setFieldValue={ setFieldValue }
                                                                name="screenShots"
                                                                value={ values.screenShots }
                                                                labelText="Screenshots of the issue"
                                                                id="screenShots"
                                                                error={touched.screenShots && errors.screenShots}
                                                                errorText={errors.screenShots}
                                                                disabled={isSubmitting} />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <DragUpload 
                                                                setFieldValue={ setFieldValue } 
                                                                name="supportingDocs"
                                                                value={ values.supportingDocs }
                                                                labelText="Additional supporting documents"
                                                                id="supportingDocs"
                                                                error={touched.supportingDocs && errors.supportingDocs}
                                                                errorText={errors.supportingDocs}
                                                                disabled={isSubmitting}
                                                            />
                                                        </div>
                                                   
                                                    </div>

                                                    <SubBtn buttonName="SUBMIT" disabled={isSubmitting}  />     

                                                </Form>
                                            <Footer />
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                )
            }}
        </Formik >
        
    )
}
