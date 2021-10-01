let n = 13;
document.write(n);
let str = "";
for (let i = 0; i < n; i++) {
  str += "|";
}
alert(n + str);
while (n > 0) {
  alert("Your turn!");
  let m = prompt("Get the matches!");
  if (isNaN(m) || m < 0 || m > 3) {
    break;
  }
  n -= m;
  let srt = " ";
  for (let i = 0; i < n; i++) {
    str += "|";
  }
  alert(n + str);
  if (n <= 0) {
    alert("You Win!");
    break;
  }
  alert("My turn!");
  let rand = Math.floor(Math.random() * 3) + 1;
  if (isNaN(m) || m < 0 || m > 3) {
    break;
  }
  alert(rand);
  n -= m;
  if (n <= 0) {
    alert("Computer win!");
    break;
  }
}