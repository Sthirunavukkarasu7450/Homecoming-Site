import Hero from "../components/hero"
import heroImg from "../assets/general_hero_img.jpg"
import CommitteeSection from "../components/committeeSection"
import committees from "../data/captain-descriptions/committeeDescription"

import alumniRelations from "../data/captain-descriptions/arCaptainDescription"
import comp from "../data/captain-descriptions/compCaptainDescription"
import courtRelations from "../data/captain-descriptions/crCaptainDescription"
import eventLogistics from "../data/captain-descriptions/elCaptainDescription"
import finance from "../data/captain-descriptions/financeCaptainDescription"
import internalDevelopment from "../data/captain-descriptions/idCaptainDescription"
import merch from "../data/captain-descriptions/merchCaptainDescription"
import opp from "../data/captain-descriptions/oppCaptainDescription"
import parade from "../data/captain-descriptions/paradeCaptainDescription"
import publicRelations from "../data/captain-descriptions/prCaptainDescription"
import tech from "../data/captain-descriptions/techCaptainDescription"
import universityRelations from "../data/captain-descriptions/urCaptainDescription"

import pageTitle from "../hooks/pageTitle"

const captainMap = {
  "Alumni Relations": alumniRelations,
  "Competition": comp,
  "Court Relations": courtRelations,
  "Event Logistics": eventLogistics,
  "Finance": finance,
  "Internal Development": internalDevelopment,
  "Merchandise": merch,
  "Operations": opp,
  "Parade": parade,
  "Public Relations": publicRelations,
  "Technology": tech,
  "University Relations": universityRelations,
}

export default function Captains() {
  pageTitle("Captains | Penn State Homecoming")
  return (
    <main>
      <Hero
        title="Captain Committees"
        backgroundImage={heroImg}
        height="short"
      />
      {committees.map((committee, index) => (
        <CommitteeSection
          key={committee.name}
          committee={committee}
          index={index}
          captains={captainMap[committee.name]}
        />
      ))}
    </main>
  )
}
