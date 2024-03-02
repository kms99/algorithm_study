/**
 * N개의 정수로 이루어진 배열을 입력 받고 자신의 앞 인덱스의 수보다 큰 수만 출력
 * 첫번쨰 수는 무조건 출력
 *
 * 각각의 요소를 확인 할 필요가 있다.
 * 이때 0번쨰 인덱스는 바로 출력
 * 나머지는 앞 인덱스와 비교 해서 출력
 * 이떄 let으로 결과를 담을 array 선언 필요
 */

function solution(arr) {
  const answerArray = new Array();

  for (let i = 0; i < arr.length; i++) {
    // i가 0이면 (첫인덱스)
    if (!i) {
      answerArray.push(arr[i]);
      continue;
    }
    // 비교로직
    if (arr[i] > arr[i - 1]) answerArray.push(arr[i]);
  }

  return answerArray.join(" ");
}

console.log(solution([7, 3, 9, 5, 6, 12]));
