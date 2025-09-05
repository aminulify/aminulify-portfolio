import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { GoArrowRight } from "react-icons/go";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const servicesList = [
  "Brand Identity Design",
  "Brand Style Guide and Brand Book",
  "Social Media Carousel Post Design",
  "Modern Animated Web UI/UX Design",
  "Figma Design to Website Development",
  "Web Application Development",
];

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [showServices, setShowServices] = useState(false);
  const [budget, setBudget] = useState("");

  const toggleServiceList = () => setShowServices(!showServices);

  const handleServiceClick = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const contact = e.target.contact.value;
    const companyName = e.target.companyName.value;
    const industry = e.target.industry.value;
    const message = e.target.message.value;
    const services = selectedServices.join(", ");

    const formData = { name, email, contact, message, companyName, industry, services:[services], budget };

    emailjs
      .send("service_93mlf7b", "template_b1ywtdh", formData, "zD29NRoqRu1DD1tM9")
      .then(
        () => {
          e.target.reset();
          setSelectedServices([]);
          setBudget("");
          toast.success("Send Successfully");
        },
        (error) => {
          console.error(error);
          toast.error("Something went wrong!");
        }
      );
  };

  return (
    <section>
      <ToastContainer style={{ width: "250px" }} />

      <form
        onSubmit={handleSubmit}
        className="relative max-w-2xl mx-16 md:mx-auto top-aos md:my-16 my-10"
      >
        <h2 className="text-center text-white text-[26px] md:text-3xl my-5 font-semibold">
          Contact{" "}
          <span className="text-[var(--mainColor)]">
            Me
            <span className="pl-[1px] font-bold text-3xl md:text-[35px]">.</span>
          </span>
        </h2>

        {/* Name */}
        <div>
          <label className="text-[var(--mainColor)]">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="bg-transparent border border-[var(--mainColor)] w-full p-2 rounded-sm text-white outline-none mt-[1px] backdrop-blur-md"
          />
        </div>

        {/* Email + Contact */}
        <section className="grid md:grid-cols-2 grid-cols-1 md:gap-8">
          <div className="py-2">
            <label className="text-[var(--mainColor)]">Email</label>
            <input
              type="text"
              name="email"
              placeholder="example@example.com"
              className="bg-transparent border border-[var(--mainColor)] w-full p-2 rounded-sm text-white outline-none mt-[1px] backdrop-blur-md"
            />
          </div>
          <div className="pb-2 md:py-2">
            <label className="text-[var(--mainColor)]">Contact</label>
            <input
              type="text"
              name="contact"
              placeholder="Enter your phone number"
              className="bg-transparent border border-[var(--mainColor)] w-full p-2 rounded-sm text-white outline-none mt-[1px] backdrop-blur-md"
            />
          </div>
        </section>

        <section className="grid md:grid-cols-2 grid-cols-1 md:gap-8">
          <div className="py-2">
            <label className="text-[var(--mainColor)]">Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Enter your company name"
              className="bg-transparent border border-[var(--mainColor)] w-full p-2 rounded-sm text-white outline-none mt-[1px] backdrop-blur-md"
            />
          </div>
          <div className="pb-2 md:py-2">
            <label className="text-[var(--mainColor)]">Business Industry</label>
            <input
              type="text"
              name="industry"
              placeholder="Enter your business industry"
              className="bg-transparent border border-[var(--mainColor)] w-full p-2 rounded-sm text-white outline-none mt-[1px] backdrop-blur-md"
            />
          </div>
        </section>

        {/* Select Services (Accordion Style) */}
        <div className="pb-2 md:py-2">
          <label className="text-[var(--mainColor)]">Select Services:</label>
          <button
            type="button"
            onClick={toggleServiceList}
            className="w-full text-left px-2 py-2 bg-[var(--mainColor)] text-white rounded-sm mt-1"
          >
            {selectedServices.length > 0
              ? `Selected: ${selectedServices.join(", ")}`
              : "Click to select services"}
          </button>

          {showServices && (
            <ul className="bg-gray-800 mt-2 p-2 rounded-sm">
              {servicesList.map((service) => (
                <li
                  key={service}
                  onClick={() => handleServiceClick(service)}
                  className={`cursor-pointer p-2 rounded-sm mb-1 ${
                    selectedServices.includes(service)
                      ? "bg-[var(--mainColor)] text-white"
                      : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                  }`}
                >
                  {service}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Budget */}
        <div className="pb-2 md:py-2">
          <label className="text-[var(--mainColor)]">Select your project budget:</label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="bg-[var(--mainColor)] border border-[var(--mainColor)] w-full p-2 rounded-sm text-white outline-none mt-[1px] backdrop-blur-md cursor-pointer"
            required
          >
            <option value="">Select your budget</option>
            <option value="$99 - $399">$99 - $399</option>
            <option value="$400 - $1K">$400 - $1K</option>
            <option value="$1K - $2K">$1K - $2K</option>
            <option value="$2K - $5K">$2K - $5K</option>
            <option value="$5K - $10K">$5K - $10K</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="text-[var(--mainColor)]">Description</label>
          <textarea
            type="text"
            name="message"
            rows={4}
            placeholder="Write project details here..."
            className="bg-transparent border border-[var(--mainColor)] w-full p-2 rounded-sm text-white outline-none mt-[1px] backdrop-blur-md"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="icon-style flex gap-[1px] items-center bg-[var(--mainColor)] btn px-8 py-3 mt-4 rounded-sm text-white md:mb-0 mb-32"
        >
          Send <GoArrowRight className="icon" />
        </button>
      </form>
    </section>
  );
};

export default Contact;
