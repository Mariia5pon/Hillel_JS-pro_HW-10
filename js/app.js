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

function getResultOfTask3() {
    let contactBook = {
        contacts: [
            { name: "Anna", phone: "067-123-4567", email: "anna@gmail.com" },
            { name: "Marina", phone: "098-123-4567", email: "marina@gmail.com" }
        ],

        findContactByName: function(name) {
            return this.contacts.find(function(contact) {
                return contact.name === name;
            });
        },

        addNewContact: function(name, phone, email) {
            this.contacts.push({ name: name, phone: phone, email: email });
        }
    };

    contactBook.addNewContact("Mariia", "095-123-4567", "mariia@gmail.com");

    let contact = contactBook.findContactByName("Marina");
    console.log(contact);
    console.log(contactBook.contacts);
}