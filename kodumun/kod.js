function Hesafla(value){
    let sum = 0;
    for (var i = 0;  i < value.length;i++) {
         if(value[i]%2==1){
            sum += value [i]
         }
    }
    console.log("hesafla 20 manat taksi: " + sum);
}
let num = [ 21,23,20,20];
Hesafla(num)




