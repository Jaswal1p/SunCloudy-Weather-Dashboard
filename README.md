# SunCloudy-Weather-Dashboard

This assignment is to make weather dashboard. 

This was a complex project for me. I subdivided the project into -

1.  First created basic structure with HTML and CSS files.
2.  Then in JS coded to catch forminput button click and gave it two functions to execute.
3.  Save the name of city in search file.
4.  Display current weather in upper container.
5.  I got API key from open weather's current weather and deployed it. but it lacked UV index info.
6.  Then I got second API key from openweather OneCall API.
    I had to get Lat and Long coordinates from first API to make it a go, which meant an intermediary function creation.
7. Second API also was used for future 5 day weather   display  by creating an array function and passing values of JSON.
8. Now I got the UV index from this 2nd API, created another intermediary function and deployed its vale in the function for present day.
9. I need to create similar intermediary function for icon which is availble in first API but is also needed in future cast.
10. Then I directed my attention search history field: 
     A: I made all dynamically generated city fields.
     B: gave them event listeners. 
     C: Then gave them dynamically generated unique ID. 
     D: then created function to catch the first function so it displays the current and future data !!! 
     C: got it to work.

 11. I finally finished my work on local storage, which was a major knowledege gap. I needed to know this for module 22 to work with state and work on MERN project as bootcamp is coming to an end. After many failed attempts, I was able to store data in local storage as strings, then retrieve it, convert to object by parse method and finally was able to integrate on the webpage, where it persists on reloading the page.

 12. Also worked on UV index display based on its value at <2 , 2-8 or above 8. This toook effort. Google and you tube helped !!         

After complition of coding, my weather dashboard looks like this: ![WireFrametoMockup](https://user-images.githubusercontent.com/92233527/148697809-8bdfa499-3dfb-4b1b-9ec0-f8d2b1424857.png)


The url for my deployed website is: https://jaswal1p.github.io/SunCloudy-Weather-Dashboard/


The url for my gitHub repository is:  https://github.com/Jaswal1p/SunCloudy-Weather-Dashboard.git

