export default function Home() {
  return (
    <>
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
      </main>

      {/* ✅ SECTION 2 – About */}
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

      <section className="bg-black text-white px-6 py-16 border-t border-gray-800">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">Do You Belong?</h2>
    <p className="text-lg text-gray-400 leading-relaxed">
      Membership is not bought. It’s earned through intent, innovation, and impact.
    </p>
    <ul className="text-left text-gray-300 mt-8 space-y-4 text-md">
      <li>✔ You operate in silence but influence loudly.</li>
      <li>✔ You value private counsel over public noise.</li>
      <li>✔ You build in AI, capital, or cultural leverage.</li>
      <li>✔ You think long-term — always.</li>
      <li>✔ You’d rather be in the room no one knows about.</li>
    </ul>
    <p className="text-sm text-gray-500 mt-6 italic">If this resonates, you're already one of us.</p>
  </div>
</section>
    </>





    
  );
}