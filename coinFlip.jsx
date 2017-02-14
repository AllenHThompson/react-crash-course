var Coin = React.createClass({
  sides: [
    'http://www.marshu.com/articles/imagess-website/articles/president-on-coins',
    'http://www.marshu.com/articles/imagess-website/articles/president-on-coins'
  ],
  flipCoin: function() {
    var randomSide = Math.round(Math.random());
    if (x === 0) {
      this.setState({
        image: this.sides[0]
      })
    }
    console.log("Flip Coin!")
  },
  getIntitialState: function() {
    return{
      image: this.sides[randomSide]
    }
  },
  render: function(){
    console.log(this.sides);
    return (
      <div>
          <button onClick={this.flipCoin}>Flip Coin!</button>
          <img src={this.state.image} />
      </div>

    )
  }
  }
})

var App = React.createClass({
  render: function() {
    return(
      <Coin />
    )
  }

});


ReactDOM.render(
  <App />,
  document.getElementsById('container')
)
