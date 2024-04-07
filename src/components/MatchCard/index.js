// Write your code here
const MatchCard = props => {
  const {recentMatchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} =
    recentMatchDetails
  return (
    <li>
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      <h1>{competingTeam}</h1>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
