/**
 * 대문자로 이루어진 문자열을 입력받고, 연속으로 같은 문자가 반복되는 경우 숫자로 치환
 * 한개일 경우 숫자 생략
 *
 * 숫자를 담는 (연속카운트수) flag 변수를 만들고
 * 해당 숫자가 초기화 되는 경우 -> 새로운 문자가 들어왔을 때
 * answer에 해당 문자를 넣는다
 * 만약 숫자가 초기화 될 때 기존 값이 1이였으면 answer에 추가를 생갹
 * 아니라면 해당 카운트 수를 추가
 */

function solution(word) {
  let answer = "";

  let wordFlag = "";
  let numFlag = 0;

  word.split("").forEach((s, index) => {
    if (index === 0) {
      answer += s;
      wordFlag = s;
      numFlag = 1;
    } else {
      if (wordFlag === s) {
        numFlag++;
      } else {
        if (numFlag !== 1) {
          answer += numFlag;
        }
        wordFlag = s;
        answer += s;
        numFlag = 1;
      }
    }
  });

  return answer;
}

console.log(solution("KKHSSSSSSSE"));
