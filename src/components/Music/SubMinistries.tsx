import React from "react";

const SubMinistries: React.FC = () => {
  return (
    <section className="py-5 bg-light sub-ministries-section">
      <div className="container">
        <h2 className="section-title text-center">Our Musical Ensembles</h2>
        <p className="text-center lead mb-5">Within the Music Ministry, various teams come together to lead MUTCU in worship and praise. Click on the images to see more!</p>

        <div className="row">
          {/* Choir */}
          <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="sub-ministry-card p-4 rounded-3 shadow-sm h-100">
              <div className="card-image-container mb-4">
                <a href="#" className="d-block" data-bs-toggle="modal" data-bs-target="#imageModal1">
                  <img src="/assets/images/music1.jpg" alt="MUTCU Choir" className="img-fluid rounded-3" />
                </a>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-users-line choir-icon me-3"></i>
                <h3 className="card-title mb-0">Choir</h3>
              </div>
              <p>The MUTCU Choir leads congregational singing and presents special hymns, and contemporary worship songs. They are dedicated to vocal excellence and harmonious praise, enhancing  our services.</p>
              <h6>Activities:</h6>
              <ul>
                <li>Weekly rehearsals for Sunday services and special events.</li>
                <li>Learning new songs and arrangements.</li>
                <li>Performing during weekly fellowships and major Union events.</li>
              </ul>
              <p className="mb-0 text-muted"><i className="fas fa-clock me-2"></i> <b>Meeting Times:</b> Sundays, 2:00 PM - 4:00 PM (Room 7) - Other times confirmed weekly.</p>
            </div>
          </div>

          {/* Praise and Worship */}
          <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="sub-ministry-card p-4 rounded-3 shadow-sm h-100">
              <div className="card-image-container mb-4">
                <a href="#" className="d-block" data-bs-toggle="modal" data-bs-target="#imageModal2">
                  <img src="/assets/images/music1.jpg" alt="MUTCU Praise and Worship Team" className="img-fluid rounded-3" />
                </a>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-microphone-alt praise-icon me-3"></i>
                <h3 className="card-title mb-0">Praise and Worship</h3>
              </div>
              <p>The Praise and Worship team leads the congregation in contemporary worship songs, thriving an energetic and intimate atmosphere of praise. They are instrumental in engaging the congregation and facilitating heartfelt worship.</p>
              <h6>Activities:</h6>
              <ul>
                <li>Vocal practice and harmony training sessions.</li>
                <li>Leading praise and worship during weekly fellowships and Sunday services.</li>
                <li>Preparing worship sets for special events like MULEWO and Praise Fests.</li>
              </ul>
              <p className="mb-0 text-muted"><i className="fas fa-clock me-2"></i> <b>Meeting Times:</b>Tuesday, 7:00 PM - 9:00 PM (Tuition Block) - Other times confirmed weekly.</p>
            </div>
          </div>

          {/* Band */}
          <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="sub-ministry-card p-4 rounded-3 shadow-sm h-100">
              <div className="card-image-container mb-4">
                <a href="#" className="d-block" data-bs-toggle="modal" data-bs-target="#imageModal3">
                  <img src="/assets/images/music1.jpg" alt="MUTCU Band" className="img-fluid rounded-3" />
                </a>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-drum band-icon me-3"></i>
                <h3 className="card-title mb-0">Band</h3>
              </div>
              <p>The MUTCU Band forms the core instrumental support for our worship services. This  team  provides the primary rhythm and melodic foundation for the Praise and Worship team, creating a powerful sound for corporate worship.</p>
              <h6>Activities:</h6>
              <ul>
                <li>Regular practice sessions for band members.</li>
                <li>Providing instrumental backing for the Praise and Worship team.</li>
                <li>Performing during weekly fellowships and special events.</li>
              </ul>
              <p className="mb-0 text-muted"><i className="fas fa-clock me-2"></i> <b>Meeting Times:</b>Thursday, 7:00 PM - 9:00 PM (Music Room) - Other times confirmed weekly.</p>
            </div>
          </div>

          {/* Instrumentalists */}
          <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="400">
            <div className="sub-ministry-card p-4 rounded-3 shadow-sm h-100">
              <div className="card-image-container mb-4">
                <a href="#" className="d-block" data-bs-toggle="modal" data-bs-target="#imageModal4">
                  <img src="/assets/images/music1.jpg" alt="MUTCU Instrumentalists" className="img-fluid rounded-3" />
                </a>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-guitar instrumentalist-icon me-3"></i>
                <h3 className="card-title mb-0">Instrumentalists</h3>
              </div>
              <p>This group includes individual  who play various instruments to support different ministry activities and events. They provide  musical accompaniment to the Music Ministry</p>
              <h6>Activities:</h6>
              <ul>
                <li>Providing music for smaller fellowships or special occasions.</li>
                <li>Collaborating with other ministries for events.</li>
                <li>Mentoring aspiring musicians in the Union.</li>
              </ul>
              <p className="mb-0 text-muted"><i className="fas fa-clock me-2"></i> <b>Meeting Times:</b>Wednesdays, 7:00 PM - 9:00 PM (Room 15) - Other times confirmed weekly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubMinistries;
