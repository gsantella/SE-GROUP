const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
}

const averageThreeNumbers = (num1, num2, num3) => {
    var avg = 0;

    avg = (num1+num2+num3) / 3
    return avg;
}

module.exports = {
    addTwoNumbers,
    averageThreeNumbers
}