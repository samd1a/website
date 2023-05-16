function calculateDifference(a, b) {
  const dateA = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const dateB = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return (dateB - dateA) / 86400000;
}
const dateA = new Date("2006-06-20");
const dateB = new Date();
const difference = (calculateDifference(dateA, dateB) / 365).toFixed(5);
document.getElementById('age').innerHTML = difference.toString();

// adapted from
// https://stackoverflow.com/a/15289883