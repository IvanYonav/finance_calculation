
let str = "урок - 3 - был слишком легким";

function easyLes() {
    capitalLet = str[0].toUpperCase() + str.slice(1);
    console.log(capitalLet);

    delDash = capitalLet.replace(/-/g," ");
    console.log(delDash);

    cutWord = delDash.slice(delDash.indexOf("легким"));
    console.log(cutWord);

    changeLetters = cutWord.slice(0, 4) + "oo";
    alert(changeLetters);
}
easyLes();

let arr = [20, 33, 1, "Человек", 2, 3];
let sum = arr[0] ** 2 + arr[1] ** 2 + arr[2] ** 2 + arr[4] ** 2 + arr[5] ** 2;
let x = Math.sqrt(sum);
console.log(x);
alert(x)


function oneMoreFunction(a) {
    if ((typeof (a)) !== 'string') {
        alert("Переданный аргумент не является строкой");
    } else if (a.length > 50)
        a = a.substr(0, 50) + "...";
        alert(a.replace(/\s/g, ''));
}
oneMoreFunction("строка с пробелами и большим количествоим символов оллдр орлп пор оп орп о");