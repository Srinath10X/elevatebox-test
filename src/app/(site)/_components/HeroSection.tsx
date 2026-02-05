import { TextLoop } from "@/components/motion-primitives/text-loop";
import { TestimonialCarousel } from "./TestimonialCarousel";

export default function Hero() {
  const roles = [
    "Data Analyst",
    "Data Scientist",
    "Software Engineer",
    "Full Stack Developer",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-slate-200 text-sm mb-6">
          <span className="bg-orange-500 text-white px-2 py-0.5 rounded-full text-xs">
            NEW
          </span>
          Intensive 3.0 to 3x your placement chances
        </span>

        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
          A Proven Program <br />
          To Make You a{" "}
          <span className="text-orange-500 relative">
            <TextLoop>
              {roles.map((role) => (
                <span>{role}</span>
              ))}
            </TextLoop>
            <span className="custom-underline"></span>
          </span>
        </h1>

        <TestimonialCarousel />
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
        <h2 className="text-2xl font-semibold mb-6">
          Book a Live Demo <span className="text-indigo-600">For Free!</span>
        </h2>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Mobile Number (WhatsApp)
            </label>
            <input
              type="tel"
              placeholder="+91 Enter Mobile Number"
              className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p className="text-xs text-slate-500 mt-1">
              We follow a strict NO-SPAM policy
            </p>
          </div>

          <div>
            <label className="text-sm font-medium">Highest Qualification</label>
            <select className="w-full mt-1 px-4 py-2 border rounded-lg">
              <option>Select Highest Qualification</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Native State</label>
            <select className="w-full mt-1 px-4 py-2 border rounded-lg">
              <option>Enter your State</option>
            </select>
          </div>

          <p className="text-xs text-slate-500">
            By proceeding further, I agree to the{" "}
            <span className="text-indigo-600 underline">
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="text-indigo-600 underline">Privacy Policy</span>
          </p>

          <button
            type="button"
            className="w-full mt-4 bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Book Free Live Demo
          </button>
        </form>
      </div>
    </section>
  );
}
