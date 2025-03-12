import React from 'react'

const TopButtons = ({setquery}) => {

  
  const cities = [
    {
      id:1,
      name:"London",
    },
    {
      id:2,
      name:"Mumbai",
    },
    {
      id:3,
      name:"Sydney",
    },
    {
      id:4,
      name:"Delhi",
    },
    {
      id:5,
      name:"Toronto",
    },
  ];

  return (
    <div className="flex items-center justify-around my-1 w-auto">
      {cities.map((city) =>(
          <button 
            key={city.id} 
            className='text-2xl font-medium hover:bg-slate-600/40 hover:font-normal hover:text-white px-5 py-1 rounded-md transition ease-in'
            onClick={() => setquery({q: city.name})}
            >
            {city.name}
          </button>
        ))}
    </div>
  )
}

export default TopButtons