function showUsersTable(persons = []) {
    const sortedPersons = persons.sort(function (a, b) {
        return a.age - b.age;
    });

    
    let averageAge = 0;
    let minAge = persons[0].age;
    let maxAge = persons[0].age;
    let innerHtmlTableBody = '';
    for (let i = 0; i < persons.length; i++) {
        innerHtmlTableBody += '<tr><td>' + sortedPersons[i].name + '</td><td>' + sortedPersons[i].age + '</td></tr>';
        averageAge += + sortedPersons[i].age;
        if (persons[i].age > maxAge)
            maxAge = persons[i].age;
        if (persons[i].age < minAge) 
            minAge = persons[i].age;
    }
    averageAge /= persons.length;

    document.getElementsByTagName('tbody')[0].innerHTML = innerHtmlTableBody;
    document.querySelector('tfoot div.alert').innerHTML = 'Average age: ' + averageAge + ' Min age: ' + minAge + ' Max age: ' + maxAge;
}

let persons = [];

<<<<<<< HEAD
for (let i = 0; i < personsNumber; i++) {
    setTimeout(function () {
        const person = {};
        person.firstName = prompt('Please enter First Name of the ' + (i + 1) + ' person');
        person.lastName = prompt('Please enter Last Name of the ' + (i + 1) + ' person');
        person.age = prompt('Please enter age of the ' + (i + 1) + 'person');
        persons[i] = person;

        showUsersTable(persons);
    }, 500)
}









 
=======
const form$ = document.getElementsByTagName('form')[0];
form$.addEventListener('submit', function(event) {
    event.preventDefault();

    let person = {};
    person.name = document.querySelector('input[name=name]').value;
    person.age = document.querySelector('input[name=age]').value;

    persons.push(person);

    showUsersTable(persons);
})
>>>>>>> 77547d988f331762f2faf1023fbf6b017ea018e1
