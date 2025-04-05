
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Github, 
  ExternalLink, 
  Youtube, 
  FileText, 
  Database, 
  Zap, 
  CalendarDays, 
  Activity 
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-teal-500 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              VMP PLUS
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              A full-stack web application designed to streamline and optimize vendor management processes, 
              built for the Higher Diploma in Computer Science.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50" asChild>
                <a href="#report-link">View Project Report</a>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                <a href="#demo-link">Live Demo</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
        {/* Project Overview */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Overview</h2>
            <p className="text-muted-foreground text-lg">
              VMP PLUS replaces manual vendor management processes with a centralized platform, 
              enabling businesses to efficiently manage vendors, contracts, and performance metrics 
              all in one place.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<Database className="h-10 w-10 text-blue-600" />}
              title="Centralized Vendor Data"
              description="Easily manage and access all vendor information in one place."
            />
            <FeatureCard 
              icon={<Zap className="h-10 w-10 text-blue-600" />}
              title="Automated Workflows"
              description="Streamline processes like vendor onboarding and contract renewals."
            />
            <FeatureCard 
              icon={<FileText className="h-10 w-10 text-blue-600" />}
              title="Contract Management"
              description="Track contract lifecycles, key dates, and compliance requirements."
            />
            <FeatureCard 
              icon={<Activity className="h-10 w-10 text-blue-600" />}
              title="Performance Monitoring"
              description="Monitor vendor performance against key metrics and SLAs."
            />
          </div>
        </section>

        {/* Technologies Used */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="bg-muted/50 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-muted/80 transition-colors"
              >
                <div className="font-medium text-lg">{tech}</div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="max-w-3xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-teal-50 border-0">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-blue-700">Explore the Project</CardTitle>
              <CardDescription className="text-lg">
                Access the code, live demo, and documentation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <a href="#github-link">View GitHub Repo</a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">VMP PLUS</h3>
              <p className="text-slate-300">
                A modern Vendor Management Programme designed to streamline vendor relationships and optimize procurement processes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <FooterLink icon={<Github size={18} />} text="GitHub Repository" href="#github-link" />
                <FooterLink icon={<ExternalLink size={18} />} text="Live Demo" href="#demo-link" />
                <FooterLink icon={<Youtube size={18} />} text="Video Demonstration" href="#video-link" />
                <FooterLink icon={<FileText size={18} />} text="Project Report" href="#report-link" />
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} VMP PLUS Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Components
const FeatureCard = ({ icon, title, description }) => (
  <Card className="h-full">
    <CardHeader>
      <div className="mb-2">{icon}</div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const FooterLink = ({ icon, text, href }) => (
  <li>
    <a href={href} className="flex items-center gap-2 hover:text-blue-300 transition-colors">
      {icon}
      <span>{text}</span>
    </a>
  </li>
);

// Data
const technologies = [
  "React", 
  "TypeScript", 
  "Vite", 
  "Tailwind CSS", 
  "shadcn/ui", 
  "Supabase", 
  "PostgreSQL"
];

export default LandingPage;
