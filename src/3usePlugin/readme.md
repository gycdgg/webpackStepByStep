# try to use plugin

In the last demo we add css, but i find that the css code has been bundle in bundle.js,I think this should not be a good idea.

So this demo will tell us how to use plugin seprate css and js. 

let's try!

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