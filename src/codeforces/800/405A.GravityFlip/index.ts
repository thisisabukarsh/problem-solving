const gravityFlip = (n: number, boxs: number[]) => {
  boxs.sort();
  for (let i = 0; i < n; i++) {
    console.log(boxs[i]);
  }
};

// Example usage:

const n = 3;
const boxs = [2, 1, 3];
gravityFlip(n, boxs); // Output: 1 2 3

const n2 = 4;
const boxs2 = [1, 2, 3, 4];
gravityFlip(n2, boxs2); // Output: 1 2 4 3
