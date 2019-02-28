// sidebar part
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
var table = document.getElementById('req');
var cors = 'https://cors-anywhere.herokuapp.com/';

function tableInfo () {
	var info = new XMLHttpRequest();
	info.open('GET', `${cors}52.91.35.65:8080/api/users`);
	info.onload = () => {
		 var data = JSON.parse(info.responseText);	 
		renderHtml(data);
	}
	info.send();
}

function renderHtml (data){
	var index = '';
	 for(i=0; i < data.length; i++){
	 	index = (data[i]);
	 	var sn = i+1;
	 	var user = (index.name);
	 	table.insertAdjacentHTML('beforeend', "<tr> <td>" + sn + "</td> <td>" + user +"</td> </tr>");
	 }
}