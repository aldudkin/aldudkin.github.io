//Language Switch JavaScript
const btnEn = document.getElementById('lang-en');
const btnCz = document.getElementById('lang-cz');
const sectionEn = document.getElementById('cv-en');
const sectionCz = document.getElementById('cv-cz');

btnEn.addEventListener('click', () => {
    btnEn.classList.add('active');
    btnCz.classList.remove('active');
    sectionEn.style.display = 'block';
    sectionCz.style.display = 'none';
});

btnCz.addEventListener('click', () => {
    btnCz.classList.add('active');
    btnEn.classList.remove('active');
    sectionEn.style.display = 'none';
    sectionCz.style.display = 'block';
});

document.getElementById('verify-btn').addEventListener('click', function () {
    // Get the token from Turnstile
    const token = document.querySelector('.cf-turnstile').getAttribute('data-token');
    // Make an AJAX request to your server to verify the token
    fetch('/verify-turnstile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: token })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Show the protected content
                document.getElementById('content-wrapper').style.display = 'block';
                document.querySelector('.cf-turnstile').style.display = 'none'; // Hide Turnstile
                document.getElementById('verify-btn').style.display = 'none'; // Hide the verify button
            } else {
                alert('Verification failed! Try again.');
            }
        })
        .catch(error => console.error('Error:', error));
});