function canDivideWatermelon(w: number): string {
  if (w % 2 === 0 && w > 2) {
    return "YES";
  } else {
    return "NO";
  }
}

// Example usage:
const weight = 8;
console.log(canDivideWatermelon(weight)); // Output: YES
