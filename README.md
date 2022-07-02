VideoBrowser is a React application that accepts a text input from the user via the search bar at the very top of the page, and sends a GET request to Youtube API via Axios library to fetch 5 videos related to the supplied user input, and displays the videos as a list of clickeable items, containing infos of the videos, on the right of the page, and displays the first video of the list as default on the left of the page in a big screen with its header and description on Youtube.

Once user opens up the website, since it is set as default, contents related to "Berlin" search apperars:
![2021-09-27 (2)](https://user-images.githubusercontent.com/85746370/134923431-98e6f32c-8e57-4169-8c28-e688dd33a9de.png)


A user search from the search bar results similarly: 
![2021-09-27 (3)](https://user-images.githubusercontent.com/85746370/134923806-852cd4f0-efce-410b-853d-79fa00ee7e80.png)


Once any video from the list on the right clicked, it gets displayed as the main content on the big screen, so that the list remains same as long as no new search is performed:
![2021-09-27 (4)](https://user-images.githubusercontent.com/85746370/134924999-c5676ecd-f561-47df-bdfa-4f6215721a2f.png)

Also note that some channels might have blocked their contents to be displayed on websites other than YouTube and additional permitted websites: 
![2021-09-27 (5)](https://user-images.githubusercontent.com/85746370/134925481-d90c4082-66d0-43b8-801b-d73816b819ff.png)
