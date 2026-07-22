import React, { useState, useEffect } from 'react';

export default function App() {
  // Placeholder state for our upcoming AWS Lambda / API Gateway Analytics counter
  const [visitorCount, setVisitorCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_ENDPOINT = "https://mdywqs66ql.execute-api.us-east-2.amazonaws.com/visitor-count";

    fetch(API_ENDPOINT)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.visitor_count !== undefined) {
          setVisitorCount(data.visitor_count);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching telemetry from API Gateway:", error);
        setVisitorCount("Offline");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans px-4 py-8 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* HEADER SECTION */}
        <header className="border-b border-slate-700 pb-6 space-y-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white">Muhyi Siddiqui</h1>
              <p className="text-slate-400 font-medium mt-1">
                Computer Science @ UCF | Minors in Math & Secure Computing (SCAN)
              </p>
            </div>
            <div className="text-sm text-slate-300 space-y-1 md:text-right">
              <p>📍 Orlando, FL | U.S. Citizen</p>
              <p>📧 <a href="mailto:muhyisiddiqui@outlook.com" className="hover:text-cyan-400 transition">muhyisiddiqui@outlook.com</a></p>
              <p>🔗 <a href="https://github.com/TheFish1236" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">GitHub: TheFish1236</a></p>
            </div>
          </div>
        </header>

        {/* ANALYTICS DASHBOARD UX (Position 11 Highlight) */}
        <section className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Cloud Metrics Dashboard</h2>
              <p className="text-sm text-slate-300">Real-time Visitor Telemetry (AWS DynamoDB + Lambda)</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 px-4 py-2 rounded-lg text-right">
              <span className="text-xs text-slate-400 block">Total Requests</span>
              <span className="text-xl font-mono font-bold text-cyan-300">
                {loading ? "Counting..." : `${visitorCount} hits`}
              </span>
            </div>
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-2">Education & Certifications</h2>
          
          <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-800/60">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-white">University of Central Florida</h3>
                <p className="text-sm text-slate-300">Bachelor of Science in Computer Science | GPA: 3.7/4.0</p>
                <p className="text-xs text-slate-400 mt-1">Minors: Mathematics, Secure Computing and Networks (SCAN)</p>
                <p className="text-xs text-slate-400">Honors: PRIME STEM Member, National Name Exchange Nominee, Dean's List</p>
                <p className="text-xs text-cyan-400/90 mt-1">Milestone: UCF CS Foundation Exam Passed (Top 25% Score Bracket)</p>
              </div>
              <span className="text-xs text-slate-400">Expected May 2028</span>
            </div>
          </div>

          <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-800/60 space-y-2">
            <h3 className="text-sm font-semibold text-slate-200">Certifications & Technical Stack</h3>
            <p className="text-xs text-slate-300"><strong className="text-slate-100">Certifications:</strong> CompTIA Security+, Network+, A+ | <span className="text-amber-400">In Progress: AWS Solutions Architect Associate</span></p>
            <p className="text-xs text-slate-300"><strong className="text-slate-100">Languages & Web:</strong> Python, C/C++, Java, SQL, HTML/CSS, React, Tailwind CSS</p>
            <p className="text-xs text-slate-300"><strong className="text-slate-100">Cloud & Architecture:</strong> AWS (S3, API Gateway, Lambda, DynamoDB, CloudFront, Route 53), REST APIs, CI/CD, UNIX/Linux</p>
            <p className="text-xs text-slate-300"><strong className="text-slate-100">Databases & Tools:</strong> SQLite, Git/GitHub, Excel/Power Query, SharePoint, VSCode</p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-2">Experience</h2>
          
          <div className="space-y-4">
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-800/60 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-white">Technology Assistant (Systems & Automation)</h3>
                  <p className="text-sm text-cyan-400">University of Central Florida (SARC)</p>
                </div>
                <span className="text-xs text-slate-400">June 2026 – Present</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                <li>Acted as sole developer for internal tooling under administrative oversight, applying SDLC Agile principles.</li>
                <li>Automated departmental inventory reporting by scripting raw database states to secure SharePoint directories using Power Query.</li>
                <li>Secured 100+ shared endpoints/iPads, hardening local configurations and disabling credential caching for compliance.</li>
              </ul>
            </div>

            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-800/60 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-white">Field Service Technician Cadet (Seasonal)</h3>
                  <p className="text-sm text-cyan-400">Geek Squad (Best Buy)</p>
                </div>
                <span className="text-xs text-slate-400">Nov 2025 – Jan 2026</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                <li>Supported enterprise POS system refreshes and hotel-wide operational integrations across commercial sites.</li>
                <li>Staged mesh Wi-Fi configurations and IoT endpoints, following corporate SOPs and network diagnostics.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-2">Technical Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-800/60 space-y-2">
              <h3 className="font-semibold text-white">Serverless Full-Stack Web Application</h3>
              <p className="text-xs text-cyan-400 font-mono">React, Tailwind, AWS (S3, CloudFront, Lambda, DynamoDB)</p>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                <li>Architected cloud-native application hosted on S3 with CloudFront global CDN enforcement for HTTPS/TLS.</li>
                <li>Built asynchronous backend API using API Gateway, Python Lambda, and DynamoDB NoSQL database.</li>
                <li>Automated front-end testing and deployment via GitHub Actions CI/CD workflows.</li>
              </ul>
            </div>

            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-800/60 space-y-2">
              <h3 className="font-semibold text-white">FERPA-Aligned Asset Tracking Database</h3>
              <p className="text-xs text-cyan-400 font-mono">Python, SQLite, REST APIs, Regex</p>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                <li>Engineered local-first Python/SQLite architecture to automate asset tracking under FERPA rules.</li>
                <li>Developed Regex parsers to sanitize student IDs from mag-stripe card data for Qualtrics API validation.</li>
                <li>Implemented offline transaction caching with automatic synchronization upon network reconnection.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-xs text-slate-500 pt-8 border-t border-slate-800">
          <p>© {new Date().getFullYear()} Muhyi Siddiqui. Hosted serverless on AWS (S3 & CloudFront).</p>
        </footer>

      </div>
    </div>
  );
}