function LeftSection() {
  return (
    <div className="hidden md:flex w-1/2 h-screen relative overflow-hidden">
      
      {/*  Background Image */}
      <img
        src="/bg_img.jpeg" //  put your image in public folder
        alt="AI Background"
        className="absolute w-full h-full object-cover"
      />

      

      {/*  Dark Blue Overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      {/*  Glass Card */}
      <div className="relative z-40 m-auto w-[60%] h-[80%] 
bg-white/5 backdrop-blur-2xl opacity-55
rounded-3xl shadow-xl p-10 flex items-center justify-end pr-20
border border-white/20 ">

        
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
          AI That <br />
          <span className="Protest Riot">
            UNDERSTANDS
          </span>{" "}
          Your <br />
          <span className="font-extrabold">
            SPENDING.
          </span>
        </h1>

      </div>
    </div>
  );
}

export default LeftSection;
