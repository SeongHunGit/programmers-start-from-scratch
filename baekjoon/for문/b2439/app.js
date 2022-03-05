const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(+input[0]);

function solution(N) {
  // 별(*)
  for (let line = 1; line <= N; ++line) {
    const starCnt = line;
    const spaceCnt = N - line;
    let printString = "";
    for (let i = 0; i < spaceCnt; ++i) {
      printString += " ";
    }
    for (let i = 0; i < starCnt; ++i) {
      printString += "*";
    }
    console.log(printString);
  }
}

//  1. starCnt는 line만큼 "*"을 출력해야 되기 때문에 line을 할당해준다.
//  2. spaceCnt는 입력받은 N에서 line만큼 빼서 공백을 출력해야 된다.
//     예를 들어서 5를 입력받았으면 마지막 5번째 라인에는 공백이 없어야 되기 때문이다. 5(N) - 5(line) = 0(spaceCnt)
//  3. " " && "*" 을 그려주는 안쪽 for문을 작성해준다.
