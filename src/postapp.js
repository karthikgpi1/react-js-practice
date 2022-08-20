import axios from "axios";
import React from "react";


class PostApp extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            posts: [], 
        };
    }

    //create operation
    createPost = () => {};

    //read operation
    getPosts = async() => {
       try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(data);
        this.setState({ posts : data});
       } catch (err){
        console.log("error fetching data for server", err);
       }
    };

    //update operation
    updatePost = () => {};

    //delete operation
    deletePost = () => {};

    componentDidMount (){
        this.getPosts();
    }

    render (){
        return (
            <>
              <h2>Post app</h2>
              <table>
                <tr>
                    <th>UserId</th>
                    <th>PostId</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                {this.state.posts.map((post) =>{
                    return (
                        <tr>
                            <td>{post.id}</td>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    );
                })}
              </table>
            </>
        ) 
    }
}


export default PostApp;