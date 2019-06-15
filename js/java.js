function random(number) {
    return Math.ceil(Math.random() * number);
}

const number = random(100);

let user = prompt("Как вас зовут?");

while (user == '' || user == null) {
    user = prompt("Пожалуйста, введите свое имя.");
}

alert("Привет, " + user + "! Ты должен угадать число от 1 до 100 за наименьшее количество раз. После каждой попытки я буду давать тебе подсказки 'много', 'мало' или 'угадал'. ");

let guess = prompt("Введите число.");

let numberOfGuesses = 0;

while (guess == '' || guess == null) {
    guess = prompt("Пожалуйста, введите число.");
}

while (guess != number) {
    if (guess > number) {
        guess = prompt("Много, попробуйте еще разок.");
        numberOfGuesses = numberOfGuesses + 1;
    }

    if (guess < number) {
        guess = prompt("Мало, попробуйте еще разок.");
        numberOfGuesses = numberOfGuesses + 1;
    }
}

if (guess == number) {
    alert("Молодец ты угадал число " + number + ". За " + numberOfGuesses + " попыток.");
}