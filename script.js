let button=document.getElementById('button');
let h1=document.getElementById('h1');
let input=document.getElementById('input');
let array=[
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  1,2,3,4,5,6,7,8,9,0];
let password=[];

button.addEventListener('click',()=>{
  if(input.value!==''){
    if(input.value<=40){
    for(let i=0;i<input.value;i++){
      number=array[Math.floor(Math.random() * array.length)];
    password.push(number);
  }
  h1.innerText=password.join("");
  password=[];
    }else{
  alert('maximum password length is 40');
    } 
}else{
    alert('pls insert desired password length first');
  }
})
