import arDirectorImg from "../../assets/directors/ar_director.jpg";
import compDirectorImg from "../../assets/directors/comp_director.jpg";
import crDirectorImg from "../../assets/directors/cr_director.jpg";
import elDirectorImg from "../../assets/directors/el_director.jpg";
import financeDirectorImg from "../../assets/directors/finance_director.jpg";
import idDirectorImg from "../../assets/directors/id_director.jpg";
import merchDirectorImg from "../../assets/directors/merch_director.jpg";
import oppDirectorImg from "../../assets/directors/opp_director.jpg";
import paradeDirectorImg from "../../assets/directors/parade_director.jpg";
import prDirectorImg from "../../assets/directors/pr_director.jpg";
import techDirectorImg from "../../assets/directors/tech_director.jpg";
import urDirectorImg from "../../assets/directors/ur_director.jpg";

const directors  = [
    {
        id: "alumni_relations",
        name: "Angelina Velez",
        title: "Alumni Relations",
        image: arDirectorImg,
        email: "alumni.relations@homecoming.psu.edu",
        bio: "Angelina is a second-year student from Bel Air, Maryland. " + 
                      "She is majoring in Material Science and Engineering as well as Chemical Engineering. " + 
                     "Previously, she was on the First Year Involvement Committee for Homecoming 2024 and recently" + 
                      " served as Captain of Allen Street Jam for 2025 for the Event Logistics committee. " +
                      "For 2026 Angelina is the Director for Alumni Relations and is looking forward to engaging " +
                      "in events that encourage involvement and deepens the love for PSU. Angelina loves Homecoming " +
                      "because of the synergy created around the Homecoming events as well as the sense of community " +
                      "developed throughout the year as it brings together students, faculty, and alumni to celebrate " +
                      "Penn State pride and tradition.",
    },
    {
        id: "competition",
        name: "Tianna Endo",
        title: "Competition",
        image: compDirectorImg,
        email: "competition@homecoming.psu.edu",
        bio: "Tianna is a second-year student from San Jose, California." + 
                      "She is majoring in Elementary & Early Childhood Education, " +
                      "as well as pursuing her English as a Second Language Certification. " +
                      "Previously, she served as the Friends and Family Tent Captain 2025 on" + 
                      "the Event Logistics committee. Tianna is excited to see what Homecoming 2026" + 
                      "has in store, and to continue to instill Penn State pride in her community."  
    },
    {
        id: "court_relations",
        name: "Leah Rogers",
        title: "Court Relations",
        image: crDirectorImg,
        email: "court.relations@homecoming.psu.edu",
        bio: "Leah is a second-year student from Cranford, New Jersey. She is majoring in " +
                      "Psychology on the Neuroscience track, with minors in Human Development and " +
                      "Family Studies and Child Maltreatment and Advocacy Studies. Previously, she was " +
                      "on the First Year Involvement Committee for Homecoming 2024 and served as the " +
                      "Best of Penn State Carnival Captain for the Event Logistics committee in Homecoming 2025. " +
                      "Leah loves Homecoming because of the amazing community it has built and how it brings together " +
                      "students, faculty, and alumni to celebrate Penn State pride and tradition. ",
    },
    {
        id: "event_logistics",
        name: "Riley Bunch",
        title: "Event Logistics",
        image: elDirectorImg,
        email: "event.logistics@homecoming.psu.edu",
        bio: "Riley is a third year student from The Woodlands, Texas. He is majoring in Accounting and Business Analytics " +
                      "and Information Systems, with a minor in the Legal Environment of Business. Previously he was involved on " + 
                      "the OPPerations Committee as an Administrative Assistant Captain for Homecoming 2025. Riley loves " +
                      "Homecoming because it has allowed him to pour back into the community and foster a stronger sense of community " +
                      "on campus.",
    },
    {
        id: "finance",
        name: "Timothy Alexander",
        title: "Finance",
        image: financeDirectorImg,
        email: "finance@homecoming.psu.edu",
        bio: "Timothy is a third-year student from Souderton, PA studying Accounting and Business " +
                      "Analytical Information Systems. Timothy has extensive experience working in " +
                      "Microsoft Excel, Microsoft Access, Tableau, and Gephi. Timothy loves Homecoming " +
                      "because it brings all the Penn State community together to celebrate and highlight Penn State’s traditions.",
    },
    {
        id: "internal_development",
        name: "Angela Batson",
        title: "Internal Development",
        image: idDirectorImg,
        email: "internal.development@homecoming.psu.edu",
        bio: "Angie is a fourth-year student from Washington, PA studying Architectural Engineering. " +
                      "Previously, she served as the Float Grounds Captain on the Parade committee for Homecoming 2025. " +
                      "Angie loves Homecoming because it brings together people from all walks of life in the Penn State " +
                      "community to celebrate our love for Penn State. ",
    },
    {
        id: "merch",
        name: "Riley Gerhard",
        title: "Merchandise",
        image: merchDirectorImg,
        email: "merchandise@homecoming.psu.edu",
        bio: "Riley is a second-year student from Palmerton, PA studying Hospitality Management. " +
                      "Previously she was a part of the First Year Involvement Committee for Homecoming 2024 " +
                      "and Head of Sales Captain for the Merchandise committee for Homecoming 2025. Riley loves " +
                      "Homecoming because it allows the Penn State community to come together to celebrate their " +
                      "pride and love for Penn State. ",
    },
    {
        id: "opperations",
        name: "Julia Gil",
        title: "OPPerations",
        image: oppDirectorImg,
        email: "opperations@homecoming.psu.edu",
        bio: "Julia is a third-year year student from Gallitzin, PA studying Political Science, " +
                      "minoring in Sociology. Previously she was one of the Parade Day Logistics Captains " + 
                      "in the OPP Captain committee for Homecoming 2025. Julia loves Homecoming because she " +
                      "loves working on the Logistics of a Penn State event and seeing the tradition come together. ",
    },
    {
        id: "parade",
        name: "Mackenzie Nelson",
        title: "Parade",
        image: paradeDirectorImg,
        email: "parade@homecoming.psu.edu",
        bio: "Mackenzie is a second-year student from Erie, Pennsylvania.  She is currently majoring in Computer Science with minors " +
                      "in Cybersecurity and Psychology. Previously, she was a member of the First Year Involvement Committee for Homecoming 2024 " +
                      "and a Student Organization Liaison Parade Captain for Homecoming 2025.  For Mackenzie, Homecoming is the highlight of the " +
                      "year as it unites all aspects of the community, providing a meaningful celebration of Penn State's enduring traditions and pride.",
    },
    {
        id: "public_relations",
        name: "Addison Sherlin",
        title: "Public Relations",
        image: prDirectorImg,
        email: "public.relations@homecoming.psu.edu",
        bio: "Addison is a second-year student from Raleigh, North Carolina. She is majoring in Film Production " +
                      "with intended minors in English and Entrepreneurship and Innovation. Previously, she served as the " +
                      "Production Captain on the Homecoming 2025 Public Relations committee. Addison loves Homecoming because " +
                      "of how events unite students, staff, alumni, and the community together under Penn State pride. ",
    },
    {
        id: "technology",
        name: "Sharan Thirunavukkarasu",
        title: "Technology",
        image: techDirectorImg,
        email: "technology@homecoming.psu.edu",
        bio: "Sharan is a third-year student from Mechanicsburg, Pennsylvania. " +
                      "He is majoring in Aerospace Engineering with minors in Engineering Mechanics and Music Performance. " +
                      "Previously, he served as Setup/Teardown Captain on the OPPerations committee for Homecoming 2025. " +
                      "Sharan loves Homecoming because of how it brings all of Penn State together and how we celebrate our " +
                      "tradition throughout the year. ",
    },
    {
        id: "university_relations",
        name: "Carter Balan",
        title: "University Relations",
        image: urDirectorImg,
        email: "university.relations@homecoming.psu.edu",
        bio: "Carter is from Minneapolis, Minnesota. She is a second-year student, studying Recreation, Park, and Tourism " +
                      "Management with a minor in Sustainability Leadership. Carter started her Homecoming career on the " +
                      "First-Year Involvement committee for Homecoming 2024 and then served as the Involvement Captain for " +
                      "Homecoming 2025. Carter loves Homecoming because it brings the community together and shares the love of " +
                      "Penn State. Homecoming is such a great way to connect with peers, faculty, alumni, and staff. Carter is so " +
                      "excited to celebrate Homecoming this year.",
    },
];

export default directors