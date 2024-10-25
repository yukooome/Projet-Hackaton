document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();  

    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    
    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
        input.style.borderColor = '';
        input.title = ''; 
    });

    // Définir les regex pour la validation
    const nameRegex = /^[a-zA-Z\s]+$/;  // Accepte uniquement les lettres et espaces
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;  // Vérifie un email valide
    const subjectRegex = /^[a-zA-Z0-9\s]{3,}$/;  // Minimum 3 caractères pour le sujet
    const messageRegex = /^.{10,}$/;  // Minimum 10 caractères pour le message

    let formIsValid = true;

   
    if (!nameRegex.test(name)) {
        nameInput.style.borderColor = 'red'; // Bordure rouge pour indiquer une erreur
        nameInput.title = 'Veuillez entrer un nom valide (lettres uniquement).';
        formIsValid = false;
    }

    if (!emailRegex.test(email)) {
        emailInput.style.borderColor = 'red';
        emailInput.title = 'Veuillez entrer un e-mail valide.';
        formIsValid = false;
    }

    if (!subjectRegex.test(subject)) {
        subjectInput.style.borderColor = 'red';
        subjectInput.title = 'Le sujet doit comporter au moins 3 caractères.';
        formIsValid = false;
    }

    if (!messageRegex.test(message)) {
        messageInput.style.borderColor = 'red';
        messageInput.title = 'Le message doit comporter au moins 10 caractères.';
        formIsValid = false;
    }

    // Si tout est valide, on peut soumettre le formulaire
    if (formIsValid) {
        alert('Formulaire soumis avec succès !');
        this.submit();  // Soumettre le formulaire
    }
});
