import GetSuccessfullyForm from "./components/getSuccessfullyForm.js"

export default function submitForm(form){ 
    const data= {
        fullname: "picado",
        email: "example@gmail.com",
        phone: "1234567812",
        message: "holasas"
    }
    GetSuccessfullyForm(data,form)
}