/**
 * 소문자 이루어진 문자열이 입력 되었을 때 가운데 문자를 출력한다
 * 1. 소문자인지 확인
 * 2. 홀수, 짝수 확인
 * 3. 홀수일 시 가운데 하나의 문자 (Math.ceil(word.length/2)-1)
 * 4. 짝수일 시 가운데 두개의 문자 (word.length/2-1, word.length/2)
 */

function solution(word) {
  //(1) 소문자 확인
  if (word.toLowerCase() !== word) return;

  //(2) 홀 짝 확인
  if (word.length % 2) {
    //홀
    return word[Math.ceil(word.length / 2 - 1)];
  } else {
    //짝
    return `${word[word.length / 2 - 1]}${word[word.length / 2]}`;
  }
}

console.log(solution("study"));
console.log(solution("good"));
