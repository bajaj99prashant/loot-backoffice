// authentication part
window.onload = function () {
	if(!window.localStorage.getItem('x-auth')){
		window.location.href = "../index.html";
	}
};

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
var sn=0;
// function tableInfo () {
// 	var info = new XMLHttpRequest();
// 	info.open('GET', `${cors}52.91.35.65:8080/api/users`);
// 	info.onload = () => {
// 		 var data = JSON.parse(info.responseText);	 
// 		renderHtml(data);
// 	}
// 	info.send();
// }

function renderHtml (data){

	sn++;
	var user=data.name
	table.insertAdjacentHTML('beforeend', "<tr> <td>" + sn + "</td> <td>" + user +"</td> </tr>");
	// var index = '';
	//  for(i=0; i < data.length; i++){
	//  	index = (data[i]);
	//  	var sn = i+1;
	//  	var user = (index.name);
	//  	table.insertAdjacentHTML('beforeend', "<tr> <td>" + sn + "</td> <td>" + user +"</td> </tr>");
	//  }
}

// database part 
firebase.initializeApp({
  apiKey: 'AIzaSyDROhSw10jfwVM4lmVpzVs0akPo_0oMzNA',
  authDomain: 'loot-test-b6e21.firebaseapp.com',
  projectId: 'loot-test-b6e21'
});

var db = firebase.firestore();
db.collection("users").where("online", "==", true).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        var info = new XMLHttpRequest();
		info.open('GET', `http://52.91.35.65:8080/api/users/${doc.data().userID}`);
		info.onreadystatechange = function () {
			if(this.readyState == 4 && this.status == 200){
			 	var data = JSON.parse(this.responseText);	 
				renderHtml(data);
			}else{
				console.log(this.status);
			}
			
		}
		info.setRequestHeader('Content-type', 'application/json');
		info.setRequestHeader('x-auth', window.localStorage.getItem('x-auth'));
		info.send();
    });
});