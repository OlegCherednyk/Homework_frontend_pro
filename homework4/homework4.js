//------------ 1 ----------------

var size = 3;
var mass = new Array(size);


for(var i = 0; i < size; i++) {
  mass[i] = new Array(size);

  for(var j = 0; j < size; j++) {
    mass[i][j] = Math.round(Math.random()*(10 - 1) + 1);
  }
}

var maxSum = 0;
var minSum = 0;

// var sums = []

for(var k = 0; k < mass.length; k++) {
    for(var f = 0, sum = 0; f < mass[0].length; f++) {
        sum += mass[f][k];
    }

    if (k === 0) {
        maxSum = sum;
        minSum = sum;
    }


    if (sum >= maxSum) {
        maxSum = sum;
        maxColIndex = k;
    }

    if (sum <= minSum) {
        minSum = sum;
        minColIndex = k;
    }

    console.log('col -->', k, 'sum ===', sum);
}

//------------ 2 ----------------

for(var j = 0, arr = []; j < 11; j++) {
    arr.push(Math.round(Math.random() * (10 - 1) + 1));
}

console.log(arr);

for(let i = 1; i <= arr.length; i++) { // начал с 1  для того чтобы не было проблем с 0 % 2
    if((i % 2 != 0) && (i != arr.length)) {
        val = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = val;
    }
}

console.log(arr);