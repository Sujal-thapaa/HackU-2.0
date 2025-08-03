import { ExternalLink } from 'lucide-react';

// Define the consistent color palette
const COLORS = {
  PRIMARY_BG: '#0E0B16',        // Dark Plum
  PRIMARY_ACCENT: '#9370DB',    // Medium Purple
  SECONDARY_ACCENT: '#D8BFD8',  // Thistle
  SURFACE: '#1A162B',           // Deeper Plum
  TEXT_MAIN: '#E0E0E0',         // Soft White
  TEXT_MUTED: '#BDBDBD',        // Light Gray
  LINK_HOVER: '#B799FF',        // Vibrant Violet
};

const PreviousHackathons = () => {
  const hackathons = [
    { name: 'United Hacks V1', year: '2023', participants: '500+', image: '/HackUnitedLogo.webp' },
    { name: 'United Hacks V2', year: '2024', participants: '1,000+', image: '/HackUnitedLogo2.webp' },
    { name: 'United Hacks V3', year: '2024', participants: '1,000+', image: '/HackUnitedLogo3.jpeg' },
    { name: 'United Hacks V4', year: '2025 January', participants: '1,000+', image: '/HackUnitedLogo.webp' },
    { name: 'United Hacks V5', year: '2025 June', participants: '1,200+', image: '/HackUnitedLogo2.webp' },
  ];

  return (
    <section id="previous" className="py-20" style={{ backgroundColor: COLORS.PRIMARY_BG }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{ backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})` }}
          >
            Previous Hackathons
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: COLORS.TEXT_MUTED }}>
            Join the legacy of innovation that has inspired thousands of developers worldwide
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {hackathons.map((hackathon) => (
            <div
              key={hackathon.name}
              className="group rounded-none overflow-hidden border transition-all duration-300 transform hover:scale-105"
              style={{
                background: `linear-gradient(to bottom right, ${COLORS.SURFACE}, ${COLORS.PRIMARY_BG})`,
                borderColor: `${COLORS.PRIMARY_ACCENT}40`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${COLORS.PRIMARY_ACCENT}80`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${COLORS.PRIMARY_ACCENT}40`;
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={hackathon.image}
                  alt={hackathon.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <ExternalLink 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    style={{ color: COLORS.TEXT_MAIN }} 
                    size={20} 
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.TEXT_MAIN }}>{hackathon.name}</h3>
                <p className="font-semibold mb-1" style={{ color: COLORS.PRIMARY_ACCENT }}>{hackathon.year}</p>
                <p className="text-sm" style={{ color: COLORS.TEXT_MUTED }}>{hackathon.participants} participants</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousHackathons;