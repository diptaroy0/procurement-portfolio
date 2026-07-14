export default function Home() {
  return (
    <main className="min-h-screen bg-[#081120] text-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <p className="text-cyan-400 text-lg mb-4">
              Procurement & Supply Chain Professional
            </p>

            <h1 className="text-6xl font-extrabold leading-tight">
              Engineering Precision.
            </h1>

            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              Procurement Excellence.
            </h1>

            <p className="mt-8 text-xl text-gray-400 leading-9 max-w-xl">
              Helping manufacturing organizations optimize procurement through
              engineering expertise, strategic sourcing, supplier relationship
              management and ERP-driven decision making.
            </p>

            <div className="flex gap-5 mt-12">

              <button className="bg-blue-600 hover:bg-blue-700 transition-all px-8 py-4 rounded-xl font-semibold">
                Download Resume
              </button>

              <button className="border border-gray-600 hover:border-cyan-400 px-8 py-4 rounded-xl">
                LinkedIn
              </button>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="w-[380px] h-[380px] rounded-full border-4 border-cyan-500 flex items-center justify-center bg-gradient-to-br from-[#12263d] to-[#09111d] shadow-2xl">

              <div className="text-center">

                <div className="text-8xl mb-5">
                  👨‍💼
                </div>

                <h3 className="text-2xl font-bold">
                  Dipta Roy
                </h3>

                <p className="text-gray-400 mt-2">
                  Procurement & SCM
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}