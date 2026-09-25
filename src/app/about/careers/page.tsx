import { MarketingPage } from "@/components/landing/marketing-page";

export default function CareersPage() {
  return (
    <MarketingPage
      eyebrow="Careers"
      title="Bring your skills to work that matters."
      description="Help shape thoughtful education technology for learners, educators and schools across Africa."
      image="/images/students-tablet.png"
      imageAlt="Students sharing a tablet in a classroom"
      sectionTitle="Build with purpose and perspective."
      sectionCopy="The best education tools come from understanding the people who use them. We value curious, collaborative people who care about making learning more accessible."
      points={["Work on real challenges in education", "Bring product, technology and community perspectives together", "Help create tools that are useful beyond the best-connected settings"]}
      related={[{ label: "Learn about our mission", href: "/about" }, { label: "Contact our team", href: "/contact" }]}
    />
  );
}
