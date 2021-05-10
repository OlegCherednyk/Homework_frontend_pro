var size = 3;
var mass = new Array(size);


for(var i = 0; i < size; i++) {
  mass[i] = new Array(size);

  for(var j = 0; j < size; j++) {
    mass[i][j] = Math.round(Math.random()*(10 - 1) + 1);
  }
}

col = [];

for(let i = 0; i < size; i++) {
    for(let j = 0,  sum = 0; j < size; j++) {
        sum += mass[j][i];
        if(j == (size - 1)) {
            col.push(sum);
        }
    }
}

min = col[0];
max = col[0];

for(let i = 0; i < size; i++) {
    if(col[i] > max) {
        max = col[i]
    }
    if(col[i] < min) {
        min = col[i];
    }
}

//-------------------------------------------


for(var j = 0, arr = []; j < 11; j++) {
    arr.push(Math.round(Math.random() * (10 - 1) + 1));
}

console.log(arr);

for(let i = 1; i <= arr.length; i++) { //начал с 1  для того чтобы не было проблем с 0 % 2
    if((i % 2 != 0) && (i != arr.length)) {
        val = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = val;
    }
}

console.log(arr);