
the path module adds correct delimeter based on os. 

- __filename: returns the filepath 
    >E:\api_bootcamp\route\path.js
- path.basename(__filename) : returns the filename
    > path.js
- path.dirname(__filename): return directory === __dirname
    >E:\api_bootcamp\route
- path.extname(__filename): returns extension of file
    > .js
- path.join(__dirname, "test", "hello.js") : joins the path
    > E:\api_bootcamp\route\test\hello.js