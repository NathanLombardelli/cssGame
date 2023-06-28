
let hintText = document.getElementById('hint');
function hint(){

     if (hintText.style.opacity === '0' || hintText.style.opacity === ''){
         hintText.style.opacity = '1';
     }else{
         hintText.style.opacity = '0';
     }


}