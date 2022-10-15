# Workday-Scheduler

# Description

This project is a functional weekly planner that also works as a calendar. The main purpose of this project was to showcase my knowledge in using third party API's, like jQuery, Bootstrap, and Moment.js. My motivation behind this project was to create a virtural planet for my assignments at my coding bootcamp. This will help me keep track of due dates, organize my workflow every week, and help out with time management. There was starter code provided, so I had to add some HTML and create a javascript file. First I started out by adding timeboxes to the HTML document. I made a box for every hour, and then connected all the attributes with the CSS attributes that were provided. Afterwards, I was then able to create the javascript file and link it to the HTML document. I started by using moment.js to display the current date and time. I then grabbed the local data that was stored, if any data is stored. I made sure to add the save button which kept the data saved over the page refresh. Lastly, I made a function to determine whether the hour boxes are determined as past, present, or future; which'll change the colors of the boxes.

# Usage

The website is titled "Workday Planner" and has the current date and time at the top of the page. Under that is eight rows that take up the entire page, with each row lebeled as a different hour of the average workday. Within every row is a text box and a save icon, where the user can type out their plans for the day and save them there, even after the page is refreshed. The hours are also color coded, where the past is red, the present is grey, and the future is green. The user can then reuse the planner every day of the week as it is cleared every day after the day is over. 

Screenshot of Deployed Application: ![screenshot](https://github.com/BrettGlerum/Workday-Scheduler/blob/main/assets/images/Screenshot%20(10).png)

# License

MIT License

Copyright (c) 2022 BrettGlerum

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
