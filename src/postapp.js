import axios from "axios";
import React from "react";



const API_URL ="https://jsonplaceholder.typicode.com/posts";
class PostApp extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            posts: [], 
            id:"",
            userId: "",
            body: "",
            title:"",
        };
    }

    //create operation
    createPost = async() => {
        try {
            const { userId, title, body } = this.state;
            const { data: post } = await axios.post(API_URL, {
                userId,
                title,
                body,
            });
            const posts = [...this.state.posts];
            posts.push(post);
            this.setState({ posts, userId: "", title:"", body:"" });

        } catch (err){
            console.log("error creating data for server", err);
        }
    };

    //read operation
    getPosts = async() => { 
       try {
        const { data } = await axios.get(API_URL);
        console.log(data);
        this.setState({ posts : data});
       } catch (err){
        console.log("error fetching data for server", err);
       }
    };

    //update operation
    updatePost = async() => {
        try {
            const { id,userId, title, body } = this.state;
            const { data: post } = await axios.put(`${API_URL}/${id}`, {
                userId,
                title,
                body,
            });
            const posts = [...this.state.posts];
            const index = posts.findIndex((p) => p.id === id);
            posts[index] = post;
            this.setState({ posts, id: "", userId: "", title: "", body: "",});

        } catch (err){
            console.log("error updating data in server", err);
        }
    };

    //delete operation
    deletePost = async (postId) => {
        try {
            await axios.delete(`${API_URL}/${postId}`);
          let posts = [...this.state.posts];
          posts = posts.filter((post) => post.id !== postId);
          this.setState({ posts });
        } catch (err){
            console.log("error deleting data for server", err);
           }
    };

    componentDidMount (){
        this.getPosts();
    }

    handleChange = ({ target: {name, value}}) =>{
         this.setState({ [name]: value});
    };

    handleSubmit = (e) =>{
        e.preventDefault();
        if (this.state.id) {
            this.updatePost();
        } else {
            this.createPost(); 
        }
        
    };



    render (){
        return (
            <>
              <h2>Post app</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                      <label>User Id :</label>
                      <input name="userId" type="text" value={this.state.userId} onChange={this.handleChange}/>
                    </div>
                   <br/>
                   <div>
                      <label>title :</label>
                      <input name="title" type="text" value={this.state.title} onChange={this.handleChange}/>
                     
                   </div>
                   <br/>
                   <div>
                      <label>body :</label>
                      <input name="body" type="text" value={this.state.body} onChange={this.handleChange}/>
                      
                   </div>
                   <br/>
                   <div>
                     <button type="submit">submit</button>
                   </div>
                   <br/>
                </form>
                <table>
                  <tr>
                      <th>UserId</th>
                      <th>PostId</th>
                      <th>Title</th>
                      <th>Body</th>
                      <th>Actions</th>
                  </tr>
                  {this.state.posts.map((post) =>{
                      return (
                          <tr>
                              <td>{post.id}</td> 
                              <td>{post.userId}</td>
                              <td>{post.title}</td>
                              <td>{post.body}</td>
                              <td>
                                  <button onClick={() => this.setState({...post})}>update</button>
                              </td>
                              <td>
                                  <button onClick={() => this.deletePost(post.id)}>Delete</button>
                              </td>
                          </tr>
                      );
                  })}
              </table>
            </>
        ) 
    }
}


export default PostApp;