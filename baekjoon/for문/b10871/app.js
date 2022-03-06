const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const [inputN, inputX] = input[0].split(" ").map((item) => +item);
const arrayA = input[1].split(" ").map((item) => +item);
solution(inputN, inputX, arrayA);
function solution(N, X, A) {
  const answerArray = [];
  for (let i = 0; i < N; ++i) {
    if (A[i] < X) {
      answerArray.push(A[i]);
    }
  }
  console.log(answerArray.join(" "));
}

//  N : 수열을 이루는 정수들
//  X : 기준점 정수
//  A : 수열

//  1. answerArray라는 빈 배열을 생성한다.
//  2. for문은 입력받은 정수 개수만큼 반복한다.
//  3. 만약 수열 중에서 X보다 작다면 answerArray에 추가한다.
