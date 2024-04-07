// Write your code here
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, teamName, teamIcon} = teamDetails

  return (
    <li>
      <Link to={`/team-matches/:${id}`}>
        <div>
          <img src={teamIcon} alt={teamName} />
          <h1>{teamName}</h1>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
