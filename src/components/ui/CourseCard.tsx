import React from "react";

interface CourseCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  Icon,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow group cursor-pointer">
      <h3 className="text-[20px] font-semibold text-gray-800 mb-4 flex items-center gap-3">
        <div className="bg-sky-700 text-white p-3 rounded-full">
          <Icon size={20} />
        </div>
        {title}
      </h3>
      <hr className="border-gray-200" />
      <p className="text-gray-600 leading-relaxed mt-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[500px] transition-all duration-500 ease-in-out overflow-hidden">
        {description}
      </p>
    </div>
  );
};

export default CourseCard;
