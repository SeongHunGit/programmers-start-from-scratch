const fs = require("fs");
const { connect } = require("http2");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(+input[0]);
function solution(num) {
  // Write your code
  if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
    console.log(1);
    return;
  }
  console.log(0);
}

// else를 쓰는게 코드를 복잡하게 만들수도 있다.
// 따라서 if 조건에 맞는다면 return을 통해 바로 프로그램 종료를 시킬수도 있다.
