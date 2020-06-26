const colors = ['white', 'red', 'green', 'blue'];
//                 0       1       2        3  


function createEventListener(i) {
    let currentColor = 0;
    return function() {
        currentColor++;
        console.log("Click on " + i + " paragraph, currentColor = " + currentColor);
        if(i%2 === 0){
            this.style['color'] = colors[currentColor % colors.length];
        }else{
            this.style['backround-color'] = colors[currentColor % colors.length];
        }
    }
}

document.querySelectorAll('p').forEach(function(element, i) {
    console.log(i);
    element.addEventListener('click', createEventListener(i));
})

