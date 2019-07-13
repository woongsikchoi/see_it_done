# see_it_done (from startup to the end)

- [Dashboard](./Dashboard.md),
- [Dependencies](./Dependencies.md) and
- [User stories](./UserStories.md)

## Badges to be implemented:
[![open issues](https://img.shields.io/github/issues-raw/perezlamed/see_it_done.svg)](https://github.com/perezLamed/see_it_done/issues)
[![closed issues](https://img.shields.io/github/issues-closed-raw/perezlamed/see_it_done.svg)](https://github.com/perezLamed/see_it_done/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aclosed)

[![code size](https://img.shields.io/github/languages/code-size/perezlamed/see_it_done.svg)](http://npm.broofa.com/?q=see_it_done)
[![repo size](https://img.shields.io/github/repo-size/perezlamed/see_it_done.svg)](http://npm.broofa.com/?q=see_it_done)

[![commit activity](https://img.shields.io/github/commit-activity/m/perezlamed/see_it_done.svg)](https://github.com/perezLamed/see_it_done/graphs/contributors)
[![lastcommit](https://img.shields.io/github/last-commit/perezlamed/see_it_done.svg)](https://github.com/perezLamed/see_it_done/graphs/commit-activity)
[![Maintenance](https://img.shields.io/maintenance/yes/2019.svg)](https://github.com/perezlamed/see_it_done/graphs/commit-activity)

[![dependencies Status](https://david-dm.org/perezlamed/see_it_done/status.svg)](https://david-dm.org/perezlamed/see_it_done)
[![Known Vulnerabilities](https://snyk.io/test/github/perezLamed/see_it_done/badge.svg?targetFile=package.json)](https://snyk.io/test/github/perezLamed/see_it_done?targetFile=package.json)

[![Github releases](https://img.shields.io/github/downloads/perezlamed/see_it_done/total.svg)](https://github.com/perezLamed/see_it_done/releases)
[![HitCount](http://hits.dwyl.io/perezlamed/see_it_done.svg)](https://github.com/perezLamed/see_it_done/graphs/traffic)
 
 ---
[![DeepScan grade](https://deepscan.io/api/teams/1597/projects/6046/branches/48313/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1597&pid=6046&bid=48313)

 
<table>
    <tr>
        <td>
            <img src="https://github.com/perezLamed/see_it_done/raw/master/docs/pics/Burndown.png" alt="Burn down" width="400"/>
        </td>
        <td>
            <img src="https://github.com/perezLamed/see_it_done/raw/master/docs/pics/wellSaid.jpg" alt="Well said" width="300"/>
        </td>
    </tr>
</table>

## Project Setup

<u>**AS A**</u>
- Project owner
- Project manager
- Developer

<u>**I WANT TO**</u>
- kick-start new projects
<br>and get the CI (the automatic build, unit testing, code coverage and NPM release pipline) up and running
- auto upgrade dependencies
- implement and debug unit tests easily and effectively

<u>**SO THAT I CAN**</u>
- Finish fast and at the highest quality 
- Spend more time focus on new features
- Easily refactor projects and dependencies

>**In short:** <br>From lift-off to touchdown - **get to the goal** as safely and as quick as possible.

### After executing the following instructions, replace with your README text:

- Copy contents of "**see_it_start**" to your project folder
- Edit "**package.json**" and "**.travis.yml**" and replace "**see_it_start**" with your project name.
- Execute following commands to setup the README.md
  
```bash
ll badges readme
ll readme usage
```

- In the src folder of **see_it_done** project edit
  - Add your project to '**package_zetup.json**' and
  - execute '**node src/packageSync**'

### To customize more:

- In the src folder of **see_it_done** project edit
  - '**package_add.json**' (add default items for all your projects package files)
  - '**package_update.json**' (add items you want to sync across all your projects package files)
  - '**package_zetup.json**' 
    - **add the projects** who's package files you want to sync to
    - add the project package files you want to **exclude** when defaults are synced
    - add the **npm commands** you want to automatic run across projects
    - set the default timeout time
    - set you .gitIgnore file you want to sync accross all your projects
- When all is setup, run the following command to **sync all package.json** files across your projects:
```
node src/packageSync
```
- When all is setup, run the following command to **create batch scripts** across your projects:
```
node src/npmBatch
```

There are already batch scripts defined to do the following:
- **Commit** accross all projects:
  - local, (local commit only) 
  - fast, (commit and push)
  - safe (commit and push if all tests completed successfully)
- **Pull** accross all projects
- Remove files from git for all projects (after update of **.gitIgnore**)
- **Upgrade** all dependencies across all projects (and run CI pipeline)
- Run **unit tests** across all projects 

## Helpful tools
- [Word Markdown Editor](http://www.writage.com)

## [About Team](./team.md)

[![license](https://img.shields.io/github/license/perezLamed/see_it_done.svg?style=flat)](https://github.com/perezLamed/see_it_done)
