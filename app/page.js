'use client';

import MeshGradient from './MeshGradient';

const BASE = '/jobfair';

const projects = [
  {
    id: 1,
    title: "Legal Matter",
    subtitle: "مسألة قانونية",
    description: "AI-Powered Saudi Legal Assistant",
    tech: ["React", "Python", "Gemini 2.5", "FAISS"],
    logo: `${BASE}/legal-matter/logo.png`,
    banner: `${BASE}/legal-matter/title.png`,
    bannerBg: "bg-white",
  },
  {
    id: 2,
    title: "Affinity English",
    subtitle: "SerotoninEngine™",
    description: "Interactive Classroom Tool for Saudi Schools",
    tech: ["React", "Supabase", "Gemini"],
    banner: `${BASE}/affinity/title-card.png`,
    gallery: [
      `${BASE}/affinity/serotonin-card.png`,
      `${BASE}/affinity/canvas-card.png`,
      `${BASE}/affinity/breathing-card.png`,
      `${BASE}/affinity/idle-card.png`,
      `${BASE}/affinity/vision-card.png`,
      `${BASE}/affinity/bottom-card.png`,
    ],
  },
  {
    id: 3,
    title: "JoyPop",
    subtitle: "Bite-Sized Happiness",
    description: "Science-Based Wellbeing App",
    tech: ["Next.js", "Supabase", "Vercel"],
    logo: `${BASE}/joypop/hero-jar.png`,
    gallery: [
      `${BASE}/joypop/filled-jar.png`,
      `${BASE}/joypop/joypop-story.png`,
      `${BASE}/joypop/three-joy-stars.png`,
      `${BASE}/joypop/star-gratitude.png`,
      `${BASE}/joypop/star-savouring.png`,
    ],
  },
  {
    id: 4,
    title: "HopeBot",
    subtitle: "RDIA Stage 2 Funded",
    description: "AI Depression Support Platform",
    tech: ["FlutterFlow", "Firebase", "Gemini 2.0"],
    logo: `${BASE}/HopeBot_logo.png`,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <MeshGradient />

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

        {/* Projects */}
        <div className="space-y-6 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Featured Projects</h2>

          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white/50 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'slideUp 0.5s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Banner */}
              {project.banner && (
                <div className={`w-full ${project.bannerBg || 'bg-black'}`}>
                  <img
                    src={project.banner}
                    alt={project.title + ' banner'}
                    className="w-full object-cover"
                    style={{ maxHeight: '140px', objectFit: 'cover' }}
                  />
                </div>
              )}

              <div className="p-6">
                {/* Title row */}
                <div className="flex items-start gap-4 mb-4">
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt={project.title + ' logo'}
                      width={48}
                      height={48}
                      className="rounded-full object-contain flex-shrink-0 bg-white/60"
                      style={{ width: 48, height: 48 }}
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{project.title}</h3>
                    <p className="text-sm text-purple-600 font-medium mb-2">{project.subtitle}</p>
                    <p className="text-gray-700 mb-3 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-xs font-medium text-purple-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Gallery */}
                {project.gallery && (
                  <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
                    {project.gallery.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={project.title + ' screenshot ' + (i + 1)}
                        className="rounded-2xl object-cover flex-shrink-0 shadow-md"
                        style={{ height: 160, width: 'auto' }}
                      />
                    ))}
                  </div>
                )}

                {/* QR */}
                <div className="mt-4 pt-4 border-t border-gray-200/50 flex items-center justify-between">
                  <span className="text-sm text-gray-600">Scan for details →</span>
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-2xl">📱</div>
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
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center mb-2 shadow-md">📄</div>
              <p className="text-xs font-medium text-gray-700">CV</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center mb-2 shadow-md">💼</div>
              <p className="text-xs font-medium text-gray-700">LinkedIn</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center mb-2 shadow-md">🐙</div>
              <p className="text-xs font-medium text-gray-700">GitHub</p>
            </div>
          </div>
        </footer>

        <div className="fixed bottom-8 right-8 w-16 h-16 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center text-3xl shadow-lg animate-bounce">
          ✨
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
