const a = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
];
let uno = [];
let zero = [];
let tmo = [];

for (let i = 0; i < a[0].length; i++) {
  for (j of a) {
    j.charAt([i]) == 1 ? uno.push(j) : zero.push(j);
  }
  if (uno.length < zero.length) {
    tmp.push(uno);
    uno = [];
    if (tmp[i].charAt(i) == 1) {
      uno.push(tmp);
      console.log(uno);
    }
  }
}
