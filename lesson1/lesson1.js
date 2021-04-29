arr = [1, 2, 3, 4, 5];
join = arr.join("_");
console.log(join);
document.write(join);

//-------------------
li = "";
for (i = 0; i < arr.length; i++) {
    li += "<li>" + arr[i] + "</li>";
}

console.log(li)
document.write("<ul>"+ li + "</ul>");

//-----------------

half = Math.floor(arr.length / 2);
count = 0;
if (half == (arr.length / 2)) {
    сount = 2;
} else {
    сount = 1;
}
arr.splice(half, count);
console.log(arr);

//-----------------

mas = [];
end = false;
do {
    res = prompt("Введите елемент массива, если вы закончили напишите &");
    mas.push(res);
    if (res === "&") {
        break;
    }
    mas.push(res);
} while (true) 


console.log(mas);