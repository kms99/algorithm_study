/**
 * 반대로 읽어도 같은 문자열= 회문문자열
 * 이 문자열이 회문문자열이면 YES 아니면 NO 출력 (대소문자 구분x)
 *
 * -> 1차적으로 toUpperCase로 모두 대문자로(비교하기위해)
 * -> reverse() 한 것과 안한것 비교 => reverse가 배열 메서드다.. 문자열 메서드인줄..
 */

function solution(word) {
  const upperWord = word.toUpperCase();

  return upperWord === upperWord.split("").reverse().join("") ? "YES" : "NO";
}

console.log(solution("gooG"));
