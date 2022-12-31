import generateOffsetArray from "./generateOffsetArray.js";
import getHomes from "./getHomes.js";
import getAways from "./getAways.js";

export default function generateFixtures(
  roundNoOffset,
  opponents
) {

  let  offsetArray = []
  let roundCount = opponents.length - 1;
  let alternate = false;
  let fixtures = [];
  let matchesPerRoundCount = opponents.length / 2;
  offsetArray = generateOffsetArray(offsetArray, opponents.length);


  for (let roundNo = 1; roundNo <= roundCount; roundNo++) {
    alternate = !alternate;

    let homes = getHomes(
      roundNo,
      opponents.length,
      matchesPerRoundCount,
      offsetArray
    );
    let aways = getAways(
      roundNo,
      opponents.length,
      matchesPerRoundCount,
      offsetArray
    );

    for (let matchIndex = 0; matchIndex < matchesPerRoundCount; matchIndex++) {
      if (alternate === true) {
        fixtures.push({
          roundNo: roundNo + roundNoOffset,
          matchNo: matchIndex,
          homeOpponentId: homes[matchIndex],
          awayOpponentId: aways[matchIndex],
          homeOpponent: opponents[homes[matchIndex]],
          awayOpponent: opponents[aways[matchIndex]],
        });
      } else {
        fixtures.push({
          roundNo: roundNo + roundNoOffset,
          matchNo: matchIndex,
          homeOpponentId: aways[matchIndex],
          awayOpponentId: homes[matchIndex],
          homeOpponent: opponents[aways[matchIndex]],
          awayOpponent: opponents[homes[matchIndex]],
        });
      }

      if (homes[matchIndex] == aways[matchIndex]) {
        console.error("Teams cannot play themselves");
      }
    }
  }

  return fixtures;
}
