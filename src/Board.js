import React,{Component} from 'react';
import Box from './Box';
import './Board.css';

class Board extends Component {
  static defaultProps = {
    nrows: 4,
    ncols: 4,
    chanceLit: 0.2
  }

  constructor (props) {
    super(props);
    this.state = {
      current : this.allotCurrent(),
      gameWon: false
    }
    this.changeOn = this.changeOn.bind(this);
    this.changeNeighbours = this.changeNeighbours.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  restartGame() {
    this.setState({
      current : this.allotCurrent(),
      gameWon: false
    });

  }

  allotCurrent() {
    let x =[];
    for(var i=0;i<this.props.nrows;i++){
      let y=[];
      for(var j=0;j<this.props.ncols;j++){
        if(Math.random()<this.props.chanceLit)
          y.push(true);
        else
          y.push(false);
      }
      x.push(y);
    }
    return x;
  }

  changeOn (i,j) {
    this.setState(st => {
      var x = st.current;
      if(i>=0&&j>=0&&i<(this.props.nrows)&&j<(this.props.ncols))
        x[i][j] = !st.current[i][j];
      let y=x.every((e) => e.every(el => !el));
      return({current: x, gameWon: y});
    });
  }

  changeNeighbours (i,j) {
      this.changeOn(i,j);
      for(let h=i-1;h<=i+1;h++)
        this.changeOn(h,j);
      for(let k=j-1;k<=j+1;k++)
        this.changeOn(i,k)
      // this.changeOn(i,j);
      // this.changeOn(i+1,j);
      // this.changeOn(i-1,j);
      // this.changeOn(i,j-1);
      // this.changeOn(i,j+1);
      // var x = (this.state.current.every((e) => e.every((el)=> !el)));
      // this.setState({gameWon: x});
  }

  render() {
    var x = "abcdefghijklmnopqrstuvwxyz".split('');
    if(this.state.gameWon){
      return(
        <div>
        <h1 className="font-effect-neon"><span style={{'color': 'purple',
        'animation': 'blink 4s infinite'}}>You</span> <span style={{'color': 'red',
          'animation': 'blink 7s infinite'}}>Won!</span></h1>
          <button onClick={this.restartGame}>Play again?</button>
        </div>
        )
    }
    return(
    <table>
      <tbody>
        <tr>
          {this.state.current.map((el,i) => {
            return(<td className="master" key={x[i]}>
              {el.map((ele,j) => {
                return (<Box ons={ele} callme={this.changeNeighbours} index={{i:i,j:j}} key={`${i}-${j}`} />)
              })}
            </td>)
          })}
        </tr>
      </tbody>
    </table>
        /* Behind the scenes
        <td className="master">
          <Box ons={this.state.current[0][0]} callme={this.changeOn} index={{i:0,j:0}}/>
          <Box />
          <Box />
        </td> */
    );
  }
}

export default Board;
