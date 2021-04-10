star = "****************";
line = "----------------";
br = "<br \/>"

f = prompt('Сила = ');
m = prompt('Масса = ');

a = f / m;

if (!Boolean(a) || a == Infinity || a < 0) {
    alert('Некоректные данные');
} else {
    document.write(star + br); 
    document.write("Ускорение тела при силе F = " + f + ", и массе m = " + m + " :" + br);
    document.write(line + br);
    document.write("a = " + a + br);
    document.write(line + br);
    document.write('end' + br);
}

info_length = parseInt(prompt("Введите количество студентов"))

for (i = 1, info = []; i < info_length + 1; i++) {
    info.push(prompt('Введите возраст, имя, фамилию студента №' + i));
    for (i = 0, sum = 0; i < info.length; i++) {
        sum += parseInt(info[i].split(" ")[0]);
        if (!Boolean(info[i].split(" ")[0])) {
            alert('Некоректные данные');
        }
    }
}

average = sum / info.length;

document.write(star + br); 
document.write("Список студентов зарегестрировавшихся на вебинар:" + br)

for (i = 0; i < info_length; i++) {
    document.write((i+1) + ". " +info[i] + br); 
}

document.write(line + "Средний возраст студента: " + average +line + br);
document.write(star + br); 
