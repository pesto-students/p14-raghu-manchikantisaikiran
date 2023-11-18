function drawTriangle(triangleSize) {

   // Your solution goes here
   for (let i = 1; i <= triangleSize; i++) {
      let str = '';
      for (let j = 1; j <= i; j++) {
         str += '*'
      }
      console.log(str)
   }
}