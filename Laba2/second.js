  
function Arg(a) {
    return a;
}

function Sum(a, b) {
    if(isNaN(a) ){
            return("a-не число");
    }
        else{
    if(isNaN(b)){
            return("b-не число");
        } 
        else return a + b;
    }
}

function pow() {
    let arr = [20,"Katya","Web",35,50,NaN,null];
    console.log("Исходные данные");
    console.log(arr);
    let newarr = arr.map((value) =>
        isNaN(value) ? value = 0 : value *= value
    )
    console.log("Полученные значения");
    console.log(newarr);
}
function culc(a,b){
    let arr=[];
    console.log("Исходные данные");
    console.log(a,b);
    if(isNaN(a) ){
        return("a-не число");
}
    else{
if(isNaN(b)){
        return("b-не число");
    } 
    else {console.log("Полученные значения");
    return  arr=[a+b,a-b,a*b,a/b,Math.log(a),Math.log10(a),a%b]}
}
}