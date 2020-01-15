This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### GET api/getStories

This API isn't getting updated results even after sending a POST request to this endpoint /api/createStory. It keeps on returning only the three default data that are there.
So it is kind of impossible for a user to see the post they created.

For the task of navigating the user to story list, I came up with a compromise, once a user submit the story they create, it navigate the user to story list, and they see all story list this endpoint(api/getStories) returns. 

Once again I came to this compromise because this endpoint - api/getStories is not returning updated story list, so it is impossible to get the story a particular user creates.


## Admin Accepting and Rejecting story
Since there is no api to get updated status(either Accept or Reject). I made use of redux to make the data available across all pages, and after invoking a function on Accept or Reject, it routes back to the storylist page and change the state of status in redux


## Links
 Admin Page http://localhost:3000/admin
 Login Page http://localhost:3000/login
 Logout Link http://localhost:3000/logout
 User's PAge http://localhost:3000/home
 
