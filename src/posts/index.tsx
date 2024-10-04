import { useParams } from "react-router-dom";
import { Post } from "../models/post";
import { useEffect, useState } from "react";
import { supabase } from "../services/api";

export const PostPage = () => {
    const params = useParams<"postId">();
    const[post, setPost] = useState<Post|undefined>(undefined);
    const[loading, setLoading] = useState<boolean>(false); 
    
    useEffect(() => {
        const fetchPost = async () => {
          try{
                setLoading(true);
                const idToFind = params.postId;
                if(idToFind != undefined){
                    const { data, error } = await supabase.from("posts").select().eq('id', idToFind);
                    if (error) {
                    console.error('Error fetching data:', error.message);
                    } else {
                if(data !== undefined){
                        setPost(data[0]);
                    } 
                }
            }
          } catch(error: unknown) {
            console.error("Error to fetch post: " + error);
          } finally {
            setLoading(false);
          }      
        };

        if(params.postId!=undefined){
            fetchPost();
        }

    }, [params.postId]);
    if(loading){
        return (<div className="message"><h3>loading....</h3></div>);
    } else {
        if(params.postId == undefined){
            return (<div className="message"><h3>Por favor, Informe o id do post.</h3></div>);
        }
    
        if(post?.id === undefined){
            return (<div className="message"><h3>Post não localizado.</h3></div>);
        }
    
        return (
            <>
            <header className="page-header">
                <h1>Detalhes do post {post.title}</h1>
            </header>
            <main className="container">
                <article className="form-detail">
                    <header><h1>{post.title}</h1></header>
                    <main>
                        <p>
                            <strong>Descrição</strong>
                        </p>
                        <p>
                            {post.description}
                        </p> 
                        <p>
                            <strong>Conteúdo</strong>
                        </p>
                        <p>
                            {post.body}
                        </p>
                    </main>
                    <footer className="form-detail-footer">
                        Criado em: <span className="form-detail-date">{post.created_at}</span>
                        <span className="form-detail-link">
                            <a title="Retornar" href="/">Retornar</a>
                        </span>
                    </footer>
                </article>
            </main>
            </>
          );
        }
}