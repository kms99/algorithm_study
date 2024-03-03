/**
 * 문자열 word와 문자 c 가 주어지면, word의 각문자와 문자 c의 최소거리를 하나씩 나타내면 되겠다.
 *
 * (1) 문자열을 배열로
 * (2) 이중 반복문이 필요할듯
 * (3) 외부 for문에서는 문자 c일 때 내부 반복문을 실행 할 수 있도록 하자
 * (4) 내부 반복문에서는 각 거리가 최소값이 될 수 있도록 로직을 작성하자
 */

function solution(word, c) {
  const wordArray = word.split("");
  const length = word.length;
  const answerArray = new Array(length).fill(100);

  for (let i = 0; i < length; i++) {
    if (wordArray[i] === c) {
      for (let j = 0; j < length; j++) {
        // 거리 구하기 Math.abs-> 절댓값
        const pointLength = Math.abs(i - j);
        if (pointLength < answerArray[j]) answerArray[j] = pointLength;
      }
    }
  }

  return answerArray.join(" ");
}

console.log(solution("teachermode", "e"));
