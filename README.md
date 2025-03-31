This repo contains a collection of react components that will be reused across multiple applications. Here is a link to the [storybook](https://vishalpalaniappan.github.io/asp-ui-component-library/) with the developed components.

## Installing the library

To install the library install the following NPM package
'''
npm i asp-react-component-library
'''

For instructions on how to use the component, please refer to the relevant stories. More detailed documentation about each component will be added soon.

## Usage

Run Storybook
'''
npm run storybook
'''

Build Storybook
'''
npm run build-storybook
'''

Build the library:
'''
npm run build
'''

## Testing Locally

To test the library locally, run `npm link` in the component library folder. In the application which will import the library run `npm link asp-react-component-library`. You should now be able to import the component and use it locally. To push updates from the library to the local
application, run `npm run build` and the changes will be pushed to the local application.

Note: There are some issues with this workflow that are being resolved and will be addressed in a coming PR.


