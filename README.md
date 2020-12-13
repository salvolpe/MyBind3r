# MyBind3r

## Front-End Setup
1. Install [Node.js](https://nodejs.org/en/download/).
2. Intall yarn with ```choco install yarn``` in command line or with any of the methods listed [here](https://classic.yarnpkg.com/en/docs/install/#windows-stable).
3. Move to the MyBind3r/mybinder/client folder in command line.
4. Run ```yarn install```
5. Run ```yarn build```
6. Run ```yarn start```

## Back-End Setup
1. Install Python3.
2. Run ```pip3 install flask flask_sqlalchemy```
3. Move to the MyBind3r/mybinder/api folder in command line.
4. Run ```python -m flask run```

Optional: Download Postman for easy API testing.

## Git Branch Setup
1. To create and go into a new branch with branch name [bn], run ```git checkout -b [bn]```
2. To then add the remote branch that will show up online on Github, run ```git remote add [remote_branch_name] [bn]```
3. Lastly, to connect the remote and local branch, run ```git push --set-upstream origin [bn]```

To get new updates from the main branch, run ```git pull origin main```