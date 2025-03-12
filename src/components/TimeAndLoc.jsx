
const TimeAndLoc = ({weather: {formattedTime, name, country },}) => {
  return (
    <div>
        <div className='w-full flex items-center justify-center mt-5'>
            <p className='text-xl font-light '>{formattedTime}</p>
        </div>

        <div className='flex items-center justify-center mt-4'>
            <p className='text-3xl font-normal'>{`${name}, ${country}`}</p>
        </div>
    </div>
  )
}

export default TimeAndLoc