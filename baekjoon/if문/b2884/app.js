const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);

solution(input[0], input[1]);

function solution(H, M) {
  M -= 45; // 45분 일찍 알람 설정이기 때문에 45분을 빼줌. 단, M < 44 부터는 분이 음수값이 됨
  if (M < 0) {
    M += 60; // 분 음수값을 방지하기 위해 1시간을 빌려와 60분 더해줌
    H -= 1; // 빌려온 1시간을 빼줌. 단, 00시라면 `-1` 을 하게되면 시간도 음수값이 됨
  }
  if (H < 0) {
    H = 23; // 시간이 음수값을 가지게 될 경우의 수는 00시 밖에 없기 때문에 `H = -1` 이라면 00시에서 1시간을 뺀 23시에 해당됨
  }
  console.log(H, M);
}

//  빼기 할당 (-=) : 빼기 할당 연산자는 오른쪽 피연산자의 값을 변수에서 뺀 결과를 다시 변수에 할당한다.
//  let a = 2;
//  console.log( a -= 3);
//  expected output: -1
