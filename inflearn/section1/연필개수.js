/**
 * 연필 다스 수를 계산하는 문제
 * 한다스는 12개
 * 학생 1인당 연필 1자루
 * 입력은 학생수
 * 만약 13명이라면 2다스 필요, 1개가 더 필요하니깐*/

function solution(num) {
  const DAS = 12;
  return Math.ceil(num / DAS);
}

console.log(solution(25));
console.log(solution(178));
