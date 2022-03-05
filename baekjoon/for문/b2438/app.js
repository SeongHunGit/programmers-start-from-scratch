const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(+input[0]);

function solution(N) {
  // 별(*)
  for (let line = 1; line <= N; ++line) {
    const starCnt = line;
    let printString = "";
    for (let i = 0; i < starCnt; ++i) {
      printString += "*";
    }
    console.log(printString);
  }
}

//  [바깥 for문]
//  line은 1부터 시작해 입력받은 N만큼 반복할 것이다.
//  line을 `const starCnt`에 할당해준다.
//  printString에는 빈 문자열을 먼저 할당한다.

//  [안쪽 for문]
//  0으로 시작해 starCnt보다 작을 경우 반복할 것이다.
//  반복할 때마다 printString에는 "*"이 한개씩 추가된다.
