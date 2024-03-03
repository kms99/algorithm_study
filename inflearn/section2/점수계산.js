/**
 * OX 문제가 주어진 시험
 * 연속된 문제를 맞추면 그 연속되는 수만큼 점수를 받는다.
 * 틀렸다 다시마추면 1부터 누적된다.
 * 틀린문제는 0점
 * 주어진 입력은 N개의 시험 결과이다. (1-> 정답, 0->오담)
 * 해당 시험의 점수를 반환하는 문제
 *
 * (1) 반복문 실행
 * (2) 로직 구현
 * (2-1) 반복문 내부에 변수선언 X => 외부다
 * (2-2) 맞으면 해당변수 ++ 후 total sum +=
 * (2-3) 틀리면 해당 변수 0 후 total sum +=
 */

function solution(arr) {
  let totalSum = 0;
  let point = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    if (!arr[i]) point = 0;
    else point++;

    totalSum += point;
  }

  return totalSum;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
