"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardFive from "@/components/sections/team/TeamCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import { Sparkles, ArrowUpRight, Zap, Shield, TrendingUp } from "lucide-react";

export default function WebAgency2Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Vision Vault Media"
          navItems={[
            { name: "Work", id: "work" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
          ]}
          button={{ text: "Get Started", href: "#contact" }}
        />
        <HeroSplitDoubleCarousel
          title="Automating Your Digital Vision"
          description="Vision Vault Media bridges the gap between high-end web design and powerful business automation. We build scalable platforms that work for you 24/7."
          tag="Media & Automation Solutions"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "Start Automation", href: "#contact" },
            { text: "View Solutions", href: "#services" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-vector/smart-home-management_23-2148629240.jpg", imageAlt: "Modern Web Dashboard" },
            { imageSrc: "http://img.b2bpic.net/free-photo/consult-advice-information-serveice-sharing-concept_53876-125587.jpg", imageAlt: "Creative Agency Website" },
            { imageSrc: "http://img.b2bpic.net/free-photo/jolly-bookkeeper-work-happy-after-finishing-verifying-business-documents_482257-126605.jpg", imageAlt: "SaaS Interface Design" },
            { imageSrc: "http://img.b2bpic.net/free-photo/female-web-designer-taking-notes-office_23-2149749916.jpg", imageAlt: "User Flow Mapping" },
            { imageSrc: "http://img.b2bpic.net/free-photo/website-development-layout-sketch-drawing_53876-124188.jpg", imageAlt: "Responsive Design Framework" },
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/hand-touching-screen-rpa-concept_23-2149311915.jpg", imageAlt: "Automation Workflow Architecture" },
            { imageSrc: "http://img.b2bpic.net/free-photo/row-blue-liquid-glasses-with-shadow-colored-background_23-2147949151.jpg", imageAlt: "Data Sync Visualization" },
            { imageSrc: "http://img.b2bpic.net/free-photo/cloud-network-system-with-digital-technology-remixed-from-public-domain-by-nasa_53876-167294.jpg", imageAlt: "Cloud Infrastructure Setup" },
            { imageSrc: "http://img.b2bpic.net/free-photo/close-up-computer-screens-server-room-monitoring-artificial-intelligence_482257-126288.jpg", imageAlt: "AI Bot Integration Logic" },
          ]}
          carouselItemClassName="!aspect-[4/5]"
        />
        <FeatureBento
          title="Our Core Competencies"
          description="Integrated technology solutions designed to scale your operations."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          buttons={[{ text: "Explore Services", href: "#services" }]}
          buttonAnimation="slide-up"
          features={[
            {
              title: "Intelligent Automation",              description: "Eliminate repetitive tasks with custom API integrations and automated workflows.",              bentoComponent: "marquee",              centerIcon: Zap,
              variant: "text",              texts: ["Zapier", "Make.com", "Custom API", "Data Pipelines", "Auto-Lead Gen", "CRM Sync", "Notification Bots", "Scaling"],
            },
            {
              title: "Full-Stack Web Development",              description: "Bespoke websites built for performance and high conversion rates.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "http://img.b2bpic.net/free-photo/office-worker-setting-project-reminders_482257-119416.jpg", imageAlt: "Custom E-commerce Platform" },
                { imageSrc: "http://img.b2bpic.net/free-photo/showroom-agent-organizing-test-drive-using-mockup-notebook_482257-123977.jpg", imageAlt: "Corporate Landing Page" },
                { imageSrc: "http://img.b2bpic.net/free-photo/modern-smartphone-with-blank-white-screen-white-background_9975-133659.jpg", imageAlt: "Interactive Web App" },
              ],
            },
            {
              title: "Strategic Brand Growth",              description: "Elevate your market presence with cohesive visual storytelling.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "http://img.b2bpic.net/free-photo/clean-professional-corporate-identity-stationery-mockup_187299-47807.jpg", imageAlt: "Brand Strategy Assets" },
                { imageSrc: "http://img.b2bpic.net/free-photo/representations-user-experience-interface-design_23-2150104476.jpg", imageAlt: "Visual Design System" },
                { imageSrc: "http://img.b2bpic.net/free-photo/printer-icon-computer-page-digital-paper-concept_53876-124304.jpg", imageAlt: "Marketing Assets" },
              ],
            },
          ]}
        />
        <FeatureCardTwentySix
          title="Latest Project Case Studies"
          description="Examples of how our automation and web solutions drive results."
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "View Full Portfolio", href: "#work" }]}
          buttonAnimation="slide-up"
          cardClassName="!h-auto aspect-video"
          features={[
            {
              title: "Automated CRM System",              description: "Streamlining lead handling for finance firms",              imageSrc: "http://img.b2bpic.net/free-photo/modern-work-environment-empty-office-business-industry-enterprise-culture_482257-118995.jpg",              imageAlt: "CRM automation dashboard",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Next.js Enterprise Portal",              description: "Performance-driven corporate website",              imageSrc: "http://img.b2bpic.net/free-photo/financial-program-user-interface-pc-screen-home-office-desk_482257-118861.jpg",              imageAlt: "Corporate portal interface",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "AI Customer Support Bot",              description: "24/7 automated client response system",              imageSrc: "http://img.b2bpic.net/free-photo/anthropomorphic-robot-performing-regular-human-job-future_23-2151043413.jpg",              imageAlt: "AI Chatbot interface",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "E-commerce Scaling Module",              description: "Automating inventory and order flow",              imageSrc: "http://img.b2bpic.net/free-vector/simple-dashboard-user-panel_23-2148372638.jpg",              imageAlt: "E-commerce analytics dashboard",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
          ]}
        />
        <TestimonialCardFifteen
          testimonial="Vision Vault Media didn't just build us a website; they automated our entire sales pipeline. Their ability to integrate systems saved our team over 20 hours of manual work per week."
          rating={5}
          author="— Alex Rivera, Operations Director"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/portrait-fashionable-well-dressed-man-with-beard-posing-outdoors_1328-3268.jpg", alt: "Client" },
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
        <MetricCardOne
          title="Impact in Numbers"
          description="Transforming businesses through precision engineering."
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "automation", value: "500+", title: "Automations", description: "Automated workflows deployed globally", icon: Zap },
            { id: "speed", value: "99%", title: "Efficiency", description: "Average increase in process speed", icon: TrendingUp },
            { id: "tech", value: "24/7", title: "Uptime", description: "Reliable systems monitored constantly", icon: Shield },
          ]}
        />
        <TeamCardFive
          title="The Experts Behind the Code"
          description="Meet our team of web developers and automation architects."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          mediaClassName="object-[65%_center]"
          team={[
            { id: "1", name: "Jordan Lee", role: "Lead Automation Architect", imageSrc: "http://img.b2bpic.net/free-photo/happy-young-asian-businessman-businesswoman-meeting-brainstorming-some-new-ideas-about-project_7861-2781.jpg", imageAlt: "Jordan Lee" },
            { id: "2", name: "Casey Chen", role: "Full-Stack Developer", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-businesswoman-her-office_329181-13386.jpg", imageAlt: "Casey Chen" },
            { id: "3", name: "Sam Rivera", role: "Systems Engineer", imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-industrial-plant-shareholder-conducting-research_482257-120516.jpg", imageAlt: "Sam Rivera" },
          ]}
        />
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers about our development and automation services."
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            { id: "1", title: "What makes your automation different?", content: "We focus on bespoke API integrations that connect your existing software, ensuring seamless data flow rather than siloed 'quick-fixes'." },
            { id: "2", title: "How long is the setup process?", content: "For standard website projects, it is 2-4 weeks. Automation projects are scoped individually, usually starting within 1 week of strategy sign-off." },
            { id: "3", title: "Can you handle legacy systems?", content: "Yes, we are experienced in connecting legacy databases and systems with modern web front-ends via middleware services." },
            { id: "4", title: "Do you provide support?", content: "Every project includes a launch monitoring phase and optional monthly maintenance for both website uptime and automation integrity." },
          ]}
        />
        <ContactCTA
          tag="Get in Touch"
          title="Ready to Automate Your Success?"
          description="Stop spending time on manual tasks. Let's build a digital powerhouse for your business."
          background={{ variant: "rotated-rays-animated" }}
          buttons={[
            { text: "Schedule Strategy Call", href: "#contact" },
            { text: "View Our Work", href: "#work" },
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
        <FooterBase
          logoText="Vision Vault Media"
          copyrightText="© 2026 | Vision Vault Media"
          columns={[
            {
              title: "Company",              items: [
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Work", href: "#work" },
                { label: "Contact", href: "#contact" },
              ],
            },
            {
              title: "Services",              items: [
                { label: "Web Development", href: "#" },
                { label: "Automation", href: "#" },
                { label: "CRM Integration", href: "#" },
                { label: "API Solutions", href: "#" },
              ],
            },
            {
              title: "Connect",              items: [
                { label: "Twitter", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "GitHub", href: "#" },
              ],
            },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}