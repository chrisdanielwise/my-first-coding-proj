export const allTheSame = (x, y, z) => {
  if((x == y && x == z && y == z)) return true;
  else if((x != y && x != z && y != z)) return true;
  else return false; 
}