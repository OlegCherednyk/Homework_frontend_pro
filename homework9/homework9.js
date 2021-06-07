//------------------- 1 ----------------------

obj = {};
obj.result = null;
obj.buffer = 'result';

obj.do_function = function(callback, x, y) {
    obj[obj.buffer] = callback(x, y);
    return this;
}

obj.clear = function() {
    obj[obj.buffer] = 0;
    return this;
}

obj.copy = function(buf) {
    obj[buf] = obj[obj.buffer];
    return this;
}

obj.target = function(property) {
    obj.property = null;
    obj.buffer = property;
    return this;
}

function sum(x, y) {
    return x + y
}

function mult(x, y) {
    return x * y;
}

obj.do_function(sum, 2, 4) .copy('some_name') .target('another_some_name') .do_function(mult, 6, 3);

console.log(obj.result, obj.buffer, obj['another_some_name'])

//--------------------- 2 -------------------------

function big_letter(str) {
    let str_list = str.split('_');
    let str_list_letter = Array(str_list.length)
    for(i = 0; i < str_list.length; i++) {
        str_list_letter[i] = str_list[i].split('');
        if(i != 0){
            str_list_letter[i][0] = str_list_letter[i][0].toUpperCase();
        }
        str_list_letter[i] = str_list_letter[i].join('');
    }
    return str_list_letter.join('');
}

console.log(big_letter("asas_asas"));

//--------------------- 3 ----------------------------

function in_array(str, arr) {
    for(i = 0; i < arr.length; i++) {
        if(str === arr[i]) {
            return true;
        }
    }
    return false;
}