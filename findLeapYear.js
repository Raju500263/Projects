
function findLeapYear(numbers) {
    let LeapYears = [];
    for (let i = 0; i < numbers.length; i++) {
        let index = i;
        let element = numbers[index];
        // console.log(index, element);

        if (element % 4 == 0) {
            LeapYears.push(element);
        }

    }
    return LeapYears;
}



let years = [2023, 2024, 2025, 2028, 2030, 2031, 2032];
let findedYears = findLeapYear(years);
console.log("Here is your Years arrays : ", findedYears);
