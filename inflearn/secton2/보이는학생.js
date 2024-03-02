/**
 * N명의 학생을 학생을 1열로 세웠다.
 * 맨 앞에서 보았을 때 보이는 학생의 수는?
 * 최초 1 포함 최댓값이 갱신되는 횟수...
 *
 * 갱신되는 횟수를 체크할 변수 선언
 * max 값을 담을 변수 선언
 * 반복문 실행
 */

function solution(arr) {
  let count = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      count++;
    }
  }

  return count;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
