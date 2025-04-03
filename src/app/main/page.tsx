// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I`m <span className="text-blue-600">[Your Name]</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          [Your Role] building [what you build] with modern technologies.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/projects" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div 
              key={project}
              className="border rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Project {project}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Brief description of the project and technologies used.
                </p>
                <Link 
                  href={`/projects/project-${project}`}
                  className="text-blue-600 hover:underline"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Latest Writings</h2>
        <div className="space-y-8">
          {[1, 2].map((post) => (
            <article key={post} className="border-b pb-8">
              <h3 className="text-xl font-medium mb-2">Blog Post {post}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Excerpt from the blog post that gives readers a preview...
              </p>
              <Link 
                href={`/blog/post-${post}`}
                className="text-blue-600 hover:underline"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}