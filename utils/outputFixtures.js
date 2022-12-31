
export default function outputFixtures(fixtures) {
    let roundNo = 0;
    for (let fixtureId = 0; fixtureId < fixtures.length; fixtureId++) {
      let fixture = fixtures[fixtureId];
  
      if (fixture.roundNo > roundNo) {
        console.log("\n Match Day " + fixture.roundNo + "");
        roundNo = fixture.roundNo;
      }
  
      console.log(fixture.homeOpponent + " vs " + fixture.awayOpponent);
    }
  }
  
  
    