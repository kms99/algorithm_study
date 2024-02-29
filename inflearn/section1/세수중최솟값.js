// 본 문제는 세 수 중 최솟값을 찾는 문제이다.
// 정렬 없이 문제 풀이가 필요하다.

// 적절한 자바스크립트 메서드인 Math.min을 사용한다면 쉽게 값을 구할 수 있을 것 같다.
// 이때 만약 3개의 수가 아니라면?, argument를 사용한다면 모든 수를 기준으로 할 수 있을 것 같다.

// (1) 본 풀이
function solution1(a, b, c) {
  return Math.min(a, b, c);
}
console.log(solution1(6, 5, 11));

// (2) 만약 개수를 정해놓지 않았다면을 고려해보자!
// 유사배열객체인 arguments를 이용하여 풀어보자
function solution2() {
  // 유사 배열 객체를 배열로 Array.from
  return Math.min(...Array.from(arguments));
}

console.log(solution2(6, 5, 11));

function solution3(...args) {
  return Math.min(...args);
}

console.log(solution3(6, 5, 11));
