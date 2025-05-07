import React from "react";
import Work from "../assets/work.jpg"

const MainPage = () => {
  return (
    <section
      id="home"
      className="relative h-screen to-white flex items-center justify-center px-6"
    >
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-100 rounded-full opacity-50 blur-2xl z-0"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-30 blur-3xl z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl w-full">
        <div className="text-center md:text-left md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Welcome to My Personal Website</h1>
          <p className="text-lg text-gray-700">Saya M. Ilham Mutaqin, lulusan SMK Wikrama Bogor jurusan PPLG.
          Bersemangat untuk terus berkembang dan berkontribusi dalam tim yang dinamis serta siap menghadapi tantangan di dunia teknologi.</p>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={Work}
            alt="Profile"
            className="w-80 h-80 object-cover rounded-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
