import resolveConfig from 'tailwindcss/resolveConfig';

export const tailwindConfig = () => {
  // Tailwind config
  return resolveConfig('./src/css/tailwind.config.js')
}

export const hexToRGB = (h) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};

export const formatValue = (value) => Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: 3,
  notation: 'compact',
}).format(value);

export const getMonthlyDates = (setYear,setMonth) => {
  const today = new Date();
  const year = setYear || today.getFullYear();
  const month = setMonth || today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const datesArray = [];
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const formattedDate = date.toISOString().split('T')[0];
    datesArray.push(formattedDate);
  }
  return datesArray;
}
