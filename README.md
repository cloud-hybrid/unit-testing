## Usage ##

1. Start the [development server](https://github.com/cloud-hybrid/ui-template)
   relative to the [root repository](https://github.com/cloud-hybrid/ui-template)
    - `npm run start`
2. Start the [Selenium-Grid Server](https://github.com/cloud-hybrid/grid)
3. Install dependencies if applicable
    - `npm install .`
4. Run the specification test(s)
    - `npm test`

**Note** - Tests cannot be run on a `localhost` host; the target e2e target must
be publicly resolvable.

## Commands ##

- `npm run compile` - compile the ES6 Babel into the `/lib` directory