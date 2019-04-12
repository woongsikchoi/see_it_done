echo off
REM ---- PATH -----------
set path1=c:\_git\see_it_done\
echo "%path1%"
REM ---------------------
pause

cls
echo This script must be run in the destination repo!
dir/w
pause

echo Clone from "%path1%"
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
REM -------  COPY FILES  --------
REM -----------------------------
REM echo on
echo n | copy /-y %path1%.gitignore
echo n | copy /-y %path1%.travis.yml
echo n | copy /-y %path1%package.json
echo n | copy /-y %path1%src\index.js src
echo n | copy /-y %path1%test\index.test.js test
echo n | copy /-y %path1%test\index.runner.js test

pause
echo .
echo Set project name
echo code package.json
echo code .travis.yml
echo .
echo del sid_clone.bat
echo .
echo yarn
echo .
echo npm test
echo npm run rules
echo npm run update
echo .
pause