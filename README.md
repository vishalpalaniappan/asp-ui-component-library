This repo contains a collection of react components that will be reused across multiple applications. 

Here is a link to the [storybook](https://vishalpalaniappan.github.io/asp-ui-component-library/) with the components.

## Using the library

To install the library install the following NPM package
```
npm i asp-react-component-library
```

For examples of how to use each component, please refer to the relevant stories. More detailed documentation about each component will be added soon.

## Developing

Run Storybook:
```
npm run storybook
```

Build Storybook:
```
npm run build-storybook
```

Build the library:
```
npm run build
```

## Testing Locally

To test the library locally, use the following steps:

- run `npm link` in the component library folder. 
- run `npm link asp-react-component-library` in the local application which will import the library 
- You should now be able to import the component into the local application
- run `npm run build` in the component library to push the changes to the local application

Note: There are some issues with this workflow that are being resolved and will be addressed in a coming PR.


