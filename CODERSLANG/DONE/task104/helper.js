const toLowerCase = (s) => {
  return s.toLowerCase();
}

const toUpperCase = (s) => {
  return s.toUpperCase();
}

export const createSamples = (s) => {
  s = toLowerCase(s) + toUpperCase(s)
  return s ;
}