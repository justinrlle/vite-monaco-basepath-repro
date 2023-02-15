# Reproduction repository for a bug in [`vite-plugin-monaco-editor`](https://github.com/vdesjs/vite-plugin-monaco-editor)

The bug is when vite has a nested base path, the base path is also used in the output of the `monacoeditorwork` while the other assets don't use it.

## To reproduce
First, check that while serving the app everything works well.
```shell
$ yarn install
$ yarn dev # go see the app, you can see no errors in the console
```
Then, you can build and preview the app and see some errors in the console:
```shell
$ yarn build # build the app in production mode
$ yarn preview # serve the build
```
You can see that the app failed to laod `/nested/monacoeditorwork/json.worker.bundle.js`. But if you try to open `/nested/nested/monacoeditorwork/json.worker.bundle.js` (notice the doubled `/nested`), you'll be presented with the code for the worker.

Then, you can try the fix I'm using, by uncomenting the config for the plugin in `vite.config.js`. If you repeat now the steps `yarn build`/`yarn preview`, you'll no longer see erros in the console, and the `/nested/monacoeditorwork/json.worker.bundle.js` path will work out of the box.