import Article from "./Article";

const ArticleList = ({ blogs }) => {
  return (
    <main>
      {blogs.map((blog, index) => (
        <Article key={index} title={blog.title} date={blog.date} preview={blog.preview}/>
      ))}
    </main>
  );
};

export default ArticleList;
