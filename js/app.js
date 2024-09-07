function getResultOfTask1() {
    let user = {
        name: "Mariia",
        age: 25,
        location: "Paderborn",

        displayInfo: function () {
            console.log(`Name: ${this.name}`);
            console.log(`Age: ${this.age}`);
            console.log(`Place of residence: ${this.location}`);
        }
    };
    user.displayInfo();
}

function getResultOfTask2() {
    let numbers = [1, 2, 4, 3,258, 9,963, 5, 6, 7, 8, 9, 10];
    let evenNumbers = numbers.filter(function(number) {
        return number % 2 === 0;
    });
    console.log(evenNumbers);
}

