function findWaldo(arr, found) {
  arr.forEach(function(name,index) {
    if (name === "Waldo") {
      found(index);   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found Waldo at Index " + index + "!" ) ;
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);