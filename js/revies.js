const reviews = [
{identity: 1,
name: 'Jon Smith',
title: 'developer',
img:'<img src = "../images/john smith.jpg">',
text: 'uhuygiihjbujbhjnbhjugfdrtserazwrsdcc uhiuhuuihuhuh'},

{identity: 2,
name: 'ken Smith',
title: 'developer',
img:'<img src = "../images/ken smith.jpg">',
text: 'uhuygiihjbujbhjnbhjugfdrtserazwrsdcc uhiuhuuihuhuh'},

{identity: 3,
name: 'llen Smith',
title: 'developer',
img:'<img src = "../images/llen smith.jpg">',
text: 'uhuygiihjbujbhjnbhjugfdrtserazwrsdcc uhiuhuuihuhuh'},

{identity: 4,
name: 'kensmith',
title: 'developer',
img:'<img src = "../images/kensmith.jpg">',
text: 'uhuygiihjbujbhjnbhjugfdrtserazwrsdcc uhiuhuuihuhuh'}
]

let photo = document.getElementById('photo');
let name = document.getElementById('name');
let title = document.getElementById('job');
let  text = document.getElementById('info');

let prev = document.querySelector('.prevBtn');
let next = document.querySelector('.nextvBtn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded',function(){
 showPerson(currentItem)
});

function showPerson(person){
   const item = reviews[person];
	photo = item.img;
	name.textContent = item.name;
	title.textContent = item.title;
	text.textContent = item.text;
}

prev.addEventListener('click', function(){
	currentItem++
	showPerson();
});

next.addEventListener('click', function(){
	currentItem--
	showPerson();
});