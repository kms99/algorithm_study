/**
 * N개의 문자열이 입력되었을 때 가장 긴 문자열을 출력하는 문제!
 * 최소 길이를 문자열을 담는 변수 선언
 * 일단 반복문을 돌리면 되는데
 * 반복문 내부 로직을 생각해보자
 * 최소 길이의 문자열 변수의 길이와 현재 원소의 길이를 비교하여 더 크면 해당 문자열로 변경
 */

function solution(arr) {
  let maxWord = "";

  arr.forEach((word) => {
    if (maxWord.length < word.length) {
      maxWord = word;
    }
  });

  return maxWord;
}

console.log(solution(["teacher", "time", "student", "beautiful", "good"]));
