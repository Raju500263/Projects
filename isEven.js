function IsEven(number) {
    let remainder = number % 2;

    if (remainder === 0) {
        console.log("Your number is Even ");
        return true;
    }
    else {
        console.log("Your number is Odd");
        return false;
    }


}

let Converter = IsEven(88);
console.log(Converter);
