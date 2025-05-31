import Image from 'next/image';
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
      className={`flex flex-col items-center justify-center bg-black text-white px-6 py-12 font-serif ${playfair.variable}`}
    >
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Access the Inner Circle</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            The digital sanctuary for elite entrepreneurs, visionaries & AI-empowered thinkers.
          </p>
          <a
            href="mailto:access@theonepercent.ai"
            className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
          >
            Request Access
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-black text-white px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <Image
            src="https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg"
            alt="Private Jet Interior"
            width={800}
            height={500}
            className="rounded-lg mb-6 mx-auto"
          />
          <h2 className="text-4xl font-bold mb-6">About The 1%</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
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
      <section className="bg-black text-white px-6 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="https://images.unsplash.com/photo-1518546305927-5a8e0f9b8e4e"
            alt="Gold Theme"
            width={800}
            height={500}
            className="rounded-lg mb-6 mx-auto"
          />
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Private Member Benefits</h2>
          <p className="text-lg text-gray-400 mb-12">
            Entry unlocks a discreet vault of influence, insight, and invisible leverage. Here's what lies beyond the veil.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Direct Access</h3>
              <p className="text-gray-400">
                Tap into a closed network of top-tier founders, investors, and AI architects. No noise. No middlemen.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Encrypted Intel</h3>
              <p className="text-gray-400">
                Receive private drops on market shifts, capital trends, and undisclosed ventures weeks before the public.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Capital Leverage</h3>
              <p className="text-gray-400">
                Co-invest alongside influential capital pools. Private rounds, discreet LP entries, and hidden deal flow.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Tactical Counsel</h3>
              <p className="text-gray-400">
                Schedule encrypted briefings with ex-intelligence operatives, elite advisors, and AI-powered strategists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black text-white px-6 py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <Image
            src="https://images.pexels.com/photos/2345678/pexels-photo-2345678.jpeg"
            alt="Luxury Yacht in Dubai Marina"
            width={800}
            height={500}
            className="rounded-lg mb-6 mx-auto"
          />
          <h2 className="text-4xl font-bold text-center mb-12">Whispers from the Inside</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <blockquote className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <p className="text-lg italic text-gray-300">
                “One idea from The 1% led to a $2M raise and a partnership that changed everything.”
              </p>
              <footer className="mt-4 text-sm text-gray-500">— D. Khoury, Tech Founder</footer>
            </blockquote>
            <blockquote className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <p className="text-lg italic text-gray-300">
                “It feels like being on the inside of a secret machine built for exponential thinking.”
              </p>
              <footer className="mt-4 text-sm text-gray-500">— Anonymous VC</footer>
            </blockquote>
            <blockquote className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <p className="text-lg italic text-gray-300">“This isn't a club. It's a cheat code.”</p>
              <footer className="mt-4 text-sm text-gray-500">— L. Evans, Ecom Operator</footer>
            </blockquote>
            <blockquote className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <p className="text-lg italic text-gray-300">“You won’t find The 1% on Google. And that’s the point.”</p>
              <footer className="mt-4 text-sm text-gray-500">— J. M., AI Strategist</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="bg-cover bg-center text-white px-6 py-24 border-t border-gray-800"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-10 rounded max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Apply For Access</h2>
          <p className="text-lg text-gray-300 mb-8">
            Membership is strictly limited and by invitation only. If you believe you belong, reach out.
          </p>
          <a
            href="mailto:access@theonepercent.ai"
            className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
          >
            Request Access
          </a>
        </div>
      </section>
    </main>
  );
}