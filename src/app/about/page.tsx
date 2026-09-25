import { MarketingPage } from "@/components/landing/marketing-page";

export default function AboutPage() {
  return (
    <MarketingPage
      eyebrow="About AfroviaLabs"
      title="Learning technology for African classrooms."
      description="We build offline-first digital education systems that are simple, reliable and inclusive, helping schools bring more learning within reach."
      image="/images/students-learning-tablet.png"
      imageAlt="Students learning together with a tablet"
      sectionTitle="Built around the realities schools face."
      sectionCopy="Education technology is most useful when it fits the conditions learners and educators work in every day. Our focus is practical access, clear experiences and tools that can keep working when connectivity is limited."
      points={["Learning experiences designed for low-connectivity settings", "Straightforward tools for learners, educators and school teams", "A focus on access, relevance and local education priorities"]}
      related={[{ label: "Explore our projects", href: "/projects" }, { label: "Meet the team", href: "/about/careers" }]}
    />
  );
}
