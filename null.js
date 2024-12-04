function getVowels(str) {
    const m = str.match(/[aeiou]/gi); // หาสละที่เราตั้งไว้ aeiou 
    console.log(m) // จะเอาสละที่หาออกมา คือ eei
    if (m === null) {
        return 0;
    }
    return m.length;
}

console.log(getVowels("seeing i hear you")); // จะได้ eei
