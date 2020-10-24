function bin2dec (valueBIN) {    
    let valueDEC = null;
    for(let i = 1,prev = 1;i<=valueBIN.length;i++){     
        valueDEC+=valueBIN[valueBIN.length-i]==="1"?prev:0;
        prev *=2;
    }    
    return valueDEC;
}

function validate(number){
    let bValid = true;
    for(let i = 0; i <= number.length-1 && bValid===true; i++){
        bValid = number[i]==="0" || number[i]==="1"?true:false;
    }    
    return bValid;
}

exports = {
    bin2dec,validate
}