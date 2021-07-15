//---------------- Практика 1 ---------------- 

function factorial(n) {
    if(n === 1) {
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(3));

//---------------- Практика 2 ---------------- 
function convert_arr(arr) {
    let mass = [];

    function convert_arr_do(mass, arr) {
        for(var i = 0; i < arr.length; i++) {

            if (Array.isArray(arr[i])) {
                convert_arr_do(mass, arr[i]);
            } else {
                mass.push(arr[i]);
            }
        } 
        return mass;
    }

    convert_arr_do(mass, arr);
    return mass;
}

console.log(convert_arr([[1,2,3, [3.1]], 4, [5,6, [7, 8]]]))

//--------------- Практика 3 ------------------





function convert_obj(obj) {
    let mass = [];
    let keys = [];
    
    
    function convert(obj) {
        for(var key in obj) {
    
            if (typeof obj[key] == 'object') {
                convert(obj[key]);
            } else {
                mass.push(obj[key]);
                keys.push(key);
            }
        } 
    }

    convert(obj);

    let res_obj = {};
    for(i = 0; i < keys.length; i++) {
        res_obj[keys[i]] = mass[i];
       }
    return res_obj;

}



console.log(convert_obj({ a: 10, b: 12, c: { f: 13 } }))