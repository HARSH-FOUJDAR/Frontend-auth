// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { SearchCheckIcon } from "lucide-react";
import { Github } from "lucide-react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen mt-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 text-gray-800 dark:text-gray-200">
        <section className="container mx-auto lg:h-[650px] lg:flex lg:items-center lg:gap-16">
          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full text-center lg:text-left lg:w-1/2"
          >
            {/* Title */}
            <h1 className="text-xl md:text-6xl font-extrabold tracking-tight leading-tight  font-itelic text-gray-900 dark:text-white">
              Harsh Choudhary
              <span className="text-primary drop-shadow-md"> </span>
              <br />
              with
              <span className="bg-gradient-to-b from-primary to-purple-600 relative left-2 bg-clip-text text-transparent">
                First Portfolio Blog
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              My Name Harsh Choudhary
              <br className="hidden lg:block" />
              crafted for developers, designers & creators.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 bg-white/70 dark:bg-black/30 backdrop-blur-lg border rounded-xl shadow-lg dark:border-gray-700 lg:w-3/4 mx-auto lg:mx-0 focus-within:ring-2 focus-within:ring-primary/50 transition-all"
            >
              <form className="flex items-center px-2 py-2">
                <input
                  type="search"
                  placeholder="Search Components..."
                  required
                  className="flex-1 h-14 px-4 text-base text-gray-700 dark:text-white bg-transparent border-none focus:outline-none "
                />
                <button
                  type="submit"
                  className="flex items-center border border-gray-400 dark:border-gray-600 cursor-pointer justify-center bg-white text-white h-12 w-14 rounded-lg hover:bg-gary-200 transition shadow-md"
                >
                  <SearchCheckIcon style={{ color: "black" }} />
                </button>
              </form>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
              <a
                href="#"
                className="px-6 py-3 rounded-xl border border-gray-400 dark:border-gray-600 font-medium text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Browse Components
              </a>

              <a
                href="#"
                className="px-6 py-3 rounded-xl border border-gray-400 dark:border-gray-600 font-medium text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                GitHub Repo
                <Github className="inline-block ml-2" />
              </a>
            </div>
          </motion.div>

          {/* image SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="w-full mt-12 lg:mt-0 lg:w-1/2 flex justify-center"
          >
            <img
              src="https://file.aiquickdraw.com/imgcompressed/img/compressed_bda9962c7409bc3d21426d39d1681aeb.webp"
              alt="tailwind components"
              className="max-w-xl w-full drop-shadow-2xl hover:scale-[1.05] transition-transform duration-500"
            />
          </motion.div>
        </section>
        <hr className="my-12 border-gray-300 dark:border-gray-700" />
        {/* PRICING SECTION */}
        <section className="py-24 bg-gradient-to-b from-background/40 to-background/10">
          <div className="container mx-auto px-6 text-center">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold text-gray-900 dark:text-white"
            >
              Simple & Transparent Pricing
            </motion.h2>

            <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your workflow. No hidden charges, no
              limits.
            </p>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-10 mt-16">
              {/* Free Plan */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="p-8 border bg-white/70 dark:bg-black/20 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold mb-4">Free</h3>
                <p className="text-gray-500 dark:text-gray-300 mb-6">
                  Perfect for beginners
                </p>
                <h4 className="text-4xl font-extrabold mb-6">₹299</h4>

                <ul className="text-left text-gray-600 dark:text-gray-300 space-y-3 mb-8">
                  <li>✔ 20 Components</li>
                  <li>✔ Basic UI Elements</li>
                  <li>✔ Community Support</li>
                </ul>

                <button className="w-full py-3 font-semibold  bg-primery text-white dark:bg-white dark:text-black rounded-xl hover:bg-primary/90 transition shadow-lg cursor-pointer">
                  Start Free
                </button>
              </motion.div>

              {/* Pro Plan (Highlighted) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="p-10 border-2 border-primary bg-primary/10 dark:bg-primary/20 rounded-2xl shadow-2xl hover:shadow-primary/30 transition transform"
              >
                <h3 className="text-3xl font-bold text-primary mb-4">Pro</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  For developers & creators
                </p>
                <h4 className="text-5xl font-extrabold mb-6">
                  ₹499 <span className="text-xl">/mo</span>
                </h4>

                <ul className="text-left text-gray-700 dark:text-gray-200 space-y-3 mb-8">
                  <li>✔ 200+ Components</li>
                  <li>✔ Full Templates</li>
                  <li>✔ Unlimited Downloads</li>
                  <li>✔ Premium Support</li>
                </ul>

                <button className="w-full py-3 bg-primary dark:text-black font-semibold dark:bg-white rounded-xl hover:bg-primary/90 transition shadow-lg cursor-pointer">
                  Go Pro ⭐
                </button>
              </motion.div>

              {/* Enterprise Plan */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 5, y: 0 }}
                transition={{ duration: 0.9 }}
                className="p-8 border bg-white/70 dark:bg-black/20 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <p className="text-gray-500 dark:text-gray-300 mb-6">
                  For teams & agencies
                </p>
                <h4 className="text-4xl font-extrabold mb-6">
                  ₹999 <span className="text-xl">/mo</span>
                </h4>

                <ul className="text-left text-gray-600 dark:text-gray-300 space-y-3 mb-8">
                  <li>✔ Everything in Pro</li>
                  <li>✔ Team License</li>
                  <li>✔ Priority Support</li>
                  <li>✔ Custom Components</li>
                </ul>

                <button className="w-full py-3 font-semibold cursor-pointer bg-gray-900 text-white dark:bg-white dark:text-black rounded-xl hover:opacity-90 transition">
                  Contact Sales
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2 nd section start  */}
        <section className="py-28 relative overflow-hidden">
          {/* Background Glow Circles */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-20 -left-20"></div>
            <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl bottom-0 right-0"></div>
          </div>

          <div className="container mx-auto px-6">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-extrabold text-clack drop-shadow-sm">
                Harh
                <span className="text-primary"> Choudhary Blog</span>
              </h2>
              <p className="mt-4 text-xl  text-white  dark:text-white  max-w-2xl mx-auto leading-relaxed">
                Experience the next level of UI design with beautiful
                animations, soft glow effects and modern glass UI.
              </p>
            </motion.div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-12">
              {/* CARD 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative p-8 rounded-3xl backdrop-blur-2xl bg-[#0b0b0b] border border-white/20 shadow-xl hover:shadow-2xl
                   hover:border-primary/60 transition-all group cursor-pointer overflow-hidden"
              >
                {/* Glow Hover */}
                <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-20 blur-2xl transition"></div>

                <div className="text-primary text-5xl mb-6">⚡</div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  Super Fast
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Highly optimized components built for ultra-smooth
                  performance.
                </p>
              </motion.div>

              {/* CARD 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative p-8 rounded-3xl backdrop-blur-2xl bg-[#0b0b0b]  border border-white/20 shadow-xl hover:shadow-2xl
                   hover:border-purple-500/60 transition-all group cursor-pointer overflow-hidden"
              >
                {/* Glow Hover */}
                <div className="absolute inset-0 bg-purple-500/30 opacity-0 group-hover:opacity-20 blur-2xl transition"></div>

                <div className="text-purple-500 text-5xl mb-6">✨</div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  Stunning Design
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Clean, modern & visually appealing UI elements crafted to
                  impress.
                </p>
              </motion.div>

              {/* CARD 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative p-8 rounded-3xl backdrop-blur-2xl bg-[#0b0b0b] border border-white/20 shadow-xl hover:shadow-2xl
                   hover:border-cyan-400/60 transition-all group cursor-pointer overflow-hidden"
              >
                {/* Glow Hover */}
                <div className="absolute inset-0 bg-cyan-400/30 opacity-0 group-hover:opacity-20 blur-2xl transition"></div>

                <div className="text-cyan-400 text-5xl mb-6">🧩</div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  Fully Customizable
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Change colors, spacing, animations & components with ease.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-b from-background to-background/40">
          <div className="max-w-6xl mx-auto px-4">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-12"
            >
              Top <span className="text-primary">Blogs By Harsh Choudhary</span>
            </motion.h2>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-3 gap-15">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-4 rounded-2xl border shadow-sm hover:shadow-lg bg-card hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  {/* BLOG image */}
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={`https://picsum.photos/seed/blog${i}/500/300`}
                      alt="Blog image"
                      className="rounded-xl w-full h-40 object-cover group-hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-5 text-xl font-semibold group-hover:text-primary transition">
                    Blog Title {i}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-2 text-muted-foreground">
                    Short description of your blog goes here. Make it
                    interesting and clean.
                  </p>

                  {/* READ MORE */}
                  <div className="mt-4 text-primary font-medium group-hover:underline">
                    Read More →
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Software Developer & Full Stack Developer
          </motion.h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80 mb-8">
            Software developer specializing in building scalable web
            applications and digital solutions. Passionate about clean code,
            modern UI/UX, and innovative technologies.
          </p>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto w-full max-w-xl"
          >
            <img
              src="https://www.guvi.in/assets/DtJkssym-intel-aiml.webp" // public folder me rakho
              alt="Hero"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-base opacity-80 leading-relaxed">
              Our mission is to build and deliver top-notch software solutions
              that empower businesses to thrive in the digital age. We strive to
              innovate, inspire, and make a positive impact through technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://media.istockphoto.com/id/823928832/photo/businessman-shows-the-word-mission.jpg?s=612x612&w=0&k=20&c=1hmJC8oDYIifhdUqzQUWNS6-NVhMwgpjo-fZYkWo0BI="
              alt="Mission"
              width={600}
              height={400}
              className="rounded-2xl shadow-md"
            />
          </motion.div>
        </section>

        {/* What We Do */}

        {/* Team Section */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-10">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Alice",
                role: "Software Engineer",
                img: "https://images.pexels.com/photos/6804071/pexels-photo-6804071.jpeg",
              },
              { name: "Bob", role: "Frontend Developer", img: "https://images.pexels.com/photos/6804594/pexels-photo-6804594.jpeg" },
              {
                name: "Charlie",
                role: "Backend Developer",
                img: "https://media.istockphoto.com/id/1081869356/photo/taking-on-the-late-shift-with-true-dedication.jpg?b=1&s=612x612&w=0&k=20&c=CiosnL7HMAbV0h5U-j-EwILk3zapTBvCCMZaTaBwMe0=",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-sm opacity-70">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <hr />
      <Footer></Footer>
    </div>
  );
};

export default Home;
