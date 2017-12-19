# FriendFinder

Here is the demo version of this project https://drive.google.com/file/d/1yDVLAJPe7SnzJSRYYnN6q-iMwM4j85cn/view?usp=sharing
Folder structure of the project
                      FriendFinder
                        - app
                          - data
                            - friends.js
                          - public
                            - home.html
                            - survey.html
                          - routing
                            - apiRoutes.js
                            - htmlRoutes.js
                        - node_modules
                        - package.json
                        - server.js
1.This Project contains 10 questions.Each Question should be on a scale of 1 to 5 based  on how much the user agrees and disagress with the question
2.servser.js file should require the basic npm packages we've user in class:express,body-parserand path
3.Your htmlRoutes.js file includes two routes:
    -A GET Route to /survey which should display the survey page.
    -A default, catch-all route that leads to home.html which displays the home page.
4.apiRoutes.js file containes two routes:
    -A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    -A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the                compatibility logic.
5.Application's data inside of app/data/friends.js as an array of objects. Each of these objects roughly follow the format below.
                        {
                          "name":"Ahmed",
                          "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
                          "scores":[
                              5,
                              1,
                              4,
                              4,
                              5,
                              1,
                              2,
                              5,
                              4,
                              1
                            ]
                        }
 6.Determine the user's most compatible friend using the following as a guide:
    Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
    With that done, compare the difference between current user's scores against those from other users, question by question. Add up       the differences to calculate the totalDifference.


                        Example: 


                        User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

                        User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

                        Total Difference: 2 + 1 + 2 = 5


Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on. 
The closest match will be the user with the least amount of difference.



Once you've found the current user's most compatible friend, display the result as a modal pop-up.


The modal should display both the name and picture of the closest match. 





