export default function getHomes(
  roundNo,
  opponentsLength,
  matchesPerRoundCount,
  offsetArray
) {
  let offset = opponentsLength - roundNo;

  let homes = offsetArray.slice(offset, offset + matchesPerRoundCount - 1);

  return [0, ...homes];
}
