import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-center bg-luxurygreen-dark text-white px-6 py-12 font-serif ${playfair.variable}`}
    >
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,42,43,0.85),rgba(16,22,19,0.85)), url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')",
        }}
      >
        <h1
          className="text-5xl md:text-6xl font-bold mb-6 text-center drop-shadow-lg text-gold"
          style={{
            textShadow: '0 2px 24px #0f3d2e, 0 1px 0 #000',
            letterSpacing: '0.04em',
          }}
        >
          Access the Inner Circle
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center drop-shadow text-luxurygreen" style={{ color: '#b7c9b7' }}>
          The digital sanctuary for elite entrepreneurs, visionaries & AI-empowered thinkers.
        </p>
        <a
          href="mailto:access@theonepercent.ai"
          className="mt-6 px-8 py-3 font-semibold rounded-full transition border-2 bg-gradient-to-r from-luxurygreen to-gold text-luxurygreen-dark border-gold shadow-lg"
        >
          Request Access
        </a>
      </section>

      {/* About Section */}
      <section className="bg-luxurygreen-dark px-6 py-16" style={{ background: 'linear-gradient(120deg, #101613 80%, #1a3a2b 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-6 text-gold"
            style={{ letterSpacing: '0.03em' }}
          >
            About The 1%
          </h2>
          <p className="text-lg leading-relaxed text-luxurygreen" style={{ color: '#b7c9b7' }}>
            <em>The 1% is not a place — it’s a signal.</em>
            <br />
            <br />
            A quiet movement of founders, futurists, and renegades redefining influence through AI, capital, and private counsel.
            <br />
            <br />
            This club exists in whispers — an encrypted sanctuary where high-level strategy, unfiltered access, and network leverage collide.
          </p>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="px-6 py-16 border-t border-luxurygreen bg-gradient-to-br from-luxurygreen-dark via-luxurygreen to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-6 tracking-tight text-gold"
            style={{ letterSpacing: '0.03em' }}
          >
            Private Member Benefits
          </h2>
          <p className="text-lg mb-12 text-luxurygreen" style={{ color: '#b7c9b7' }}>
            Entry unlocks a discreet vault of influence, insight, and invisible leverage. Here's what lies beyond the veil.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-luxurygreen border-l-4 border-gold rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">Direct Access</h3>
              <p className="text-luxurygreen" style={{ color: '#b7c9b7' }}>
                Tap into a closed network of top-tier founders, investors, and AI architects. No noise. No middlemen.
              </p>
            </div>
            <div className="bg-luxurygreen border-l-4 border-gold rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">Encrypted Intel</h3>
              <p className="text-luxurygreen" style={{ color: '#b7c9b7' }}>
                Receive private drops on market shifts, capital trends, and undisclosed ventures weeks before the public.
              </p>
            </div>
            <div className="bg-luxurygreen border-l-4 border-gold rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">Capital Leverage</h3>
              <p className="text-luxurygreen" style={{ color: '#b7c9b7' }}>
                Co-invest alongside influential capital pools. Private rounds, discreet LP entries, and hidden deal flow.
              </p>
            </div>
            <div className="bg-luxurygreen border-l-4 border-gold rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">Tactical Counsel</h3>
              <p className="text-luxurygreen" style={{ color: '#b7c9b7' }}>
                Schedule encrypted briefings with ex-intelligence operatives, elite advisors, and AI-powered strategists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 border-t border-luxurygreen bg-gradient-to-br from-luxurygreen-dark via-luxurygreen to-black">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-12 text-gold"
            style={{ letterSpacing: '0.03em' }}
          >
            Whispers from the Inside
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <blockquote className="bg-luxurygreen border-l-4 border-gold p-6 rounded-xl">
              <p className="text-lg italic text-luxurygreen" style={{ color: '#b7c9b7' }}>
                “One idea from The 1% led to a $2M raise and a partnership that changed everything.”
              </p>
              <footer className="mt-4 text-sm text-luxurygreen" style={{ color: '#b7c9b7' }}>— D. Khoury, Tech Founder</footer>
            </blockquote>
            <blockquote className="bg-luxurygreen border-l-4 border-gold p-6 rounded-xl">
              <p className="text-lg italic text-luxurygreen" style={{ color: '#b7c9b7' }}>
                “It feels like being on the inside of a secret machine built for exponential thinking.”
              </p>
              <footer className="mt-4 text-sm text-luxurygreen" style={{ color: '#b7c9b7' }}>— Anonymous VC</footer>
            </blockquote>
            <blockquote className="bg-luxurygreen border-l-4 border-gold p-6 rounded-xl">
              <p className="text-lg italic text-luxurygreen" style={{ color: '#b7c9b7' }}>“This isn't a club. It's a cheat code.”</p>
              <footer className="mt-4 text-sm text-luxurygreen" style={{ color: '#b7c9b7' }}>— L. Evans, Ecom Operator</footer>
            </blockquote>
            <blockquote className="bg-luxurygreen border-l-4 border-gold p-6 rounded-xl">
              <p className="text-lg italic text-luxurygreen" style={{ color: '#b7c9b7' }}>“You won’t find The 1% on Google. And that’s the point.”</p>
              <footer className="mt-4 text-sm text-luxurygreen" style={{ color: '#b7c9b7' }}>— J. M., AI Strategist</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="bg-cover bg-center text-white px-6 py-24 border-t border-luxurygreen"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,42,43,0.92),rgba(16,22,19,0.92)), url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')",
        }}
      >
        <div className="bg-luxurygreen-dark/80 p-10 rounded max-w-2xl mx-auto text-center border-2 border-gold">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gold">Apply For Access</h2>
          <p className="text-lg mb-8 text-luxurygreen" style={{ color: '#b7c9b7' }}>
            Membership is strictly limited and by invitation only. If you believe you belong, reach out.
          </p>
          <a
            href="mailto:access@theonepercent.ai"
            className="mt-6 px-8 py-3 font-semibold rounded-full transition border-2 bg-gradient-to-r from-luxurygreen to-gold text-luxurygreen-dark border-gold shadow-lg"
          >
            Request Access
          </a>
        </div>
      </section>
    </main>
  );
}