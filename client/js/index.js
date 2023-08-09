const form = document.querySelector('form');
const success_message = document.querySelector('div.success-msg');
const error_message = document.querySelector('div.error-msg');

success_message.style.display = 'none';
error_message.style.display = 'none';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    success_message.style.display = 'none';
    error_message.style.display = 'none';
    const slack_user_tag = document.querySelector('#slack_user_tag').value;
    const flag = document.querySelector('#flag').value;
    const data = { slack_user_tag, flag };
    fetch('/api/invite', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (data.status === 'success') {
                success_message.style.display = 'block';            
            } else {
                error_message.style.display = 'block';
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});