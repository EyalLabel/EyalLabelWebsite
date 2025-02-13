import { title } from "@/components/primitives";

export default function GameDevCVPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 font-sans">
      {/* Header */}
      <header className="text-center border-b-2 border-gray-800 pb-5 mb-8">
        <h1 className="text-3xl font-bold text-primary-800 mb-1">Eyal Label</h1>
        <div className="text-xl text-gray-600 mb-2">Software & Game Developer</div>
        <div className="text-sm">
          <span>Kfar Sava, 4428053 | </span>
          <a href="tel:0506441480" className="text-blue-600 hover:underline">0506441480</a>
          <span> | </span>
          <a href="mailto:eyal.label1@gmail.com" className="text-blue-600 hover:underline">eyal.label1@gmail.com</a>
          <br />

        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">Professional Summary</h2>
        <p>Full-stack software developer with 2.5 years of experience in enterprise software development. Proven track record in developing efficient, scalable solutions using modern technologies. Strong foundation in both front-end and back-end development, with expertise in C#, Java, React, And Unity. 
           Combining software development experience with a passion for game development, I bring strong problem-solving abilities and attention to detail to create engaging gaming and interactive experiences.</p>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-3">
            <strong className="text-gray-800">Game Development:</strong> Unity Engine, C#,Unreal Engine, Game Design Patterns, 3D Modeling (Maya)
          </div>
          <div>
            <strong>Programming Languages:</strong> C#, Java, JavaScript, TypeScript
          </div>
          <div>
            <strong>Frontend:</strong> React, Next.js, CSS3, Modern JavaScript
          </div>
          <div>
            <strong>Backend:</strong> Spring, .NET, RESTful APIs, Node.js
          </div>
          <div>
            <strong>Databases:</strong> MySQL, SQL , MongoDB, IRIS, Prisma
          </div>
          <div>
            <strong>Tools & Platforms:</strong> Git, InterSystems IRIS
          </div>
        </div>
      </section>

      

      {/* Professional Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">Professional Experience</h2>
        
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <div>
              <span className="font-bold text-gray-800">Software Developer</span> | 
              <span className="font-bold"> Matrix</span>
            </div>
            <span className="text-gray-600">2022-11 - Present</span>
          </div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Developed responsive and intuitive user interfaces for ERP systems</li>
            <li>Implemented efficient software solutions while maintaining clean, maintainable code</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software products</li>
            <li>Applied object-oriented programming principles to create scalable solutions</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <div>
              <span className="font-bold text-gray-800">Anti-Fraud Analyst</span> | 
              <span className="font-bold"> RSA Security</span>
            </div>
            <span className="text-gray-600">2022-06 - 2022-11</span>
          </div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Analyzed and responded to security threats in real-time</li>
            <li>Developed automated solutions to enhance threat detection efficiency</li>
            <li>Demonstrated strong analytical and problem-solving skills</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">Education</h2>
        
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <div>
              <span className="font-bold text-gray-800">Game Design And Development Diploma</span> | 
              <span className="font-bold"> The Open University - Tel Aviv</span>
            </div>
            <span className="text-gray-600">2024-01 - 2025-01</span>
          </div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Focus areas: Unity Development, Unreal Engine, C#, Game Design Principles</li>
            <li>Practical experience in 3D modeling using Maya</li>
            <li>Creating original game projects using industry-standard tools</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <div>
              <span className="font-bold text-gray-800">Full-Stack Java Development</span> | 
              <span className="font-bold"> John Bryce - Tel Aviv</span>
            </div>
            <span className="text-gray-600">2021-02 - 2021-05</span>
          </div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Comprehensive training in Java, MySQL, Spring, React, and Javascript</li>
            <li>Developed full-stack applications as part of coursework</li>
          </ul>
        </div>
      </section>

    {/* Game Projects */}
    <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">Game Projects</h2>
        
        <div className="mb-4">
          <div className="font-bold text-gray-800 mb-2">Undead Unrest | Unity Mobile/PC Game</div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Developed a 2D roguelite game targeting both mobile and PC platforms using Unity and C#</li>
            <li>Implemented procedural level generation and progressive difficulty scaling</li>
            <li>Created engaging combat mechanics and enemy AI behavior systems</li>
            <li>Designed and implemented cross-platform UI that works seamlessly on both touch and keyboard/mouse inputs</li>
            <li>Utilized object pooling and optimization techniques to ensure smooth performance on mobile devices</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="font-bold text-gray-800 mb-2">Clear of Mind | 3D Detective Game</div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Led development of a 3D detective game featuring interactive investigation mechanics</li>
            <li>Designed and implemented a skill-based mini-game system to enhance gameplay variety</li>
            <li>Created an NPC interaction system with branching dialogue and consequential choices</li>
            <li>Developed investigation mechanics allowing players to collect and analyze evidence</li>
            <li>Implemented 3D character movement and camera controls optimized for exploration</li>
            <li>Collaborated with team members to integrate 3D models and animations</li>
          </ul>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">Languages</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Hebrew: Native</li>
          <li>English: Proficient (C2)</li>
        </ul>
      </section>

      {/* Interests */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">Interests</h2>
        <p>Game Development, Video Games, Technology, Writing</p>
      </section>
    </div>
  );
}
