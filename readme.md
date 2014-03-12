# Chat.

An application that allows students to rate courses as well as allowing
faculty to create course review templates.

## How to use

Make sure you have node.js installed on your computer. 
If you don't have node.js, point your browser to http://nodejs.org/download/ and download
and install the latest version of node.js.

** You might have to restart your computer after you install node.js **

Double click Setup to install the application. The application will start automatically
after the setup process has finished.

## Development

All development should take place in /app

To start grunt run:
```
$ grunt serve
```

To get the project ready for distribution (minification etc.) run:
```
$ grunt
```

To check if code rules are being followed, you can run jshint by running the command:
```
$ grunt jshint
```

To run unit tests
```
$ karma start
```

## Features

Students:
- Log in with your university user name and password
- Get instant view over pending views and visual feedback on which reviews are not completed.
- Responsive design.

Staff:
- Log in with you university user name and password
- Create course reviews and send them out to students.
- View statistics from completed reviews.