# share-project-angular

We have 2 angular project.

- common-lib is angular project.
- todo-app is angular project.
  Lets learn how we can install common-lib as dependency to `todo-app`.

## How to take common-lib dependency on todo-app locally?

todo-app depends on common-lib project.
In the common-lib project we can create the `tgz` file and put it in common folder.
Then todo-app will install the common-lib as node package dependency from the common folder.

### Steps to take local tgz file dependency

- Install ng-packager in `common-lib`
  ` "ng-packagr": "^5.7.1",`
- Add below script in `package.json` in `common-lib`

```json
 "bundle": "ng-packagr -p ng-package.json",
    "pack":"cd dist && npm pack",
    "publish" :"npm run bundle && npm run pack"
```
Once you run `npm run publish` then it will create `tgz` file at `common-lib/dist/common-lib-0.0.0.tgz`. 

Then go to `todo-app` and add the tgz file location like below:
` "common-lib": "file:../common-lib/dist/common-lib-0.0.0.tgz",`

So now if you run `npm install` in `todo-app` then it will install the dependency of `common-lib` from the local folder location. 
