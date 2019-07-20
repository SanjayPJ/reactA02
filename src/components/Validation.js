import React, { Component } from 'react';

class Validation extends Component {
    render() {
    	const strLimit = 5;
		let str_status;
		if(this.props.strLength <= strLimit){
			str_status = (<div>Text too short</div>)
		}else{
			str_status = (<div>Text long enough</div>)
		}
        return (
            <div>
            	{str_status}
            </div>
        );
    }
}

export default Validation;
