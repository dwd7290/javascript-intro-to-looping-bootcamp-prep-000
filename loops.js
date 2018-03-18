function forLoop(array) {
    for (let i = 0; i < 25; i++) {
<<<<<<< HEAD
        if (i <= 1) {
          array[i] = 'I am 1 strange loop.';
        } else if (i > 1) {
          array[i] = `I am ${i} strange loops.`;
=======
        if (i === 1) {
          array[i] = 'I am 1 strange loop.';
        } else if (i > 1) {
          array[i] = `I am ${i} strange loop.`;
>>>>>>> 370193bdb257fafd0a73edeffccd52ba6ee44f94
        }
      }
    return array;
}

function whileLoop(number) {
  while (number > 0) {
    console.log(number);
    number--;
  }
  return "done";
}

function doWhileLoop(array) {
  
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
<<<<<<< HEAD
  do {
    array = array.slice(0, array.length - 1);  
  } while (array.length > 0 || maybeTrue() === false);
  return array;
}

=======
  
  do {
    array.slice(0, array.length - 1);  
  } while (array.length > 0 || maybeTrue() === false);
  
  return array;
}
>>>>>>> 370193bdb257fafd0a73edeffccd52ba6ee44f94
