let A  = new Array();
let button = document.querySelector('#tasks');
let divs = button.querySelectorAll("div");
for(let i=0; i<5 ; i++){
  A[i]=button.querySelectorAll('button')[i];
}

for(let i=0; i<5; i++){
  A[i].addEventListener("click",function(e){
    divs[i].dataset.status = 'done';
  })
}
