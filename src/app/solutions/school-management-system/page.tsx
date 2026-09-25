import { MarketingPage } from "@/components/landing/marketing-page";

export default function SchoolManagementPage() {
  return (
    <MarketingPage
      eyebrow="Learning solution"
      title="Less time on admin. More time for education."
      description="An all-in-one school management system for everyday operations, designed to stay useful when internet access is unreliable."
      image="/images/students-tablet.png"
      imageAlt="Students learning in a classroom with a tablet"
      sectionTitle="A clearer view of school life."
      sectionCopy="School teams balance a lot of moving parts. Bringing common administration tasks together can make information easier to manage and everyday work more straightforward."
      points={["A central place for school operations", "Workflows shaped around school teams", "Offline-ready access for low-connectivity environments"]}
      related={[{ label: "Explore the AI Learning Assistant", href: "/solutions/ai-learning-assistant" }, { label: "Browse all products", href: "/products" }]}
    />
  );
}
