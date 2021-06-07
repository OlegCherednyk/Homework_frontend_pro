function init_slider(size) {
    let result = {};
    result.counter = 0;
    result.up = function() {
        if(result.counter != size) {
            result.counter++;
        }else {
            result.counter = 0;
        }
    }
    result.down = function() {
        if(result.counter != 0) {
            result.counter--;
        }else {
            result.counter = size;
        }
    }
    result.set = function(n) {
        if(n <= size && n > 0){
            result.counter = n;
        }else {
            return "Error";
        }
    }
    
    return result
}

count = init_slider(5);
console.log(count.set(5));
console.log(count.up());
console.log(count.up());
console.log(count.up());
console.log(count.counter)

