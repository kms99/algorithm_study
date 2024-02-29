/**
 * 총 7개의 수로 이루어진 배열이 들어왔을 떄 가장 작은 수 구하기
 * ez 하게 Math.min쓰자
 * 이 떄 포인트는 Math.min에는 배열이아닌 숫자 단독으로 쓰여야한다는 것!
 * 간단하게 스프레드 문법으로 해결가능
 */

function solution(arr) {
  return Math.min(...arr);
}

console.log(solution([5, 3, 7, 11, 2, 15, 17]));
