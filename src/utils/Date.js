export function formatDate(date) {
  const parsed = date ? new Date(date) : new Date();
  const day = parsed.getDate();
  const month = parsed.getMonth() + 1;
  const year = parsed.getFullYear();
  return `${day}-${month >= 10 ? month : "0" + month}-${year}`;
}
