import React from "react";
import { TbArrowMoveRightFilled } from "react-icons/tb";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* GRID FOR DESKTOP */}
        <div className="hidden lg:grid grid-cols-5 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Great Learning Academy
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Career Paths",
                "Resume Builder",
                "All Free Courses",
                "Live Sessions / Webinars",
                "Free Courses with Certificate",
                "About Great Learning",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              {[
                "About Us",
                "Contact Us",
                "ISMS Policy",
                "Terms of Use",
                "Privacy Policy",
                "Great Learning Blog",
                "Grievance Redressal",
                "Enterprise Solutions",
                "Careers at Great Learning",
                "Pro Courses",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Popular Courses
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Master Generative AI",
                "Master Python Programming",
                "Mastering Digital Marketing",
                "Master Data Analytics in SQL",
                "Master Artificial Intelligence",
                "Master Data Analytics in Excel",
                "Microsoft Excel Training Course",
                "Data Visualization with Power BI",
                "ChatGPT for Working Professionals",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Explore Topics
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Design Courses",
                "Management Courses",
                "Data Science Courses",
                "Study Abroad Courses",
                "Cybersecurity Courses",
                "Cloud Computing Courses",
                "Digital Marketing Courses",
                "Artificial Intelligence Courses",
                "Top University Programs",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Connect & Trending
            </h3>
            <div className="flex gap-4 mb-4 text-gray-300">
              {[
                FaFacebookF,
                FaLinkedinIn,
                FaYoutube,
                FaTwitter,
                FaInstagram,
              ].map((Icon, i) => (
                <Icon
                  key={i}
                  className="hover:text-white cursor-pointer transition-colors"
                />
              ))}
            </div>
            <ul className="space-y-2 text-sm">
              {[
                "Online MBA Program",
                "Microsoft GenAI Course",
                "Artificial Intelligence Course",
                "Masters in Data Science Program",
                "Data Science Engineering (Bootcamp)",
                "Data Science and Business Analytics Course",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* MOBILE COLLAPSIBLE VERSION */}
        <div className="lg:hidden space-y-4">
          {[
            {
              title: "Great Learning Academy",
              items: [
                "Career Paths",
                "Resume Builder",
                "All Free Courses",
                "Live Sessions / Webinars",
                "Free Courses with Certificate",
                "About Great Learning",
              ],
            },
            {
              title: "About Us",
              items: [
                "About Us",
                "Contact Us",
                "ISMS Policy",
                "Terms of Use",
                "Privacy Policy",
                "Great Learning Blog",
                "Grievance Redressal",
                "Enterprise Solutions",
                "Careers at Great Learning",
                "Pro Courses",
              ],
            },
            {
              title: "Popular Courses",
              items: [
                "Master Generative AI",
                "Master Python Programming",
                "Mastering Digital Marketing",
                "Master Data Analytics in SQL",
                "Master Artificial Intelligence",
                "Master Data Analytics in Excel",
                "Microsoft Excel Training Course",
                "Data Visualization with Power BI",
                "ChatGPT for Working Professionals",
              ],
            },
            {
              title: "Explore Topics",
              items: [
                "Design Courses",
                "Management Courses",
                "Data Science Courses",
                "Study Abroad Courses",
                "Cybersecurity Courses",
                "Cloud Computing Courses",
                "Digital Marketing Courses",
                "Artificial Intelligence Courses",
                "Top University Programs",
              ],
            },
            {
              title: "Connect & Trending",
              items: [
                "Online MBA Program",
                "Microsoft GenAI Course",
                "Artificial Intelligence Course",
                "Masters in Data Science Program",
                "Data Science Engineering (Bootcamp)",
                "Data Science and Business Analytics Course",
              ],
            },
          ].map((section, i) => (
            <details key={i} className="bg-gray-800 rounded-lg">
              <summary className="px-4 py-2 cursor-pointer text-white font-semibold">
                {section.title}
              </summary>
              <ul className="px-6 py-2 space-y-1 text-sm text-gray-300">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </details>
          ))}

          {/* Social Icons */}
          <div className="flex gap-4 justify-center mt-4 text-gray-300">
            {[FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="hover:text-white cursor-pointer transition-colors"
                />
              )
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          © 2013 - 2025 Great Learning. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
