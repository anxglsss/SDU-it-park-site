import { Building, Database, Languages } from 'lucide-react'

const TechordaCourses = () => {
	return (
		<section className='py-16 px-6 md:px-16 bg-gray-50'>
			<div className='max-w-7xl mx-auto flex flex-col-reverse items-center lg:grid lg:grid-cols-2 gap-12 lg:gap-24'>
				<div className='flex flex-col gap-8'>
					<div className='bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow'>
						<h3 className='text-[20px] font-semibold text-gray-800 mb-4 flex items-center gap-3'>
							<div className='bg-sky-700 text-white p-3 rounded-full'>
								<Languages size={20} />
							</div>
							Natural Language Processing
						</h3>
						<hr className='border-gray-200' />
						<p className='text-gray-600 leading-relaxed mt-4'>
							Освойте обработку естественного языка, изучив техники, которые
							позволяют работать с текстами и создавать интеллектуальные
							решения.
						</p>
					</div>

					<div className='bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow'>
						<h3 className='text-[20px] font-semibold text-gray-800 mb-4 flex items-center gap-3'>
							<div className='bg-sky-700 text-white p-3 rounded-full'>
								<Database size={20} />
							</div>
							Data Science
						</h3>
						<hr className='border-gray-200' />
						<p className='text-gray-600 leading-relaxed mt-4'>
							Курс, предоставляющий глубокие знания и навыки работы с данными,
							анализ и построение моделей для реальных задач.
						</p>
					</div>
				</div>

				<div className='flex flex-col items-center lg:items-start justify-between gap-3'>
					<div className='flex flex-col gap-3 items-center lg:items-start'>
						<div className='bg-gray-200 flex pl-5 pr-5 py-3 gap-5 items-center justify-between h-[38px] min-w-40 rounded-md mb-3'>
							<div className='h-[10px] w-[10px] rounded-full bg-sky-700'></div>
							<p className='font-inter text-[16px]'>Развитие навыков</p>
						</div>

						<h2 className='text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-3 mb-4'>
							Techorda
							<Building size={32} className='text-sky-700' />
						</h2>

						<p className='text-[16px] mt-2 text-gray-600 text-center lg:text-start leading-relaxed max-w-[500px]'>
							Курсы, проведенные в рамках программы Techorda в 2023 году,
							нацелены на развитие ключевых навыков в востребованных областях
							программирования и анализа данных. Эти курсы дают участникам
							возможность получить практические знания, которые помогут достичь
							успеха в профессиональной деятельности.
						</p>
					</div>
					<button className='text-[16px] bg-sky-700 justify-self-end hover:bg-sky-800 text-white py-3 px-5 rounded-[10px] mt-4'>
						<a
							href='https://astanahub.com/ru/l/TechOrda2024'
							target='_blank'
							rel='noopener noreferrer'
						>
							Узнать больше
						</a>
					</button>
				</div>
			</div>
		</section>
	)
}

export default TechordaCourses
