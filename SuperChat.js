const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const payload = new FormData(form);
    console.log([...payload]);

    fetch('http://127.0.0.1:5000/chat/user/register', {
        method: "POST",
        mode: 'no-cors',
        body: payload,
    })
    .then(res => res.json())
    .then(data => console.log(data));
    
    
})
