# stardew event scripter

A javascript library to let you make Stardew Valley events in javascript.

## installation

1. Get [nodejs](https://nodejs.dev/en/) and NPM.
2. `npm install stardew-event-scripter`


## usage

**At least some basic JS/TS knowledge is expected**

1. An IDE supporting intellisense is recommended, such as [Visual Studio Code](https://github.com/microsoft/vscode/).
2. You have 3 options to import it:
    1. ```js
        const { StardewEventScripter } = require('stardew-event-scripter')

        const event = new StardewEventScripter( ... )
        ```
    2. ```js
        const StardewEventScripter = require('stardew-event-scripter').StardewEventScripter

        const event = new StardewEventScripter( ... )
        ```
    3. ```js
        const StardewEventScripter = require('stardew-event-scripter')

        const event = new StardewEventScripter.StardewEventScripter( ... )
        ```

3. The constructor has 4 arguments, 
 ```js
    eventId: number,
    musicId: 'none' | string,
    cameraXY: [number, number],
    starting_characters: {
        name: string,
        x: number,
        y: number,
        facing: number
    }[]
```

4. All precondictions are found under `StardewEventScripter#preconditions`, and all commands under `StardewEventScripter#preconditions`. 

5. If you need an example, Clint's 3 heart event can be found in [`test.ts`](/test.ts)
