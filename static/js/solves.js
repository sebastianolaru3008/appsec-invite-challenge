const solves = document.querySelector('.solves')

fetch('/api/solves', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
    if (data.status === 'success') {
        solves.innerHTML = data.solves.map(solve => `<p>${solve}</p>`).join('<br>');      
    } else {
        solves.innerHTML = "<p>Error on fetching solves</p>";  
    }
})
.catch((error) => {
    console.error('Error:', error);
});
