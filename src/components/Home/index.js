// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {isLoading: true, teamsList: []}

  componentDidMount() {
    this.getTeamsList()
  }
  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const responseData = data.teams
    const formattedData = responseData.map(eachOne => ({
      id: eachOne.id,
      teamName: eachOne.name,
      teamIcon: eachOne.team_image_url,
    }))
    this.setState({teamsList: formattedData, isLoading: false})
  }

  renderTeamMatchCard = () => {
    const {teamsList} = this.state
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl logo"
        />
        <h1>IPL Dashboard</h1>
        <ul>
          {teamsList.map(eachTeam => (
            <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
          ))}
        </ul>
      </div>
    )
  }
  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div>{isLoading ? this.renderLoader() : this.renderTeamMatchCard()}</div>
    )
  }
}
export default Home
