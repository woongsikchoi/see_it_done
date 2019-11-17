param (

    # The root directory to perform the pull in
    $baseDir = "e:\\_git",

    # How deep down you want to look for .git folders
    $depth = 2,

    # The command you want to perform
    $cmd = "status"
)

$gitFolderName = ".git"

function Go () {

    # Finds all .git folders by given path, the -match "h" parameter is for hidden folders 
    $gitFolders = Get-ChildItem -Path $baseDir -Depth $depth -Recurse -Force | Where-Object { $_.Mode -match "h" -and $_.FullName -like "*\$gitFolderName" }
    #$gitFolders
    #exit

    ForEach ($gitFolder in $gitFolders) {

        # Remove the ".git" folder from the path 
        #$gitFolder.FullName
        #$folder =  $gitFolder.FullName -replace $gitFolderName, ""
        $folder =  $gitFolder.FullName -replace '_git', '___'
        #$Folder
        $folder =  $folder -replace '.git', ''
        #$Folder
        $folder =  $folder -replace '___','_git'
        #$Folder

        Write-Host "Performing git $cmd in folder: '$folder'..." -foregroundColor "green"

        # Go into the folder
        Push-Location $folder 

        # Perform the command within the folder
        & git $cmd

        # Go back to the original folder
        Pop-Location
        
    }
}

function Main () {  
    Go   
}

# Executes the main function
Main  