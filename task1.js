var Length, array = [], result = [];
Length = Number(prompt("Введите размер массива"));
if (!(isNaN(Length)) && (Length % 1 == 0) && (Length > 0)) {
    let num = 0;
    for (var i = 0; i < Length; i++) {
        num = Number(prompt(`Введите элемент ${i + 1}`), "1");
        if (!isNaN(num)) {
            array[i] = num;
        } else {
            alert("Введено неверное значение элемента!");
            break;
        }
    }
    for (var i = 0; i < array.length; i++) {
        if ((array[i] > 0) && (Math.log2(array[i]) % 1 == 0)) {
            result.push(array[i]);
        }
    }
    alert(`Числа, являющиеся степенью числа 2: ${result}`);
} else {
    alert("Введено неверное значение размера!");
}