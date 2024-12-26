const obj1 = {
    person :'kim',
    weight : 73
}

const obj2 = {... obj};
obj2.weight = 75
console.log(obj1);
console.log(obj2);