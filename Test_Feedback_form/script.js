function showUsersTable(fields = []) {

    let numberOfTheRecord = 0;

    let innerHtmlTableBody = '';
    for (let i = 0; i < fields.length; i++) {
        innerHtmlTableBody += '<tr><td>' + fields[i].name + '</td><td>' + fields[i].email + '</td><td>' + fields[i].dateOfAddedFeedback + '</td></tr>';
        numberOfTheRecord++
    }
    document.getElementsByTagName('tbody')[0].innerHTML = innerHtmlTableBody;
    document.querySelector('tfoot div.alert').innerHTML = 'Number of of the record: ' + numberOfTheRecord;
}
function dateOfAddedFeedback() {
    let d = new Date();
    let n = d.toLocaleString();
    document.getElementById('date').innerHTML = n;
}

let fields = [];

const form$ = document.getElementsByTagName('form')[0];
form$.addEventListener('submit', function (event) {
    event.preventDefault();

    let field = {};
    field.name = document.querySelector('input[name=name]').value;
    field.email = document.querySelector('input[name=email]').value;
    field.dateOfAddedFeedback = document.querySelector('button').addEventListener('click', dateOfAddedFeedback());

    //field.dateOfAddedFeedback = document.getElementById('date').innerHTML;

    fields.push(field);

    showUsersTable(fields);

})





