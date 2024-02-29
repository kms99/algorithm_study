/**
 * 소문자로 된 문자열이 입력된다.
 * 이때 모든 중복된 문자를 제거하고 출력
 * 첫 등장된 위치는 고정하고 나머지 중복문자 제거
 *
 * 내가 알기로는 set? 을 쓰면 중복 여부를 알 수 있다고 했는데 한번 찾아볼까?
 * 이제 반복문을 돌리되
 * has를 통해 여부를 확인 먼저하고
 * 중복이아니라면
 * add를 통해 set에 등록하고
 * 결과 변수에 추가
 * 중복이라면
 * 다음 반복으로..
 * 이런느낌으로 가보자
 */

function solution(word) {
  const checkSet = new Set();
  let answer = "";

  for (c of word) {
    if (checkSet.has(c)) continue;

    checkSet.add(c);
    answer += c;
  }

  return answer;
}

console.log(solution("ksekkset"));
