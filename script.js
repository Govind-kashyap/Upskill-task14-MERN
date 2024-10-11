
const divideNumbers = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("Error: Division by zero is not allowed.");
        } else {
            const result = num1 / num2;
            resolve(result);
        }
    });
};

const testDivision = async () => {
    const cases = [
        { num1: 10, num2: 2 },
        { num1: 10, num2: 0 },
        { num1: 20, num2: 4 },
        { num1: 15, num2: 3 },
        { num1: 7, num2: 0 },
    ];

    for (const { num1, num2 } of cases) {
        console.log(`Dividing ${num1} by ${num2}...`);
        try {
            const result = await divideNumbers(num1, num2);
            console.log(`Result: ${result}`);
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
};

testDivision();
