import React,{Component} from 'react';
import './Box.css';

class Box extends Component {
  constructor(props) {
    super();
    this.callus = this.callus.bind(this);
  }

  static defaultProps = {
    ons: false,
  };

  callus() {
    this.props.callme(this.props.index.i,this.props.index.j);
  }

  render() {
    var x = {};
    this.props.ons?x={'backgroundColor': '#f96db6'}:x={'backgroundColor': '#7d848e'};
    return(
      <div className="box" style={x} onClick={this.callus}></div>
    );
  }
}

export default Box;
