import logo from "./logo.svg";
import "./App.css";

function App(props) {
  const { employee } = props;

  return (
    <div className="container">
      <div className="Profile">
        <img src={employee.profileImg} alt="Profile_img" className="img" />
        <h2>{employee.name}</h2>
        <p>Location</p>
        <h3>{employee.location}</h3>
        <p>Blood Group</p>
        <h3>{employee.bloodGroup}</h3>
        <p>Age</p>
        <h3>{employee.age}</h3>
      </div>
    </div>
  );
}

export default App;
