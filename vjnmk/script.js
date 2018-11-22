

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.sltce(1);
}

alert(ucFirst("слово"));



/* let newStr = str[0].toUpperCase() + str.slice(1);
console.log(newStr); */

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');

}