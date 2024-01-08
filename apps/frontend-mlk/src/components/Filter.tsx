import React from 'react';

interface FilterProps {
  filterData: { id: number; title: string }[];
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  veg: boolean;
  setVeg: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter: React.FC<FilterProps> = ({ filterData, category, setCategory, veg, setVeg }) => {
  const filterHandler = (title: string) => {
    setCategory(title);
  };

  const getButtonStyle = (isActive: boolean) => {
    return `cursor-pointer text-sm md:text-base lg:text-lg xl:text-xl px-2 py-1 rounded-md font-medium 
            text-white bg-yellow-100 hover:bg-opacity-60 border-2 transition-all duration-300
            ${isActive ? 'bg-opacity-80' : 'bg-opacity-40 border-transparent'}
            w-[80%]
            mx-auto`;
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-4">
        <div
          onClick={() => setVeg(true)}
          className={getButtonStyle(veg)}
        >
          Veg
        </div>
        <div
          onClick={() => setVeg(false)}
          className={getButtonStyle(!veg)}
        >
          Non Veg
        </div>
      </div>

      <div className="filter-section flex flex-wrap justify-center items-start py-6">
        {filterData.map((data) => (
          <div className="filter-btn w-full my-2" key={data.id}>
            <div
              className={`
                ${getButtonStyle(category === data.title)}
              `}
              onClick={() => filterHandler(data.title)}
            >
              {data.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
