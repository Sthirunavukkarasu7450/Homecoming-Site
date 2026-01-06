import pageTitle from "../hooks/pageTitle";
import heroImg from "../assets/general_hero_img.jpg"
import Hero from "../components/hero"
import SectionHeader from "../components/sectionHeader"
import FormInput from "../components/formInput.jsx"
import FormTextarea from "../components/formTextArea"
import FormSelect from "../components/formSelect"
import FileUpload from "../components/fileUpload"
import directory from "../data/directors/directory.js"

export default function CaptainApplication() {
    pageTitle("Captain Application | Penn State Homecoming")

    const execDirector = directory.find(person => person.id === "exec_director")
  return (
    <>
      <Hero title="Captain Application" backgroundImage={heroImg} height="short" />

      <div className="mx-auto px-16 py-10 space-y-12">

        <section>
          <h2 className="text-3xl font-bold mb-1">
            Captain Responsibilities Include:
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Must be available during the fall semester (2026)</li>
            <li>Weekly committee meetings and Director one-on-one meetings</li>
            <li>Participate in multiple Homecoming fundraisers</li>
            <li>Maintain presence at ALL Homecoming Week events</li>
            <li>Write weekly, mid-year, and final reports</li>
            <li>Collaborate with Directors and Captains</li>
            <li>Attend all Homecoming events</li>
            <li>Recruit committee members</li>
            <li>Assist other committees during Homecoming week</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">
            Committee's and Role Descriptions:
          </h2>
          <p className="text-gray-700 text-lg">Click <a className="transition-all hover:text-pink-700 duration-700 underline" href="../../participate/volunteers/Captains">Here</a> for more information.</p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">
            Contact:
          </h2>
          <p className="text-gray-700 text-lg"><a className="transition-all hover:text-pink-700 duration-700 underline" href={execDirector.email}>{execDirector.name}: {execDirector.email}</a></p>
        </section>

        {/* FORM */}
        <form
          className="space-y-12"
          action="/api/captain-application"
          method="POST"
          encType="multipart/form-data"
        >

          {/* Personal Info */}
          <SectionHeader title="Personal Information" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput label="First Name" name="first_name" required />
            <FormInput label="Last Name" name="last_name" required />
            <FormInput label="PSU Email" name="email" type="email" required />
            <FormInput label="Phone Number" name="phone" required />
            <FormInput label="Pronouns" name="pronouns" required />
          </div>

          {/* Address */}
          <SectionHeader title="Address (at Penn State)" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput label="Address Line 1" name="address1" required />
            <FormInput label="Address Line 2" name="address2" />
            <FormInput label="City" name="city" required />
            <FormInput label="State" name="state" required />
            <FormInput label="Zip Code" name="zip" required />
          </div>

          {/* Education */}
          <SectionHeader title="Education Information" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput label="Major" name="major" required />
            <FormInput label="Expected Graduation Date" name="grad_date" required />
            <FormInput label="Credits (Spring/Fall 2026)" name="credits" required />
            <FormInput label="GPA" name="gpa" required />
          </div>

          {/* Committee Preferences */}
          <SectionHeader title="Committee Preferences" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormSelect label="First Choice" name="choice1" required />
            <FormSelect label="Second Choice" name="choice2" required />
            <FormSelect label="Third Choice" name="choice3" required />
            <FormSelect label="Fourth Choice" name="choice4" required />
          </div>

          {/* Open-ended */}
          <SectionHeader title="Open Ended Questions" />
          <div className="space-y-6">
            <FormTextarea label="Why do you want to be involved? in Homecoming 2026" name="involvement" required />
            <FormTextarea label="What do you envision for Homecoming 2026, both in general and regarding your top Committee choice(s)?" name="vision" required />
            <FormTextarea label="Regarding your top Committee choice(s), what skills and experiences will make you an asset to that/those Committee(s)?" name="skills" required />
            <FormTextarea label="Please select one of the six Penn State Values and explain both how it relates to Homecoming 2026 and how you embody this value." name="values" required />
            <FormTextarea label="Please list any other major priorities/commitments you currently have for the Spring and Fall 2026 semesters 
            (please include number of hours a week you dedicate to each of them). How will you balance your role as a student, 
            a member of a Homecoming Captain Committee, and your other commitments?" name="commitments" required />
            <FormTextarea label="Please briefly tell us how you heard about Homecoming 2026? How did you find out about applications?" name="discovery" required />
            <FormTextarea label="If you have a specific Captain preference within a Committee, please list in the text box below. For example; University Relations (Involvement)" name="preference" />
          </div>

          {/* Uploads */}
          <SectionHeader title="Additional Information" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FileUpload label="Resume (PDF/DOCX)" name="resume" required />
            <FileUpload label="Class Schedule (Image)" name="schedule" required />
          </div>

          <FormTextarea label="Portfolio (optional)" name="portfolio" />
          <FormTextarea label="References" name="references" required />

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-pink-700 text-white text-lg font-semibold rounded-xl hover:bg-pink-800 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </>
  )
}
