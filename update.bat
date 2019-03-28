echo on
REM ---- PATH -----------
set path1=c:\projects\
set path1=c:\_Git\
echo path=%path1%
REM ---------------------
pause
cls

c:
cd %path%

cd lamed_test
start npm run update
cd %path1%
echo ----------------------------------

cd lamed_io
start npm run update
cd %path1%
echo ----------------------------------

cd lamed_folder
start npm run update
cd %path1%
echo ----------------------------------

cd lamed_flowchart
start npm run update
cd %path1%
echo ----------------------------------

cd see_it_done
start npm run update
cd %path1%
echo ----------------------------------
