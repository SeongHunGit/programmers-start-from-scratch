const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const testCaseArray = [];
for (let i = 1; i <= +input[0]; ++i) {
  const tempValue = input[i].split(" ").map((item) => +item); // 공백을 split() -> map()으로 숫자로 만들어줌.
  testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}
solution(+input[0], testCaseArray);

function solution(T, testcaseArray) {
  for (let i = 0; i < T; ++i) {
    const { A, B } = testcaseArray[i]; // 구조 분해 할당
    console.log(`Case #${i + 1}: ${A + B}`);
  }
}

// split("\n")을 통해 맨 처음 문자열이 들어오면 첫 번째 값은 첫째 줄에 테스트 케이스의 개수 T인 '5'가 나온다.
// testcaseArray에는 input[1] 부터 input[5] 까지가 들어가게 된다.
