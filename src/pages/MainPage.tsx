import React from 'react'
import Courses from '../components/Courses'
import FeedbackForm from '../components/FeedbackForm'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import AboutUsSection from '../components/AboutUsSection'

const MainPage: React.FC = () => {
	return (
		<div>
			<Hero />
			<Courses />
			<AboutUsSection />
			<FeedbackForm />
		</div>
	)
}

export default MainPage
