#!/usr/bin/env node
console.log("This is my first CLI with Node");

// to create cli
//1. create a dir
//2. initialised npm using npm init --yes
//3. create and index file
//4. inside the index, at the top of the page you will conver to cli, write #!/usr/bin/env node
//5. then to the script, add "bin":{"<the name you will be using to run the cli>":"the entry file"}
//6. then run npm install -g
