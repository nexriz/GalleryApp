import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
  	const imgs = ['http://i.imgur.com/svfepd9.jpg', 'http://i.imgur.com/edguCVH.jpg', 'http://i.imgur.com/olaCAbx.jpg', 
  				  'http://i.imgur.com/1PLG7tr.jpg', 'http://i.imgur.com/X2R6YHw.jpg', 'http://i.imgur.com/WHldgcN.jpg', 
  				  'http://i.imgur.com/iBfJexO.jpg', 'http://i.imgur.com/kqzxNFY.jpg', 'http://i.imgur.com/714feUy.jpg' ]
    return (
    	<Router>
	    	<div className="container">
	    		<header className="header">
	    			<NavBar links={['Home', 'About', 'Login']}/>
	    			<NavBarMobile />
	    			<h2>CL .<small>designs</small></h2>
	    		</header>
	    		<main>
	    			<Route exact 
	    				   path="/" 
	    				   render={() => <ShowcaseSection title={'SHOWCASE'} small={'.designs'}/> }
	    			/>
	    			<Route path="/About" 
	    				   render={() => <div style={{height: '800px'}}>About page</div> }
	    			/>

	    			<GallerySection imgs={imgs}/>
	    		</main>
	    		<footer>
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
	    <section className="showcase">
   			<h1 className="animated fadeInUp titleCase">{title}</h1>
    		<small className="animated fadeInUp smallCase">{small}</small>
    	</section>
)

const GallerySection = ({imgs}) => (
		<section className="gallery">
			{imgs.map((img, i) => <img className="animated zoomIn painting" key={i} src={img} alt=""/>)}
		</section>
	)




export default App;
