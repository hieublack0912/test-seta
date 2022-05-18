const convertListString = (list) => {
    if(!list.length) return console.log("Mảng không có phần tử.");
    const listStringData = [];
    const listNumber = [];
    list.map(item => {
        return listNumber.push(item.length);
    })
    listNumber.sort();
    let max = [0,0]
    let count =1;
    for (let i = listNumber.length-1; i > 0; --i) {
        if (listNumber[i] === listNumber[i-1]) ++count;
        else{
             if (max[1] < count){
                  max[0] = listNumber[i];
                  max[1] = count;   
             }
             count = 1;
        }
    }
    list.map(item => {
        if(item.length === max[0]) listStringData.push(item);
        return undefined;
    })
    console.log(listStringData);
    return listStringData;
}
export default convertListString;
