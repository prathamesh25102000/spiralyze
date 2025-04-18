isFormSubmitted = false;

function submitForm(e) {
    e.preventDefault();
    isFormSubmitted = true;
    console.log(">>", isFormSubmitted);
    
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const country = document.getElementById('country').value;
    if(!firstName){
        document.getElementById('first-name').classList.add('invalid');
    }else{
        document.getElementById('first-name').classList.remove('invalid');
    }

    if(!lastName){
        document.getElementById('last-name').classList.add('invalid');
    }else{
        document.getElementById('last-name').classList.remove('invalid');
    }

    if(!email){
        document.getElementById('email').classList.add('invalid');
    }else{
        document.getElementById('email').classList.remove('invalid');
    }

    if(!company){
        document.getElementById('company').classList.add('invalid');
    }else{
        document.getElementById('company').classList.remove('invalid');
    }

    if(!country){
        document.getElementById('country').classList.add('invalid');
    }else{
        document.getElementById('country').classList.remove('invalid');
    }
    
    if (!firstName || !lastName || !email || !company || !country) {
        // alert("Please fill in all fields");
        // return;
    }
    
    // alert("Form submitted successfully!");
}
