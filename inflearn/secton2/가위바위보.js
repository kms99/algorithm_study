/**
 * A, B 두사람이 가위바위게임을 한다.
 * 총 N번의 게임을 진행하며 A가 이기면 A, B가 이기면 B, 비기면 D를 출력한다.
 * 1은 가위 2는 바위 5는 보이다
 * 각 게임의 결과를 각줄에 출력하는 문제
 *
 * 결과를 담는 answer array 필요
 * N번의 반복문을 돌린다.
 * 한게임 가위바위보의 경우의 수는 총 9번
 * -> A를 기준으로 게임의 로직을 설정하자
 * -> A가 낸 경우를 먼저 확인
 * -> A가 낸 것에 따라서 B는 3개의 경우를 낼 수 있다.
 *
 * -> 비길때는 따로 고려하지 않아도 된다!
 */

function solution(a, b) {
  const answerArray = new Array();
  const GAME_NUM = a.length;
  const game = (aCase, bCase) => {
    if (aCase === 1) {
      if (bCase === 2) {
        return "B";
      } else {
        return "A";
      }
    } else if (aCase === 2) {
      if (bCase === 1) {
        return "A";
      } else {
        return "B";
      }
    } else {
      if (bCase === 1) {
        return "B";
      } else {
        return "A";
      }
    }
  };

  for (let i = 0; i < GAME_NUM; i++) {
    if (a[i] === b[i]) {
      answerArray.push("D");
      continue;
    }
    answerArray.push(game(a[i], b[i]));
  }

  return answerArray.join("\n");
}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
