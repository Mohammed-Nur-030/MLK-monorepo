import React from 'react';

interface FilterExtraProps {
  AdditionalData: { id: number; title: string }[];
  extra: string;
  setExtra: React.Dispatch<React.SetStateAction<string>>;
}

const FilterExtra: React.FC<FilterExtraProps> = ({ AdditionalData, extra, setExtra }) => {
  //console.log("AdditionalData");
  //console.log(AdditionalData);

  const filterHandler = (title: string) => {
    setExtra(title);
  };

  return (
    <div className=' '>
      <div className="filter-section flex flex-wrap pt-6 justify-center">
        {AdditionalData?.map((data) => (
          <div className="w-full my-2 filter-btn" key={data.id}>
            <div
              className={`cursor-pointer text-sm md:text-base lg:text-lg xl:text-xl px-2 py-1 rounded-md font-medium 
                                        text-white bg-yellow-200 hover:bg-opacity-60 border-2 transition-all duration-300
                                        ${extra === data.title ?
                "bg-opacity-80 border-white" :
                "bg-opacity-40 border-transparent"}
                                        w-[80%]
                                        mx-auto
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

export default FilterExtra;
