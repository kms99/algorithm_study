/**
 * 입력 - 총 9개의 자연수로 이루어진 배열
 * 입력된 자연수 배열 중에서 7개를 선별하여 합이 100이 되는 케이스를 모두 출력해야한다.
 *
 * 전체 케이스를 확인해야할 것 같은데
 * 7개의 덧셈보다는 전체 합에서 2번의 뺼셈을 통해 판단하는게 좋아보여
 * 결국 전체합 - 두명의 합 이렇게 되는거지
 * 그러면 케이스를 계산할 때 두명의 합을 계산하면 되겠다.
 * 이중 반복문 사용이네 그치?
 */

function solution(arr) {
  // 결과 출력을 위한 배열
  let answer = [];
  // 전체 합
  const sum = arr.reduce((acc, val) => acc + val, 0);

  // 이중 for문으로 케이스 확인
  for (let i = 0; i < arr.length - 1; i++) {
    // 케이스 확인을 위한 배열 복사
    const testArr = [...arr];
    // 기존 합에서 외부반복문에서 판단한 원소값 뺴기
    let testSum = sum - arr[i];

    // 내부 반복문에서 원소 하나 더 확인
    for (let j = i + 1; j < arr.length; j++) {
      // 만약 내부 반복문에서 확인 한 원소의 값을 뻈을 때 100이 나오면
      // 테스트 array에서 해당 원소 제거
      // 정답 추가, 이때 문자열로 변환
      if (testSum - testArr[j] === 100) {
        // j가 인덱스가 더 크기 때문에 먼저 slice로 삭제 처리
        testArr.splice(j, 1);
        testArr.splice(i, 1);
        answer.push(testArr.join(" "));
      }
    }
  }
  // 문자열로 변환하여 조인-> 줄바꿈
  return answer.join("\n");
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
