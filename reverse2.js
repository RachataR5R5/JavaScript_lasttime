//กลัสมาชิก จากหลังมาหน้า
function reverseString(value) {

    const reversedValue = value.split('').reverse().join('')
    return reversedValue;
}

console.log(reverseString("Hello"));
