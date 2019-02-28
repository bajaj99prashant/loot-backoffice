function toggleSidebar() {
	var btn = document.getElementById("sidebar");
	if(btn.classList.contains('active')){
		btn.classList.remove('active');
	}
	else{
		btn.classList.add('active');
	}
}


//ajax part

var cors = 'https://cors-anywhere.herokuapp.com/';
var url = `${cors}52.91.35.65:8080/api/users/leaderboard`;
var xAuth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJsb290MjAxOSIsImlhdCI6MTU0ODMxMzI2Mn0.VqN0AmH6URo8z_zPff68C81a8e5EUYPgOrwU18TvLMU';


window.onload = showResults();
function showResults () {
	var xttp = new XMLHttpRequest();
	xttp.open('GET', url, true);
	xttp.onreadystatechange = function () {
		if(this.readyState === 4 && this.status === 200){
			var data = JSON.parse(this.responseText);
			console.log(data);
		    var index = '';
		    for(i = 0; i < data.length; i++){
			 	index = data[i];
			 	var table = document.getElementById('success');
			 	var sn = i + 1;
			 	var user = index.name;
			 	var score = index.score;
			 	table.insertAdjacentHTML('beforeend', `<tr><td>${sn}</td><td>${user}</td><td>${score}</td></tr>`);
		    }
		}
		else{
			console.log('error');
		}
	};
	xttp.setRequestHeader('Content-type', 'application/json');
	xttp.setRequestHeader('x-auth', xAuth);
	xttp.send();
}