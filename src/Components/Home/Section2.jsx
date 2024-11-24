import logo from '/public/logo.png'

function Section2() {
  return (
    <div>
        <div className="h-full w-full bg-[#FFFFFF]">
            <img className='mt-20 ml-4 h-[300px] w-[300px]' src={logo} alt="logo" />



        </div>
        <div className='items-center justify-center flex w-full h-full'>
        <button className='text-white hover:text-[#FB1159] bg-[#FB1159] hover:bg-white rounded-md mt-20 font-semibold  text-sm border border-[#FB1159] p-5 '>View All Articles & News</button>
        </div>
    </div>
  )
}

export default Section2
