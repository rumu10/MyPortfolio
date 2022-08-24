import React, { useEffect } from 'react';
import About from '../components/About/About';
import Homepage from '../components/Home/Homepage';
import Portfolio from '../components/Portfolio/Portfolio';
import Resume from '../components/Resume/Resume';

import './MainContent.scss';

const MainContent = () => {
	useEffect(() => {
		// Get all sections that have an ID defined
		const sections = document.querySelectorAll("section[id]");

		// Add an event listener listening for scroll
		window.addEventListener("scroll", navHighlighter);

		function navHighlighter() {

			// Get current scroll position
			let scrollY = window.pageYOffset;

			// Now we loop through sections to get height, top and ID values for each
			sections.forEach(current => {
				const sectionHeight = current.offsetHeight;
				const sectionTop = current.offsetTop - 50;
				let sectionId = current.getAttribute("id");

				/*
				- If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
				- To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
				*/
				if (
					scrollY > sectionTop &&
					scrollY <= sectionTop + sectionHeight
				) {
					document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
				} else {
					document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
				}
			});
		}
	}, [])
	
	useEffect(() => {
		function reveal() {
			var reveals = document.querySelectorAll(".reveal");
		  
			for (var i = 0; i < reveals.length; i++) {
			  var windowHeight = window.innerHeight;
			  var elementTop = reveals[i].getBoundingClientRect().top;
			  var elementVisible = 150;
		  
			  if (elementTop < windowHeight - elementVisible) {
				reveals[i].classList.add("active");
			  } else {
				reveals[i].classList.remove("active");
			  }
			}
		  }
		  
		  window.addEventListener("scroll", reveal);

		  const navSlide = () => {
			const burger = document.querySelector('.burger');
			const nav = document.querySelector('.nav-links');
			const navLinks = document.querySelectorAll('.nav-links li');
			
			//Toggle Nav
			burger.addEventListener('click', ()=>{
			  nav.classList.toggle('nav-active');
			  
			  //Animate Links
			  navLinks.forEach((link, index)=>{
				if(link.style.animation){
				  link.style.animation = ''
				}else{
					  link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
		  
				}
			  });
			  
			  //burger animation
			  burger.classList.toggle('toggle');
			  
			  
			});
		  }
		  navSlide();
	}, [])
	

	return (
		<div>
			<div className="menu-bar">
				<nav class="navigation">
					<ul class="nav-links">
						<li><a href="#home">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#resume">Resume</a></li>
						<li><a href="#portfolio">Portfolio</a></li>
						{/* <li><a href="#contact">Contact</a></li> */}
					</ul>
					<div className="burger">
						<div className="line1"></div>
						<div className="line2"></div>
						<div className="line3"></div>
  					</div>
				</nav>
			</div>
			<div className="main-content">
				<section id="home">
					<Homepage />
				</section>
				<section id="about">
					<About />
				</section>
				<section id="resume">
					<Resume />
				</section>
				<section id="portfolio">
					<Portfolio/>
				</section>
			</div>
		</div>
	)
}

export default MainContent
