let str = "hello"; // กำหนดตัวแปร str เป็น string "hello"

let iterator = str[Symbol.iterator](); // ใช้ Symbol.iterator สร้าง iterator สำหรับ string str

while (true) { // ใช้ลูป while แบบไม่จำกัดเพื่อวนลูปตัวอักษรทีละตัว
    let result = iterator.next(); // เรียกใช้ next() เพื่อดึงค่าตัวถัดไปจาก iterator
    if (result.done) break; // ถ้า result.done เป็น true หมายถึง iterator ไปถึงจุดสิ้นสุดแล้ว ให้หยุดลูป
    console.log(result.value); // แสดงค่าที่ได้จาก iterator
}
