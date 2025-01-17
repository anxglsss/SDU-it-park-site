import { BarChart3, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'

const courses = [
	{
		id: 1,
		title: 'Natural Language Processing',
		description:
			'Наш курс по Natural Language Processing разработан для того, чтобы вы могли освоить навыки обработки естественного языка и стать уверенным компетентным профессионалом в этой области.',
		icon: <BookOpen size={40} className='text-sky-700' />,
	},
	{
		id: 2,
		title: 'Data Science',
		description:
			'Мы предоставляем программу по направлению Data Science, которая поможет получить знания в этой области, создать собственные проекты и стать компетентным специалистом.',
		icon: <BarChart3 size={40} className='text-sky-700' />,
	},
]

const Courses = () => {
	return (
		<section className='bg-gray-100 py-16'>
			<div className='mx-auto px-6 lg:px-16 max-w-7xl'>
				<div className='text-center mb-12 flex flex-col items-center gap-2 md:gap-4'>
					<div className='bg-gray-200 flex pl-5 pr-2 py-3 gap-5 items-center mx-auto justify-between h-[38px] min-w-40 rounded-md mb-3'>
						<div className='h-[10px] w-[10px] rounded-full bg-sky-700'></div>
						<p className='font-inter text-[16px]'>Учитесь вместе с нами</p>
						<img src='../assets/vr-line.svg' alt='' loading='lazy' />
					</div>
					<h2 className='text-3xl md:text-4xl  font-extrabold text-gray-800 mb-2'>
						Наши Курсы
					</h2>
					<p className='text-lg text-gray-600'>
						Освойте новые навыки и станьте профессионалом в IT индустрии.
					</p>
				</div>

				<div className='grid gap-12 lg:grid-cols-2'>
					{courses.map(course => (
						<div
							key={course.id}
							className='flex bg-white shadow-lg rounded-lg overflow-hidden'
						>
							<div className='flex items-center justify-center bg-gray-50 p-6'>
								{course.icon}
							</div>

							<div className='p-6 flex flex-col justify-between'>
								<h3 className='text-2xl font-bold text-gray-800 mb-4'>
									{course.title}
								</h3>
								<p className='text-gray-600 mb-6'>{course.description}</p>
								<Link to='/courses'>
									<button className='px-6 py-2 bg-sky-700 text-white rounded-lg hover:bg-sky-800 transition'>
										Узнать подробнее
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Courses
