export function formatNumberToPersian(number: number): string { 
  const rounded = Math.round(number); 
  return rounded
    .toString()
    .replace(/\d/g, (digit) => String.fromCharCode(digit.charCodeAt(0) + 1728));
}
