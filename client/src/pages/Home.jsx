import React from 'react';
import { PostCreator, Post } from '../components';
import { useSelector, connect } from 'react-redux';
import axios from 'axios';
import "../scss/Home.scss";

export class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []        
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/users/getposts')
             .then(res => {
                this.state = {
                    posts: res.data
                }
                // console.log(result);
                // setIsLoaded(true);
                console.log("State: ", this.state.posts)
                this.render();    
            })
    }

    // const [ isLoaded, setIsLoaded ] = React.useState(false);

    // React.useEffect(() => {
    //     axios.get('http://localhost:5000/api/users/getposts')
    //          .then(res => {
    //             result = res.data;
    //             console.log(result);
    //             setIsLoaded(true);
                
    //         })
    // })

    render() {
    return (
        <div id="home">
            <PostCreator />
            {
                this.state.posts.map((post, key) => <Post key={key} username={post.username} content={post.caption} />)
            }
        </div>
    )
    }
}

export default Home;
// export default connect()(Home);