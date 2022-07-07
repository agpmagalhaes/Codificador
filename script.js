let text = document.querySelector("#input-txt");
let criptbtn = document.querySelector("#btn-cript");
let uncriptbtn = document.querySelector("#btn-descript");
let copybtn = document.querySelector("#btn-copy");
let output = document.querySelector("#output-texto");
var finaltxt = "";
var cript;
var uncript;

const regex = new RegExp("^[a-z \b]+$");

function criptTxt(){
	
var txtbox = text.value;
cript = txtbox.replace(/e/g, "enter")
.replace(/i/g, "imes")
.replace(/a/g, "ai")
.replace(/o/g, "ober")
.replace(/u/g, "ufat");
finaltxt = cript;

output.value = cript;
}

function uncripTxt(){
	var txtbox = text.value;
	uncript = txtbox.replace(/enter/g,"e")
.replace(/imes/g,"i")
.replace(/ai/g,"a")
.replace(/ober/g,"o")
.replace(/ufat/g,"u");
finaltxt = uncript;
console.log(finaltxt);
output.value = finaltxt;
}

function copyTxt(){
	navigator.clipboard.writeText(output.value);
}

function letrasindisp(input_test){
	if(!regex.test(input_test)){
		return alert("Não é permitido o uso de caracteres especiais!");

	}else{
		return input_test;
	}
}

criptbtn.addEventListener("click",function(event){
	event.preventDefault();
	criptTxt();
})
	
uncriptbtn.addEventListener("click",function(event){
	event.preventDefault();
	uncripTxt();
})
	
copybtn.addEventListener("click",function(){
	copyTxt();
})

document.getElementById("btn-clean").addEventListener("click", function () {
    document.getElementById("input-txt").value = "";
    document.getElementById("output-texto").value = "";
})