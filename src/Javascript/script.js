function toggleMenu() { 
    const navContainer = document.querySelector('.nav-container'); 
    navContainer.classList.toggle('active');  
    const isMenuActive = navContainer.classList.contains('active'); 
}
// document.getElementById('contact-form').addEventListener('submit', function(event) { 
//     event.preventDefault();   
//     const formData = new FormData(this);  
//     const data = {}; 
//     formData.forEach((value, key) => { 
//         data[key] = value; });   
//     localStorage.setItem('contactFormData', JSON.stringify(data)); 
//     alert('Your message has been stored locally!'); 
//     console.log('Stored data:', data); });