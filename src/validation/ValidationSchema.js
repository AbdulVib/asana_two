import * as yup from 'yup';

export const AddSubmissionSchema = yup.object({
    name: yup.string().required("Name is required!"),
    bridgeUsername: yup.string().required("Bridge Username is required!"),
    email: yup.string().email('Invalid Email').required("Email is required!"),
    browserUsing: yup.string().required("Browser name is required!"),
    submission: yup.string().required("Submission is required!"),
    issue: yup.string().required("Issue is required!"),
    issueDetails: yup.string().required("Issue details is required!"),
    screenShots: yup.array().min(1).required("A file is required"),
    supportingDocs: yup.array().min(1).required("A file is required"),
        // .test(
        //     "fileFormat",
        //     "Unsupported Format Please add xlsx files",
        //     value => value && XLSX_SCHEMA.includes(value.type)
        // )
});