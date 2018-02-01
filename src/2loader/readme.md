# add loader
In the first demo we use webpack to bundle our main.js code.

So how to bundle css code.

let's try!

First of all we need to know everything is module in webpack.
So css is also a module.we can require css in our code.

After add App.css, Whild i try to bundle it, error happens.
Because webpack can only handle js file.
it says error in ./App.js.
```
ERROR in ./App.css
Module parse failed: Unexpected token (1:5)
You may need an appropriate loader to handle this file type.
| body {
|     background-color: #444444
| }
 @ ./index.js 2:0-20
```
we need a loader to support this.

## add loader

```js
module: {
    rules: [
        {
            // use regex to match css file
            test: /\.css$/,
            use: ["style-loader", "css-loader?minimize"]
        }
    ]
}
```
we also need to install these two loaders: npm i -D style-loader css-loader

Now it works.