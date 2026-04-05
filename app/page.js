'use client';

import MeshGradient from './MeshGradient';

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Legal Matter",
      subtitle: "مسألة قانونية",
      description: "AI-Powered Saudi Legal Assistant",
      tech: ["React", "Python", "Gemini 2.5", "FAISS"],
      emoji: "⚖️"
    },
    {
      id: 2,
      title: "Affinity English",
      subtitle: "SerotoninEngine™",
      description: "Interactive Classroom Tool for Saudi Schools",
      tech: ["React", "Supabase", "Gemini"],
      emoji: "🎨"
    },
    {
      id: 3,
      title: "JoyPop",
      subtitle: "Bite-Sized Happiness",
      description: "Science-Based Wellbeing App",
      tech: ["Next.js", "Supabase", "Vercel"],
      emoji: "✨",
      link: "https://joypop-notion-url.com" // Replace with actual
    },
    {
      id: 4,
      title: "HopeBot",
      subtitle: "RDIA Stage 2 Funded",
      description: "AI Depression Support Platform",
      tech: ["FlutterFlow", "Firebase", "Gemini 2.0"],
      emoji: "💙"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <MeshGradient />
      
      {/* Main Content */}
      <div className="relative z-10 px-6 py-12 max-w-md mx-auto">
        
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center text-5xl shadow-lg">
            👋
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Ali Alghamdi
          </h1>
          <p className="text-gray-700 text-lg">Full Stack Developer</p>
          <div className="flex gap-3 justify-center mt-4 text-sm">
            <a href="mailto:your@email.com" className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full hover:bg-white/80 transition-all shadow-sm">
              📧 Email
            </a>
            <a href="tel:+966" className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full hover:bg-white/80 transition-all shadow-sm">
              📱 Phone
            </a>
          </div>
        </header>

        {/* Projects Grid */}
        <div className="space-y-6 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Featured Projects
          </h2>
          
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white/50 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'slideUp 0.5s ease-out forwards',
                opacity: 0
              }}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{project.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-purple-600 font-medium mb-2">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-xs font-medium text-purple-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* QR Code Placeholder */}
              <div className="mt-4 pt-4 border-t border-gray-200/50 flex items-center justify-between">
                <span className="text-sm text-gray-600">Scan for details →</span>
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-2xl">
                  📱
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer QR Codes */}
        <footer className="bg-white/40 backdrop-blur-md rounded-3xl p-8 shadow-lg">
          <p className="text-center text-gray-700 mb-6 font-medium">
            Interested? Scan for more info or ask for detailed project sheets! 
          </p>
          
          <div className="grid grid-cols-3 gap-4">
            {/* CV QR */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center mb-2 shadow-md">
                📄
              </div>
              <p className="text-xs font-medium text-gray-700">CV</p>
            </div>
            
            {/* LinkedIn QR */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center mb-2 shadow-md">
                💼
              </div>
              <p className="text-xs font-medium text-gray-700">LinkedIn</p>
            </div>
            
            {/* GitHub QR */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center mb-2 shadow-md">
                🐙
              </div>
              <p className="text-xs font-medium text-gray-700">GitHub</p>
            </div>
          </div>
        </footer>

        {/* Cute floating element */}
        <div className="fixed bottom-8 right-8 w-16 h-16 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center text-3xl shadow-lg animate-bounce">
          ✨
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
