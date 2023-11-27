export const lte = (x, y) => {
  if (x <= y) {
    return `${x} is less than or equal to ${y}`;
  } else if(x >= y){
    return `${x} is NOT less than or equal to ${y}`;
  }
}