const colors = ['white', 'red', 'green', 'blue'];
//                 0       1       2        3  

function eventListener(element) {
    let currentColor = 0;
    return function () {
        currentColor++;
        return element.style['background-color'] = colors[currentColor % colors.length];
    }
}
document.querySelectorAll('p').forEach(function (element) {
    element.addEventListener('click', eventListener(element));
})



/* let currentColor = 0;
document.querySelectorAll('p').forEach(function(element) {
    element.addEventListener('click', function() {
        currentColor++;
        this.style['background-color'] = colors[currentColor % colors.length];

    });
})

 */









