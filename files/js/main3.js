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
var cors = 'https://cors-anywhere.herokuapp.com/';

function tableInfoOne () {
	var info = new XMLHttpRequest();
	info.open('GET', `${cors}52.91.35.65:8080/api/users`);
	info.onload = () => {
		data = JSON.parse(info.responseText);
		renderHtmlOne(data);
	}
	info.send();
}

function renderHtmlOne (data){
	var index = '';
	 for(i=0; i < data.length; i++){
	 	index = data[i];
	 	var sn = i+1;
	 	var user = (index.name);
	 	var add_no = (index.admission_no);
	 	var score = (index.score);
	 	var level = (index.stage);
	 	table.insertAdjacentHTML('beforeend', "<tr> <td>" + sn + "</td> <td>" + user +"</td> <td>" + add_no + "</td> <td>" + score + "</td> <td>" + level + "</td> </tr>");
	 }
}