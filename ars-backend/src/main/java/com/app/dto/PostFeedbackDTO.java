package com.app.dto;

public class PostFeedbackDTO {
private String feedback;
public PostFeedbackDTO() {
	// TODO Auto-generated constructor stub
}
public PostFeedbackDTO(String feedback) {
	super();
	this.feedback = feedback;
}
public String getFeedback() {
	return feedback;
}
public void setFeedback(String feedback) {
	this.feedback = feedback;
}
@Override
public String toString() {
	return "PostFeedbackDTO [feedback=" + feedback + "]";
}

}
