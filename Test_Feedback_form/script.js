function showUsersTable(persons = []) {

    let numberOfTheRecord = 0;

    let innerHtmlTableBody = '';
    for (let i = 0; i < persons.length; i++) {
        innerHtmlTableBody += '<tr><td>' + persons[i].name + '</td><td>' + persons[i].email + '</td><td>' + persons[i].dateOfAddedFeedback + '</td></tr>';
        numberOfTheRecord++
    }
    document.getElementsByTagName('tbody')[0].innerHTML = innerHtmlTableBody;
    document.querySelector('tfoot div.alert').innerHTML = 'Number of of the record: ' + numberOfTheRecord;
}
function dateOfAddedFeedback() {
    let d = new Date();
    let n = d.toLocaleString();
    document.getElementById("date").innerHTML = n;
}

let persons = [];

const form$ = document.getElementsByTagName('form')[0];
form$.addEventListener('submit', function (event) {
    event.preventDefault();

    let person = {};
    person.name = document.querySelector('input[name=name]').value;
    person.email = document.querySelector('input[name=email]').value;
   /*  если раскоментировать нижнюю строку , добавляется дата в колонку Date of added feedback, но больше ничего не добавляется.
       Не совсем понимаю , что происходит и в чём ошибка.  */
    
       //person.dateOfAddedFeedback = document.getElementById("date").innerHTML   

    persons.push(person);

    showUsersTable(persons);

})


