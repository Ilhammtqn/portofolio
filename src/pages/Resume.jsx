import { FaChartBar, FaPuzzlePiece, FaMousePointer, FaArrowRight } from "react-icons/fa";

const RESUME_ITEMS = [
  {
    icon: <FaChartBar className="text-purple-600 w-6 h-6" />,
    text: "Sarjana Ilmu Komputer",
  },
  {
    icon: <FaPuzzlePiece className="text-purple-600 w-6 h-6" />,
    text: "Sertifikasi Pengembang Web",
  },
  {
    icon: <FaMousePointer className="text-purple-600 w-6 h-6" />,
    text: "Sertifikasi Keahlian Framework Frontend",
  },
];

const ResumeItem = ({ icon, text }) => (
  <div className="flex items-center space-x-4">
    <div>{icon}</div>
    <p className="text-gray-700 font-medium">{text}</p>
  </div>
);

const Resume = () => {
  return (
    <section id="resume" className="min-h-screen bg-white px-6 py-20">
      <div className="container mx-auto grid w-full grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Left Side */}
        <div className="col-span-1">
          <h2 className="text-3xl font-bold text-gray-800">My Resume</h2>
          <p className="mb-4 mt-3 w-9/12 text-gray-600">
            Pengembang Web yang sangat terampil dan kreatif dengan pengalaman
            lebih dari 2 tahun dalam membangun situs web dan aplikasi web di Wikrama yang
            menarik secara visual dan fungsional.
          </p>
          <button className="flex items-center gap-2 text-gray-800 font-semibold hover:text-purple-600 transition-colors">
            lihat selengkapnya
            <FaArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Right Side */}
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((item, idx) => (
            <ResumeItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
