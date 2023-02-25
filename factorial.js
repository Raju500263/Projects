function factorial(number) {
    let factLogic = 1;
    for (let i = number; i >= 1; i--) {
        factLogic = factLogic * i;

    }
    console.log("Here is your result : ", factLogic);


}

const Num = 5;
factorial(Num);
