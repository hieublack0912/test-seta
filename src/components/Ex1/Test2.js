const sumOfIntegers = (array) => {
    if(!array.length) return console.log("Mảng không đủ để tính toán.");
    if(array.length === 1) return array[0];
    array.sort();
    const sum = array[array.length-2] + array[array.length-1];
    console.log(sum);
    return sum;
}

export default sumOfIntegers;