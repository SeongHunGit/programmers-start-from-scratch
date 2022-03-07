const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const arrayLength = +input[0];
const items = input[1].split(" ").map((item) => +item);
solution(arrayLength, items);

function solution(arrayLength, items) {
  let min = 1000001;
  let max = -1000001;
  //  모든 정수는 -1,000,000보다 크거나 같고 1,000,000보다 작거나 같은 정수이다.
  for (let i = 0; i < arrayLength; ++i) {
    item = items[i];
    if (min > item) {
      min = item;
    }
    if (max < item) {
      max = item;
    }
  }
  console.log(`${min} ${max}`);
}
//  split 메서드를 사용하여 줄(\n)을 기준으로 입력값을 나누었다면
//  이번에는 split 메서드를 한번 더 사용하여 공백(" ")을 기준으로 한번 더 나누어 주어야 한다.
