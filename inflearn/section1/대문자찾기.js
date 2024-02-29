/**
 * 해당 문제는 입력받은 문자열 내에 대문자가 몇개 있는지 출력하는 문제
 * toUpperCase -> 대문자로 변환
 * toLowerCase -> 소분자로 변환
 *
 * for of 반복문을 통해 문자열의 문자를 반복하여 해당 문자가 대문자인지 판단하자.
 */

function solution(word) {
  // 프로토 타입을 만들자 -> 모든 string 타입에서 사용 가능한 함수
  String.prototype.isUpperCase = function () {
    // string value 값 가져오기
    const value = this.valueOf();
    // 대문자인지 확인
    return value.toUpperCase() === value.toString();
  };

  // 결과값을 만드는 count
  let count = 0;

  // 문자열 순회
  for (c of word) {
    // 대문자라면 count 증가
    if (c.isUpperCase()) count++;
  }

  return count;
}

console.log(solution("KoreaTimeGood"));
