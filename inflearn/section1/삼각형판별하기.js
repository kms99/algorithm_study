// 삼각형 판별하기....
// 삼각형의 조건 가장 긴변이 나머지 두변의 합보다 작다.

function solution(a, b, c) {
  // (1) 전체 길이의 합
  const sum = a + b + c;
  // (2) 가장 긴 변
  const max = Math.max(a, b, c);
  // (3) 나머지 두변의 합
  const restSum = sum - max;
  // (4) 비교
  return restSum > max ? "YES" : "NO";
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
