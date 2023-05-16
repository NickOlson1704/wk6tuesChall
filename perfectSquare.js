function findNextPerfectSquare(n) {
    // Find the square root of n
    let sqrt = Math.sqrt(n);
    
    // Check if the square root is an integer
    if (Number.isInteger(sqrt)) {
      // Increment the square root by 1 and square it to find the next perfect square
      let nextSquare = Math.pow(sqrt + 1, 2);
      return nextSquare;
    } else {
      return -1;
    }
  }

  let number = 3000;
  let nextPerfectSquare = findNextPerfectSquare(number);
  console.log(nextPerfectSquare); 

//(9) 

//(289) 

//(3000) 

function findNextSquare(sq) {
    let number = Math.sqrt(sq);

    if(Math.round(number) === number) {
      return Math.pow(++number, 2)
    }

    return -1;
}

console.log(findNextSquare(289))
