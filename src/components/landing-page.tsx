import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, ExternalLink, Youtube, FileText, Database, Zap, CalendarDays, Activity, Linkedin } from "lucide-react";

const LandingPage = () => {
  return <div className="min-h-screen flex flex-col">
      {/* Header Section - Updated for Phase 1 */}
      <header className="relative bg-white py-16 md:py-24 border-b">
        <div className="container mx-auto px-4">
          {/* Apply flex layout for medium screens and up */}
          <div className="max-w-3xl mx-auto text-center md:flex md:items-center md:text-left md:max-w-full">
            {/* Left Column: Text Content */}
            <div className="md:w-3/5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                VMP+
              </h1>
              <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
                VMP+ is a full-stack web application designed to streamline and optimize vendor management processes. It replaces manual workflows with a centralized platform, enabling efficient management of vendors, contracts, and performance metrics. Built for the Higher Diploma in Computer Science.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {/* Project Report Button - Adjusted for contrast */}
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50" asChild>
                  <a href="#report-link">View Project Report</a>
                </Button>
                {/* Live Demo Button - Adjusted for contrast */}
                <Button
                  size="lg"
                  variant="default"
                  className="bg-blue-600 hover:bg-blue-700"
                  asChild
                >
                  <a href="#demo-link">Live Demo</a>
                </Button>
              </div>
            </div>
            {/* Right Column: Image */}
            <div className="md:w-2/5 md:pl-8 mt-12 md:mt-0">
              {/* Adjust image classes */}
              <img src="/lovable-uploads/fee22b59-9bfe-4856-a3ec-c776db8c0af5.png" alt="VMP PLUS Project Poster - Before and After" className="w-full max-w-md rounded-lg" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow">
        {/* About the Developer */}
        <section className="bg-gray-50/50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl md:max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-start md:gap-16">
                {/* Left Column - Image */}
                <div className="md:w-2/5 mb-8 md:mb-0">
                  <img 
                    src="/avatar.PNG" 
                    alt="Marcos O. Gomes" 
                    className="rounded-2xl shadow-lg w-full max-w-xs mx-auto object-cover"
                  />
                </div>
                {/* Right Column - Content */}
                <div className="md:w-3/5">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Hi, I'm Marcos.</h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    As a <strong>procurement specialist</strong>, I bring a unique perspective to VMP PLUS, combining my emerging <strong>tech skills</strong> with a decade of <strong>hands-on procurement experience</strong>. 
                  </p>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    The project's core concept originated from <strong>real-world vendor management challenges</strong> I identified and worked to solve over <strong>1.5 years</strong> in my previous corporate procurement role. During that time, I designed and proposed the initial solution, presented it internally up to the <strong>VP level</strong>, and the concept was selected for a competitive company <strong>AI hackathon (2024)</strong>.
                  </p>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    This deep familiarity with the <strong>business needs</strong> and prior validation of the concept allowed me to focus my <strong>Higher Diploma</strong> efforts on the technical implementation, ensuring VMP PLUS is a practical tool grounded in significant <strong>real-world experience</strong>.
                  </p>
                  <Button variant="outline" asChild className="gap-2">
                    <a href="https://www.linkedin.com/in/marcosogomes/" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={18} />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard icon={<Database className="h-10 w-10 text-blue-600" />} title="Centralized Vendor Data" description="Easily manage and access all vendor information in one place." />
              <FeatureCard icon={<Zap className="h-10 w-10 text-blue-600" />} title="Automated Workflows" description="Streamline processes like vendor onboarding and contract renewals." />
              <FeatureCard icon={<FileText className="h-10 w-10 text-blue-600" />} title="Contract Management" description="Track contract lifecycles, key dates, and compliance requirements." />
              <FeatureCard icon={<Activity className="h-10 w-10 text-blue-600" />} title="Performance Monitoring" description="Monitor vendor performance against key metrics and SLAs." />
            </div>
          </div>
        </section>

        {/* Project Demonstration Video */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Corporate AI Hackathon 2024 - Project Concept Demo</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-2">
                <video src="/ProcurementVMP.mp4" controls className="w-full aspect-video rounded-lg"></video>
              </Card>
            </div>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Technologies Used</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {technologies.map((tech, index) => {
                const iconSrc = tech === "shadcn/ui"
                  ? "/shadcnui.svg"
                  : `/${tech.toLowerCase().replace(/\s+/g, "")}.svg`;
                
                return (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors border border-border hover:shadow-md"
                  >
                    <img 
                      src={iconSrc} 
                      alt={`${tech} Logo`} 
                      className="h-12 w-12 mb-2" 
                      onError={(e) => { 
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/placeholder.svg';
                        console.warn(`Icon not found for ${tech}, using path: ${iconSrc}`);
                      }}
                    />
                    <div className="font-medium text-lg">{tech}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-slate-900 py-16 md:py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Explore the Project</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Access the code, live demo, and documentation to see how VMP PLUS can transform your vendor management processes.
            </p>
            <Button variant="secondary" size="lg" className="font-semibold" asChild>
              <a href="https://github.com/marcosogg/vmpplus-hdip-final-project" className="flex items-center gap-2">
                <Github size={20} />
                View GitHub Repository
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer>
        {/* Top Band - Updated styling */}
        <div className="bg-slate-900 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-200">VMP+</h3>
                <p className="text-slate-200">
                  A modern Vendor Management Programme designed to streamline vendor relationships and optimize procurement processes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-200">Resources</h3>
                <ul className="space-y-2">
                  <FooterLink icon={<Github size={18} />} text="GitHub Repository" href="https://github.com/marcosogg/vmpplus-hdip-final-project" />
                  <FooterLink icon={<ExternalLink size={18} />} text="Live Demo" href="#demo-link" />
                  <FooterLink icon={<Youtube size={18} />} text="Video Demonstration" href="#video-link" />
                  <FooterLink icon={<FileText size={18} />} text="Project Report" href="#report-link" />
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Band (Light Gray) */}
        <div className="bg-slate-100 text-slate-500 py-6">
          <div className="container mx-auto px-4">
            <p className="text-center">&copy; {new Date().getFullYear()} VMP+ Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};

// Helper Components
const FeatureCard = ({
  icon,
  title,
  description
}) => <Card className="h-full border border-border hover:shadow-md">
    <CardHeader>
      <div className="mb-2">{icon}</div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>;
const FooterLink = ({
  icon,
  text,
  href
}) => <li>
    <a href={href} className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors">
      {icon}
      <span>{text}</span>
    </a>
  </li>;

// Data
const technologies = ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Supabase", "PostgreSQL"];
export default LandingPage;
