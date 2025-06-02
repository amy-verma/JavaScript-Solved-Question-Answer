Q.What is Git?
- is a version history for code
-Git will start tracking  all the changes in the current folder

- Github is specifically designed for git repository
2. git status- show all the changes since previous commit

3. git add <file/folder> - pick changes to go into next commit
4. git add file pick individual file
5. git add  folder/  - Pick all files inside a folder (and subfolders)
6. git add  . - Pick all files (in folder command line is running in) 

7. git commit  -m "message" - Creates a commit with a message attached

8. git log  -           View the commit history
9. git log  --all       - Show all commits (not just current branch) 
10. git log  --all --graph  -  Show branching visually in the command line 

11. git add .  - working=>staging
12. git commit -m "message"  - staging=>commit history

13. git reset  <file|folder>   - staging => working 
14. git reset  file 
15. git reset  folder/ 
16. git reset  . 

Checkout will work same as reset(will remove the last stage changes)
17. git checkout --  <file|folder>   - working => remove the  changes
18. git checkout --  file 
19. git checkout --  .  

20. What is commit hash- is the id of the commit
View Previous commit
- git checkout <comit hash id>- view previous commit

 Restore to a previous commit 
 git log- check the logs
 git log --all
21. git checkout <hash|branch> <file|folder>  -  Restore the contents of the files back to a previous commit
22. git checkout <hash|branch> file - Restore a file
23. git checkout <hash|branch> folder/ - Restore to a folder
24. git checkout <hash|branch> .  - Restore all files in project

25. When you go back to a previous version and create a adda new repo then it will create a new repo
    instead of adding it to a last newly branch created

26. git log --all --graph - to see the graph   

Other Features of Git
27. git config --global alias.shortcut <command> -  git config --global alias.shortcut <command>
28. git config --global alias.s "status"  -  git s = git status

Uploading Code to GitHub
29. git remote add <remote_name> <url> - Link a local repository to a remote repository and
give a name for this link
30. git remote - List all remote repositories that are linked
31. git remote -v  - List all remote repositories (but with more detail)
32. git remote remove <remote_name> - Removes a link to a remote repository
33. git push <remote_name> <branch - Upload a branch of your git version history to your
remote repository
34. git branch - Shows a list of available branches
35. git log --all --graph - Shows the branches visually in the history
36. git push origin main - Upload the branch "main" to the remote repository
named "origin"
37. git push <remote_name> <branch> -f - Force-push the branch to the remote repository (it
will overwrite what's on the remote repository)


39. Downloading Code from GitHub
39. git clone <url> - Download a remote repository from a url
39. git clone https://github.com/SuperSimpleDev/repository1
40. git clone <url> <folder_name> - Download the repository and give it a different
folder name

41. git fetch - Updates all remote tracking branches. Remote
tracking branches (like origin/main ) show what
the branch looks like in the remote repository
42. git pull <remote_name> <branch> - Update the local branch with any updates from
the remote repository (on GitHub)
43. git pull origin main - Downloads any new commits from the main
branch on origin , and updates the local main
branch with those new commits
44. git pull origin main --set-upstream
    Sets up a shortcut so that the next time you are on the main branch and run git pull , it will
automatically git pull origin main

Question. 
45. Diff bet git pull and git fetch
git pull - Fetches changes from a remote repository and immediately merges them into your current branch.

git fetch- Only downloads changes (commits, branches, tags) from the remote to your local repo, but does not merge them into your working branch. After that you will have to merge it using git merge

46. git rebase:
Moves (or “replays”) your commits on top of another branch.
Creates a linear history (no merge commits).

48. 
Question. If you have have joined a new team-
step 1: git clone <url>
step 2: work on it as normal git repo 
step : make some changes, create commit and git push

Branching
Branching = create a copy of the version history that we can work on without affecting the
original version history. This lets us work on multiple things (features + fixes) at the same time
49. git branch <branch_name> - Creates a new branch
50. git branch feature1 - Create a new branch named feature1
51. git checkout <branch_name> - Switch to a different branch and start working on
that branch
52. git checkout feature1 - Switch to the feature1 branch. New commits will
now be added to the feature1 branch
53. git branch -D <branch_name> - Deletes a branch
54. git branch -D feature1 - Deletes the feature1 branch


Merging
55. git merge <branch_name> -m "message" - Merge the current branch (indicated by HEAD -> )with another branch ( <branch_name> ). Saves the result of the merge as a commit on the current branch
56. git checkout main - 1. First switch to the main branch
57. git merge feature1 -m "message"  -  2. Then merge the main branch with the feature1 branch. The result of the merge will be added to main as a commit (a "merge commit")

Merge Conflicts
58. 
If there is a merge conflict (git doesn't know
what the final code should be), it will add this in
your code.
<<<<<<< HEAD
...            <-- Code in the current branch (indicated by HEAD -> )
=======
...               <-- Code in the branch that is being merged into HEAD
>>>>>>> branch

To resolve a merge conflict
1. Delete all the extra code and just leave the final code that you want
2. If there are conflicts in multiple places in your code, repeat step 1 for all those places
3. Create a commit.

59. Feature Branch Workflow
A popular process that companies use when adding new features to their software
1. Create a branch for the new feature (called a "feature branch").
git branch new-feature
git checkout new-feature
Make some changes to the code...
git add .
git commit -m "new feature message"

2. Upload the feature branch to GitHub
git push origin new-feature

3. Create a pull request on GitHub (a pull request lets teammates do code reviews and add
comments).
5. After merging, update the local repository (so that it stays in sync with the remote repository
on GitHub).
git checkout main
git pull origin main
-------------------------------------------------------------------------------------------


1. git branch new-branch-name: to create a new branch
------------------------
1. git diff- To compare the commits,branches,files
2. git merge-to merge two branches

Pull Request
- It lets to tell others about chnages

Pull Command
-git pull origin main
-used to fetch and download content from remote repo and immediately update the  the local repo
to match the content

Resolving merge Conflict
-An event that takes place when git is unable to automaticaly resolve differenec in code between 
two commits
-------------------------
Undoing Changes
Case 1:staged changes
    git reset <filename>
    get reset
Case 2:commited changes(for one commit)
    git reset HEAD~1(to reset the last commit)
Case 3:commitedchanges (for many comits)
    git reset <commit hash>
    git reset --hard<commit hash>   
-----------------------
Fork
-is a new repo that shares codse and visibility setting with an  original upstream respo
-fork is a rough copy         