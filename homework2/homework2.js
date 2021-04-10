answer = prompt("Кто пришел?");

if (answer == null) {
    alert('Вход отменен');
} else if (answer == 'Админ' || answer == 'admin' || answer == "админ") {
    pass = prompt("Пароль?");
    if (pass == null) {
        alert('Вход отменен');
    } else if (pass == "Черный Властелин"){
        alert('Добро пожаловать!');
    } else {
        alert('Пароль неверен');
    }
} else {
    alert('Я вас не знаю');
}

//-------------------------------------

num = prompt("Введите число");

if (num % 3 == 0) {
    alert('Число кратное 3');
} else {
    console.log(num % 3, "Остаток");
}

//-------------------------------------

nums = prompt('Введите цифры').split(" ");

for (i = 0, max = 0; i < nums.length; i++) {
    if (parseInt(nums[i]) >= max) {
        max = parseInt(nums[i]);
    }
}

console.log(nums);

document.write('Максимальное число ' + max);

//-------------------------------------

some = prompt('Введите что-то').split("");
num = 0;
char = 0;

for (i = 0; i < some.length; i++) {
    if (Boolean(+some[i])) {
        num++;
    } else {
        char++;
    }
}

res = (num / char) * 100;

alert('Это на ' + res + '% число');
