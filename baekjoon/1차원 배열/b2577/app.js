const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const items = input.map((item) => +item);
solution(items);

function solution(items) {
  const num = items[0] * items[1] * items[2];
  const strNum = String(num);
  const answer = Array(10).fill(0);
  for (let i = 0; i < strNum.length; ++i) {
    const nowChar = +strNum[i];
    answer[nowChar]++;
  }
  for (let i = 0; i < answer.length; ++i) {
    console.log(answer[i]);
  }
}

//  100 <= A, B, C > 1000

//  fill() 메서드는 배열의 시작 인덱스부터 끝나는 인덱스의 이전까지 value값으로 채워주는 함수다.
//    value: 배열에 채울 값을 지정한다.
//    start index: value 값을 채울 배열의 시작 index다. (기본값: 0)
//    end index: value 값을 채울 배열의 종료 index다. (기본값 arr.length)
