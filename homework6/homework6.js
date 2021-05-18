//------------------- Лекция 1 ----------------

function convert(obj) {
    result = {};
    for(key in obj) {
        if(typeof obj[key] === "object") {
            for(key_b in obj[key]) {
                result[key_b] = obj[key][key_b];
            }
            continue;
        }
        result[key] = obj[key];
    }
    return result;
}
obj = { x: 10, y: 20, inner: { x: 20, z: 30 }, foo2: { k: 23, p: 13 } };
console.log(convert(obj));

//------------------- Лекция 2 ----------------
function for_in(obj, obj1) {
    for(key in obj1) {
        obj[key] = obj1[key];
    }
}

function assign_object(obj1, obj2) {
    obj = {};
    for_in(obj, obj1);
    for_in(obj, obj2);
    return obj;
}

//------------------- Лекция 3 ----------------

function assign_object_unlimited() {
    obj = {};
    for(i = 0; i < arguments.length; i++) {
        for_in(obj, arguments[i]);
    }
    return obj;
}


//------------------- Лекция 4 ----------------

function random(from, to) {
    return Math.round(Math.random() * (to - from) + from);
}

function get_peson(from, to) {
    from = from || 10;
    to = to || 75;

    obj = {
        name: prompt("enter name"),
        age: random(from, to)
    }
    return obj;
}

for(i = 0, arr = [], size = 5; i < size; i++) {
    arr.push(get_peson());
}

sum_age = 0;
max_age = 0;

for(i = 0; i < arr.length; i++) {
    if(arr[i].age >= max_age) {
        max_age = arr[i].age;
    }
    sum_age += arr[i].age;
}

avr_age = sum_age / arr.length;

for(i = 0, arr_all_name = []; i < arr.length; i++) {
    arr_all_name.push(arr[i].name);
}

for(i = 0, arr_name = []; i < arr_all_name.length; i++) {
    name = arr_all_name[i];
    arr_all_name[i] = undefined;
    if(!in_array(name, arr_all_name)){
        arr_name.push(name);
    }
}

console.log(arr_name);

//----------------- Практика 1 -------------------

function in_array(word, arr) {
    for(let i = 0; i < arr.length; i++) {
        if(word === arr[i]) {
            return true;
        }
    }
    return false;
}

//----------------- Практика 2, 3 -------------------

function assign_object_update(obj1, obj2, main_obj) {
    main_obj = false && main_obj;
    obj = {};
    if(main_obj) {
        for_in(obj, obj2);
        for_in(obj, obj1);
    } else {
        for_in(obj, obj1);
        for_in(obj, obj2);
    }
    return obj;
}

