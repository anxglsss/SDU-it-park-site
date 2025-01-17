import React from 'react'
import CoursesGeneral from '../components/CoursesGeneral'
import FAQ from '../components/FAQ'
import Feedbacks from '../components/Feedbacks'
import LearningFormat from '../components/LearningFormat'
import TechordaCourses from '../components/TechordaCourses'

const CoursesPage: React.FC = () => {
	return (
		<>
			<CoursesGeneral />
			<LearningFormat />
			<TechordaCourses />
			<FAQ />
			<Feedbacks />
		</>
	)
}

export default CoursesPage
