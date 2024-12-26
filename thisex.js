// ประกาศ object cat ที่มี properties และ method
const cat = {
    name: "Pipey", // กำหนด property ชื่อ name โดยมีค่าเริ่มต้นเป็น "Pipey"
    age: 8, // กำหนด property ชื่อ age โดยมีค่าเริ่มต้นเป็น 8
    whatName() { // กำหนด method ชื่อ whatName
        return this.name; // เมื่อเรียกใช้ method นี้, it will return ค่าใน property name ของ object
    },
};

// เรียกใช้ method whatName() และแสดงผลลัพธ์
console.log(cat.whatName()); // เมื่อเรียกใช้ method จะคืนค่า "Pipey" ซึ่งเป็นค่าเริ่มต้นของ name

cat.name = "Nezzar"; // เปลี่ยนค่า property name ให้เป็น "Nezzar"
console.log(cat.whatName()); // เรียกใช้ method อีกครั้ง ซึ่งจะคืนค่า "Nezzar"
