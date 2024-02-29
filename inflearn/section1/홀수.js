/**
 * 총 7개의 자연수로 이루어진 배열 입력
 * 이떄 홀수만 골라 합을 구한다.
 * 추가로 가장 작은 홀수를 구한다.
 * 1. 먼저 sort를 진행해 (오름차순)
 * 2. 반복문을 한번 돌릴거야
 * 3. 이때 answer이라는 변수에 홀수의 합을 계산하고
 * 4. answer가 0일 때 최초 더해지는 수는 홀수의 최솟값이겠지?
 */

function solution(arr) {
  //(1) 필요 변수 선언
  let min = 0;
  let sum = 0;

  //(2) 오름차순 정렬
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    // 짝수면 다음 반복으로
    if (!(arr[i] % 2)) continue;

    // 홀수일 때
    // 누적 합이 진행되지 않았을 때 최초 값은 최소값
    if (!sum) min = arr[i];
    // 누적 합 진행
    sum += arr[i];
  }

  return `${sum}\n${min}`;
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
