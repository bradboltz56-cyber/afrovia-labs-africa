import { MarketingPage } from "@/components/landing/marketing-page";

export default function ResourcesPage() {
  return (
    <MarketingPage
      eyebrow="Resources"
      title="Useful knowledge for people shaping education."
      description="Discover practical perspectives on digital learning, school technology and the realities of bringing education tools to more communities."
      image="/images/students-tablet.png"
      imageAlt="Students using a tablet as part of a classroom lesson"
      sectionTitle="Ideas made for action."
      sectionCopy="Education technology should be understandable and useful. We are building a space for ideas, guidance and stories that can help educators and partners make informed choices."
      points={["Guidance for educators and school teams", "Perspectives on accessible, offline-first learning", "Insights for partners and education technology builders"]}
      related={[{ label: "View our projects", href: "/projects" }, { label: "Browse products", href: "/products" }]}
    />
  );
}
