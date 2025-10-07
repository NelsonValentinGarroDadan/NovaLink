export default function GetSuccessfullyForm(data,form){
    const labels = {
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        message: "Message"
    }; 
    const successContainer = document.createElement('div');
    successContainer.setAttribute('id','success-container');

    const titleSuccess = document.createElement('h2');
    titleSuccess.innerText = "Message Sent Successfully!";
    successContainer.appendChild(titleSuccess); 

    const now = new Date();
    const options = {
        year: "numeric", month: "numeric", day: "numeric",
        hour: "2-digit", minute: "2-digit", second: "2-digit",
        hour12: true
    };
    const desSuccess = document.createElement('p');
    desSuccess.innerText = `Submitted on ${now.toLocaleString(undefined, options)}`;
    successContainer.appendChild(desSuccess);

    const span = document.createElement('span');
    successContainer.appendChild(span);

    const keys = Object.keys(data); 
    for(const key of Object.keys(data)){
        const title = document.createElement('p');
        title.innerText = labels[key];   // título
        title.className = 'title-successfully';
        successContainer.appendChild(title);

        const des = document.createElement('p');
        des.innerText = data[key];       // valor
        des.className = 'des-successfully';
        successContainer.appendChild(des);
    }

    const formContainer = document.getElementById('form-container'); 
    formContainer.removeChild(form);
    formContainer.appendChild(successContainer);
    successContainer.scrollIntoView({
        behavior: "smooth",  
        block: "end"       
    });
    setTimeout(()=>{
        form.reset();
        formContainer.removeChild(successContainer);
        formContainer.appendChild(form);
    },8000)
}