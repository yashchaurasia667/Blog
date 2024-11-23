const Post = ({
  title,
  summary,
  cover,
  content,
}: {
  title: string;
  summary: string;
  cover: string;
  content: string;
}) => {
  return (
    <div className="post">
      <div className="image">
        <img
          // src="https://techcrunch.com/wp-content/uploads/2021/11/gift-guide-2021-plants-hub.jpg"
          src={cover}
          alt=""
        />
      </div>
      <div className="texts">
        <h2>{title}</h2>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default Post;
