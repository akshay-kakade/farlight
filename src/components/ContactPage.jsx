import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <div  className="min-h-screen  bg-blue-50 text-black flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-8">
        Got questions or feedback about Farlight 84? We would love to hear from
        you!
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <label className="block mb-4">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mt-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </label>
        <label className="block mb-4">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mt-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </label>
        <label className="block mb-4">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 mt-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-full p-2 mt-4 bg-yellow-500 text-gray-900 font-bold rounded hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Submit
        </button>
      </form>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">
          Stay connected with us on our social media channels:
        </h2>
        <ul className="list-none">
          <li className="mb-2">
            <a
              href="https://twitter.com/Farlight84"
              className="text-yellow-500 hover:text-yellow-400"
            >
              Twitter: @Farlight84
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.instagram.com/Farlight84"
              className="text-yellow-500 hover:text-yellow-400"
            >
              Instagram: @Farlight84
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.facebook.com/Farlight84"
              className="text-yellow-500 hover:text-yellow-400"
            >
              Facebook: facebook.com/Farlight84
            </a>
          </li>
        </ul>
      </div>

      <p>
        -------------------------------------------------------------------------------------------
      </p>

      <footer className="mt-2 text-gray-600">
        <p>© 2024 Farlight Games. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
