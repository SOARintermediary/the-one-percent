import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-6 py-12">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Access the Inner Circle
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          The digital sanctuary for elite entrepreneurs, visionaries & AI-empowered thinkers.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
          Request Access
        </button>
      </div>

      {/* ✅ SECTION 2: ABOUT */}
      <section className="bg-black text-white px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About The 1%</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            <em>The 1% is not a place — it’s a signal.</em><br /><br />
            A quiet movement of founders, futurists, and renegades redefining influence through AI, capital, and private counsel.
            <br /><br />
            This club exists in whispers — an encrypted sanctuary where high-level strategy, unfiltered access, and network leverage collide.
          </p>
        </div>
      </section>

      {/* ✅ SECTION 3: MEMBER BENEFITS */}
      <section className="bg-black text-white px-6 py-16 border-t border-gray-800">
  <div className="max-w-4xl mx-auto text-center">
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

      {/* ✅ STEP 5: CTA */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-24 border-t border-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Apply For Access</h2>
          <p className="text-lg text-gray-400 mb-8">
            Membership is not granted — it’s earned. We review each request manually. Expect silence before response.
          </p>
          <a
            href="mailto:access@theonepercent.ai"
            className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
          >
            Request Access
          </a>
          <p className="text-sm text-gray-500 mt-6 italic">
            Your submission is encrypted. No follow-ups. No guarantees.
          </p>
        </div>
      </section>

      {/* ✅ STEP 6: TESTIMONIALS */}
      <section className="bg-black text-white px-6 py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Whispers from the Inside</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <blockquote className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <p className="text-lg italic text-gray-300">“One idea from The 1% led to a $2M raise and a partnership that changed everything.”</p>
              <footer className="mt-4 text-sm text-gray-500">— D. Khoury, Tech Founder</footer>
            </blockquote>
            <blockquote className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <p className="text-lg italic text-gray-300">“It feels like being on the inside of a secret machine built for exponential thinking.”</p>
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

      <section className="bg-black text-white px-6 py-16 border-t border-gray-800">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4">Encrypted Intel Drop</h2>
    <p className="text-gray-400 mb-8 italic">
      ⚠️ Decrypting strategic insight... Access requires elevated clearance.
    </p>

    <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-left">
      <p className="text-sm text-green-500 font-mono mb-2">[INTEL_001.EXE]</p>
      <p className="text-gray-300">
        • Funding alerts: Quiet capital rounds in Dubai's AI sector.<br />
        • Passport programs: Fast-track Tier 1 citizenship strategies.<br />
        • Shadow launches: 3 Web3 projects by former Tier 1 founders.
      </p>
    </div>
    
    <p className="text-gray-500 text-xs mt-4">🔒 Next drop: 72h</p>
  </div>
</section>

<section className="bg-black text-white px-6 py-20 border-t border-gray-800">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">The Private Dashboard</h2>
    <p className="text-gray-400 mb-8 text-lg">
      Members will gain access to a powerful AI-integrated control center —
      featuring encrypted messaging, curated investment drops, and direct strategy lines.
    </p>

    <div className="relative">
      <img
        src="https://dummyimage.com/1000x500/111/999.png&text=Encrypted+Dashboard+Mockup"
        alt="Private Dashboard Preview"
        className="mx-auto rounded-xl shadow-lg opacity-80 hover:opacity-100 transition"
      />
      <div className="absolute top-4 right-4 bg-white text-black text-xs px-3 py-1 rounded-full">
        Coming Soon
      </div>
    </div>
  </div>
</section>

<section className="bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-20 border-t border-gray-800">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">Request Access</h2>
    <p className="text-lg text-gray-400 mb-10">
      Entry isn’t automatic. Every application is reviewed manually by our inner gatekeepers.
    </p>
    <a
      href="https://your-access-form-link.com" // replace this with your actual form link or modal trigger
      className="inline-block bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-gray-200 transition"
    >
      Begin Application
    </a>
  </div>
</section>

<section className="bg-black text-white px-6 py-20 border-t border-gray-800">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">The Member Vault</h2>
    <p className="text-lg text-gray-400 mb-10">
      Glimpses from the vault. The latest signals intercepted from AI, market shifts, and elite conversations.
    </p>

    <div className="grid gap-6 md:grid-cols-3 text-left">
      {[
        "🧬 Quantum Advantage: Why Google quietly filed 17 patents in Q1",
        "🤖 OpenAI’s Shadow Initiative: What Sam didn’t say on stage",
        "📉 The Sector Collapse Nobody Is Talking About (yet)",
      ].map((headline, i) => (
        <div key={i} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-white transition">
          <p className="text-gray-300 text-sm italic mb-2">Redacted Entry #{i + 1}</p>
          <p className="text-white font-semibold blur-sm hover:blur-none transition duration-300 cursor-pointer">
            {headline}
          </p>
        </div>
      ))}
    </div>

    <a
      href="/intel-drop"
      className="inline-block mt-10 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition"
    >
      Unlock the Feed
    </a>
  </div>
</section>

      {/* ✅ POWER SYMBOL: DIGITAL KEY */}
      <footer className="bg-black text-center py-10">
        <div className="flex justify-center">
          <Image
            src="/key-symbol.png"
            alt="The 1% Key Symbol"
            width={64}
            height={64}
            className="opacity-70 hover:opacity-100 transition"
          />
        </div>
        <p className="text-sm text-gray-600 mt-4">Unlock what others can’t.</p>
      </footer>
    </main>
  );
}
