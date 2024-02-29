/**
 * 문자열과 특정 문자를 입력받는다
 * 이때 특정 문자열의 개수를 출력하는 문제이다.
 *
 * 단순 반복문 문제로 판단된다
 * 이 때 문자열을 반복하기 위해 for of 반복문을 사용했다.
 */

function solution(word, c) {
  let count = 0;
  for (a of word) {
    if (a === c) count++;
  }

  return count;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));
