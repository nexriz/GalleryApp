import React from 'react';
import { Motion, spring } from 'react-motion';

export default class Collapse extends React.Component {
  static propTypes = {
    stiff: React.PropTypes.number,
    damp: React.PropTypes.number,
    containerStyle: React.PropTypes.object,
    activeStyle: React.PropTypes.object,
    width: React.PropTypes.number
  }
  state = {
  	id: Math.random().toString(36),
  	isOpen: false,
  	content: {
  		h: 0,
  		w: this.props.width ? this.props.width : 0
  	}
  }
  componentDidMount() {
  	this.t = document.getElementById(this.state.id);
  }
  buttonClick = (e) => {
  	e.preventDefault();
  	const { isOpen } = this.state;
  	this.setState((state, props) => {
  		if(!isOpen) 
	  		return {isOpen: true, content: {h: this.t.scrollHeight}}
	  	else 
	  		return {isOpen: false, content: {h: 0}}	
  	})
  }
  render() {
  	const { stiff, damp, containerStyle, activeStyle, width } = this.props,
  	      { content, isOpen, id, btnid } = this.state,
  	      { h, w } = content,
  	      defaultOverflowStyle = {
	  		overflow: 'hidden',
	  		overflowY: 'hidden',
	  		overflowX: 'hidden'
		  }
  	const Button = (props) => 
  		React.cloneElement(this.props.children[0], {
  			onClick: this.buttonClick,
  			style: isOpen 
  					? {...props.style, ...props.activeStyle} 
  					: {...props.style},
  			...props,
  			id: btnid
  		})
    return (
      <div style={{height: 'auto'}}>
      	<Button activeStyle={activeStyle}/>
      		<Motion defaultStyle={{h: 0}} 
      				style={{w: spring(w, {stiffness: 120, damping: 20}), h: isOpen ? spring(h, {stiffness: stiff ? stiff : 100, damping: damp ? damp : 10}) : spring(h)}}>
      			{styles => 
      				<div id={id} 
      					 style={{
      					 	...containerStyle,
      					 	...defaultOverflowStyle,
      					 	 height: `${styles.h}px`,
      					 	 width: `${width}px`
      					 	 }}>
      					{this.props.children.filter((item, i) => i !== 0)}
      				</div>
      			}
      		</Motion>
      </div>
    );
  }
}



