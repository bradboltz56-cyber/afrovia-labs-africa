import { MarketingPage } from "@/components/landing/marketing-page";

export default function VirtualScienceLabsPage() {
  return (
    <MarketingPage
      eyebrow="Learning solution"
      title="Make space for discovery in every science lesson."
      description="Interactive virtual labs bring hands-on science experiences to classrooms, helping learners explore ideas through guided activity."
      image="/images/students-learning-tablet.png"
      imageAlt="Students exploring a lesson together on a digital device"
      sectionTitle="Experiment, observe and understand."
      sectionCopy="Practical exploration helps make abstract ideas tangible. Virtual lab experiences can add new ways for learners to investigate scientific concepts and build confidence."
      points={["Interactive exploration of science concepts", "Guided activities for classroom learning", "Digital experiences that complement practical teaching"]}
      related={[{ label: "Explore Simulators", href: "/solutions/simulators" }, { label: "Browse all products", href: "/products" }]}
    />
  );
}
