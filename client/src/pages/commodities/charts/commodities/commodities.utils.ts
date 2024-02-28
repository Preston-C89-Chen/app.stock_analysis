const processData = (data) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const closePrices = new Array(12).fill(0);
  const counts = new Array(12).fill(0); // To calculate average if needed

  data.forEach(item => {
    const date = new Date(item.date);
    const month = date.getMonth();
    closePrices[month] += item.close; // Summing up close prices
    counts[month] += 1; // Counting entries per month
  });

  // Calculating average close price per month
  const avgClosePrices = closePrices.map((total, idx) => counts[idx] ? total / counts[idx] : 0);

  return { months, avgClosePrices };
};
