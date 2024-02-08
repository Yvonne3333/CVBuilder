import "./cVBuilder.css";
import logo from "../assets/CV_Builder_Logo4x 6.png";
import { Link } from "react-router-dom";
import cuate from "../assets/cuate.png";
const Frame = () => {
  return (
    <>
      <div className="container">
        <div className="section1">
          <p className="heading1" style={{fontSize:"80px", fontWeight:"800"}}>
            <strong>Vehicula Sitel <br /> Ementum Tellus
          </strong></p>
          <p className="frameP">
            Egesta id sed tellus nibh mattis lectus. <br />
            Commondo cras auctor est porttitor ac in sit in adipiscing.
          </p>
          <button className="button2">start Now</button>
          <img
            src={cuate}
            alt="girl_file_search"
            className="girl_file_search"
          />
        </div>

        <div className="section2">
          <div className="card1" >
            <h2 style={{color:"white" , textAlign:"left"}}>Vehicula sitelementum tellus</h2>
            <p style={{color:"white" , textAlign:"left"}}><br />
              Egestas id sed tellus nibhmattis lectus. <br /> 
              Commondo cras auctor est porttior ac in sit in adipiscing..
            </p>
            <button className="grid-btn">Learn More</button>
          </div>
          <div className="card2"></div>
        </div>

        <div className="section3">
          <h3>Praesent sodales auctor ipsum massa risus a.</h3>
        </div>

        <div class="grid-container">
          <div class="grid-item">
            <h2  style={{color:"white" , textAlign:"left"}}>Vehicula sitelementum tellus</h2>
            <p style={{color:"white" , textAlign:"left"}}>
              Egestas id sed tellus nibhmattis lectus. <br />
              Commondo cras auctor est porttior ac in sit in adipiscing..
            </p>
            <button className="grid-btn">Learn More</button>
          </div>
          <div class="grid-item item different-color"></div>

          <div class="grid-item item different-color"></div>
          <div class="grid-item">
            <h2  style={{color:"white", textAlign:"left"}}>Vehicula sitelementum tellus</h2>
            <p  style={{color:"white" , textAlign:"left"}}>
              Egestas id sed tellus nibhmattis lectus. <br />
              Commondo cras auctor est porttior ac in sit in adipiscing..
            </p>
            <button className="grid-btn">Learn More</button> 
          </div>
          
          <div class="grid-item">
            <h2  style={{color:"white" , textAlign:"left"}}>Vehicula sitelementum tellus</h2>
            <p  style={{color:"white" , textAlign:"left"}}>
              Egestas id sed tellus nibhmattis lectus. <br />
              Commondo cras auctor est porttior ac in sit in adipiscing..
            </p>
            <button className="grid-btn">Learn More</button>
          </div>
          <div class="grid-item different-color"></div>
        </div>

        <div className="section3">
          <p >Praesent Sodales auctor ipsum</p>
          <h3 style={{fontSize:"30px"}}> ipsum massa risus a.</h3>
        </div>

        <div class="grid-container1">
          <div class="grid-item1">
            <p>
              <strong>Vehicula sitelementum tellus</strong> <br />  <br />gestas id sed
              tellus nibhmattis lectus. Commodo cras auctor est porttitor ac in
              sit in adipiscing.,
            </p>
          </div>
          <div class="grid-item1">
            <p>
              <strong>Vehicula sitelementum tellus</strong> <br /> <br /> gestas id sed
              tellus nibhmattis lectus. Commodo cras auctor est porttitor ac in
              sit in adipiscing.,
            </p>
          </div>
          <div class="grid-item1">
            <p>
              <strong>Vehicula sitelementum tellus</strong> <br />  <br />gestas id sed
              tellus nibhmattis lectus. Commodo cras auctor est porttitor ac in
              sit in adipiscing.,
            </p>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#F5F5F5",
            padding: "40px 0 0 0",
            margin: "10% 0 0 0 ",
          }}
        >
          <div className="section7">
            <h4>
              Lectus Pretium sapien <br />
              ornare tincidunt.
            </h4>
            <a href="/" className="get-started">
              Get started today
            </a>
          </div>

          <div className="section4">
            <h3>Praesent sodales auctor.</h3>
            <p>Dolor Vitae</p>
          </div>
          <div>
            <table>
              <tr style={{ fontWeight: "bolder", fontSize: "18px" }}>
                <th>Donec</th>
                <th>Eget</th>
                <th>Molestie</th>
                <th>Eu cum</th>
                <th>Amet</th>
              </tr>

              <tr>
                <td>Viverra</td>
                <td>Platea</td>
                <td>Nulla</td>
                <td>Sit</td>
                <td>Parturient</td>{" "}
              </tr>

              <tr>
                <td>Varius</td>
                <td>In</td>
                <td>Ac p</td>
                <td>Otenti</td>
                <td>Eget</td>
              </tr>
              <tr>
                <td>Elementum</td>
                <td>Duis</td>
                <td>Amet</td>
                <td>At</td>
                <td>Varius</td>
              </tr>

              <tr>
                <td>Risus</td>
                <td>Mauris</td>
                <td>Facilisis</td>
                <td>Feugiat</td>
                <td>in</td>
              </tr>

              <tr>
                <td>Varius</td>
                <td>Varius</td>
                <td>Varius</td>
                <td>Varius</td>
                <td>Varius</td>
              </tr>

              <tr>
                <td>Nisi</td>
                <td>Varius</td>
              </tr>
            </table>
          </div>
          <br />
          <hr />
          <div>
            <footer>
              <Link>
                <img
                  src={logo}
                  alt="logo"
                  className="footer-logo"
                  style={{
                    height: "120px",
                    width: "150px",
                    margin: "1px 50px -20px -2px",
                  }}
                />
              </Link>
              <p style={{ textAlign: "left" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                dolor cum quos aspernatur, iure laudantium? Velit magnam earum
                molestiae, excepturi beatae iusto assumenda cupiditate libero
                omnis deleniti ullam numquam voluptates! Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Nemo sed adipisci delectus
                necessitatibus ad vero laudantium accusantium magni, quod omnis
                id, aliquam nam repudiandae reprehenderit velit nostrum
                obcaecati maxime facere! <br />
                <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis consequuntur ea cum placeat voluptatibus nobis sunt
                ullam et quas eligendi, nisi quia. At magnam ullam et eum ea
                expedita assumenda! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ducimus, libero suscipit accusamus excepturi
                temporibus sit? Eius cum ea, accusamus quam deleniti nam porro
                minus aliquid! <br />
                <br />
                Dolorum omnis consectetur eius obcaecati.l Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Assumenda deserunt molestiae
                voluptates dolores debitis corrupti illum atque similique nisi
                omnis est quo animi amet soluta facilis, sint natus sit commodi.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};
export default Frame;
