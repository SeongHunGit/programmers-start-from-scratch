const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input = input.map((item) => +item);
  solution(input[0], input[1]);
  process.exit();
});

function solution(x, y) {
  let ans = 0;
  if (x > 0 && y > 0) {
    ans = 1;
  }
  if (x < 0 && y > 0) {
    ans = 2;
  }
  if (x < 0 && y < 0) {
    ans = 3;
  }
  if (x > 0 && y < 0) {
    ans = 4;
  }

  console.log(ans);
}

// 런타임 에러가 구현 코드 문제가 아닐수도 있다.
// fs.readFileSync, fs모듈로 안 풀린다면 검색을 해보자.
// 해당 문제는 readline으로 풀자.
// stdin, stdout은 표준 입력과 표준 출력을 뜻한다. 따라서 input.txt가 아닌 터미널을 통해 값을 입력해주자.
//  readFileSync으로 런타임 에러(EACCES)가 발생할 수 있으니 채점 시스템 문제도 확인해 보자.
