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
var table = document.getElementById('table-info');

var xAuth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJsb290MjAxOSIsImlhdCI6MTU0ODMxMzI2Mn0.VqN0AmH6URo8z_zPff68C81a8e5EUYPgOrwU18TvLMU';

window.onload=show();
function show() {
	var info = new XMLHttpRequest();
	info.open('GET', url, true);
	info.onreadystatechange = function () {
		if(this.readyState === 4 && this.status === 200){
			var data = JSON.parse(this.responseText);
			console.log(data);
			renderHtml(data);
		}
		else{
			console.log(this.status);
		}
	};
	info.setRequestHeader('Content-type', 'application/json');
	info.setRequestHeader('x-auth', xAuth);
	info.send();
}

function renderHtml (data){
	var index = '';
	 for(i=0; i < data.length; i++){
	 	index = (data[i]);

	 	var id = index.id ;
	 	var mission_name = index.mission_name ;
	 	
	 	table.insertAdjacentHTML('beforeend', `<tr onclick="showTwo(${id})"> <td id=${id}>` + id + `</td> <td> <a data-toggle="modal" data-target="#myModal">` + mission_name +`</a> </td> </tr>`);
	 }
}

// ajax part 2

function showTwo (ide) {
	var xttp = new XMLHttpRequest();
	xttp.open('GET', url + '/'+ide, true);
	xttp.onreadystatechange = () => {
		if(xttp.readyState === 4 && xttp.status === 200){
			var data = JSON.parse(xttp.responseText);
			console.log(data);
			console.log(data.id);
			if(ide == data.id){
				document.getElementById('mi').value = data.id;
				document.getElementById('mn').value = data.mission_name;
				document.getElementById('st').value = data.story;
				document.getElementById('de').value = data.description;
				document.getElementById('an').value = data.answer;
				document.getElementById('lt').value = data.geocode.substring(0, data.geocode.indexOf(' '));
				document.getElementById('lg').value = data.geocode.substring(data.geocode.indexOf(' ') + 1);
			}
			else{
				console.log('error');
			}
			
		}else{
			console.log(xttp.status);
		}
	};
	xttp.setRequestHeader('Content-type', 'application/json');
	xttp.setRequestHeader('x-auth', xAuth);
	xttp.send();
}