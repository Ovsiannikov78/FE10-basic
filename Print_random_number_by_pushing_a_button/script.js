/* let nodes = document.getElementsByTagName('button');
for (let i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', function Random(x) {
      const max = 10;
      return function () {
         console.log('Element # ' + x + ' with random number - ' + Math.round(Math.random() * max));   // Работает. Но элементы повторяются.
      }
   }(i));
} */

let nodes = document.getElementsByTagName('button');
for (let i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', function Random(x) {
      const max = 20;
      return function () {
         const uniqe = new Set();
         while (uniqe.size !== max) {
            uniqe.add(Math.floor(Math.random() * max) + 1);
         }
         console.log('Element # ' + x + ' with random number - ' + [...uniqe]);   /* Работает. Элементы не повторяются, но выводит все элементы коллекции.
                                                                                        Как обратиться к каждому эл. коллекции ?  */
      }
   }(i));
}






