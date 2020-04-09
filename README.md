# prettier-config-swimlane

[Prettier](https://prettier.io/) configuration used in Swimlane projects.

## Installation

Install as a dev dependency (along with [`prettier`](https://www.npmjs.com/package/prettier)) via [npm](https://www.npmjs.com/):

```bash
npm install --save-dev @swimlane/prettier-config-swimlane prettier@latest
```

## Usage

1. Create a file named `prettier.config.js` with the following contents:

```javascript
'use strict';

module.exports = require('@swimlane/prettier-config-swimlane');
```

2. Add a `prettier` script to package.json:

```json
{
  "scripts": {
    "prettier": "prettier --write \"**/*.js\""
  }
}
```

> Adjust the glob pattern as needed to include more file extensions.
> For example, `\"**/*.{js,ts}\"` will format both JavaScript and TypeScript files.
> Files can be excluded with a [`.prettierignore` file](https://prettier.io/docs/en/ignore.html#ignoring-files).

Executing `npm run prettier` will now format a project's files.

## License

[MIT](LICENSE)

## Credits

`prettier-config-swimlane` is a [Swimlane](http://swimlane.com) open-source project; we
believe in giving back to the open-source community by sharing some of the
projects we build.

[Swimlane](http://www.swimlane.com) is an automated cyber security operations and incident response
platform that enables cyber security teams to leverage threat intelligence,
speed up incident response and automate security operations.
