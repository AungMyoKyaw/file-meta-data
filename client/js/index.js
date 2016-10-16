var input = document.getElementById('inputFile');
var label = document.getElementsByTagName('span')[0];
input.addEventListener('change',function(e){
    label.innerHTML=e.target.value.split('\\').reverse()[0];
    console.log(e.target.value);
});