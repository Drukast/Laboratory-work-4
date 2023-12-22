var Length, array = [], max = 0, count = 0;
Length = Number(prompt("Введите размер массива"));
if (!(isNaN(Length)) && (Length % 1 == 0) && (Length > 0)) {
    for (var i = 0; i < Length; i++) {
        let num = 0;
        num = Number(prompt(`Введите элемент ${i + 1}`));
        if (!isNaN(num)) {
            array[i] = num;
        } else {
            alert("Введено неверное значение элемента!");
            break;
        }
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] == max) {
            count += 1;
        }
    }
    for (var i = 0; i < count; i++) {
        j = array.indexOf(max);
        array.splice(j, 1);
    }
    alert(`Размер массива с удаленными максимальными числами: ${array.length} и его содержимое: ${array}`)
} else {
    alert("Введено неверное значение размера!");
}