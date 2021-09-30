
import React, { Component } from 'react'
import UserAPIService from '../service/UserAPIService';

class PostFeedbackScreen extends Component{
  constructor(props){
    super(props);
    this.state ={
      feedback: '',
    }
    this.postFeedback = this.postFeedback.bind(this);
}
postFeedback = (e) =>{
  e.preventDefault();
  let feed = {
    feedback : this.state.feedback,
  };
  UserAPIService.postFeedback(feed, window.sessionStorage.getItem('bid'))
  .then((res)=> {
    console.log("inside api service");
   
    sessionStorage.removeItem("bid")
    this.props.history.push('/customer/search_flight');
  })
 // this.props.history.push('/customer/search_flight');
}
onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
     render(){
      return (
        <div>
          <h4>Feedback</h4>
          <div className="login-wrap p-1 p-md-5">
          <div className="icon align-items-center justify-content-center">
          <textarea
              type="text-area"
              rows="4"
              Style="resize:none"  
              className="form-control "
              name="feedback"
              placeholder="Feedback"
              onChange={this.onChange}
            />
              <button
              onClick={this.postFeedback}
              type="submit"
              className="btn btn-primary rounded submit p-2 px-4 my-4"
            >
              Submit
            </button>
            </div>
            </div>
        </div>
      )
            }
      
     
      }

export default PostFeedbackScreen;