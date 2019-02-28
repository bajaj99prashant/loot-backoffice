window.onload = function () {
	if(window.localStorage.getItem('x-auth')){
		window.location.href = 'file:///home/prashant-bajaj/ncs/loot%20dashboard/home_page.html';
	}
};

// ajax part
var errorBox = document.getElementById('error-message');
var errorList = document.getElementById('error-list');
var cors = 'https://cors-anywhere.herokuapp.com/';
var url = `${cors}52.91.35.65:8080/api/users/adminLogin`;

document.getElementById('form').onsubmit = function (e){
	e.preventDefault();

	var xttp = new XMLHttpRequest();

	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

    var sendData = {
		username,
		password
	}
	console.log(sendData);
	xttp.onreadystatechange = function () {
		if(this.readyState == 4 && this.status == 200){
			console.log(this.status);
			var x_auth = this.getResponseHeader('x-auth');
			localStorage.setItem('x-auth', x_auth);
			errorBox.classList.add('active');
			errorBox.classList.add('change');
			errorList.insertAdjacentHTML('beforeend', '<li>Your credentials were sent successful</li>');
			window.location.href = '../home_page.html';
		}
		else{
			console.log(this.status);
			// errorBox.classList.add('active');
			// errorList.insertAdjacentHTML('beforeend', '<li>Username or Password entered was invalid</li>');
		}
	};
	xttp.open('POST', url, true);
	xttp.setRequestHeader('Content-type', 'application/json');
	xttp.send(JSON.stringify(sendData));
};