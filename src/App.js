import React, { useState } from "react";
import { uploadResume } from "./api"; // Import API function

function App() {
    const [file, setFile] = useState(null);
    const [response, setResponse] = useState("");

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
      if (!file) {
          alert("⚠️ Please select a resume file first!");
          return;
      }
  
      const result = await uploadResume(file);
      console.log("API Result:", result); // ✅ Debugging log
  
      // ✅ Ensure correct field is used
      setResponse(result.response || result.error || "No response from AI.");
  };
  

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>📄 AI Resume Analyzer 🚀</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} style={{ marginLeft: "10px" }}>
                Upload Resume
            </button>
            <div style={{ marginTop: "20px" }}>
                <h2>🔍 AI Feedback:</h2>
                <p>{response || "Upload a resume to get AI feedback!"}</p>
            </div>
        </div>
    );
}

export default App;
