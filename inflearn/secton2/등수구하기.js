/**
 * N명 학생의 국어점수 입력, 각 학생의 등수를 입력순서대로 출력
 * 같은 점수 등수처리 중요
 *
 * 이중 반복문을 통한 풀이
 * 입력 순서에 따른 등수를 나타내야하기때문에 외부 반복문 순회
 * 기본적으로 1등이라는 가정
 * 내부 반복문에서는 전체 반복을 진행하되, 외부 반복문 요소와 같은 인덱스일 경우는 continue
 * 만약 점수가 더 큰 요소가 발견되면 등수 올리기
 * -> 중복되는 요소도 고려가능함
 */

function solution(arr) {
  const n = arr.length;
  const answer = new Array();

  for (let i = 0; i < n; i++) {
    let rank = 1;
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      if (arr[i] < arr[j]) rank++;
    }
    answer.push(rank);
  }

  return answer.join(" ");
}

console.log(solution([87, 89, 92, 100, 76]));
