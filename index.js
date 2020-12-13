
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
		console.log(object);
		const messageContainer = document.getElementById('message');
		const messageTag = document.createElement('p');
		messageTag.innerText = object.id;
		messageContainer.appendChild(messageTag);
	}).catch(function(error) {
		const messageContainer = document.getElementById('message');
		const messageTag = document.createElement('p');
		messageTag.innerText = error.message;
		messageContainer.appendChild(messageTag)
	});
}