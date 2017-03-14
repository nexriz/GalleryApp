import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './lineanimation.css'

class App extends Component {

  displayModal = (e, i) => {
  	document.getElementById(`modal${i}`).style.display='block'
  }
  hideModal = (e, i) => {
  	document.getElementById(`modal${i}`).style.display='none'
  }
  render() {
  	const title = <span>SHOW<span style={{ color: 'white'}}>C</span>ASE</span>

  	const imgs = ['http://i.imgur.com/svfepd9.jpg', 'http://i.imgur.com/edguCVH.jpg', 'http://i.imgur.com/olaCAbx.jpg', 
  				  'http://i.imgur.com/1PLG7tr.jpg', 'http://i.imgur.com/X2R6YHw.jpg', 'http://i.imgur.com/WHldgcN.jpg', 
  				  'http://i.imgur.com/iBfJexO.jpg', 'http://i.imgur.com/kqzxNFY.jpg', 'http://i.imgur.com/714feUy.jpg' ]
    return (
    	<Router>
	    	<div className="container">
	    		<header className="header">
	    			<NavBar links={['Home', 'About', 'Login']}/>
	    			<NavBarMobile />
	    			<h2 style={{fontFamily: 'Oxygen Mono!important'}}>CL .<small style={{color: 'coral'}}>designs</small></h2>
	    		</header>
	    		<main>
	    			<Route exact 
	    				   path="/" 
	    				   render={() => <ShowcaseSection title={title} small={'designs'}/> }
	    			/>
	    			<Route path="/About" 
	    				   render={() => (
		    				   	<div style={{height: '860px', display: 'flex',justifyContent: 'center',alignItems: 'center'}} className="animated fadeIn w3-container">
		    				   		<div className="itemsite"> <h1>About</h1></div>
		    				    </div>
	    				   )}
	    			/>
	    			<Route path="/Login"
	    				   render={() => (
		    				   	<div style={{height: '860px', display: 'flex',justifyContent: 'center',alignItems: 'center'}} className="animated fadeIn w3-container">
		    				   		<div className="itemsite"> 
		    				   		<h1>Login</h1>
		    				   		<form className="loginForm">
			    				   		<p>
										<label>Name</label>
										<input className="loginInput w3-input w3-border w3-round" type="text" /></p>
										<p>
										<label>Password</label>
										<input className="loginInput w3-input w3-border w3-round" type="password" /></p>
										<p>		
										<button className="w3-button w3-white w3-border loginBtn">Login</button></p>
		    				   		</form>
		    				   		</div>
		    				    </div>
	    				   	)}
	    			/>
	    			<GallerySection displayModal={this.displayModal} hideModal={this.hideModal} imgs={imgs} />
	    		</main>
	    		<footer className="footer">
	    			<p>Created by: <bold>Viktor Lott</bold> | ALL RIGHTS RESERVED</p>
	    		</footer>
	    	</div>
    	</Router>
    )
  }
}





const NavBar = ({links}) => (
	 <nav className="navbar">
	 	<ul>
 			{links.map((link, i) => <li className={'animated fadeIn'} key={i}><Link to={link === 'Home' ? '/' : link}>{link}</Link></li>)}
   		</ul>
  	</nav>
)

const NavBarMobile = () => (
	<nav className="navbar-mobile">
	    <a href="#"><i className="fa fa-bars" aria-hidden="true"></i></a>
	</nav>
)


const ShowcaseSection = ({title, small}) => (
	    <section className="animated fadeIn showcase">
	    	<div style={{height: '100px'}}>
	   			<h1  className="animated fadeInUp titleCase">{title}</h1>
	    		<div className="animated fadeInUp smallCase">
	    			<span style={{color: 'white', textShadow: '0 0 1px black'}}>.</span><small id="smallCase" style={{fontSize: '50px'}} className="smallCase">{small}</small>
	    		</div>
	    	</div>
	    	<div className="animated fadeIn conts">
	    		<Line color=""/>
	    		<div className="line2">
	    			<Line color="white"/>
	    		</div>
	    	</div>
    	</section>
)

const GallerySection = ({imgs, displayModal, hideModal}) => {
	return (
		<section className="gallery">
			{imgs.map((img, i) => (
				<div key={i}>
					<img onClick={(e) => displayModal(e, i)} className="animated fadeIn painting" src={img} alt=""/>

					<div id={`modal${i}`} className="w3-modal modalContainer" onClick={(e) => hideModal(e,i)}>
						<div className="w3-animate-zoom">
  							<img className="modalPainting " src={img} alt=""/>
						</div>
					</div>
				</div>
					))}
		</section>
	)
}

const Line = ({color}) => (
	<svg className="line" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="936.000000pt" height="204.000000pt" viewBox="0 0 936.000000 204.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.14, written by Peter Selinger 2001-2017
</metadata>
<g  transform="translate(0.000000,204.000000) scale(0.100000,-0.100000)"
fill={ color || '#000000'} stroke="#000000">
<path className="path" d="M9195 1974 c-215 -74 -624 -201 -900 -280 -1768 -508 -3160 -637
-4160 -388 -230 58 -421 127 -705 257 -91 41 -187 82 -213 91 -100 34 -187 12
-245 -61 -37 -48 -66 -105 -148 -296 -230 -532 -473 -904 -703 -1077 -343
-258 -675 -203 -1072 178 -132 126 -216 221 -449 507 -189 231 -297 342 -370
378 -66 33 -87 34 -131 4 -33 -22 -89 -116 -88 -147 0 -8 9 7 20 34 58 143
127 159 257 61 63 -48 151 -145 347 -385 189 -231 278 -332 410 -458 295 -284
549 -386 799 -322 348 89 671 489 990 1227 78 182 110 247 144 291 52 68 141
89 239 56 26 -9 122 -50 213 -91 284 -130 475 -199 705 -257 1049 -262 2527
-106 4420 464 293 89 785 248 785 255 0 8 -10 5 -145 -41z"/>
</g>
</svg>
)


export default App;
