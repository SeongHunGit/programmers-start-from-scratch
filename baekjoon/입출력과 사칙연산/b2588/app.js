const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input.map((item) => +item);
solution(input[0], input[1]);

function solution(A, B) {
  const stringB = String(B); // 385 -> ['3', '8', '5']
  const units = +stringB[2]; // 일의자리
  const tens = +stringB[1]; // 십의자리
  const hundreds = +stringB[0]; // 백의자리

  console.log(A * units);
  console.log(A * tens);
  console.log(A * hundreds);
  console.log(A * B);
}

// +stringB === Number(stringB)
