function isLeapYear(Year) {
    let leaplogic = Year % 4;
    if (leaplogic === 0) {
        return true;
    }
    else {
        return false;
    }

}
let logic = isLeapYear(1920);
console.log(logic);
