/**
 * 1부터 입력된 숫자까지의 합을 구하는 문제
 * 반복문을 통해서 계산하면 될 듯하다
 * 생각을 해보면 서로 대칭되는 친구들을 더하면 모두 같은 값이잖아
 * 그러면 반복문의 반복횟수가 절반으로 줄겠다.
 * 반복은 입력된 숫자만큼이야
 * 그렇다면 홀수라면 1+입력수/2 가 가장 중간값이다.
 * 줄어든 반복 횟수는? Math.floor(입력된 숫자/2)
 * 반복 조차 안해도 되겠다 야
 */

function solution(a) {
  // (1) 반복 계산 할 수
  const sumValue = 1 + a;
  // (2) 반복되는 횟수
  const intervalNum = Math.floor(a / 2);
  // (3) 반복 계산
  const sum = sumValue * intervalNum;
  // (4) 홀수일 때는 중간값을 더해준다, 짝수일 때는 계산한 결과를 반환
  return a % 2 ? sum + (1 + a) / 2 : sum;
}

console.log(solution(6));
console.log(solution(10));
