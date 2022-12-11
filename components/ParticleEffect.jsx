
const ParticleEffect = () => {
  return (
    <div className={`group flex items-center justify-center w-[220px] h-[220px] bg-transparent rotate-90 transform origin-center opacity-80`}>
        <div className={`group-hover:flex items-center justify-center w-[160px] h-[160px] transition bg-white group-hover:bg-gradient-to-r duration-1000 from-blue-600 to-yellow-400 rotate-45 transform origin-center overflow-hidden`}>
            <div className={`hidden group-hover:flex items-center justify-center w-[120px] h-[120px] bg-gradient-to-l from-red-600 to-blue-400 rotate-45 transform origin-center overflow-hidden`}>
                <div className={`hidden group-hover:flex items-center justify-center w-[80px] h-[80px] bg-gradient-to-r from-yellow-600 to-blue-400 rotate-45 transform origin-center overflow-hidden`}>
                    <div className={`hidden group-hover:flex items-center justify-center w-[60px] h-[60px] bg-gradient-to-l from-blue-600 to-red-400 rotate-45 transform origin-center overflow-hidden`}>
                        <div className={`hidden group-hover:flex items-center justify-center w-[40px] h-[40px] bg-gray-200 -rotate-45 transform origin-center`}></div>
                    </div>
                    {/* <div className={`absolute w-[80px] h-[80px] bg-red-400 rotate-45 transform origin-bottom-left`}></div> */}

                 </div>
            </div>
        </div>
    </div>
  );
};

export default ParticleEffect;
