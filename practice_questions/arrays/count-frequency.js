function countFrequency(arr) {
    const freq = {};
    arr.forEach(element => {
        if(freq[element]) {
            freq[element]++;
        }else {
            freq[element] = 1;
        }
    });
    return freq;
}
const arr = [1, 4, 6, 4, 5, 1, 4, 6, 6, 6];
const freq = countFrequency(arr);
for(let i of Object.keys(freq)) {
    console.log(`${i} occurs ${freq[i]} times`);
}
