import { MarketingPage } from "@/components/landing/marketing-page";

export default function DigitalLibraryPage() {
  return (
    <MarketingPage
      eyebrow="Learning solution"
      title="A library of learning, available wherever school happens."
      description="A curated digital library brings curriculum-aligned learning content within reach, including when an internet connection is not."
      image="/images/students-learning-tablet.png"
      imageAlt="Students reading and learning together with a tablet"
      sectionTitle="Knowledge that travels with learners."
      sectionCopy="Access to relevant content can open up new paths for study. An offline-ready library helps educators and learners make use of digital materials in more places."
      points={["Curated, curriculum-aligned materials", "Local access for low-connectivity environments", "Learning resources for independent and classroom study"]}
      related={[{ label: "Explore the AI Learning Assistant", href: "/solutions/ai-learning-assistant" }, { label: "Browse all products", href: "/products" }]}
    />
  );
}
