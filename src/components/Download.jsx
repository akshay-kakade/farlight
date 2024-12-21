import { TiDevicePhone, TiDeviceLaptop } from "react-icons/ti";
import { FiDownload } from "react-icons/fi";

const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-yellow-400 flex flex-col items-center p-4">
      <h1 className="text-5xl font-bold mt-8">Download Our Game</h1>
      <p className="text-lg mt-4">Available for Android, iOS, and PC</p>

      <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <TiDevicePhone className="text-6xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Android</h2>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg font-medium bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-400 transition duration-300"
          >
            <FiDownload className="mr-2" /> Download
          </a>
        </div>

        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <TiDevicePhone className="text-6xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">iOS</h2>
          <a
            href="https://apps.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg font-medium bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-400 transition duration-300"
          >
            <FiDownload className="mr-2" /> Download
          </a>
        </div>

        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <TiDeviceLaptop className="text-6xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">PC</h2>
          <a
            href="https://www.microsoft.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg font-medium bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-400 transition duration-300"
          >
            <FiDownload className="mr-2" /> Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
