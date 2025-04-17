import { Link } from 'react-router-dom';
import { MY_URL_STRAPI } from '@/config';
import { useBlogList } from '@/hooks/useBlogList';

interface Article {
  attributes: {
    title: string;
    publishingDate: string; // Änderung von Date auf string
    Kategorie: string;
    blogtext: string;
  };
  id: number;
}


const BlogSection = () => {
  const { blogs, loading, error } = useBlogList();

  if (loading) {
    return <div className="loading pt-32 px-4 text-center text-lg">Loading blog list...</div>;
  }

  if (error) {
    return <div className="error pt-32 px-4 text-center text-lg text-red-600">
      Error loading blog list. Please try again later.
    </div>;
  }

  if (!blogs || blogs.length === 0) {
    return <div className="no-blogs pt-32 px-4 text-center text-lg">
      No blog posts found.
    </div>;
  }

  return (
    <div className="items-center justify-center w-full max-w-[60rem]">
      <h1 className='text-center text-xl'>
        Latest
      </h1>

      {blogs
        .sort((a, b) => {
          if (!a.publishingDate || !b.publishingDate) return 0;
          return new Date(b.publishingDate).getTime() - new Date(a.publishingDate).getTime();
        })
        .map((blog) => (
          <div key={blog.slug} className="my-3">
            <Link 
              to={`/blog/${blog.slug}`} 
              className="flex flex-row text-base md:text-lg font-roboto hover:text-blue-300"
            >
              <span className="text-gray-400">
                {blog.publishingDate && (
                  <>
                    {new Date(blog.publishingDate).toLocaleDateString('de-DE', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric'
                    })}
                  </>
                )}
              </span>
              <p className='mx-2'>
                ▫
              </p>
              {blog.title}
            </Link>
          </div>
        ))
      }

    </div>
  );
};

export default BlogSection;
