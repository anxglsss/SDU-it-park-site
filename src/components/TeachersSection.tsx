import { GraduationCap } from 'lucide-react';

const TeachersSection = () => {
	return (
		<section id="teachers" className="py-16 px-4 md:px-16 lg:px-20 bg-white">
			<div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-3 mb-4">
					Наши преподаватели
					<GraduationCap size={34} className="mt-1 text-sky-700" />
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-2 md:mt-12">
					{/* Teacher 1 */}
					<div className="flex flex-col items-center text-center bg-gray-50 p-6 shadow-md rounded-lg">
						<img
							src="/path/to/teacher1.jpg" // Replace with the actual path to the teacher's image
							alt="Teacher 1"
							className="w-40 h-40 object-cover rounded-full mb-4"
						/>
						<p className="text-md text-gray-600 leading-relaxed">
							Иван Иванов — преподаватель с 10-летним опытом работы в области
							программирования. Помогает студентам развивать навыки в
							современных технологиях.
						</p>
					</div>

					{/* Teacher 2 */}
					<div className="flex flex-col items-center text-center bg-gray-50 p-6 shadow-md rounded-lg">
						<img
							src="/path/to/teacher2.jpg" // Replace with the actual path to the teacher's image
							alt="Teacher 2"
							className="w-40 h-40 object-cover rounded-full mb-4"
						/>
						<p className="text-md text-gray-600 leading-relaxed">
							Анна Смирнова — эксперт в области аналитики данных с многолетним
							опытом работы в международных компаниях. Учит применять знания в
							реальных проектах.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeachersSection;
