import { useState } from "react";

export default function SwornTranslator() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("Waiting for document...");
  const [progress, setProgress] = useState(0);
  const [translatedFile, setTranslatedFile] = useState(null);

  const handleUpload = (e) => {
    const uploaded = e.target.files[0];
    setFile(uploaded);
    setStatus("Document uploaded. Ready to translate.");
    setProgress(20);
  };

  const handleTranslate = () => {
    if (!file) return;

    setStatus("Translating...");
    setProgress(50);

    // Simulated translation (You can connect backend later)
    setTimeout(() => {
      setStatus("Finalizing translation...");
      setProgress(80);
    }, 1500);

    setTimeout(() => {
      setStatus("Translation complete! Download your document.");
      setProgress(100);
      setTranslatedFile("translated-document.pdf"); // Placeholder
    }, 3000);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        Sworn Translator Service
      </h1>

      <p className="text-gray-600 mb-6">
        Upload your document to receive an official sworn translation. 
        You can track your translation progress live.
      </p>

      {/* Upload Box */}
      <div className="border border-gray-300 rounded-xl p-6 bg-white shadow-sm">
        <label className="font-semibold text-gray-700">Upload Document</label>

        <input
          type="file"
          onChange={handleUpload}
          className="block w-full mt-3 border p-3 rounded-lg text-gray-600 
                     hover:bg-gray-100 cursor-pointer"
        />

        {file && (
          <p className="mt-2 text-sm text-green-700">
            ✔ {file.name} uploaded successfully
          </p>
        )}

        <button
          onClick={handleTranslate}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg 
                     hover:bg-blue-700 transition"
        >
          Start Translation
        </button>
      </div>

      {/* Status Section */}
      <div className="mt-6 p-5 border rounded-xl bg-gray-50">
        <p className="text-lg font-semibold text-gray-800 mb-3">
          Live Translation Status
        </p>

        <p className="text-gray-700 mb-4">{status}</p>

        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Download Section */}
      {translatedFile && (
        <div className="mt-6 p-5 border rounded-xl bg-green-50">
          <p className="text-lg font-semibold text-green-800">
            Your document is ready!
          </p>
          <a
            href="/translated-sample.pdf"
            download
            className="mt-3 inline-block px-5 py-3 bg-green-600 text-white 
                       rounded-lg hover:bg-green-700 transition"
          >
            Download Translated File
          </a>
        </div>
      )}
    </div>
  );
}
