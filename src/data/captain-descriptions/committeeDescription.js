import arCommitteeImg from "../../assets/committees/ar_committee.jpg";
import compCommitteeImg from "../../assets/committees/comp_committee.jpg";
import crCommitteeImg from "../../assets/committees/cr_committee.jpg";
import elCommitteeImg from "../../assets/committees/el_committee.jpg";
import financeCommitteeImg from "../../assets/committees/finance_committee.jpg";
import idCommitteeImg from "../../assets/committees/id_committee.jpg";
import merchCommitteeImg from "../../assets/committees/merch_committee.jpg";
import oppCommitteeImg from "../../assets/committees/opp_committee.jpg";
import paradeCommitteeImg from "../../assets/committees/parade_committee.jpg";
import prCommitteeImg from "../../assets/committees/pr_committee.jpg";
import techCommitteeImg from "../../assets/committees/tech_committee.jpg";
import urCommitteeImg from "../../assets/committees/ur_committee.jpg";

const committees = [
    {
        id: "alumni_relations",
        name: "Alumni Relations",
        image: arCommitteeImg,
        color: "Royal Blue",
        description: "The Alumni Relations Committee works closely with the " +
        "Penn State Alumni Association to ensure that alumni have a great experience " +
        "when they return for Homecoming events, as well as to highlight the successes and " +
        "achievements of Penn State alumni throughout the year. We coordinate all logistics " +
        "involving Homecoming’s Grand Marshal and Honorary Grand Marshal, two individuals who " +
        "exemplify the mission and ideals of this university. We also strive to build and maintain " +
        "a strong relationship between the Homecoming Executive Committee, Penn State alumni, and " +
        "the Penn State community through various events and initiatives, such as the Student-Alumni " +
        "Ice Cream Social and the Tailgate Competition. Our committee color is "
    },
    {
        id: "competition",
        name: "Competition",
        image: compCommitteeImg,
        color: "Pink",
        description: "The Competition Committee is responsible for coordinating the registration " +
        "of student organizations and the scoring/judging for all competition events – Float, Madhatter, " +
        "and Banner. We continue to develop the point system for all Homecoming events as well as manage the " +
        "Homecoming Guide. All aspects of Homecoming pertaining to competition fall within this committee. We " +
        "are also in charge of all communication between Homecoming and the competing organizations. We work to " +
        "recruit new organizations and remain as an available resource for all Homecoming information. Our committee color is "
    },
    {
        id: "court_relations",
        name: "Court Relations",
        image: crCommitteeImg,
        color: "Purple",
        description: "The Court Relations Committee is responsible for coordinating the selection of the Homecoming Student, " +
        "University, and Graduate Courts, as well as planning various related events throughout the year. We review court " +
        "applications and nominations, as well as coordinate a student leader panel for the University and Graduate Court " +
        "selection, and a faculty panel for selection of the Student Court. These individuals will develop creative ways to " +
        "advertise voting for the Guide State Forward Award and increase the involvement of the Courts throughout the year in " +
        "Homecoming. Court Relations captains also strive to meet, connect, and select members of the Penn State community to " +
        "participate in our court who represent the values of Penn State and do everything For The Glory. Our committee color is "
    },
    {
        id: "event_logistics",
        name: "Event Logistics",
        image: elCommitteeImg,
        color: "Light Blue",
        description: "The Event Logistics Committee is responsible for planning major events such as Legacy, Allen Street Jam, " +
        "Past to Present, the Best of Penn State Carnival, and the Friends & Family Tent on Parade Day. These events help unite " +
        "the Penn State community throughout the year by engaging all aspects of the university and teaching them about historical " +
        "traditions that makes Penn State what it is today. We want to bring all Nittany Lions together through celebrating " +
        "Penn State! Our committee color is "
    },
    {
        id: "finance",
        name: "Finance",
        image: financeCommitteeImg,
        color: "Kelly Green",
        description: "The Financial Management Committee works to prepare Homecoming’s operating budget for submission to the " +
        "Student Fee Board and manages all transactions related to Homecoming’s Associated Student Activities account. The " +
        "Financial Management Committee is also responsible for securing all donations, both in-kind, food and beverage, and " +
        "monetary, per request of the Executive Committee. The committee also plans and coordinates all fundraising events " +
        "including sporting event/concert concession and fundraisers at businesses located in State College. Lastly, they will " +
        "work to develop positive relationships with all sponsors and ensure that they receive the appropriate entitled benefits. " +
        "Our committee color is "
    },
    {
        id: "internal_development",
        name: "Internal Development",
        image: idCommitteeImg,
        color: "Cherry Red",
        description: "Internal Development is responsible for the well-being and growth of all Penn State Homecoming members. " +
        "We ensure that directors, captains, and committee members have access to all resources and information they need to " +
        "succeed while additionally creating opportunities for all members to connect, learn, and celebrate together. ID " +
        "facilitates the Captain's Cup, a competition between Homecoming's different committees to see who can get the most " +
        "points by participating and fostering teamwork through fun challenges and bonding experiences. Beyond team building, " +
        "ID prioritizes leadership growth by organizing professional development workshops and hosting speakers. Overall, Internal " +
        "Development strives to make Penn State Homecoming a welcoming, supportive, and positive experience for everyone involved. " +
        "Our committee color is"
    },
    {
        id: "merchandise",
        name: "Merchandise",
        image: merchCommitteeImg,
        color: "Sapphire Blue",
        description: "The Merchandise Committee is responsible for the ordering and sales of all merchandise for Homecoming. " +
        "We work to find innovative ways to create, market, and sell Homecoming merchandise, and to emphasize brand pervasiveness, " +
        "consistency, and customer service. We are responsible for maintaining the inventory of all merchandise and for documenting " +
        "merchandise purchases throughout the year. We also coordinate all online store orders and ensure the online store is operating " +
        "correctly. The Merchandise Committee strives to celebrate Homecoming through the sale of quality products and cutting-edge designs. " +
        "Our committee color is "
    },
    {
        id: "opperations",
        name: "OPPerations",
        image: oppCommitteeImg,
        color: "Orange",
        description: "The OPPerations Committee is responsible for all of the logistical aspects behind every Homecoming Event. " +
        "We plan and prepare to know how each event will work and ensure that it will run smoothly and safely. To do this, we " +
        "acquire, setup, manage, and teardown all equipment used for each event before, during, and after Homecoming Week. We " +
        "also promote proper waste management at all of our events as a part of our zero waste initiatives. The OPPerations " +
        "Committee focuses on the inventory that Homecoming currently owns, and what they may need to buy throughout the year for " +
        "various events. We also allocate all resources to other committees or organizations. While we often work behind the scenes, " + 
        "OPP plays a pivotal role in the success of Penn State Homecoming. Our committee color is "
    },
    {
        id: "parade",
        name: "Parade",
        image: paradeCommitteeImg,
        color: "Safety Green",
        description: "The Parade Committee is responsible for planning, organizing, and executing the largest student-run parade " +
        "in the nation. This entails coordinating the participation of student, alumni, and community organizations in the parade, " +
        "communicating parade policy and procedures to all participants, creating the Parade Order, and managing the set up and " +
        "tear down of the Parade Grounds. The Parade Committee will also perform float safety inspections prior to Parade Day and " +
        "organize the Recycle Your Float event. Our committee color is "
    },
    {
        id: "public_relations",
        name: "Public Relations",
        image: prCommitteeImg,
        color: "Lavendar",
        description: "The Public Relations Committee is responsible for documenting and promoting all events for Homecoming as " +
        "well as showcasing the traditions and stories of Penn State. The Committee consists of videographers, photographers, " +
        "and graphic designers that will be at the Pride Events and other essential Homecoming dates. Our mission is to keep " +
        "the Penn State community such as students, alumni, faculty, and staff involved in the tradition by capturing the memories " +
        "and ensuring our information is clear to the public. Applicants should be creative, have some photography or video experience, " +
        "and have basic editing software knowledge. Applicants should submit 5 pictures or videos that demonstrate their skillset. " +
        "Our committee color is "
    },
    {
        id: "technology",
        name: "Technology",
        image: techCommitteeImg,
        color: "Gold",
        description: "The Technology committee is responsible for the development and maintenance of the official Homecoming " +
        "website and technological advancement of Homecoming initiatives. This includes regular updates to the website, " +
        "operating the merchandise store, handling applications, registrations, and other content that needs to be on the " +
        "website. Our responsibilities also include taking on projects to enhance the Homecoming experience through technological " +
        "immersion. The Technology Committee is always looking for ways to improve Homecoming through the use of technology by " +
        "increasing efficiency. Our committee color is "
    },
    {
        id: "university_relations",
        name: "University Relations",
        image: urCommitteeImg,
        color: "Navy",
        description: "The University Relations Committee works to increase involvement in Homecoming and serves as the " +
        "liaison between Homecoming, Penn State administrators, student organizations, Penn State Athletics, and faculty. " +
        "University Relations is responsible for planning and coordinating the logistics behind events such as the Homecoming " +
        "Day of Service, Homecoming Golf Tournament, Homecoming Blood Drives, Homecoming Food Drives, and more. The University " +
        "Relations Committee also works to organize various athletics events throughout the year, like the Homecoming Basketball " +
        "Game. They also work with SPA for the concert to kick off Homecoming Week. The University Relations Committee is always " +
        "looking for creative ways to interact with the University and the Penn State Community. We dedicate time throughout the " +
        "entire year, including after Homecoming Week, in order to promote a year-round celebration of Penn State Homecoming. Our " +
        "committee color is "
    },
]

export default committees