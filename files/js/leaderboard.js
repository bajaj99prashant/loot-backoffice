// authentication part
window.onload = function () {
	if(!window.localStorage.getItem('x-auth')){
		window.location.href = "../index.html";
	}
	showResults();
};

// sidebar
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

var url = 'http://52.91.35.65:8080/api/users/leaderboard';



function showResults () {
	var xttp = new XMLHttpRequest();
	xttp.open('GET', url, true);
	xttp.onreadystatechange = function () {
		if(this.readyState === 4 && this.status === 200){
			var data = JSON.parse(this.responseText);
		    var index = '';
		    for(i = 0; i < data.length; i++){
			 	index = data[i];
			 	var table = document.getElementById('success');
			 	var sn = i + 1;
			 	var user = index.name;
			 	var username = index.username
			 	var score = index.score;
			 	table.insertAdjacentHTML('beforeend', `<tr><td>${sn}</td><td>${user}</td><td>${username}</td><td>${score}</td></tr>`);
		    }
		}
		else{
			console.log('error');
		}
	};
	xttp.setRequestHeader('Content-type', 'application/json');
	xttp.setRequestHeader('x-auth', window.localStorage.getItem('x-auth'));
	xttp.send();
}