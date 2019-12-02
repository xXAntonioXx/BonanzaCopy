import React, {Component} from 'react'
import './Dropdownmenu.css'

class DropdownMenuHandler extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  Force(){
    this.forceUpdate();
    console.log(this.state.data)
  }

  render(){
    return(
      <div>
       <h1 className="titulo">Telas Bonanza</h1>
      </div>
        );
    }
}
export default DropdownMenuHandler;