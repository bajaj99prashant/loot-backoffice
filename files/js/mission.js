function toggleSidebar() {
	var btn = document.getElementById("sidebar");
	if(btn.classList.contains('active')){
		btn.classList.remove('active');
	}
	else{
		btn.classList.add('active');
	}
}


	
// ajax part
var cors = 'https://cors-anywhere.herokuapp.com/';
var url = `${cors}52.91.35.65:8080/api/missions`;

var xAuth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJsb290MjAxOSIsImlhdCI6MTU0ODMxMzI2Mn0.VqN0AmH6URo8z_zPff68C81a8e5EUYPgOrwU18TvLMU';

document.getElementById('form').onsubmit = function  (e) {
	e.preventDefault();

	var xttp = new XMLHttpRequest ();

	var missionId = document.getElementById('missionId').value;
	var missionName = document.getElementById('missionName').value;
	var story = document.getElementById('story').value
	var description = document.getElementById('description').value;
	var lat = document.getElementById('lat').value;
	var lng = document.getElementById('lng').value;
	var answer = document.getElementById('answer').value;

	var sendData = {
		id : missionId,
		mission_name : missionName,
		story,
		description,
		geocode: lat + " " +lng,
		answer
	}
	console.log(sendData);
    xttp.open('POST', url, true);
	xttp.onreadystatechange = function () {
		if(this.readyState == 4 && this.status == 200){
			console.log(this.responseText);
			alert('your credentials were submitted successfully');
		}
		else{
			console.log(this.status);
		}
	};
	xttp.setRequestHeader('Content-type', 'application/json');
	xttp.setRequestHeader('x-auth', xAuth);
	xttp.send(JSON.stringify(sendData));

};