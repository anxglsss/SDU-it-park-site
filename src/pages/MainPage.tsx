import React from 'react'
import Courses from '../components/Courses'
import FeedbackForm from '../components/FeedbackForm'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

const MainPage: React.FC = () => {
	return (
		<div>
			<Hero />
			<Courses />
			<Projects />
			<FeedbackForm />
		</div>
	)
}

export default MainPage
