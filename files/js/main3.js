// authentication part
window.onload = function () {
	if(!window.localStorage.getItem('x-auth')){
		window.location.href = "../index.html";
	}
	tableInfoOne();
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

//ajax section

var table = document.getElementById('reque');

function tableInfoOne () {
	var info = new XMLHttpRequest();
	info.open('GET', 'http://52.91.35.65:8080/api/users');
	info.onreadystatechange = function () {
		if(this.readyState == 4 && this.status == 200){
			var data = JSON.parse(this.responseText);
			renderHtmlOne(data);
		}else{
			console.log(this.status);
		}
		
	}
	info.setRequestHeader('Content-type', 'application/json');
	info.send();
}

function renderHtmlOne (data){
	var index = '';
	 for(i=0; i < data.length; i++){
	 	index = data[i];
	 	var sn = i+1;
	 	var user = (index.name);
	 	var username = (index.username);
	 	var add_no = (index.admission_no);
	 	var score = (index.score);
	 	var level = (index.stage);
	 	table.insertAdjacentHTML('beforeend', "<tr> <td>" + sn + "</td> <td>" + user +"</td> <td>" + username + "</td> <td>" + add_no + "</td> <td>" + score + "</td> <td>" + level + "</td> </tr>");
	 }
}