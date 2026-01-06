import logisticsImg from "../../assets/directors/logistics_officer.jpg";
import outreachImg from "../../assets/directors/outreach_officer.jpg";

const officers  = [
    {
        id: "logistics",
        name: "Riley Neilon",
        title: "Logistics",
        image: logisticsImg,
        email: "logistics@homecoming.psu.edu",
        bio: "Riley is a second-year student from Berwyn, PA. She is majoring in Communication Sciences and Disorders " +
                    "with a minor in Rehabilitation and Human Services with the goal of attending grad school for " +
                    "Speech Language Pathology. Previously, she served as the Logistics and Merge Point Captain for the Parade " +
                    "committee for Homecoming 2025. Riley loves homecoming because it brings the Penn State community together and " +
                    "celebrates Penn State tradition and pride. ",
    },
    {
        id: "outreach",
        name: "Dan O'Connell",
        title: "Outreach",
        image: outreachImg,
        email: "outreach@homecoming.psu.edu",
        bio: "Daniel is a second-year student from Erie, PA. He is majoring in Mechanical Engineering. " +
                    "Previously, he served as one of the Student Organization Liaison Captains for the Parade committee for " +
                    "Homecoming 2025 and a member of the First Year Involvement Committee for Homecoming 2024. Daniel loves " + 
                    "Homecoming because it allows all members of the community to come together to celebrate their love for Penn State."  
    },
];
export default officers