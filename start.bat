@echo off
REM This script will run a Node.js server and then launch the default web browser.

SET NODE_SERVER_SCRIPT=server.js
SET URL=http://localhost:8080/

REM Check if the Node.js server script exists
IF NOT EXIST "%NODE_SERVER_SCRIPT%" (
    echo Error: The Node.js server script "%NODE_SERVER_SCRIPT%" does not exist.
    exit /b 1
)

REM Start the Node.js server in a new command prompt window
start cmd /k "node %NODE_SERVER_SCRIPT%"

REM Wait for a short duration to allow the server to start
echo Starting the Node.js server...
timeout /t 5 /nobreak > NUL

REM Launch the default web browser with the specified URL
start "" "%URL%"

REM Check if the command to open the browser was successful
IF ERRORLEVEL 1 (
    echo Failed to launch the browser.
    exit /b 1
)

echo Node.js server is running and browser opened successfully with URL: %URL%
exit /b 0