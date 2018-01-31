## use DevServer
if we want to run our code on server, not static file,and hot load is also needed.
>* provide Http service, not a static one
>
>* listenning the file change, hot load
>
>* provide Source Map, this will make debug more convenient
>
----------------------------------------------------------
In order to meet these requirements, we can use webpack-dev-server.
```
Project is running at http://localhost:8080/
webpack output is served from /
```
while i visit http://localhost:8080/, the bundle.js file reqponse will 404,means we can't get this file.
Because DevServer will put these file in internal storage.
While visit js file, we use http to get it. DevServer will ignore the out.path property in webpack.config.js.
so we shou change index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- <link rel="stylesheet" href="./dist/main_ce4d8798.css"> -->
    <link rel="stylesheet" href="./dist/main_ce4d8798.css">
</head>
<body>
    This is a hello world demo.
    <h1 id = "helloWorld"></h1>
    <script src="bundle.js">
    // <script src="./dist/bundle.js">
    </script>
</body>
</html>
```
**

