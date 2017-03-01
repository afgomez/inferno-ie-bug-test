export default function debug(msg) {
  const d = new Date();
  console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${d.getMilliseconds()}`, msg);
}
