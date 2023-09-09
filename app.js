// DOM document -> html file deerh buh code 
/*console.log(document);
var h1 = document.getElementsByTagName('h1')[0];
console.log(h1);
// .innerText = "text bichne"; --> tag dotorh text uurchilnu.
h1.innerText = "Sain uu";
// .style.styleName = "style utga" --> tag-d style uguh
h1.style.color="red";
var h12 = document.getElementsByTagName('h1')[1];
h12.innerText="Hey";
h12.style.backgroundColor="aqua";*/
var inputAge = document.getElementsByTagName('input')[0];
console.log(inputAge);
var result = document.getElementsByTagName('p')[0];
console.log(result);
var currentYear=2023, birthYear;
function convert(){
	if(inputAge.value>110){
		result.innerText="Хүн ийм наслах боломжгүй";
		result.style.color="red";
	}else if(inputAge.value<0){
		result.innerText="0-ээс бага байж болохгүй";
		result.style.color="red";
	}else if(inputAge.value==""){
		alert("Хоосон байж болохгүй");
	}else{
		birthYear = currentYear - inputAge.value;
		result.innerText="Төрсөн он : " + birthYear;
	}
}
