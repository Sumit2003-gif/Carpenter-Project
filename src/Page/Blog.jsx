import React from "react";
import PageTop from "../Componet/PageTop";
import BlogCard from "../Componet/BlogCard";
import blogData from "../Componet/BlogData";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Blog = () => {
  return (
    <div>
      {/* Page Banner */}
      <section>
        <PageTop
          url="https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg"
          header="Blog"
          currentPage="Blog"
          breadcrumbUrl="/blog"
        />
      </section>

      {/* Blog Cards */}
      <section className="py-12 px-4 md:px-10 lg:px-20 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <BlogCard
                id={item.id}
                image={item.image}
                date={item.date}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
