// Put your code here
console.log("Let's roll some dice, baby!")
console.log("---------------------------")

for (i = 0; i < 10; i++) {
    let die1 = Roll();
    let die2 = Roll();

    let message = `${die1} + ${die2} == ${die1.value + die2.value}`;
    if (die1.value == die2.value) {
        message = + "Doubles!";
    }
    console.log(message)
}

function Roll() {
    const min = Math.ceil(1)
    const max = Math.floor(6)
    const dieValue = Math.floor(Math.random() * (max - min + 1) + min);
    const die = {
        value: dieValue,
        toString: () => {
            let dieString = "Unkown";

            switch (dieValue) {
                case 1:
                    dieString = "one";
                    break;
                case 2:
                    dieString = "two";
                    break;
                case 3:
                    dieString = "three";
                    break;
                case 4:
                    dieString = "four";
                    break;
                case 5:
                    dieString = "five";
                    break;
                case 6:
                    dieString = "six";
                    break;
            }
            return dieString;
        }
    }
    return die;
}




