export default function formatYear({ value }) {
  const year = value.toString().match(/^\d{4}$/)
    ? value
    : new Date(value).getFullYear();
  return year;
}
