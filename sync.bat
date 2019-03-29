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
start npm run sync
cd %path1%
echo ----------------------------------[lamed_test

cd lamed_io
start npm run sync
cd %path1%
echo ----------------------------------[lamed_io

cd lamed_folder
start npm run sync
cd %path1%
echo ----------------------------------[lamed_folder

cd lamed_flowchart
start npm run sync
cd %path1%
echo ----------------------------------[lamed_flowchart

cd lamed_learn
start npm run sync
cd %path1%
echo ----------------------------------[lamed_learn

cd see_it_done
start npm run sync
cd %path1%
echo ----------------------------------[see_it_done
