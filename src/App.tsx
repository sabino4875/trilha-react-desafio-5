import { useEffect, useState } from "react";
import { Post } from "./models/post";
import { supabase } from "./services/api";
import { Link } from "react-router-dom";

export const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getPosts = async () => {
    try{
      setLoading(true);
      const { data, error } = await supabase.from("posts").select();
      if (error) {
        console.error('Error fetching data:', error.message);
      } else {
        setPosts(data);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <header className="page-header">
          <h1>Personal Blog</h1>
      </header>
      <main className="container">
      {loading ? <div className="message"><h3>loading....</h3></div> : 
        posts.map((post) => (<>
          <article className="form-article" key={post.id} id={post.id} itemID={post.id}>
            <header><h1>{post.title}</h1></header>
            <main>
                {post.description}
            </main>
            <footer className="form-article-footer">
              <span className="form-article-date">{post.created_at}</span>
              <span className="form-article-link">
                <Link to={`/posts/${post.id}`} title={`Mais detalhes sobre o post ${post.title}`}>Continue lendo...</Link>
              </span>
            </footer>
        </article>
        </>))}
        {loading ? null : posts?.length < 1 && <div className="no-data">Não há dados</div>}
      
      </main>
    </>
  );
}
