function GetText() {
  var title = "React App Loaded";
  return ({
    <div>
      <h1>{title}</h1>
    </div>
  })
}

function App(props) {
  return (
  <div className="scoreboard">
    <div className="header">
      <h1>National Championship Scoreboard</h1>
      <div className="teams">
        <div className="team">
          <div className="team-name">Alabama</div>
          <div className="counter">
            <button className="counter-change minus">-</button>
              <div className="team-score">0</div>
            <button className="counter-change plus">+</button>
          </div>
        </div>
        <div className="team-name">Clemson</div>
        <div className="counter">
          <button className="counter-change minus">-</button>
            <div className="team-score">0</div>
          <button className="counter-change plus">+</button>
        </div>
      </div>
    </div>
  </div>
  )
}

ReactDOM.render(
  <App title="Scoreboard" />,
  document.getElementsById('container');
)
