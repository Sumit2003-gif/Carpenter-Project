import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Top 10–contemporary trends in wooden furnishings",
    date: "July 30 2024",
    description: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    imageUrl: "https://carpent-react.vercel.app/assets/1-3-CmhFGmgi.jpg",
  },
  {
    id: 2,
    title: "Custom design of eco-friendly wooden furniture",
    date: "July 14 2024",
    description: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    imageUrl: "https://carpent-react.vercel.app/assets/1-2-CZR9Fesa.jpg",
  },
  {
    id: 3,
    title: "From forest to furnishing: the story of solid wood",
    date: "July 8 2024",
    description: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    imageUrl: "https://carpent-react.vercel.app/assets/1-3-CmhFGmgi.jpg",
  },
];

export default function BlogCards() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <div>
          <p className="text-[#C1833F] font-medium">Blogs & News</p>
          <h1 className="text-2xl font-bold">Our Latest Articles</h1>
        </div>
        <Link
        to="/blog">
        <button className="bg-[#C1833F] cursor-pointer text-white px-5 py-2 rounded hover:bg-[#aa753c] transition">
          View More
        </button>
        </Link>
      </div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="bg-white shadow-sm rounded-xl overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="h-64 w-full object-cover"
            />
            <div className="p-6 space-y-4">
              <p className="text-sm text-[#C1833F] font-medium">{post.date}</p>
              <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm">{post.description}</p>
              <Link to="/blog">
              <div className="pt-4">
                <motion.span
                  className="inline-block text-black text-xl font-light"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  →
                </motion.span>
              </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
