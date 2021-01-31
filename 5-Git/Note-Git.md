##### Setting up environment
- `git config --global user.name "name"
- `git config --global user.name "name@email.com"
##### Basic syntax
- `git clone URL`
- `git pull`
- `git add .`
- `git commit -m "message"`
- `git push`

##### Working with branches
- Up-to-date repository: `git pull`
- Check branch: `git branch`
- Create new branch: `git branch littlefeature`
- Switch to branch: `git checkout littlefeature`
- After modifying, check status: `git status`
- Adding files: `git add .`
- Check git status, commit, and push
    - If error 'The current branch has no upstream branch: `git push --set-upstream origin bigfeature`
- Create a pull request, add comment
- Others will start a review, merge pull request, and delete the branch afterward.
- Git pull to update
- Before having any change, make sure you have the latest version of main: `git checkout main`
- `git merge master` may encounter error CONFLICT (content)
    - Remodified the file
    - Check status, add, commit
    - `git push origin conflict`
##### Make sure your fork is up to date
- Current configured remote repository for your fork `git remote -v`
- `git remote add upstream <URL of the original repository>`
- To verify the new upstream repository, type `git remote -v` again 
- One simple way: `git pull upstream master`
- Another method for [Syncing a fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork)
##### Contributing to open source
- github.com/zero-to-mastery/start-here-guidelines
- Better fork the project than clone the repository
- Clone by SSH so you don't have to use password all the time
    `cd start-here-guidelines/`
    `sublime .`
- Add your name in contributer list file:
    - Good practice: creating branch
    `git checkout -b test`
    - Modify, check status (git status, git diff), add, commit, and push `git push origin test` (instead of main)
    - Pull request
- Example:
    - Animation Nation project: according to the guidelines
    - Add card: artName: "Foldername", author name, author's github link etc...
    - `git checkout -b Foldername`, check status and so on
    - `push origin Foldername`
    - Comeback to the fork Zero to mastery and make pull request