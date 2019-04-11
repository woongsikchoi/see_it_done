echo on
REM ---- PATH -----------
set path1=c:\projects\
rem set path1=c:\_Git\
echo path=%path1%
REM ---------------------
pause
cls

c:
cd %path1%

cd lamed_test
start npm run update
cd %path1%
echo ----------------------------------[lamed_test

timeout /t 20
cd lamed_string
start npm run update
cd %path1%
echo ----------------------------------[lamed_string

timeout /t 20
cd lamed_io
start npm run update
cd %path1%
echo ----------------------------------[lamed_io

timeout /t 20
cd lamed_folder
start npm run update
cd %path1%
echo ----------------------------------[lamed_folder

timeout /t 20
cd lamed_flowchart
start npm run update
cd %path1%
echo ----------------------------------[lamed_flowchart

timeout /t 20
cd lamed_learn
start npm run update
cd %path1%
echo ----------------------------------[lamed_learn

timeout /t 20
cd see_it_done
start npm run update
cd %path1%
echo ----------------------------------[see_it_don