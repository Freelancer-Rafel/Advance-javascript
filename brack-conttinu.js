const number = [1, -2, 3, -4, -5, 6, 7, 8, 9];
for (let i = 0; i < number.length; i++) {
    
    if(number [i]>6){
        break;
    }
    //console.log(number[i]);
}


for (let i = 0; i < number.length; i++) {
    
    if(number [i]<0){
        continue;
    }
    console.log(number[i]);
}