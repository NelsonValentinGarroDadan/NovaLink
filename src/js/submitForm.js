import GetSuccessfullyForm from "./components/getSuccessfullyForm.js"
 
const regexs = {
  name: {
    regex: /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?:\s+[A-Za-zÁÉÍÓÚáéíóúÑñ]+)+$/,
    message: "Please enter your full name (first and last name)."
  },
  email: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
    message: "Please enter a valid email address (e.g. name@example.com)."
  },
  phone: {
    regex: /^\+?\d[\d\s-]{6,14}\d$/,
    message: "Please enter a valid phone number (at least 8 digits)."
  },
  message: {
    regex: /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9.,!?¿¡()'"%$#@&\s-]{5,}$/,
    message: "Your message must contain at least 5 valid characters."
  }
};

export default function submitForm(form){ 
    const inputs = form.getElementsByTagName('input');
    const textArea = document.getElementById('message'); 
    let isValid = true;
    const data = {}
    // Limpia errores anteriores
    const errorFields = form.querySelectorAll(".error");
    errorFields.forEach((p) => (p.innerHTML = ""));

    // Validar inputs
    for(const input of inputs){
        if(!regexs[input.id].regex.test(input.value)){
            const pError = document.getElementById(`error_${input.id}`)
            pError.innerHTML = regexs[input.id].message;
            input.focus()
            isValid = isValid && false;
            break;
        } else data[input.id] = input.value; 
    }
    if(textArea.value && !regexs.message.regex.test(textArea.value)){
        const pError = document.getElementById('error_message');
        pError.innerHTML = regexs.message.message;
        textArea.focus()
        isValid = isValid && false;
        return;
    } else data.message = textArea.value;  

    if(isValid) GetSuccessfullyForm(data,form);
}