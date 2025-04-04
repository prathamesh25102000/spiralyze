function submitForm() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const country = document.getElementById('country').value;
    
    if (!firstName || !lastName || !email || !company || !country) {
        alert("Please fill in all fields");
        return;
    }
    alert("Form submitted successfully!");
}
