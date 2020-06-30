export const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(file.type)
    reader.onload = function () {
        const result = reader.result.split(",")
        const uploadedfile = {
            "fileData":result[1],
            "fileType":file.type
        }
        cb(uploadedfile)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}