
function submitData(name, email) {
	const destination = 'http://localhost:3000/users';
	const body = JSON.stringify({
		name: name,
		email: email
	});
	const config = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: body
	};
	return fetch(
		destination,
		config
	).then(function(response) {
		return response.json();
	}).then(function(object) {
		console.log(object.id);
		document.body.innerHTML = object.id;
		// const messageContainer = document.getElementById('message');
		// const messageTag = document.createElement('p');
		// messageTag.innerText = object.id;
		// messageContainer.appendChild(messageTag);
	}).catch(function(error) {
		document.body.innerHTML = error.message;
		// const messageContainer = document.getElementById('message');
		// const messageTag = document.createElement('p');
		// messageTag.innerText = error.message;
		// messageContainer.appendChild(messageTag)
	});
}