//Heap's Algorithm
//Heap's Algorithm is one way to get all the permutations. 

// N=2 gives us 2 permutations
// N=3 gives us 6 mermutations
// N gives us ??? permutations?
// N=4 => 4*3*2*1 = 24


const getPermutations = arr => {
  const output = [];

  const swapInPlace = (arrToSwap, indexA, indexB) => {
    const temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB]
    arrToSwap[indexB] = temp;
  };

  const generate = (n, heapArr) => {
    if (n === 1) {
      output.push(heapArr.slice)
      return;
    } 

    generate(n - 1, heapArr);
    
    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapInPlace(heatpArry, i, n - 1);
      } else {
        swatInPlace(heapArr, 0, n - 1);
      }
      generate(n - 1, heapArr);
    }
  };
  generate(arr.length, arr.slice())

  return output;
}

console.log(getPermutations([1,2]))