

var git = require('git-state')
 
var path = 'c:/projects/see_it_done'
 
git.isGit(path, function (exists) {
  if (!exists) return
 
  git.check(path, function (err, result) {
    if (err) throw err
    console.log(result) // => { branch: 'master',
                        //      ahead: 0,
                        //      dirty: 9,
                        //      untracked: 1,
                        //      stashes: 0 }
  })
})