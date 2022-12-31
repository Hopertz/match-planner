export default function getAways(roundNo,opponentsLength, matchesPerRoundCount, offsetArray) {
    let offset = opponentsLength - roundNo + (matchesPerRoundCount - 1);

    let aways = offsetArray.slice(offset, offset + matchesPerRoundCount);
  
    return aways.reverse();
  }
  
  