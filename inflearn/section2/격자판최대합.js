/**
 * N * N 의 격자판이 주어졌을 때
 * 각 가로 세로 대각선의 합 중 최대값을 출력
 *
 * 다음의 케이스를 모두 확인해봐야한다
 * (1) 가로
 * (2) 세로
 * (3) 대각선 (좌상-우하)
 * (4) 대각선 (우상-좌하)
 */

function solution(arr) {
  const n = arr.length;
  let max = 0;
  // (1) 각 가로 행 중 최댓값을 구하자
  max = Math.max(
    ...arr.map((innerArr) => innerArr.reduce((acc, value) => acc + value, 0))
  );

  // (2) 각 세로 열 중 최댓값을 구하자
  const colSumArray = new Array();
  for (let i = 0; i < n; i++) {
    let colSum = 0;
    for (let j = 0; j < n; j++) {
      colSum += arr[j][i];
    }
    colSumArray.push(colSum);
  }

  // (3) 대각선 중 최댓값을 구하자
  let crossLeftSum = 0;
  let crossRightSum = 0;
  for (let i = 0; i < n; i++) {
    crossLeftSum += arr[i][i];
    crossRightSum += arr[i][n - 1 - i];
  }

  max = Math.max(max, ...colSumArray, crossLeftSum, crossRightSum);

  return max;
}

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
