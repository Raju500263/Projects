function InchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}

let Converter = InchToFeet(24);
console.log("Here is your result : ", Converter);