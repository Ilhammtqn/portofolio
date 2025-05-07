import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Hubungi Kami</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Siap untuk memulai? Silakan hubungi kami melalui formulir di bawah ini
          dan mari kita mulai perjalanan menuju inovasi dan kesuksesan.
        </p>
      </div>
      <div className="container mx-auto border border-gray-200 rounded-lg shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-0">
          {/* Informasi Kontak */}
          <div className="col-span-3 bg-gray-900 text-white p-8 rounded-l-lg">
            <h2 className="text-2xl font-semibold mb-4">Informasi Kontak</h2>
            <p className="text-gray-400 mb-8">
              Isi formulir ini dan tim kami akan menghubungi Anda dalam 24 jam.
            </p>

            <div className="flex items-center gap-4 mb-4">
              <FiPhone className="text-xl" />
              <span>+62 812 9025 5803</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <FiMail className="text-xl" />
              <span>ilhammmutaqinnn@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <FiMapPin className="text-xl" />
              <span>Bogor, Jawa Barat</span>
            </div>

            <div className="flex gap-4">
              <a href="https://www.linkedin/in/milhammutaqin" className="text-white hover:text-purple-400">
                <FaLinkedin />
              </a>
              <a href="#" className="text-white hover:text-purple-400">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-purple-400">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Formulir Kontak */}
          <div className="col-span-4 p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block mb-1 font-medium text-gray-700">Nama Depan</label>
                  <input
                    type="text"
                    name="first-name"
                    placeholder="cth. Ilham"
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-700">Nama Belakang</label>
                  <input
                    type="text"
                    name="last-name"
                    placeholder="cth. Mutaqin"
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block mb-1 font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="cth. ilham@email.com"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-1 font-medium text-gray-700">Pesan Anda</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tulis pesan Anda di sini..."
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
