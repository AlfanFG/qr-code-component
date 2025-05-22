import "./App.css";
import QrCode from "./assets/image-qr-code.png";

function App() {
  return (
    <>
      <div className="card">
        <img className={"image"} src={QrCode} />
        <div className="content">
          <h2 className="title">
            Improve your front-end skills by building projects
          </h2>
          <p className="description">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to next level
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
