
import './App.css';
import { Component } from 'react';

class Aula15 extends Component {
  state =  {
    counter:0,
    posts: [
      {
        id: 1,
        title: 'O titulo 1',
        body: 'O corpo 1'
      },
      {
        id: 2,
        title: 'O titulo 2',
        body: 'O corpo 2'
      },
      {
        id: 3,
        title: 'O titulo 3',
        body: 'O corpo 3'
      }
    ]
  }
  timeOutUpdate = null

  componentDidMount() {
   this.handleTimeOut()
  }

  componentDidUpdate() {
   this.handleTimeOut()
  }

  handleTimeOut = () => {
    const { posts,counter } = this.state
    posts[0].title = 'Outro titulo'
    this.timeOutUpdate = setTimeout(() => {
      this.setState({posts , counter: counter + 1})
   },1000)
  }

  componentWillUnmount() {
    clearTimeout(this.timeOutUpdate)
  }

/* componentDidMount() {
 setTimeout(() => {
  this.setState({
    posts: [
      {
        id: 1,
        title: 'O titulo 1',
        body: 'O corpo 1'
      },
      {
        id: 2,
        title: 'O titulo 2',
        body: 'O corpo 2'
      },
      {
        id: 3,
        title: 'O titulo 3',
        body: 'O corpo 3'
      }
    ]
  })
 },5000)
} */

  render() {
    const { posts,counter } = this.state
    return (
      <div className='App'>
        <h1>{counter}</h1>
         {posts.map (post =>(
          <div key={post.id}>
            <h1 >{post.title}</h1>
            <p>{post.body}</p> 
          </div>
        ))}
      </div>
    );
  }
}


export default Aula15;
