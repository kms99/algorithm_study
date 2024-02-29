/**
 * 대문자로 이루어져있는 단어가 주어진다.
 * 해당 단어에서 대문자 'A'를 식별하였을 때 '#'으로 변경시킨다.
 * 뭔가 배열화 해서 replace 사용하면 될 듯한데
 * 문자열에서 바로 replace가 될까 시험도 해보자->대박 된당
 * replace는 가장 먼저 발견된 1개의 원소만 변경하기 때문에
 * replaceAll을 써야해
 */

function solution(word) {
  return word.replaceAll("A", "#");
}

console.log(solution("BANANA"));
