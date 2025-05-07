import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Project1 from "../assets/UI.png"
import Project2 from "../assets/sip.png"

const Projects = () => {
  const projects = [
    {
      title: "UI Page",
      description: "Halaman promosi untuk situs penjualan ticket, termasuk pengembangan formulir.",
      image: Project1,
    },
    {
      title: "Web Development",
      description: "Web SIP (Sistem Informasi Penjualan) untuk mempermudah proses penjualan dan manajemen data.",
      image: Project2,
    },
  ]

  return (
    <section id="projects" className="min-h-screen px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={200}
        slidesPerView={4}
        navigation
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
