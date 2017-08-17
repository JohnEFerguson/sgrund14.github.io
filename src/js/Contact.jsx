'use strict';

const React = require('react');

const Contact = ({ currentSection }) => {
	return (
		<div className={`${currentSection === 'contact' ? 'section-on' : ''} contact-section`}>
			<div className='top-panel'>
				<div className='panel upper contact'>
					<h2>email</h2>
					sgrund@oberlin.edu
					<br />
					<h2>twitter</h2>
					@salt_n_pepper_games
				</div>
			</div>
			<div className='bottom-panel'>
				<div className='panel lower contact'>
					<a href='src/files/resume_april_2017.pdf' className='resume' target='_blank'>resume</a>
				</div>
			</div>
		</div>
	);
}

module.exports = Contact;