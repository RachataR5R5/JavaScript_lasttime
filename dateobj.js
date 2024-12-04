const start = Date.now();

console.log('starting timer...');

serTimeout(() => {
    const millis =  Date.now() - start;
    console.log( second elapsed = ${Math.floor(millis / 100)} );
}, 2000);