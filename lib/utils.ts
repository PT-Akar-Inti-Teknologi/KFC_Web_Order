import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumberToRupiah(number: number): string {
  // Check if the input number is valid
  if (isNaN(number) || number === null) {
    return "Rp0"; // or any default value you prefer
  }

  // Convert the number to an integer to remove the decimal part
  let integerPart = Math.floor(number).toString();

  // Reverse the integer part to ease the insertion of dots
  integerPart = integerPart.split('').reverse().join('');

  // Add dots every 3 digits
  let formatted = '';
  for (let i = 0; i < integerPart.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      formatted += '.';
    }
    formatted += integerPart[i];
  }

  // Reverse back the formatted integer part
  formatted = formatted.split('').reverse().join('');

  // Add the prefix "Rp" and return the formatted number as Rupiah currency
  return 'Rp' + formatted;
}