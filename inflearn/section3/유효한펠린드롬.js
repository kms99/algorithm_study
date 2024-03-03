/**
 * 반대로 읽어도 같은 문자열을 => 펠린드롬이라고한다.
 * 검사를 실시할 때 알파벳만 가지고.., 대소문자 구분 x
 *
 * (1) 입력받은 문자열에서 알파벳만 뽑아오자 (정규식?)
 * (2) upperCase로 변환
 * (3) 뒤집어보자
 */

function solution(word) {
  //(1) 정규식
  const reg = /[a-zA-Z]/g;
  const alphaWord = word.match(reg).join("").toUpperCase();
  //(2) 아스키코드
  const alphaWord2 = word
    .split("")
    .filter((c) => {
      return (
        "A".charCodeAt() <= c.charCodeAt() && c.charCodeAt() <= "z".charCodeAt()
      );
    })
    .join("")
    .toUpperCase();

  return alphaWord === alphaWord.split("").reverse().join("") ? "YES" : "NO";
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
