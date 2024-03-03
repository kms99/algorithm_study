/**
 * 상하좌우 보다 큰 부분이 있다면 해당부분이 봉우리지역
 * 가장자리는 모두 0으로 판단
 * 모든 요소를 다 확인하자..
 */

function solution(arr) {
  const n = arr.length;
  let answerCount = 0;

  //(1) 모든 행 조사
  for (let i = 0; i < n; i++) {
    //(2) 각 행의 모든 요소 확인
    for (let j = 0; j < n; j++) {
      //(3) 확인 로직
      const top = i === 0 ? 0 : arr[i - 1][j];
      const right = j === n - 1 ? 0 : arr[i][j + 1];
      const bottom = i === n - 1 ? 0 : arr[i + 1][j];
      const left = j === 0 ? 0 : arr[i][j - 1];

      if (
        top < arr[i][j] &&
        right < arr[i][j] &&
        bottom < arr[i][j] &&
        left < arr[i][j]
      ) {
        answerCount++;
      }
    }
  }
  return answerCount;
}

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
