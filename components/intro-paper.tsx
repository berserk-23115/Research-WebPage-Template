import { GithubBtn, ArxivBtn, PDFBtn } from "./ImageBtn";
import data from "../data/data.json";
export default function introPaper(props: { name: string }) {
  return (
    <div>
      <div className="mt-10 mb-10">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl font-black font-sans ">Beyond Fake News</h1>
        </div>
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-medium font-sans ">
            A Machine Learning Approach
          </h2>
        </div>

        <div className="flex justify-center items-center mt-4 text-sky-600 text-sm gap-2">
            <h2 className="text-xl font-regular font-sans ">
              Author 1 <sup>*</sup>
            </h2>
            <h2 className="text-xl font-regular font-sans ">
              Author 2 <sup>*</sup>
            </h2>
            <h2 className="text-xl font-regular font-sans ">
              Author 3 <sup>*</sup>
            </h2>
            
        </div>

        <div className="flex justify-center items-center text-sm gap-4">
            <h2 className="text-xl font-regular font-sans ">Author 1 </h2>
            <h2 className="text-xl font-regular font-sans ">Author 2 </h2>
            <h2 className="text-xl font-regular font-sans ">Author 3 </h2>
        </div>

        <div className="flex justify-center items-center mt-4">
          <h4 className="text-xl font-medium font-sans ">Institute Name</h4>
        </div>
        <div className="flex justify-center items-center">
          <h4 className="text-xl font-medium font-sans ">
            Conference Name & Year
          </h4>
        </div>
        <h3 className="text-sm font-medium font-sans mt-4 flex justify-center items-center text-gray-400">
          * Represents Equal Contribution
        </h3>

        <div className="flex justify-center items-center mt-4 gap-2">
          <GithubBtn />
          <ArxivBtn />
          <PDFBtn />
        </div>
      </div>
    </div>
  );
}
