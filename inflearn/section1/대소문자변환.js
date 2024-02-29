/**
 * 대소문자가 섞인 문자열에서 각 문자의 대소문자를 반대로 변경하여출력
 * 프로토타입 혹은 함수를 만들자
 * 이번에는 함수
 */

function solution(word) {
  const changeCase = (c) => {
    return c.toUpperCase() === c ? c.toLowerCase() : c.toUpperCase();
  };

  let answer = "";

  for (c of word) {
    answer += changeCase(c);
  }

  return answer;
}

console.log(solution("StuDY"));
