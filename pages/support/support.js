// support.js — Support ticket form handling

document.addEventListener('DOMContentLoaded', () => {

    emailjs.init('sEE39IQvw46cKyxIn');

    const form = document.getElementById('ticketForm');
    const success = document.getElementById('ticketSuccess');
    const btn = document.getElementById('ticketSubmitBtn');

    form?.addEventListener('submit', function (e) {

        e.preventDefault();

        btn.textContent = 'Submitting...';
        btn.disabled = true;

        const templateParams = {

            name: document.getElementById('ticketName').value,

            email: document.getElementById('ticketEmail').value,

            priority: document.getElementById('priority').value,

            category: document.getElementById('category').value,

            subject: document.getElementById('subject').value,

            message: document.getElementById('ticketMessage').value
        };

        emailjs.send(
            'service_d13klyq',
            'template_yowu48t',
            templateParams
        )
        .then(function () {

            form.reset();

            success.classList.add('show');

            btn.textContent = 'Submit Ticket →';

            btn.disabled = false;

        })
        .catch(function (error) {

            console.error('EmailJS Error:', error);

            alert('Unable to submit ticket. Please try again.');

            btn.textContent = 'Submit Ticket →';

            btn.disabled = false;
        });

    });

});
