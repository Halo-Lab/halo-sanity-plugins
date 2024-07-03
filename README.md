# Halo Lab's Sanity plugins repository

This mono repository is designed to be easily extendable with new plugins for Sanity.

## How to add a new plugin

- Create a folder at the top level place (like **studio**, **qrcode** etc).
- Add the folder to **workspaces** array of the top-level _package.json_.
- Initialise the plugin structure however you prefer.
  > There are two ways to write a plugin.
  >
  > 1. Follow the official instruction.
  > 2. Write everything from scratch.
  >
  > While Sanity recommends the first variant, we may prefer the second one.
      The reason is that the official bootstrapped structure is way too heavy and
      event cannot work properly (a conflict in dependencies, mental overhead, etc.).
      The manual variant requires writing a minimum amount of configuration and code
      to get the job done. An example of manually crafted plugin is **qrcode**.
- Run `npm i` to add the new plugin to top-level _node_modules_, so it can be included to other local repositories (we need it for testing).
- Write the code.
- If you want to show what the plugin looks like visually, make an image(s) somehow and put it to the **assets** directory.
  After that, you can refer to those images from the README.
- Stay sane.

## How to test the plugin

Check if plugin is working the way it needs to work in the Sanity Studio.
For that reason, the testing studio lives in the **studio** repository.

> If you know how to write automated tests for plugins, please leave your knowledge here and write tests at least
> to one plugin, so we will know as well.

### Setting up the testing Studio

- Create the `.env.local` file in the **studio** folder with the following content:

  ```
  SANITY_STUDIO_PROJECT_ID=47oc2r8x
  SANITY_STUDIO_DATASET_TYPE=production
  ```

- Add the plugin as a dependency to Studio's `package.json` (You can refer to it the same way as you include packages from _npm_).
- Include plugin to the `plugins` array of the Studio's `sanity.config.ts` file.
- _Optional_: you may need to run `npm i`.
- Ask Sergey Diniovskiy or Ihor Bozhuk to invite you to the Studio, so you can log in.
- Test like crazy.

## Word from author

Have fun ✌️

<a href="https://www.halo-lab.com/?utm_source=github">
  <img
    src="https://dgestran.sirv.com/Images/supported-by-halolab.png"
    alt="Supported by Halo lab"
    height="60"
  >
</a>
