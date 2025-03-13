 function random(){
let result;
do{
result = Math.floor(Math.random() * 100) + 1;
}while(result === 1 || result === 2 || result === 3);
return result;
}
