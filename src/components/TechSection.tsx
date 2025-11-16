export default function TechSection() {
  return (
    <section className="bg-black py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
      <div className="flex justify-center items-center gap-8 flex-wrap text-blue-400 mt-6">
        <span>Next.js</span>
        <span>TypeScript</span>
        <span>Tailwind CSS</span>
        <span>Framer Motion</span>
      </div>
      <p className="mt-8 text-blue-200 max-w-2xl mx-auto">
        End-to-end, scalable, lightning-fast. <br />
        Designed for innovation, control, and precision in every pixel.
      </p>
    </section>
  );
}
