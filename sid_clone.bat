echo off
REM ---- PATH -----------
set path=c:\projects\see_it_done\
REM ---------------------

cls
echo This script must be run in the destination repo!
dir/w
pause

echo Clone from "%path%"
pause

REM -----------------------------
REM ---- CREATE STANDARD FOLDERS
REM -----------------------------
md src
md test
md docs
md docs\pics
md docs\designs
md docs\plan

REM -----------------------------
REM ---- COPY FILES
REM -----------------------------
REM echo on
echo n | copy /-y %path%.gitignore
echo n | copy /-y %path%.travis.yml
echo n | copy /-y %path%package.json
echo n | copy /-y %path%\src\index.js src
echo n | copy /-y %path%\test\index.test.js test
echo n | copy /-y %path%\test\index.run.js test

pause
echo .
echo code package.json
echo Set prject name
echo .
echo Remove sid_clone.bat
echo del sid_clone.bat

pause
echo .
echo Install dependencies
pause
yarn

pause
echo .
echo npm test
echo commit to master
echo setup build environment
echo .
pause