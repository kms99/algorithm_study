/**
 * 입력 -> 날짜의 일의자리 숫자, 7대의 자동차 번호판 끝 두자리수
 * 자동차 운행 금지 규칙
 * - 자동차 번호판의 1의자리 숫자 === 날짜의 일의자리 숫자
 *
 * 출력 -> 위반 자동차 대수
 *
 * 일단은 자동차 끝 두자리수가 나오잖아 따라서 반복문 시 일의자리 수로 만들어 비교해야한다.
 * count 변수에 누적해서 위반 차량을 판단하자
 */

function solution(n, arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    // 마지막 일의자리만 뽑아낸다
    const carLastNum = arr[i] % 10;
    // 날짜랑 같으면 위반차량으로 판단
    if (carLastNum === n) count++;
  }

  return count;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));
