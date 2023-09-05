
import './App.css';
import {Component} from 'react';
 
class App extends   Component{
 state = {
 
 }
 render(){
  const{} = this.state;
  return(
    <div className="App">

    </div>
  );
 }
 }

export default App;
state = {
  posts: [
    {
      id: 1,
      titulo: "titulo 1",
      conteudo: "conteudo 1"
    },
    {
      id: 2,
      titulo: "titulo 2",
      conteudo: "conteudo 2"
    },
    {
      id: 3,
      titulo: "titulo 3",
      conteudo: "conteudo 3"
    }
  ]
}

render(){
  const { posts } = this.state;

  return (
    <div className="App">
      {posts.map(post => (
      <h1 key={post.id}> {posts.titulo} </h1>
      <h1></h1>
      )}
    </div>
  );
}
