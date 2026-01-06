import pageTitle from "../hooks/pageTitle";
import heroImg from "../assets/general_hero_img.jpg"
import Hero from "../components/hero"
import studentInvolvementForm from "../data/forms-and-apps/studentInvolvementForm"
import FormsAndAppsCard from "../components/formsAndAppsCard";

export default function forms () {
    pageTitle("Forms & Applications | Penn State Homecoming")
    return (
        <>
            <Hero
                title="Forms & Applications"
                backgroundImage={heroImg}
                height="short"
            />
            <div className="font-bold text-pink-700 text-4xl lg:text-6xl text-center py-4 px-8 border-y-2 border-y-pink-500">Student Involvement Applications</div>
            <div className="flex flex-wrap justify-center gap-6 p-6">
                {studentInvolvementForm.map((form) => (
                <div className="w-full lg:w-[32%] flex">
                    <FormsAndAppsCard key={form.id} form={form} />
                </div>
                ))}
            </div>
        </>
    )
}