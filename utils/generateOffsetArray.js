export default function generateOffsetArray(offsetArray,opponentsLength) {
    // generate an array of all indexes, repeated so it is long enough
    for (let i = 1; i < opponentsLength; i++) {
      offsetArray.push(i);
    }
  
    offsetArray = offsetArray.concat(offsetArray);
  
  
    return offsetArray;
  }
