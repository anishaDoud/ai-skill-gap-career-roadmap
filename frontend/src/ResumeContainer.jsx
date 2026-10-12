
import { useState } from "react";
import Input from "./components/common/Input.jsx";
import { useNavigate} from "react-router-dom";

function ResumeContainer() {
  const navigate = useNavigate();
  const [uploadMessage, setUploadMessage] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);

  const handleResumeUpload = (event) => {     // NORMAL FILE SELECTION
    const file = event.target.files?.[0];

    if (!file) {
      setResumeFile(null);
      setUploadMessage("");
      return;
    }

    setResumeFile(file);
    setUploadMessage(`Selected: ${file.name}`);
    setIsDragging(false);
  };

  const handleDragOver = (event) => {    // DRAG OVER

    event.preventDefault();

    setIsDragging(true);
  };
  const handleDragLeave = (event) => {    // DRAG LEAVE

    event.preventDefault();

    setIsDragging(false);
  };
  
  const handleDrop = (event) => {    // DROP FILE

    event.preventDefault();

    setIsDragging(false);

    const file = event.dataTransfer.files?.[0];

    if (!file) {
      return;
    }

    setResumeFile(file);
    setUploadMessage(`Selected: ${file.name}`);
  };


 

  const submitResume = () => {     // SUBMIT RESUME
    if (!resumeFile) {

      setUploadMessage(
        "Please select a resume file first."
      );

      return;
    }

    setUploadMessage(
      `Resume uploaded successfully: ${resumeFile.name}`
    );
    navigate("/result");
    
  };

  const clearResume = () => {   // CLEAR RESUME

    setResumeFile(null);
    setUploadMessage("");
    setIsDragging(false);
  };


  return (

    <main className="resume-container">

      <div className="resume-upload-card">

        <p className="resume-badge">
          Welcome back
        </p>

        <h2>
          Add your details for AI Analysis
        </h2>

        <p className="resume-subtext">
          AI-powered skill gap analysis and personalized
          career recommendations.
        </p>
        {/* LinkedIn */}
        <Input
          text="📱 LinkedIn Profile"
          placeholder="Enter your LinkedIn ID"
          id="linkedinId"
        />
        {/* GitHub */}
        <Input
          text="🐙 GitHub Profile"
          placeholder="Enter your GitHub username"
          id="githubUsername"
        />
        {/* Resume Upload */}
        <label
          className={`upload-dropzone ${
            resumeFile ? "selected" : ""
          } ${
            isDragging ? "drag-over" : ""
          }`}

          htmlFor="resume-upload"

          onDragOver={handleDragOver}

          onDragLeave={handleDragLeave}

          onDrop={handleDrop}
        >

          <input
            id="resume-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeUpload}
          />


          <span className="upload-icon">
            ⬆️
          </span>


          <strong>

            {resumeFile
              ? "Resume Selected"
              : "Choose file or drag here"}

          </strong>


          <span>

            {resumeFile
              ? "Ready for AI analysis"
              : "PDF, DOC, or DOCX supported"}

          </span>


          <span className="upload-meta">

            {resumeFile
              ? "File Ready"
              : "Supported Formats"}

          </span>

        </label>


        {/* Buttons */}
        <div className="resume-actions">

          <button
            className="secondary-btn"
            type="button"
            onClick={clearResume}
          >
            Clear
          </button>

          <button
            className="primary-btn"
            type="button"
            onClick={submitResume}
          >
            Upload Resume
          </button>

        </div>


        {/* Message */}
        {uploadMessage && (

          <p
            className={`upload-message ${
              uploadMessage
                .toLowerCase()
                .includes("successfully")
                ? "success"
                : uploadMessage
                    .toLowerCase()
                    .includes("please select")
                ? "error"
                : ""
            }`}
          >
            {uploadMessage}
          </p>
        )}
      </div>
    </main>
  );
}

export default ResumeContainer;
