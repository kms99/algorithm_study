/**
 * 크기가 N인 문자열 배열이 들어왔을 때 중복 문자열을 제거하고 차례대로 출력하는 문제
 * 이것 역시 set 으로 풀자 (중 복)
 */

function solution(arr) {
  const checkSet = new Set();
  const answer = new Array();

  arr.forEach((word) => {
    if (!checkSet.has(word)) {
      checkSet.add(word);
      answer.push(word);
    }
  });

  return answer.join("\n");
}

console.log(solution(["good", "time", "good", "time", "student"]));
