import FanInformation from "./FanInformation.js";
import PageHeading from "./PageHeading.js";

function App() {
  const torontoMapleLeafs = {
    id: 1,
    name: "Toronto Maple Leafs 🍁",
    city: "Toronto",
    stadium: {
      name:"Air Canada Center",
      capacity: 20000
    }
  }
  const torontoMarlies = {
    id: 2,
    name: "Toronto Marlies",
    city: "Toronto",
    stadium : {
      name: "Maple Leaf Gardens",
      capacity: 10000
    }
  }
  const sportsTeams = [torontoMapleLeafs, torontoMarlies];
  const followTeam = (name) => {
    console.log(`You are now following that ${name}!`);
  }
  return (
    <div className="App">
      <PageHeading>
        <h1>All the sports team!</h1>
      </PageHeading>
      {
        sportsTeams.map( (team, index) => {
          return(
            
            <FanInformation 
            key = {team.id}
            id = {team.id} teamName={team.name} number = {index} city = {team.city} stadium = {team.stadium} followTeamFunction = {followTeam} />
          )
        })
      }
    </div>
  );
}

export default App;
