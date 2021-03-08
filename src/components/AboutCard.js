import React from "react";
import Profile from "../assets/Profile.jpeg"


function AboutCard() {
    return (
        <div className="about-container">
            <h5>About Me</h5>

            <img src={Profile} alt="profile-photo" className="profile float-left"></img>
            <div>

                <div className="mt-3">

                    <p>Currently enrolled part-time, as a full-Stack Web developer at the University of Washington, I consider myself a 'forever student,' eager to both build on my academic foundations in Web Technology and stay in tune with the latest digital world through continued coursework and professional development.</p>
                    <p>When I'm not trying to help make the Web a better place, I can be found on my current job as a Lead Maintenance Technician in a retirement community with over 550 residents. A skilled leader with a wide breadth of experience in maintenance and repairs, a self-starter, a problem solver and plan strategically for upcoming maintenance needs and or upgrades while addressing immediate facilities issues. Strong contractor and vendor negotiation skills, always excited about managing multiple projects, working hard, and utilizing a multitude of trades skill sets. Above all else, I'm a passionate team leader, a motivator and an educator, always excited about serving our community, and take pride in the quality of my work. As a Lead Maintenance Technician, I'm responsible for assisting in the day-to-day maintenance operations of buildings and grounds. This includes general repair, preventative maintenance and updates, and at times, more complex tasks about troubleshooting mechanical, electrical, plumbing, appliances, HVAC system, and general carpentry. Also as a certified and Washington State Licensed Inspector, I perform daily safety inspections of buildings, common areas, and grounds to ensure compliances including all fire codes. As a chairman of the community safety committee, I'm always supportive of safety programs and succeeded in maintaining zero work-related injuries with the help of the committee team. I have also worked side-by-side with general contractors for years supervising workers, restoring several old buildings throughout the country, putting my skills into practice.</p>

                    <p>
                    Also, come from an IT Help Desk and computer Tech background for over a decade and promoted to supervising and managing a dozen Computer Technicians for over five years. Skilled Technician who is versed in computer hardware and software diagnostics and repairs. Many years of experience in Customer Service and can easily work with any customer – in person, by phone, or by email, providing clients with the best solutions.

I am interested in learning about new opportunities and can be reached through this portfolio, by email: baello2020@gmail.com, through GitHub, or through LinkedIn. Cheers!</p>
                </div>

                <div className="card-body contactLinks">
                    <a href="https://www.linkedin.com/in/orlando-baello-217716110/" className="card-link">LinkedIn</a>
                    <a href="https://github.com/baello2020" className="card-link">GitHub</a>
                </div>
            </div>
            {/* end copy paste  */}
        </div>
    );
}

export default AboutCard;
