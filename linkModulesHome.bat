set path1=C:/Projects/
mkdir node_modules
cd %path1%see_it_done/node_modules
cd
echo You must be in "see_it_done/node_modules" to continue...
pause

call symlink-dir %path1%lamed_badge  %path1%see_it_done/node_modules/lamed_badge

cd..
pause