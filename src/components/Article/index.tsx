import { Post } from "../../models/post";

export const Article = (item: Post) => {
    return(
        <>
            <article className="form-article">
                <header><h1>{item.title}</h1></header>
                <main>
                    {item.description}
                </main>
                <footer className="form-article-footer">
                    <span className="form-article-date">{item.created_at}</span>
                    <span className="form-article-link">
                       <a href={`/post/${item.id}`} title={`${item.title} details`}>Continue lendo...</a>
                    </span>
                </footer>
            </article>
        </>
    );
}