import React, {Component} from 'react'
import DropdownMenuHandler from './Dropdownmenu'

import './StickyHeader.css'
class StickyHeader extends Component{
    render(){
        return(
            <div className="Topping">
                    <DropdownMenuHandler/>


                    
            </div>
        );
    }
}
export default StickyHeader;