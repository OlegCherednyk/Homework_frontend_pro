function init_slider(n, size) {
    let counter = (n > 0 && n < size) ? n - 1 : false;
    
    
    return function() {
        if(counter === false) {
            console.log('Error');
            return;
        }
        if(counter < size) {
            counter++;
        }
        if(counter === 0) {
            counter = size;
        }else if(counter === size) {
            counter = 0;
        }
        return counter;
    }
}

counter = init_slider(1, 5)
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

