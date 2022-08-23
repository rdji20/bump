# Bump

## First time start

1. Follow this instruction to create SSH -> link https://nira.com/how-to-clone-a-private-repository-in-github/
2. Clone repo with SSH
3. Download dependencies and client start process
  a) Open VS Code/client/utils/RequestManager.js
  b) On terminal cd to bump project folder
    - ``` source localip.sh ```
      - paste output to "const localIPAdress at RequestManager.js
  c) ``` cd api ```
    - ```npm install ```
    - Check that server is running with ```npm start```
  d) Open other terminal at ~/bump/client
    - ```sudo npm install -g expo-cli```
    - ```npm install```
    - Download xcode
    - Download expo go (iPhone)
    - Start application with ```expo start```

## Recurrent application running
(Always pull first!)
> Workk in your branch to avoid merging conflits 
> Create new branch ```git checkout -b <NAME OF THE BRANCH> ``` insert name on the branch inside the <> without the characters.
> ```git branch``` to see if you are in the desired branch
1. Open three terminals at client, api, and ml-recsys
2. Client terminal run: ```expo start```
3. Api terminal run: ```npm start```
