/**
 * 문자와 숫자가 섞여있는 문자열 입력
 * 숫자만 추출하여 자연수를 만든다.
 *
 * 이때 맨 앞자리수가 0이면 제외
 *
 * (1) 정규식을 이용하여 숫자만 추출
 * (2) match로 추출한 숫자는 아마도 배열로 나올듯
 * (3) join으로 합치고 parseInt나 Number해줘야함
 */

function solution(word) {
  const numberReg = /[0-9]/g;
  const getNumberWord = word.match(numberReg);

  return Number(getNumberWord.join(""));
}

console.log(solution("g0en2T0s8eSoft"));
