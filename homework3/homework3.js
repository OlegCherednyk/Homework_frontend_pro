for (i = 0, count = 10, arr = []; i < count; i++) {
    if (i % 2 != 0) {
        arr.push(Math.round(Math.random()*(10 - 1) + 1));
    } else {
        arr.push(0);
    }
}

console.log(arr);
delete arr;

//------------------------------------
for (i = 0, arr = [], end = false; i <= arr.length; i++) {
    do {
        res = prompt("Введите число для массива, если вы закончили напишите стоп");
        if (res === "Cтоп" || res === "стоп") {
            end = true;
        }
    } while ((isNaN(res) || !Boolean(res) || parseInt(res) < 0) && !end) 

    if (end) {
        break;
    } else {
        arr.push(parseInt(res));
    }
}

console.log(arr);
delete arr;

//-------------------------------------

for (i = 0, count = 10, arr = []; i < count; i++) {
    arr.push(Math.round(Math.random()*(10 - 1) + 1));
}

min = arr[0];
max = arr[0];
min_index = 0;
min_index = 0;

for (i = 0; i < arr.length; i++) {
    if (arr[i] <= min) {
        min = arr[i];
        min_index = i;
    } else if (arr[i] >= max) {
        max = arr[i];
        max_index = i;
    }
}

arr_b = arr.slice(min_index, max_index);

console.log(arr, "arr");

console.log(arr_b);

//---------------------------------

half = Math.floor(arr.length / 2);

for (i = 0; i < half; i++) {
    start = arr[i];
    arr[i] = arr[arr.length - i -1];
    arr[arr.length - i -1] = start;
}

console.log(arr);
