'use client';

import Image from "next/image";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <div className="w-full relative h-[300px] bg-gray-900 text-white flex items-center justify-center mb-8">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754"
          alt="Hero background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <h1 className="text-3xl font-bold text-center z-20 max-w-2xl px-4">
          Unleashing the potential of humanity through service.
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-4 w-full max-w-6xl mb-16 md:grid-cols-3">
        <div className="bg-indigo-600 text-white p-6 text-center flex flex-col items-center">
          <div className="mb-4">
            <span className="text-3xl">🤝</span>
          </div>
          <span>Developing skills</span>
        </div>
        <div className="bg-black text-white p-6 text-center flex flex-col items-center">
          <div className="mb-4">
            <span className="text-3xl">📚</span>
          </div>
          <span>FUNDING EDUCATION</span>
        </div>
        <div className="bg-emerald-500 text-white p-6 text-center flex flex-col items-center">
          <div className="mb-4">
            <span className="text-3xl">❤️</span>
          </div>
          <span>Providing Freedom</span>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-center mb-12 bg-black text-white py-2 px-6 rounded-full inline-block">
          What we do!
        </h2>

        {/* Mission Cards */}
        <div className="space-y-16">
          {/* Card 1 */}
          <div className="flex flex-col items-center gap-8 max-w-5xl mx-auto md:flex-row">
            <div className="relative w-full h-[250px] rounded-2xl overflow-hidden md:w-[350px]">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
                alt="Children"
                fill
                className="object-cover"
                unoptimized
              />
              <button className="absolute bottom-4 left-4 bg-indigo-600 text-white px-4 py-2 rounded-full">
                Reach Out
              </button>
            </div>
            <div className="flex-1 p-4 border-2 border-gray-200 rounded-2xl">
              <p className="text-base leading-relaxed">
                We instill biblical values in African children, equipping them with spiritual armor to overcome challenges and become beacons of hope. Through faith-based education and mentorship, we empower the next generation to transform Africa.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 max-w-5xl mx-auto">
            <div className="relative w-full md:w-[400px] h-[300px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
                alt="Education"
                fill
                className="object-cover"
                unoptimized
              />
              <button className="absolute bottom-4 right-4 bg-indigo-600 text-white px-6 py-2 rounded-full">
                Reach Out
              </button>
            </div>
            <div className="flex-1 p-6 border-2 border-gray-200 rounded-2xl">
              <p className="text-lg leading-relaxed">
                Knowledge is power. We empower young minds through education. From rural roads to university halls, we break down barriers and fund dreams. Every child deserves a future.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
            <div className="relative w-full h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
                alt="Well-being"
                layout="fill"
                className="object-cover"
                unoptimized
              />
              <button className="absolute bottom-4 left-4 bg-emerald-500 text-white px-6 py-2 rounded-full">
                Reach Out
              </button>
            </div>
            <div className="flex-1 p-4 md:p-6 border-2 border-gray-200 rounded-2xl">
              <p className="text-base md:text-lg leading-relaxed">
                We are committed to nurturing the holistic well-being of children. Our work encompasses providing essential healthcare, combating malnutrition, and offering vital mental health support to build strong foundations for their future.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button className="bg-black text-white px-6 py-2 rounded-full text-base font-semibold mb-16 hover:bg-gray-800 transition-colors">
        Learn More About Us
      </button>

      {/* Back to Top Button */}
      <button className="bg-black text-white p-3 rounded-full mb-8 hover:bg-gray-800 transition-colors">
        <span>↑</span>
      </button>
    </div>
  );
};

export default Homepage;