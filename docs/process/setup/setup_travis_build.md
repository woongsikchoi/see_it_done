# Setup Travis Build

(start)
[_**travis**_ sync account]
[_**travis**_ activate repo_name]
[_**settings**_ add NPM_TOKEN]
[_**settings**_ setup daily build]
[_**settings**_ trigger build]
[_**travis**_ build {{build}}]
<<_**travis**_ build failure? >> {{fix}} ?? [deploy] >>
[_**dev**_ fix code {{fix}}]
[_**github**_ push]
{{build}}
[_**npm**_ deploy]
<<_**npm**_ deploy success?>> {{dashboard}} ?? {{fix}}
[[Setup Dashboard]]
(end)
