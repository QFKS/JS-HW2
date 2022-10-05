let buy = prompt("What you wanna buy?",'cat');

let discount = 1.5;
const product = 'cat';
let cost = 50;
if(buy=='cat'){
items = prompt('How much items?')
}
if(buy!=='cat'){
    alert("Sorry, we have no one else ,only cat")
}
if (items<5){
   let costnew=(items*50);
   
   console.log(costnew,`$`)
   

}
if (items>=5){
   let costnew=(items*cost/discount);
   console.log(costnew,`$`);
}

let a = 1;
let b = 8;
let res = 0;
for(let i=a; i<=b; i++){
res+=i;
}
console.log(res);
     