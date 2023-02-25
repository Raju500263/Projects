// function findOddSum(numbers) {
//     let sum = 0;
//     let OddNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         let element = numbers[index];


//         if (element % 2 !== 0) {
//             // console.log(index, element);
//             OddNumbers.push(element);
//             sum = sum + element;
//         }

//     }

//     return sum;
// }

// let Mynumbers = [44, 76, 23, 56, 85, 12, 21, 45, 74, 88, 73, 79];
// let oddNum = findOddSum(Mynumbers);
// console.log('Here is your odd numbers sum : ', oddNum);


function isEvenNumber(numbers) {
    let Even_number = [];
    let sumEven = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        let element = numbers[index];
        // console.log(index, element);

        if (element % 2 === 0) {
            // console.log(index, element);
            Even_number.push(element);
            // console.log(element);
            sumEven = sumEven + element;

        }

    }

    console.log('Here is your Even number arrays : ', Even_number);
    console.log('Even Number Sum : ', sumEven);

}

let someArrays = [22, 33, 32, 44, 55, 43, 212, 36, 37, 88];
isEvenNumber(someArrays);

