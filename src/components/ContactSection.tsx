export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-black text-center">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="text-blue-100 mb-6">Want live demos or to discuss a project?</p>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-950 text-white border border-gray-800 focus:border-blue-600 focus:outline-none" />
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-950 text-white border border-gray-800 focus:border-blue-600 focus:outline-none" />
        <textarea placeholder="Message" className="w-full p-3 rounded bg-gray-950 text-white border border-gray-800 focus:border-blue-600 focus:outline-none" rows={4}></textarea>
        <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">Send</button>
      </form>
    </section>
  );
}
