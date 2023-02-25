// function getSumOfArray(number) {
//     let sum = 0;

//     for (let i = 0; i < number.length; i++) {
//         const index = i;
//         const element = number[index];
//         sum = sum + element;
//         console.log(element, sum);
//     }
// }

// let arrays = [22, 33, 54, 66, 34, 75];
// getSumOfArray(arrays);

// function getSumOfArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         let index = i;
//         let element = numbers[index];
//         sum = sum + element;
//         console.log(index, element, sum);
//     }

// }

// let SomeArrays = [33, 44, 55, 23, 53, 234, 35];
// getSumOfArray(SomeArrays);



function SumOfArray(floatNum) {
    let sum = 0;
    for (let i = 0; i < floatNum.length; i++) {
        let index = i;
        let element = floatNum[index];
        sum = sum + element;
        console.log(index, element, sum);

    }
}

let floatNumbers = [55.56, 74.77, 84.53, 5.55, 58.55, 9.43];
SumOfArray(floatNumbers);








