import "./Home.css";
import food from "../../images/food.png";
import img0 from "../../images/undraw_breakfast_psiw.svg"

import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (
    <main>

      <section id="blobs" className="blob-triangle">
      <div className="title">
        <h1>Welcome to <div className="titleLogo">OfficeEats</div></h1>
      </div>
        <div className="blob1 blob">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            width="10rem"
          >
            <path
              fill="#1677FF"
              stroke="#4096FF" 
              stroke-width="8"              
              d="M49.2,-59.4C63.1,-47,73.3,-30.8,78.2,-12.3C83.2,6.1,83.1,27,74.1,43.1C65.2,59.1,47.4,70.4,28.2,77.4C8.9,84.4,-11.9,87.1,-30,81.1C-48.1,75.1,-63.5,60.3,-72.6,42.8C-81.7,25.2,-84.6,4.9,-81.2,-14.3C-77.7,-33.5,-68.1,-51.5,-53.5,-63.8C-38.9,-76.1,-19.5,-82.6,-0.9,-81.5C17.6,-80.4,35.3,-71.8,49.2,-59.4Z"
              transform="translate(100 100)"
            ></path>
            <image x="50" y="50" width="100" height="100" href={img0} />
          </svg>
          <h2>Odaberi obrok</h2>
        </div>
        <div className="row">
          <div className="blob2 blob" onClick={()=>{navigate("/HistoryOfMeals")}}>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              width="10rem"
            >
              <path
                fill="#1677FF"
                stroke="#4096FF" 
                stroke-width="8"
                d="M49.2,-59.4C63.1,-47,73.3,-30.8,78.2,-12.3C83.2,6.1,83.1,27,74.1,43.1C65.2,59.1,47.4,70.4,28.2,77.4C8.9,84.4,-11.9,87.1,-30,81.1C-48.1,75.1,-63.5,60.3,-72.6,42.8C-81.7,25.2,-84.6,4.9,-81.2,-14.3C-77.7,-33.5,-68.1,-51.5,-53.5,-63.8C-38.9,-76.1,-19.5,-82.6,-0.9,-81.5C17.6,-80.4,35.3,-71.8,49.2,-59.4Z"
                transform="translate(100 100)"
              ></path>
              <image x="50" y="50" width="100" height="100" href={food} />
            </svg>
            <h2>Istorija obroka</h2>
          </div>
          <div className="blob3 blob">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              width="10rem"
            >
              <path
                fill="#1677FF"
                stroke="#4096FF" 
                stroke-width="8"     
                d="M49.2,-59.4C63.1,-47,73.3,-30.8,78.2,-12.3C83.2,6.1,83.1,27,74.1,43.1C65.2,59.1,47.4,70.4,28.2,77.4C8.9,84.4,-11.9,87.1,-30,81.1C-48.1,75.1,-63.5,60.3,-72.6,42.8C-81.7,25.2,-84.6,4.9,-81.2,-14.3C-77.7,-33.5,-68.1,-51.5,-53.5,-63.8C-38.9,-76.1,-19.5,-82.6,-0.9,-81.5C17.6,-80.4,35.3,-71.8,49.2,-59.4Z"
                transform="translate(100 100)"
              ></path>
              <image x="50" y="50" width="100" height="100" href={food} />
            </svg>
            <h2>Danasnji obrok</h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
