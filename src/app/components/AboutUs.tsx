import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About Eunath Foundation</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Empowering African children through education, faith, and holistic support to create lasting positive change in their communities.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To provide quality education, spiritual guidance, and essential support to underprivileged children in Africa, enabling them to break the cycle of poverty and become leaders in their communities.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            A world where every African child has access to quality education, spiritual nurturing, and the resources needed to reach their full potential.
          </p>
        </div>
      </div>

      {/* Our Impact Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-500 mb-2">500+</div>
            <p className="text-gray-700">Children Supported</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-500 mb-2">10+</div>
            <p className="text-gray-700">Schools Partnered</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-500 mb-2">5</div>
            <p className="text-gray-700">African Countries</p>
          </div>
        </div>
      </div>

      {/* Our Work Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
              alt="Education Support"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Education Support</h3>
            <p className="text-gray-700 mb-6">
              We provide comprehensive educational support including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>School fees and supplies</li>
              <li>Quality learning materials</li>
              <li>Mentorship programs</li>
              <li>After-school support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="flex justify-center gap-16 mb-16">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden">
              <Image
                src="/team-member-1.jpg"
                alt="Team Member 1"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden">
              <Image
                src="/team-member-2.jpg"
                alt="Team Member 2"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
            <p className="text-gray-600">Executive Director</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Your support can help us continue our mission of transforming lives through education and faith.
        </p>
        <button className="bg-emerald-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-600 transition-colors">
          Support Our Cause
        </button>
      </div>
    </div>
  );
};

export default AboutUs; 