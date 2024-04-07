// Write your code here
const LatestMatch = props => {
  const {matchDetails} = props

  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = matchDetails
  return (
    <div>
      <h1>Latest Matches</h1>
      <p>{competingTeam}</p>
      <p>{date}</p>
      <p>{venue}</p>
      <p>{result}</p>
      <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      <p>FirstInnings {firstInnings}</p>
      <p>SecondInnings {secondInnings}</p>
      <p>Man of the match {manOfTheMatch}</p>
      <p>Umpires {umpires}</p>
    </div>
  )
}
export default LatestMatch
