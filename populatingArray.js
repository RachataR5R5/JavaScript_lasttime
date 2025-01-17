let arr1 = ["A", true, 2];  // สร้างอาร์เรย์ arr1 ที่มีสมาชิก "A", true, และ 2

console.log("\n********Length and index********\n");

// พยายามเข้าถึงคุณสมบัติ Length ซึ่งไม่ถูกต้อง (จะต้องใช้ "length" ตัว 'l' เล็ก)
console.log(arr1.Length); // ผลลัพธ์ที่ได้คือ undefined เพราะชื่อคุณสมบัติผิดพลาด

// เข้าถึงสมาชิกในตำแหน่งที่ 3 ซึ่งไม่ได้กำหนดค่าไว้ในอาร์เรย์ arr1
console.log(arr1[3]); // ผลลัพธ์ที่ได้คือ undefined เพราะตำแหน่งที่ 3 ไม่มีค่า

// เข้าถึงสมาชิกในตำแหน่งที่ 2 ของ arr1 ซึ่งเป็นตัวเลข 2
console.log(arr1[2]); // ผลลัพธ์ที่ได้คือ 2 เพราะมันคือสมาชิกที่ตำแหน่ง 2

// เข้าถึงสมาชิกสุดท้ายของ arr1 โดยใช้การคำนวณตำแหน่งสุดท้าย (arr1.length - 1)
console.log(arr1[arr1.length - 1]);  // ผลลัพธ์ที่ได้คือ 2 เพราะสมาชิกสุดท้ายคือ 2

console.log("\n********Length and index Part 2********\n");

// สร้างอาร์เรย์ arr3 ที่มีขนาด 3 โดยสมาชิกเริ่มต้นทั้งหมดเป็น undefined
let arr3 = Array(3);  // สร้างอาร์เรย์ที่มีขนาด 3 แต่ยังไม่มีสมาชิกที่กำหนดค่า

// กำหนดค่า "Adding a value" ให้กับสมาชิกที่ตำแหน่ง 2 ของ arr3
arr3[2] = "Adding a value";  // กำหนดค่าที่ตำแหน่ง 2

// แสดงผลค่าที่ตำแหน่ง 2 ของ arr3 ซึ่งตอนนี้มีค่าเป็น "Adding a value"
console.log(arr3[2]); // ผลลัพธ์ที่ได้คือ "Adding a value"

console.log(arr3[arr3.length - 1]); // ผลลัพธ์ที่ได้คือ "Adding a value" เนื่องจากตำแหน่งสุดท้ายคือ 2

// แสดงผลค่าที่ตำแหน่ง 0 ของ arr3 ซึ่งยังไม่ได้กำหนดค่า (ค่าเริ่มต้นคือ undefined)
console.log(arr3[0]); // ผลลัพธ์ที่ได้คือ undefined เพราะไม่ได้กำหนดค่าให้ตำแหน่ง 0

// แสดงผลค่าที่ตำแหน่ง 1 ของ arr3 ซึ่งยังไม่ได้กำหนดค่า (ค่าเริ่มต้นคือ undefined)
console.log(arr3[1]); // ผลลัพธ์ที่ได้คือ undefined เพราะไม่ได้กำหนดค่าให้ตำแหน่ง 1
