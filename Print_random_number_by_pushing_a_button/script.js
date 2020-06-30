let nodes = document.getElementsByTagName('button');
for (let i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', function Random(x) {
      const max = 10;
      return function () {
         const unique = new Set();
         unique.add(Math.floor(Math.random() * max) + 1);
         let num = unique.values();
         console.log('Element # ' + x + ' with random number - ' + (num.next().value));  
      }                                                                                  
   }(i))
}