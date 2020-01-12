This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### GET api/getStories

This API isn't getting updated results even after sending a POST request to this endpoint /api/createStory. It keeps on returning only the three default data that are there.
So it is kind of impossible for a user to see the post they created.

### Once the story is created then navigate the user to story list
For this task, I came up with a compromise, once a user submit the story they create, it navigate the user to story list, but they won't see all three story list this endpoint(api/getStories) returns. They will only see first story. 
Once again I came to this compromise because this endpoint - api/getStories is not returning updated story list, so it is impossible to get the story a particular user creates.
