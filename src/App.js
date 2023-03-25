import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <header id="header">
    <div className="d-flex flex-column">

      <div className="profile" style={{marginTop:"30px"}}>
        <h1 className="text-light"><a href="index.html">Muhammad Nazir</a></h1>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#projects" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Projects</span></a></li>
          <li><a href="#certificates" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Certificates</span></a></li>
          
        </ul>
      </nav>
    </div>
  </header>

  <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container" data-aos="fade-in">
      <h1>Muhammad Nazir</h1>
      <p>Computer Science Student <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
    </div>
  </section>

  <main id="main">
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p style={{textAlign:"justify",padding:"20px"}}>I am a highly motivated computer science student with a deep passion for programming and a particular interest in web development. Through my studies, I have gained proficiency in various programming languages such as C++, C#, and Python, as well as modern web development technologies such as HTML, CSS, JavaScript, React JS, Node.js, and SQL. I have made many desktop applications including Hospital Management System, Distribution Management System and Learning management System. </p>
          <p style={{textAlign:"justify",padding:"20px"}}>  I am continuously exploring emerging web technologies to stay up-to-date with the latest trends in the field. I am driven by my desire to make a positive impact in the world through the development of innovative and useful software applications that can solve real-world problems. I am committed to using my skills, knowledge, and creativity to contribute to society and make a meaningful difference.</p>
        </div>

        <div className="section-title">
        <h2>Programmer &amp; Web Developer.</h2>
        <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>June 21, 2002</span></li>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>0310 6550274</span></li>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Lahore Pakistan</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BS Computer Science</span></li>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Email:</strong>naziraliashraf@gmail.com<span></span></li>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </section>
   
    <section id="skills" className="skills section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          <p>Driven by passion, empowered by skills - creating innovative software solutions for a better world</p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6" data-aos="fade-up">

            <div className="progress">
              <span className="skill">HTML</span>
              <progress id="file" value="80" max="100" style={{marginRight:"5px"}}> 80% </progress>
              <i className="val">80%</i>
            </div>

            <div className="progress">
              <span className="skill">CSS</span>
              <progress id="file" value="80" max="100" style={{marginRight:"5px"}}> 80% </progress>
              <i className="val">80%</i>
            </div>

            <div className="progress">
              <span className="skill">Javascript</span>
              <progress id="file" value="70" max="100" style={{marginRight:"5px"}}> 70% </progress>
              <i className="val">70%</i>
            </div>
            {/* <div className="progress">
              <span className="skill">React Js</span>
              <progress id="file" value="80" max="100" style={{marginRight:"5px"}}> 80% </progress>
              <i className="val">80%</i>
            </div> */}
            <div className="progress">
              <span className="skill">Python</span>
              <progress id="file" value="85" max="100" style={{marginRight:"5px"}}> 85% </progress>
              <i className="val">85%</i>
            </div>
            <div className="progress">
              <span className="skill">PyQt</span>
              <progress id="file" value="85" max="100" style={{marginRight:"5px"}}> 85% </progress>
              <i className="val">85%</i>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

            {/* <div className="progress">
              <span className="skill">Node Js</span>
              <progress id="file" value="80" max="100" style={{marginRight:"5px"}}> 80% </progress>
              <i className="val">80%</i>
            </div> */}

            <div className="progress">
              <span className="skill">SQL</span>
              <progress id="file" value="80" max="100" style={{marginRight:"5px"}}> 80% </progress>
              <i className="val">80%</i>
            </div>

            {/* <div className="progress">
              <span className="skill">React Native</span>
              <progress id="file" value="70" max="100" style={{marginRight:"5px"}}> 70% </progress>
              <i className="val">70%</i>
            </div> */}

            <div className="progress">
              <span className="skill">C++</span>
              <progress id="file" value="90" max="100" style={{marginRight:"5px"}}> 90% </progress>
              <i className="val">90%</i>
            </div>
            <div className="progress">
              <span className="skill">C#</span>
              <progress id="file" value="90" max="100" style={{marginRight:"5px"}}> 90% </progress>
              <i className="val">90%</i>
            </div>
            <div className="progress">
              <span className="skill">Windows Form</span>
              <progress id="file" value="90" max="100" style={{marginRight:"5px"}}> 90% </progress>
              <i className="val">90%</i>
            </div>
            <div className="progress">
              <span className="skill">Wordpress</span>
              <progress id="file" value="90" max="100" style={{marginRight:"5px"}}> 90% </progress>
              <i className="val">90%</i>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Muhammad Nazir</h4>
              <p><em>An accomplished computer science student with diverse skills in programming and web development, dedicated to developing innovative solutions that prioritize user experience.</em></p>
              <ul>
                <li>Lahore Pakistan</li>
                <li>03106550274</li>
                <li>naziraliashraf@gmail.com</li>
                <li><a href="https://www.linkedin.com/in/muhammad-nazir-381124257">LinkedIn Profile</a></li>
                <li><a href="https://github.com/Muhaammad-Nazir4">GitHub</a></li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelors of Computer Science</h4>
              <h5>2021 - 2025</h5>
              <p><em>University of Engineering & Technology, Lahore</em></p>
              <h4>Subjects</h4>
              <p><em>Programming Fundamentals</em></p>
              <p><em>Object Oriented Programming</em></p>
              <p><em>Data Structures and Algorithm</em></p>
              <p><em>Design and Analysis of Algorithm</em></p>
              <p><em>Database System</em></p>
              <p><em>Operating System</em></p>
              <p><em>Digital Logic Design</em></p>
              <p><em>Computer Organization & Assembly Language</em></p>
            </div>
            <div className="resume-item">
              <h4>Managening the Company of Future - Coursera</h4>
              <h5>June 2022-July 2022</h5>
            </div>
            <div className="resume-item">
              <h4>Intermediate Pre-Engineering</h4>
              <h5>2019 - 2021</h5>
              <p><em>Muhammad Ali Jinnah College, Faisalabad</em></p>
              <h4>Subjects</h4>
              <p><em>Physics</em></p>
              <p><em>Mathematics</em></p>
              <p><em>Chemistry</em></p>
            </div>

          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <br /><br />
          <div className="resume-item">
              <h4>Matriculation (Science Group)</h4>
              <h5>2019 - 2021</h5>
              <p><em>Muhammad Ali Jinnah School, Faisalabad</em></p>
              <h4>Subjects</h4>
              <p><em>Physics</em></p>
              <p><em>Mathematics</em></p>
              <p><em>Chemistry</em></p>
            </div>

            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Teaching Assistant(Object Oriented Programming)</h4>
              <h5>March 2023 - Present</h5>
              <a href="https://uet.edu.pk/"><p><em>University Of Engineering & Technology, Lahore</em></p></a>
              <ul>
                <li>As a teacher assistant for object oriented programming at UET Lahore, I have helped numerous students develop their oop skills and achieve success in their coursework.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Member of HackClub at UET, Lahore</h4>
              <h5>February 2023 - Present</h5>
              <a href="https://apacdirectory.hackclub.com/club/uet"><p><em>HackClub UET</em></p></a>
              <ul>
                <li>My approach of learning full-stack development involves increasing my skills and help other students develop a deep understanding of the underlying concepts and principles that drive modern web applications.</li>
              </ul>
            </div>

          </div>
          
        </div>
        <section id="projects" className='projects'>
        <div className="section-title">
        <h2>Projects</h2>
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>Learning Management System</h4>
        <p style={{textAlign:"justify",paddingLeft:"20px"}}><a href="https://github.com/Muhaammad-Nazir4/Semester4-Learning-Management-System-using-SQL-and-C-" >CHECK HERE</a></p>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>February 2023-March 2023</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>The Learning Management System is a software application built using WinForm, C# and SQL technologies, designed to help institutions manage clo's and assessments and evaluation of students through a digital platform. This system facilitates the organization and delivery of courses, and enables instructors to interact with their students and manage attendance of studnts.</p>
        <br /><br />
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>Distribution Management System</h4>
        <p style={{textAlign:"justify",paddingLeft:"20px"}}><a href="https://github.com/Muhaammad-Nazir4/Semester3-Drug-Distribution-Management-System-using-python-PyQt-" >CHECK HERE</a></p>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>October 2022- January 2022</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>The Distribution Management System is a software application built using Python and PyQt technologies, designed to manage the distribution of medicines and services to customers. This system facilitates the tracking of riders , delivery schedules, and customer orders, enabling organizations to optimize their distribution processes, control fuel consumption and improve overall efficiency. </p>
        <br /><br />
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>Articles and Books Managening Project</h4>
        <p style={{textAlign:"justify",paddingLeft:"20px"}}><a href="https://github.com/Muhaammad-Nazir4/Semester3--Articles-and-Books-Managening-Project-using-Python-PyQt-" >CHECK HERE</a></p>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>August 2022- October 2022</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>The Distribution Management System is a software application built using Python and PyQt technologies, designed to manage the distribution of medicines and services to customers. This system facilitates the tracking of riders , delivery schedules, and customer orders, enabling organizations to optimize their distribution processes, control fuel consumption and improve overall efficiency. </p>
        <br /><br />
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}> Hospital Management System(Winforms)</h4>
        <p style={{textAlign:"justify",paddingLeft:"20px"}}><a href="https://github.com/Muhaammad-Nazir4/Semester2-Hospital-Management-System-using-C-and-Winforms" >CHECK HERE</a></p>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>March 2022-July 2022</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>The Hospital Management System is a software application built using WinForm technology, designed to help healthcare institutions manage patient data, appointments, medical records. This system streamlines hospital operations, enabling healthcare providers to deliver better patient care and improve overall efficiency. </p>
        <br /><br />
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>Hospital Management System(C++)</h4>
        <p style={{textAlign:"justify",paddingLeft:"20px"}}><a href="https://github.com/Muhaammad-Nazir4/Semester1-Project-Hospital-Management-System" >CHECK HERE</a></p>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>November 2021-February 2022</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>The Hospital Management System is a command-line based software application built using C++ technology, designed to help healthcare institutions manage patient information, appointments, and medical records. This system provides basic functionality for hospital operations, such as patient registration, record-keeping, and scheduling, in a simple and easy-to-use format. </p>
        </div>
        </section> 

        <section id="certificates" className='certificates'>
        <div className="section-title">
        <h2>Certificates</h2>
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>SQL Intermediate Certificate - By HackerRank</h4>
        <p style={{textAlign:"justify",paddingLeft:"20px"}}><a href="https://www.hackerrank.com/certificates/14f9541a6985" >CHECK HERE</a></p>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>Feb 2023</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>Microsoft SQL Server · SQL Server Management Studio · Transact-SQL (T-SQL) · MySQL</p>
        <br />
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>SQL Basic Certificate - By HackerRank</h4>
        <p style={{textAlign:"justify",paddingLeft:"20px"}}><a href="https://www.hackerrank.com/certificates/a151aede54f8" >CHECK HERE</a></p>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>Feb 2023</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>Microsoft SQL Server · SQL Server Management Studio · Transact-SQL (T-SQL) · SQL</p>
        <br />
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>Certificate of Completition - By DevTown</h4>
        <p style={{textAlign:"justify",paddingLeft:"20px"}}><a href="https://cert.devtown.in/verify/1gTpVW" >CHECK HERE</a></p>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>January 2023</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>Full Stack development · Html · CSS · Javascript</p>
        <br />
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>Typing Certificate - By ratatype</h4>
        <p style={{textAlign:"justify",paddingLeft:"20px"}}><a href="https://www.ratatype.com/u4080387/certificate/" >CHECK HERE</a></p>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>September 2022</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>98.6% Accuracy</p>
        </div>
        </section> 
      </div>
    </section>
  </main>
    </div>
  );
}

export default App;
