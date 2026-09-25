import { MarketingPage } from "@/components/landing/marketing-page";

export default function SimulatorsPage() {
  return (
    <MarketingPage
      eyebrow="Learning solution"
      title="Turn complex ideas into something learners can explore."
      description="Simulation tools create practical learning experiences across science, mathematics and technical subjects."
      image="/images/students-tablet.png"
      imageAlt="Students learning through a shared digital lesson"
      sectionTitle="Learn by trying things out."
      sectionCopy="Simulations give learners a way to test ideas, observe outcomes and revisit concepts at their own pace, alongside classroom teaching."
      points={["Interactive scenarios for practical understanding", "Experiences spanning science, mathematics and technical topics", "Flexible learning alongside teacher-led lessons"]}
      related={[{ label: "Explore Virtual Science Labs", href: "/solutions/virtual-science-labs" }, { label: "Browse all products", href: "/products" }]}
    />
  );
}
