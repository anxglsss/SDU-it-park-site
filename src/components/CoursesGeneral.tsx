import { Album, BrainCircuit, Lightbulb } from 'lucide-react'

const CoursesGeneral = () => {
	return (
		<section className='py-6 md:py-16 px-4 md:px-16 lg:px-8 bg-gray-50 min-h-[610px]'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
				<div className='flex flex-col items-center lg:items-start justify-between gap-3'>
					<div className='flex flex-col gap-3 items-center lg:items-start'>
						

						<h2 className='text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-3 mb-4'>
							Страница Курсов
							<Album size={32} className='text-sky-700' />
						</h2>

						<p className='text-[16px] mt-2 text-center lg:text-start text-gray-600 leading-relaxed max-w-[500px]'>
							Изучайте наши специализированные курсы, разработанные для того,
							чтобы помочь вам освоить современные технологии и стать уверенными
							профессионалами в области программирования и разработки
							программного обеспечения.
						</p>
					</div>
					<button className='text-[16px] bg-sky-700 justify-self-end hover:bg-sky-800 text-white py-3 px-5 rounded-[10px] mt-4'>
						<a href='#format'>Как мы обучаем?</a>
					</button>
				</div>

				<div className='flex flex-col gap-8'>
					<div className='bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow'>
						<h3 className='text-[20px] font-semibold text-gray-800 mb-4 flex items-center gap-3'>
							<div className='bg-sky-700 text-white p-3 rounded-full'>
								<BrainCircuit size={20} />
							</div>
							Natural Language Processing
						</h3>
						<hr className='border-gray-200' />
						<p className='text-gray-600 leading-relaxed mt-4'>
							Наш курс по Natural Language Processing разработан для того, чтобы
							вы могли освоить навыки обработки естественного языка и стать
							уверенными компетентным профессионалом в этой области.
						</p>
					</div>

					<div className='bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow'>
						<h3 className='text-[20px] font-semibold text-gray-800 mb-4 flex items-center gap-3'>
							<div className='bg-sky-700 text-white p-3 rounded-full'>
								<Lightbulb size={20} />
							</div>
							Data Science
						</h3>
						<hr className='border-gray-200' />
						<p className='text-gray-600 leading-relaxed mt-4'>
							Мы предоставляем программу по направлению Data Science, которая
							поможет получить знания в этой области, создать собственные
							проекты и стать компетентным специалистом.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CoursesGeneral
