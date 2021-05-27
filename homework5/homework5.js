//----------- 2 ------------
function maxSum(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;
    
    for(i = 0; i <= arr1.length; i++) {
      sum1 += arr1[i];
    }
    for(i = 0; i <= arr2.length; i++) {
      sum2 += arr2[i];
    }
    
    if(sum1 >= sum2) {
      return arr1;
    }else {
      return arr2;
    }
  }
  
  //----------- 3 -------------
  
  function doMath(x, y, znak) {
    if(znak === "+") {
      return x + y;
    }
    if(znak === "-") {
      return x - y;
    }
    if(znak === "*") {
      return x * y;
    }
    if(znak === "/") {
      return x / y;
    }
  }
  
  //----------- 4 -------------
    
  function delLetter(str, del) {
    let word = str.split(" ");
    let res = new Array(word.length);
    for(let i = 0; i < word.length; i++) {
      word[i] = word[i].split("");
    }
    console.log(word)

    for(let i = 0; i < word.length; i++) {
        res[i] = '';
        for(let j = 0; j < word[i].length; j++) {
             if(del.indexOf(word[i][j]) != -1) {
                 delete word[i][j];
             } else {
                 res[i] += word[i][j];
             }
        }
    }
    return res.join(' ')
  }
  
  console.log(delLetter("Hello world!", ['d', 'l']));

  //--------------------- 5 -----------------------

  function filter(input, callback) {
      for(i = 0; i < input.length; i++) {
          if(callback(!input[i])) {
              input.splice(i, 1);
          }
      }
      return input;
  }

  var input = [1, 2, 3, 4, 5, 6];
  function isEven(x) { return x % 2 == 0; } // проверяет на четность
  console.log(filter(input, isEven)); // [2, 4, 6]

  //-------------------- 6 ------------------------

    function mult() {
        let res = 1;
        for(i = 0; i < arguments.length; i++) {
            res *= arguments[i]
        }
        return res;
    }

//---------------------- 7 -------------------------

function center(mass) {
    half = mass.length / 2;
    if (half % 2 == 0) {
        return mass.slice(half - 1, half + 1)
    } else {
         return mass[Math.round(half) - 1];
    }
}

console.log(center([1, 2, 3]));

//---------------------- 8, 9 -------------------------------

function do_function(x, y, callback) {
    if(callback(x, y) === x * y) {
        return x + "*" + y;
    }
    if(callback(x, y) === x + y) {
        return x + "+" + y;
    }
    if(callback(x, y) === x - y) {
        return x + "-" + y;
    }
    if(callback(x, y) === x / y) {
        return x + "/" + y;
    }
}

//---------------------- 10, 11 ---------------------------

function copy(list, callback) {
    let res = []
    callback = callback || function(value){return value};
    for(i = 0; i < list.length; i++) {
        res.push(callback(list[i]));
    }
    return res;
}