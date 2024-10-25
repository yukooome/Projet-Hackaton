document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();  

    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();


    document.getElementById('errorName').textContent = '';
    document.getElementById('errorEmail').textContent = '';
    document.getElementById('errorSubject').textContent = '';
    document.getElementById('errorMessage').textContent = '';

    const nameRegex = /^[a-zA-Z\s]+$/;  // Accepte uniquement les lettres et espaces
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;  // Vérifie un email valide
    const subjectRegex = /^[a-zA-Z0-9\s]{3,}$/;  // Minimum 3 caractères pour le sujet
    const messageRegex = /^.{10,}$/;  // Minimum 10 caractères pour le message

    let formIsValid = true;

 
    if (!nameRegex.test(name)) {
        document.getElementById('errorName').textContent = 'Veuillez entrer un nom valide (lettres uniquement).';
        formIsValid = false;
    }

    if (!emailRegex.test(email)) {
        document.getElementById('errorEmail').textContent = 'Veuillez entrer un e-mail valide.';
        formIsValid = false;
    }

    if (!subjectRegex.test(subject)) {
        document.getElementById('errorSubject').textContent = 'Le sujet doit comporter au moins 3 caractères.';
        formIsValid = false;
    }

    if (!messageRegex.test(message)) {
        document.getElementById('errorMessage').textContent = 'Le message doit comporter au moins 10 caractères.';
        formIsValid = false;
    }

    if (formIsValid) {
        alert('Formulaire soumis avec succès !');
        this.submit();  
    }
});
