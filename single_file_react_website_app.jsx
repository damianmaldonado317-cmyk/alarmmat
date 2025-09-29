import React, { useState } from "react";

export default function App() {
  const [stepTime, setStepTime] = useState(30);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center text-white font-bold">AM</div>
            <span className="font-semibold">AlarmMat</span>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#faq" className="hover:underline">FAQ</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#" className="px-4 py-2 bg-emerald-600 text-white rounded-full text-sm">Pre-order</a>
          </nav>

          <div className="md:hidden">
            <button aria-label="Open menu" className="p-2">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="max-w-7xl mx-auto px-6 pt-12 pb-20 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Wake up the right way.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Meet <span className="font-semibold">AlarmMat</span> — the innovative morning alarm system built into a floor mat. It only turns off when you step on it for a set amount of time, ensuring you actually get out of bed.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 text-white rounded-md font-medium">Pre-order now</a>
              <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 border rounded-md">Learn more</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="text-sm font-semibold">Step Time</div>
                <div className="text-xl">{stepTime} seconds</div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  value={stepTime}
                  onChange={(e) => setStepTime(e.target.value)}
                  className="w-full mt-2"
                />
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="text-sm font-semibold">Early Backers</div>
                <div className="text-xl">500+</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-lg p-6">
              <img src="https://images.unsplash.com/photo-1616628182500-33c6f0ca6c1d?q=80&w=1200&auto=format&fit=crop" alt="Alarm mat" className="rounded-lg mb-4 object-cover w-full h-56" />
              <div className="text-sm text-gray-500">Prototype design preview</div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="p-3 bg-white rounded-lg shadow-sm text-center">
                  <div className="text-xs text-gray-500">Noise level</div>
                  <div className="font-semibold">85 dB</div>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm text-center">
                  <div className="text-xs text-gray-500">Mat size</div>
                  <div className="font-semibold">24x18 in</div>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm text-center">
                  <div className="text-xs text-gray-500">Weight sensor</div>
                  <div className="font-semibold">Accurate</div>
                </div>
              </div>

              <button className="mt-6 w-full px-4 py-2 bg-emerald-600 text-white rounded-md">Try demo alarm</button>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold">Why AlarmMat?</h2>
              <p className="mt-2 text-gray-600 max-w-2xl mx-auto">The science-backed way to stop snoozing and start moving. Designed to get you out of bed and into action.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: 'Step-to-stop alarm', desc: 'The alarm shuts off only after you step on the mat for a set time.' },
                { title: 'Customizable timer', desc: 'Choose how long you need to stand before the alarm turns off.' },
                { title: 'Durable design', desc: 'Made with non-slip materials and built to last.' },
              ].map((f) => (
                <div key={f.title} className="p-6 bg-gray-50 border rounded-lg hover:shadow-lg transition cursor-pointer">
                  <div className="text-xl font-semibold">{f.title}</div>
                  <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-semibold">Pre-order pricing</h3>
            <p className="mt-2 text-gray-600 max-w-lg mx-auto">Get exclusive early-backer discounts before launch.</p>

            <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
              <div className="p-6 bg-white border rounded-xl shadow-sm w-full md:w-80 hover:shadow-lg transition">
                <div className="text-sm font-medium">Early Bird</div>
                <div className="mt-2 text-3xl font-bold">$59</div>
                <ul className="mt-4 text-sm text-gray-600 space-y-2">
                  <li>50% off retail</li>
                  <li>Free shipping</li>
                </ul>
                <button className="mt-6 w-full px-4 py-2 bg-emerald-600 text-white rounded-md">Reserve now</button>
              </div>

              <div className="p-6 bg-white border rounded-xl shadow-lg w-full md:w-80 hover:shadow-lg transition">
                <div className="text-sm font-medium">Retail</div>
                <div className="mt-2 text-3xl font-bold">$119</div>
                <ul className="mt-4 text-sm text-gray-600 space-y-2">
                  <li>1-year warranty</li>
                  <li>Durable build</li>
                  <li>30-day returns</li>
                </ul>
                <button className="mt-6 w-full px-4 py-2 border border-emerald-600 rounded-md">Join waitlist</button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-2xl font-semibold text-center">Frequently Asked Questions</h3>
            <div className="mt-8 space-y-4">
              {[
                { q: "How does AlarmMat work?", a: "You place it by your bed. The alarm won’t turn off until you step on it for your chosen amount of time." },
                { q: "Is the mat durable?", a: "Yes, it’s made with non-slip, durable materials built for everyday use." },
                { q: "Can I adjust the step time?", a: "Absolutely, you can customize it anywhere between 10 and 60 seconds." },
              ].map((item, idx) => (
                <details key={idx} className="p-4 bg-white rounded-lg shadow-sm">
                  <summary className="font-medium cursor-pointer">{item.q}</summary>
                  <p className="mt-2 text-gray-600 text-sm">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-emerald-50 py-16">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h4 className="text-xl font-semibold">Stay updated</h4>
              <p className="mt-2 text-gray-600">Sign up to get notified about launch dates, discounts, and updates.</p>

              {subscribed ? (
                <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-md">
                  🎉 Thanks for subscribing! We’ll keep you updated.
                </div>
              ) : (
                <form className="mt-6 grid gap-4" onSubmit={handleSubscribe}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Your name" className="p-3 border rounded-md" required />
                    <input type="email" placeholder="Email" className="p-3 border rounded-md" required />
                  </div>
                  <button type="submit" className="px-4 py-3 bg-emerald-600 text-white rounded-md w-full">Notify me</button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-white py-8">
          <div className="max-w-7xl mx-auto px-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© {new Date().getFullYear()} AlarmMat — Rise and shine.</div>
            <div className="flex gap-4">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
