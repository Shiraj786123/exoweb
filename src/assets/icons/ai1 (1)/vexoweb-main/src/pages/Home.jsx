import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Businesses Trust Us
            </h2>
            <p className="text-xl text-gray-600">
              We deliver excellence through innovation and dedication
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-3">11+ Years of Experience</h3>
              <p className="text-gray-600">
                Over a decade of delivering exceptional digital solutions to businesses worldwide.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">End-to-End Services</h3>
              <p className="text-gray-600">
                From web development to SEO and AI - we handle everything your business needs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored, scalable solutions designed specifically for your unique business needs.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">
                Clear communication and honest pricing with no hidden fees or surprises.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
              <p className="text-gray-600">
                Reliable maintenance and support to keep your digital presence running smoothly.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Results-Driven</h3>
              <p className="text-gray-600">
                We focus on delivering measurable results that drive your business forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;