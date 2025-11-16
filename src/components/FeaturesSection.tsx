export default function FeaturesSection() {
  const features = [
    { title: "Global IoT Connectivity", desc: "680+ networks, 180+ countries, seamless coverage." },
    { title: "Non-Steered SIMs", desc: "Stable, redundant network connections anytime." },
    { title: "Low Power, Max Uptime", desc: "50% more battery life. 80% less data usage." },
    { title: "Secure by Design", desc: "Encryption, real-time monitoring, fraud protection." },
  ];
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto grid gap-8 md:grid-cols-2 bg-black">
      {features.map((f, i) => (
        <div key={i} className="bg-gray-950 p-8 rounded-lg shadow-lg border-l-4 border-blue-600">
          <h3 className="text-2xl font-bold mb-2">{f.title}</h3>
          <p className="text-blue-100">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
