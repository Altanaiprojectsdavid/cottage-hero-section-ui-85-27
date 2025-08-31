
const GallerySection = () => {
  return <div className="w-full py-[100px] lg:py-[200px] px-4 lg:px-6 bg-black/[0.02] border-t border-b border-black/[0.05] flex justify-center items-start">
      <div className="flex-1 max-w-[1600px] flex flex-col justify-start items-center gap-12 lg:gap-20">
        {/* Header */}
        <div className="w-full flex flex-col justify-start items-center gap-4">
          <div className="w-full text-center text-black/50 text-xs font-dm-mono font-medium uppercase tracking-wider-2 leading-[16.32px]">
            Gallery
          </div>
          <div className="w-full max-w-[480px] text-center text-black text-2xl lg:text-3xl xl:text-[48px] font-space-grotesk font-normal uppercase leading-tight lg:leading-tight xl:leading-[51.84px]">
            Explore Digital Property Assets
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="w-full flex flex-col gap-4 lg:gap-6">
          {/* First Row */}
          <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-6">
            {/* Left column with two stacked images */}
            <div className="w-full lg:flex-1 lg:max-w-[330px] flex flex-col gap-4 lg:gap-6">
              <img className="w-full h-[250px] lg:h-[330px] rounded-[20px] lg:rounded-[40px] object-cover" src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=330&h=330&q=80" alt="Digital dashboard interface" />
              <img className="w-full h-[250px] lg:h-[330px] rounded-[20px] lg:rounded-[40px] object-cover" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=330&h=330&q=80" alt="Blockchain transaction view" />
            </div>
            {/* Right large image */}
            <img className="w-full lg:flex-1 h-[300px] lg:h-[684px] rounded-[20px] lg:rounded-[40px] object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1038&h=684&q=80" alt="Platform overview screen" />
          </div>

          {/* Second Row - Full width with platform demo overlay */}
          <div className="w-full h-[500px] lg:h-[800px] p-4 lg:p-6 rounded-[20px] lg:rounded-[40px] flex flex-col justify-center items-center bg-cover bg-center" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1392&h=800&q=80)'
        }}>
            <div className="w-full max-w-[400px] lg:max-w-[480px] px-4 lg:px-6 py-6 lg:py-10 bg-glass-gradient backdrop-blur-[10px] rounded-2xl lg:rounded-3xl border border-white/20 shadow-[0px_24px_32px_rgba(0,0,0,0.05)] flex flex-col justify-start items-center gap-4 lg:gap-6">
              <div className="w-full flex flex-col justify-start items-center gap-3 lg:gap-4">
                <div className="w-full text-center text-white/65 text-xs font-dm-mono font-medium uppercase tracking-wider-2 leading-[16.32px]">
                  Live Demo
                </div>
                <div className="w-full max-w-[400px] lg:max-w-[480px] text-center text-white text-2xl lg:text-3xl xl:text-[48px] font-space-grotesk font-normal uppercase leading-tight lg:leading-tight xl:leading-[51.84px]">TRY OUR PLATFORM </div>
              </div>
              <button className="px-3 py-2 bg-white shadow-[0px_16px_24px_rgba(0,0,0,0.03)] rounded-full backdrop-blur-[7.5px] flex justify-center items-center gap-1.5">
                <div className="text-center text-black text-xs font-dm-mono font-medium uppercase tracking-wider-2 leading-[16.32px]">
                  Launch Demo
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default GallerySection;
