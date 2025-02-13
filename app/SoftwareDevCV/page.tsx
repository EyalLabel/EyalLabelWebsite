import { title } from "@/components/primitives";

export default function SoftwareDevCVPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 font-sans">
      {/* Header */}
      <div className="text-center border-b-2 border-black pb-4 mb-6">
        <h1 className="text-4xl font-bold text-black mb-2">Eyal Label</h1>
        <div className="text-xl mb-2">Software Developer</div>
        <div className="text-sm">
          Kfar Sava, 4428053 | 
          <a href="tel:0506441480" className="mx-1 hover:underline">0506441480</a> |
          <a href="mailto:eyal.label1@gmail.com" className="mx-1 hover:underline">eyal.label1@gmail.com</a>
          <br />
          <a href="https://www.linkedin.com/in/eyal-label/" className="mr-2 hover:underline">LinkedIn</a> |
          <a href="https://github.com/EyalLabel/" className="hover:underline">GitHub</a>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b border-black pb-2 mb-3">Professional Summary</h2>
        <p>Full-stack software developer with 2.5 years of experience in enterprise software development. Proven track record in developing efficient, scalable solutions using modern technologies. Strong foundation in both front-end and back-end development, with expertise in C#, Java, and React.</p>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b border-black pb-2 mb-3">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <strong>Programming Languages:</strong> C#, Java, JavaScript, TypeScript
          </div>
          <div>
            <strong>Frontend:</strong> React, HTML5, CSS3, Modern JavaScript
          </div>
          <div>
            <strong>Backend:</strong> Spring, .NET, RESTful APIs
          </div>
          <div>
            <strong>Databases:</strong> MySQL, SQL
          </div>
          <div>
            <strong>Tools & Platforms:</strong> Git, InterSystems IRIS
          </div>
          <div>
            <strong>Additional Skills:</strong> Agile Methodologies, System Design, Problem-Solving
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b border-black pb-2 mb-3">Professional Experience</h2>
        
        <div className="mb-4">
          <div className="flex justify-between">
            <div>
              <span className="font-bold">Software Developer</span> | 
              <span className="font-bold ml-1">Matrix</span>
            </div>
            <span className="text-sm">2022-11 - Present</span>
          </div>
          <ul className="list-disc pl-5">
            <li>Developed and maintained enterprise-level ERP solutions</li>
            <li>Designed and implemented responsive user interfaces for complex business applications</li>
            <li>Collaborated with stakeholders to gather requirements and deliver optimal solutions</li>
            <li>Participated in code reviews and implemented best practices for software development</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <div>
              <span className="font-bold">Anti-Fraud Analyst</span> | 
              <span className="font-bold ml-1">RSA Security</span>
            </div>
            <span className="text-sm">2022-06 - 2022-11</span>
          </div>
          <ul className="list-disc pl-5">
            <li>Conducted real-time analysis of web threats including phishing sites and malware</li>
            <li>Developed automated solutions to streamline threat detection processes</li>
            <li>Collaborated with security teams to implement rapid response protocols</li>
            <li>Enhanced system efficiency through process automation and optimization</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b border-black pb-2 mb-3">Education</h2>
        
        <div className="mb-4">
          <div className="flex justify-between">
            <div>
              <span className="font-bold">Full-Stack Java Development</span> | 
              <span className="font-bold ml-1">John Bryce - Tel Aviv</span>
            </div>
            <span className="text-sm">2021-02 - 2021-05</span>
          </div>
          <ul className="list-disc pl-5">
            <li>Comprehensive training in full-stack development with Java, MySQL, Spring, React, and Javascript</li>
            <li>Developed multiple full-stack applications as course projects</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <div>
              <span className="font-bold">Computer Science Major</span> | 
              <span className="font-bold ml-1">Galili High School - Kfar Saba</span>
            </div>
            <span className="text-sm">2013-09 - 2016-05</span>
          </div>
          <ul className="list-disc pl-5">
            <li>Advanced coursework in programming and computer science principles</li>
            <li>Developed strong analytical and problem-solving skills</li>
          </ul>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b border-black pb-2 mb-3">Languages</h2>
        <ul className="list-disc pl-5">
          <li>Hebrew: Native</li>
          <li>English: Proficient (C2)</li>
        </ul>
      </section>

      {/* Professional Interests */}
      <section>
        <h2 className="text-xl font-bold border-b border-black pb-2 mb-3">Professional Interests</h2>
        <p>Software Architecture, Technology Innovation, Web Development</p>
      </section>
    </div>
  );
}
