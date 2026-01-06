import LegacyImg from "../assets/events/legacy.jpg"
import NittanyNightImg from "../assets/events/nittanynight.jpg"
import WiffleBallImg from "../assets/events/wiffleball.jpg"
import ASJImg from "../assets/events/asj.jpg"
import P2PImg from "../assets/events/p2p.jpeg"
import FTGImg from "../assets/events/Talentshow1.jpg"
import BOPSImg from "../assets/events/bops.jpg"
import DragShowImg from "../assets/events/dragshow.jpg"
import PepRallyImg from "../assets/events/peprally.jpg"
import IceCreamSocialImg from "../assets/events/icecreamsocial.jpg"
import ParadeImg from "../assets/events/parade.jpeg"
import GuardTheShrimeImg from "../assets/events/guardtheshrine.jpg"
import GameImg from "../assets/events/football.jpg"

const EventData = [
    {
        id: "legacy", 
        title: "Legacy", 
        image: LegacyImg, 
        location: "Alumni Hall", 
        date: "April 24, 2025", 
        time: "11:00 AM - 4:00 PM", 
        text: "Penn State Homecoming’s Annual Legacy event was created to celebrate and honor the legacy " +
        "that graduating seniors will be leaving here at Penn State while also celebrating the legacy undergraduate " +
        "students are creating during their time here at Penn State. As an organization part of our mission is to " +
        "instill pride in all members of the Penn State family. Recognizing and celebrating our students is one way " +
        "we pursue this. Legacy will be a time to “Rewind and Relive” the time each student has spent here at Penn State, " +
        "where students can enjoy free food, a photo booth, a mechanical bull, and more.",
        photosLink: "https://photos.homecoming.psu.edu/2025-year/legacy/"
    },
    {
        id: "nittanynight",
        title: "Nittany Night",
        image: NittanyNightImg,
        location: "Freeman Auditorium",
        date: "September 2, 2025",
        time: "8:00 PM",
        text: "Calm those first-week nerves with a movie at the HUB! At Nittany Night, you can relax while watching " +
        "Monsters University, enjoying some snacks, and learning about Penn State Homecoming. Nittany Night is a " +
        "great way to learn about a student organization in a relaxed, welcoming environment. We hope to see you there!"
    },
    {
        id: "wiffleball",
        title: "Wiffle Ball",
        img: WiffleBallImg,
        location: "Bigler Field",
        date: "October 5, 2025",
        time: "1:00 PM - 4:00 PM",
        text: [
            {
            type: "paragraph",
            content: [
                { text: "Do you have what it takes to win it all? ", bold: true },
                { text: "Find out at the Penn State Homecoming Wiffle Ball Tournament on Saturday, October 5th — time and location TBD." }
            ]
            },
            {
            type: "paragraph",
            content: [
                { text: "Join us for a fun and competitive day of wiffle ball! " },
                { text: "The top teams will win prizes.", bold: true }
            ]
            },
            {
            type: "paragraph",
            content: [
                { text: "Whether you’re aiming to take home the win or just want to swing by for some fun, we’re sure to have a good time!" }
            ]
            },
            {
            type: "paragraph",
            content: [
                { text: "You can sign up solo or with a team of up to ", bold: true },
                { text: "8 players." }
            ]
            },
            {
            type: "paragraph",
            content: [
                { text: "See the ", bold: true },
                { text: "Participate tab", bold: true },
                { text: " for more details!" }
            ]
            }
        ],
        photosLink: "https://photos.homecoming.psu.edu/2025-year/wiffle-ball/"
    },
    {
        id: "asj",
        title: "Allen Street Jam",
        image: ASJImg,
        location: "Allen Street",
        date: "October 6, 2025",
        time: "3:00PM - 7:00 PM",
        text: "Get ready, Penn State family — Homecoming Week kicks off with the ultimate community celebration! " +
        "Join us Monday, October 6th, from 3–7 PM for the Allen Street Jam — the biggest block party in State College! " +
        "Feast on local favorites, grab sweet treats, and take home some fun goodies. Snap a photo with the Nittany Lion," +
        "meet the Homecoming Court, and enjoy free games, face painting, caricatures, and so much more. " +
        "The energy cranks up around 6 PM with live performances from Penn State’s own dance groups and nonstop " +
        "music that will keep you moving in the street. This is THE place to kick off Homecoming — and we can’t wait to see you there!",
        photosLink: "https://photos.homecoming.psu.edu/2025-year/asj"
    },
    {
        id: "p2p",
        title: "Past to Present",
        image: P2PImg,
        location: "Old Main Plaza",
        date: "October 7, 2025",
        time: "11:00AM - 4:00 PM",
        text: "Come celebrate Penn State’s history with us on the Old Main Plaza on Tuesday, October 7th, " +
        "from 11:00 AM to 4:00 PM! Step into a throwback experience featuring a sign shop where you can " +
        "create unique keepsakes, plus cotton candy, popcorn, cake, lively performances, and interactive games " +
        "happening throughout the day. Various student clubs will also be showcasing their history, highlighting " +
        "how every Penn Stater contributes to our shared story. Don’t miss this fun, hands-on journey through the past!",
        photosLink: "https://photos.homecoming.psu.edu/2025-year/past-to-present"
    },
    {
        id: "ftgtalentshow",
        title: "For The Glory Talent Show",
        image: FTGImg,
        location: "Schwab Auditorium",
        date: "October 7, 2025",
        time: "7:00 PM",
        text: "The Penn State For The Glory Talent Show is an annual event where students from various majors showcase " +
        "their talents, including singing, dancing, comedy, music, and poetry. It brings the Penn State community together " +
        "to celebrate creativity and school spirit. Participants compete for prizes, with the grand prize winner earning a " +
        "stage performance during THON™ Weekend. This cherished tradition embodies Penn State’s motto, “For the Glory,” " +
        "highlighting excellence, diversity, and unity through performance and self-expression.",
        photosLink: "https://photos.homecoming.psu.edu/2025-year/ftg-talent-show"
    },
    {
        id: "bops",
        title: "Best of Penn State Carnival",
        image: BOPSImg,
        location: "HUB Lawn",
        date: "October 8, 2025",
        time: "1:00PM - 5:00 PM",
        text: "On Wednesday, October 8th from 1:00 PM to 5:00 PM, the HUB lawn will be transformed into the site of the " +
        "Best of Penn State Carnival, and you won’t want to miss it! Explore the booths hosted by student organizations " +
        "and clubs, take your turn on one of the inflatable attractions, and sit for a caricature drawing with your friends! " +
        "When you get hungry, we’ll have popcorn, lemonade, and creamery ice cream available for all. Hope to see you there!",
        photosLink: "https://photos.homecoming.psu.edu/2025-year/best-of-penn-state-carnival"
    },
    {
        id: "dragshow",
        title: "Opulence Drag Show",
        image: DragShowImg,
        location: "Basement Night Club",
        date: "October 8, 2025",
        time: "7:00 PM",
        text: "Penn State Homecoming is so excited to partner with Opulence to put on our drag show! Opulence is Penn State’s " +
        "Premiere Drag Ambassador group. Come out for a fun night of performances! ",
        photosLink: "https://photos.homecoming.psu.edu/2025-year/best-of-penn-state-carnival"
    },
    {
        id: "peprally",
        title: "Pride In Our Community Pep Rally",
        image: PepRallyImg,
        location: "HUB Monumental Stairs",
        date: "October 9, 2025",
        time: "6:00 PM",
        text: "The Homecoming Pride in Our Community Pep Rally put on by the Paul Robeson Cultural Center takes place every year " +
        "on the Monumental Staircase. The POC Pep Rally brings the community together. You can always see students dancing, stepping, " +
        "and cheering for each other! Primary Contact: Please contact prcc@psu.edu if you have any questions.",
        photosLink: "https://photos.homecoming.psu.edu/2025-year/best-of-penn-state-carnival"
    },
    {
        id: "icecreamsocial",
        title: "Alumni Ice Cream Social",
        image: IceCreamSocialImg,
        location: "Hintz Alumni Center",
        date: "October 10, 2025",
        time: "1:00PM - 3:00 PM",
        text: "The Homecoming Pride in Our Community Pep Rally put on by the Paul Robeson Cultural Center takes place every year " +
        "on the Monumental Staircase. The POC Pep Rally brings the community together. You can always see students dancing, stepping, " +
        "and cheering for each other! Primary Contact: Please contact prcc@psu.edu if you have any questions.",
        photosLink: "https://photos.homecoming.psu.edu/2025-year/best-of-penn-state-carnival"
    },
]

export default EventData