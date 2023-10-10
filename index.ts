import * as fs from 'fs'

export type dayOfTheWeek = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'

export class StardewEventScripter {
    script: string[] = []
    preconditions_array: string[] = []
    id: number
    /**
     * Initalizes the class.
     * @param eventId 
     * @param musicId https://docs.google.com/spreadsheets/d/1CpDrw23peQiq-C7F2FjYOMePaYe0Rc9BwQsj3h6sjyo/edit#gid=239695361
     * @param cameraXY 
     * @param starting_characters https://stardewvalleywiki.com/Modding:Event_data#Directions
     */
    constructor(
        eventId: number,
        musicId: 'none' | string,
        cameraXY: [number, number],
        starting_characters: {
            name: string,
            x: number,
            y: number,
            facing: number
        }[]
        ) {
        this.id = eventId
        this.script.push(musicId)
        this.script.push(cameraXY.join(' '))

        const chars: string[] = []

        starting_characters.forEach(character => {
            chars.push(`${character.name} ${character.x} ${character.y} ${character.facing}`)
        })

        this.script.push(chars.join(' '))

    }

    preconditions = preconditions(this)
    commands = commands(this)
    
    

    save(fp: string = 'event.json') {
        fs.writeFileSync(fp, JSON.stringify({
            [[this.id, ...this.preconditions_array].join('/')]: this.script.map(x=>x.trim()).join('/')
        }, null, 4))
    }
}


export const preconditions = (scripter: StardewEventScripter) => ({
    conversationTopicOver: (conversationTopicID: string) => {
        scripter.preconditions_array.push(`A ${conversationTopicID}`)
        return scripter
    },
    notFestival: () => {
        scripter.preconditions_array.push('F')
        return scripter
    },
    noFestivalsWithin: (days: number) => {
        scripter.preconditions_array.push(`U ${days}`)
        return scripter
    },
    notOnDays: (days: dayOfTheWeek[]) => {
        scripter.preconditions_array.push(`d ${days.join(' ')}`)
        return scripter
    },
    chance: (chanceFloat: number) => {
        if (chanceFloat > 1) chanceFloat = 1

        scripter.preconditions_array.push(`r ${chanceFloat}`)
        return scripter
    },
    NPCVisible: (npc: string) => {
        scripter.preconditions_array.push(`v ${npc}`)
        return scripter
    },  
    weather: (type_weather: 'rainy' | 'sunny') => {
        scripter.preconditions_array.push(`w ${type_weather}`)
        return scripter
    },
    year: (yearnumber: number) => {
        scripter.preconditions_array.push(`y ${yearnumber}`)
        return scripter
    },
    notSeason: (season: string) => {
        scripter.preconditions_array.push(`z ${season}`)
        return scripter
    },
    goldenWalnutsFound: (nuts: number) => {
        scripter.preconditions_array.push(`N ${nuts}`)
        return scripter
    },
    inBed: () => {
        scripter.preconditions_array.push(`N`)
        return scripter
    },
    datingNPC: (name: string) => {
        scripter.preconditions_array.push(`D ${name}`)
        return scripter
    },
    jojaWarehouseBuilt: () => {
        scripter.preconditions_array.push(`J`)
        return scripter
    },
    hasNursery: () => {
        scripter.preconditions_array.push(`L`)
        return scripter
    },
    money: (g: number) => {
        scripter.preconditions_array.push(`M ${g}`)
        return scripter
    },
    marriedToNPC: (npc: string) => {
        scripter.preconditions_array.push(`O ${npc}`)
        return scripter
    },
    hasSecretNote: (note: string) => {
        scripter.preconditions_array.push(`S ${note}`)
        return scripter
    },
    standingOn: (x: number, y: number) => {
        scripter.preconditions_array.push(`a ${x} ${y}`)
        return scripter
    },
    reachedMinesBottom: (amountOfTimes: number) => {
        scripter.preconditions_array.push(`b ${amountOfTimes}`)
        return scripter
    },
    freeInventory: (freeSlots: number) => {
        scripter.preconditions_array.push(`c ${freeSlots}`)
        return scripter
    },
    seenEvents: (events: (number | string)[]) => {
        scripter.preconditions_array.push(`e ${events.join(' ')}`)
        return scripter
    },
    friendship: (npc: string, points: number) => {
        scripter.preconditions_array.push(`f ${npc} ${points}`)
        return scripter
    },
    gender: (_gender: 'male' | 'female') => {
        scripter.preconditions_array.push(`g ${_gender}`)
        return scripter
    },
    hasPet: (_pet: 'cat' | 'dog') => {
        scripter.preconditions_array.push(`h ${_pet}`)
        return scripter
    },
    hasItem: (id: number) => {
        scripter.preconditions_array.push(`i ${id}`)
        return scripter
    },
    playedDays: (days: number) => {
        scripter.preconditions_array.push(`j ${days}`)
        return scripter
    },
    notSeenEvent: (events: number[]) => {
        scripter.preconditions_array.push(`l ${events.join(' ')}`)
        return scripter
    },
    notReceivedLetter: (id: number | string) => {
        scripter.preconditions_array.push(`k ${id}`)
        return scripter
    },
    receivedLetter: (id: number | string) => {
        scripter.preconditions_array.push(`n ${id}`)
        return scripter
    },
    totalEarnedMoney: (money: number) => {
        scripter.preconditions_array.push(`m ${money}`)
        return scripter
    },
    notMarried: (npc: string) => {
        scripter.preconditions_array.push(`o ${npc}`)
        return scripter
    },
    npcInCurrentLocation: (npc: string) => {
        scripter.preconditions_array.push(`p ${npc}`)
        return scripter
    },
    hasChosenDialogueIDs: (ids: number[]) => {
        scripter.preconditions_array.push(`q ${ids.join(' ')}`)
        return scripter
    },
    shippedAmountOfItem: (id: number, amount: number) => {
        scripter.preconditions_array.push(`s ${id} ${amount}`)
        return scripter
    },
    time: (min: number, max: number) => {
        scripter.preconditions_array.push(`t ${min} ${max}`)
        return scripter
    },
    dayOfMonth: (days: number[]) => {
        scripter.preconditions_array.push(`u ${days.join(' ')}`)
        return scripter
    },
    /**
     * For the current player: mark scripter event as seen, add the specified letter to tomorrow's mail, then return false (so that nothing further happens). Use the format "x letterid true" to send the letter immediately. 
     */
    sendLetter: (id: number) => {
        scripter.preconditions_array.push(`x ${id}`)
        return scripter
    },
    hostFinishedCC: () => {
        scripter.preconditions_array.push(`C`)
        return scripter
    },
    hostNotFinishedCC: () => {
        scripter.preconditions_array.push(`X`)
        return scripter
    },
    hostIsCurrentPlayer: () => {
        scripter.preconditions_array.push(`H`)
        return scripter
    },
    hostNotReceivedMail: (letter: number) => {
        scripter.preconditions_array.push(`Hl ${letter}`)
        return scripter
    },
    hostReceivedMail: (letter: number) => {
        scripter.preconditions_array.push(`Hn ${letter}`)
        return scripter
    },
    anyoneNotReceivedMail: (letter: number) => {
        scripter.preconditions_array.push(`*l ${letter}`)
        return scripter
    },
    anyoneReceivedMail: (letter: number) => {
        scripter.preconditions_array.push(`*n ${letter}`)
        return scripter
    },
})

export const commands = (scripter: StardewEventScripter) => ({
    addBigBrop: (x: number, y: number, objectID: number) => {
        scripter.script.push(`addBigBrop ${x} ${y} ${objectID}`)
        return scripter
    },
    addConversationTopic: (id: number | string, dayLength: number) => {
        scripter.script.push(`addConversationTopic ${id} ${dayLength}`)
        return scripter
    },
    addCookingRecipe: (recipe: number | string) => {
        scripter.script.push(`addCookingRecipe ${recipe}`)
        return scripter
    },
    addCraftingRecipe : (recipe: number | string) => {
        scripter.script.push(`addCraftingRecipe ${recipe}`)
        return scripter
    },
    addFloorProp: (index: number, x: number, y: number, solidWidth: number = 1, solidHeight: number = 1, displayHeight: number = 1) => {
        scripter.script.push(`addFloorProp ${index} ${x} ${y} ${solidWidth} ${solidHeight} ${displayHeight}`)
        return scripter
    },
    addLantern: (row: number, x: number, y: number, lightRadius: number) => {
        scripter.script.push(`addLantern ${row} ${x} ${y} ${lightRadius}`)
        return scripter
    },
    addMailReceived: (id: number) => {
        scripter.script.push(`addMailReceived ${id}`)
        return scripter
    },
    addObject: (x: number, y: number, spriteIndex: number, layer: string | number) => {
        scripter.script.push(`addObject ${x} ${y} ${spriteIndex} ${layer}`)
        return scripter
    },
    addProp: (index: number, x: number, y: number, solidWidth: number = 1, solidHeight: number = 1, displayHeight: number = 1) => {
        scripter.script.push(`addProp ${index} ${x} ${y} ${solidWidth} ${solidHeight} ${displayHeight}`)
        return scripter
    },
    addQuest: (id: number) => {
        scripter.script.push(`addQuest ${id}`)
        return scripter
    },
    addTemporaryActor: (character: string, spriteWidth: number, spriteHeight: number, x: number, y: number, facing: number, breather: boolean, _type: 'Character' | 'Animal' | 'Monster', animalName?: string ) => {
        scripter.script.push(`addTemporaryActor ${character} ${spriteWidth} ${spriteHeight} ${x} ${y} ${facing} ${breather} ${_type}${animalName ? ' ' + animalName : ''}`)
        return scripter
    },
    /**
     * Places on object on the furniture at a position. UNLESS the location is FarmHouse, then it will always try to place an item onto the first piece of furniture, regardless if it's a table or not (and probably throw an error if there's no furniture.) It'll also actually replace the item on that piece of furniture if there was one previously. Not recommended for use in the farmhouse. May not be used by vanilla at all. 
     */
    addToTable: (x: number, y: number, objectID: number) => {
        scripter.script.push(`addToTable ${x} ${y} ${objectID}`)
        return scripter
    },
    /**
     * Adds either a Battered Sword or Return Scepter to the player's inventory. The Battered Sword is unobtainable in vanilla and is incomplete and not implemented. 
     */
    addTool: (type: 'Sword' | 'Wand') => {
        scripter.script.push(`addTool ${type}`)
        return scripter
    },
    /**
     * Uses ...args as it is quite complicated.
     * Set multiple movements for an actor. You can set True to have the actor walk the path continuously. Example: /advancedMove Robin false 0 3 2 0 0 2 -2 0 0 -2 2 0/

To make the actor move along the x axis (left/right), use the number of tiles to move and 0. For example, -3 0 will cause the actor to walk three tiles to the left while facing left. 2 0 will cause the actor to walk two tiles to the right while facing right.

To make the actor move along the y axis (up/down), use 0 and the number of tiles to move. For example, 0 1 will cause the actor to walk one tile down while facing down. 0 -5 will cause the actor to walk five tiles up while facing up.

To make an actor pause, use the direction to face and the number of milliseconds to pause. 1 is right, 2 is down, 3 is left, and 4 is up. The reason 4 is up and not 0 is so that advancedMove can tell the difference between a pause command and a move up/down command.

The code can tell the difference between a move command and a pause command because a move command must have 0 for either x or y. A pause command must have non-zero numbers for both numbers in the pair.

Example: /advancedMove Clint true 4 0 2 5000 -4 0 1 3000 Clint will have continuous movement moving 4 tiles to the right, facing down upon arriving, waiting for 5 seconds, then moving 4 tiles to the left, facing right upon arriving, then waiting for 3 seconds, then loops because the loop was set to true(see above).

Example: advancedMove Pam true 5 0 0 3 3 5000 -6 0 0 -4 Pam first moves 5 tiles to the right, then directly moves 3 tiles downward, faces the to the left upon arriving then waits 5 seconds before moving 6 tiles to the left then moves up 4 tiles directly
     */
    advancedMove: (...args: any[]) => {
        scripter.script.push(`advancedMove ${args.join(' ')}`)
        return scripter
    },
    ambientLight: (r: number, g: number, b: number) => {
        scripter.script.push(`ambientLight ${r} ${g} ${b}`)
        return scripter
    },
    animalNaming: () => {
        scripter.script.push(`animalNaming`)
        return scripter
    },
    /**
     * 
     * @param args Animate a named actor, using one or more <frames> from their sprite sheet, for <frame duration> milliseconds per frame. <frames> are indexed numerically, based on 16x32 peices of the image. scripter index increases as you go from left to right, starting from 0. <flip> indicates whether to flip the sprites along the Y axis; <loop> indicates whether to repeat the animation until stopAnimation is used. If you're animating the farmer, it may be helpful to reference Modding:Farmer_sprite#Sprite_Index_Breakdown
     */
    animate: (...args: any[]) => {
        scripter.script.push(`animate ${args.join(' ')}`)
        return scripter
    },
    attachCharacterToTempSprite: (actor: string) => {
        scripter.script.push(`attachCharacterToTempSprite ${actor}`)
        return scripter
    },
    awardFestivalPrize: (itemtype?: 'sculpture' | 'rod' | 'sword' | 'hero' | 'joja' | 'slimeegg' | 'emilyClothes' | 'jukebox' | null) => {
        scripter.script.push(`awardFestivalPrize${itemtype ? ' ' + itemtype : ''}`)
        return scripter
    },
    /**
     * Must also have an ending endSimultaneousCommand
     */
    beginSimultaneousCommand: () => {
        scripter.script.push(`beginSimultaneousCommand`)
        return scripter
    },
    broadcastEvent: (local?: boolean) => {
        scripter.script.push(`broadcastEvent${local ? ' local' : ''}`)
        return scripter
    },
    catQuestion: () => {
        scripter.script.push(`catQuestion`)
        return scripter
    },
    cave: () => {
        scripter.script.push(`cave`)
        return scripter
    },
    changeLocation: (location: string) => {
        scripter.script.push(`changeLocation ${location}`)
        return scripter
    },
    changeMapTile: (layer: string, x: number, y: number, index: number) => {
        scripter.script.push(`changeMapTile ${layer} ${x} ${y} ${index}`)
        return scripter
    },
    changeName: (actor: string, displayName: string) => {
        scripter.script.push(`changeName ${actor} ${displayName}`)
        return scripter
    },
    changePortrait: (npc: string, portrait: string) => {
        scripter.script.push(`changePortrait ${npc} ${portrait}`)
        return scripter
    },
    changeSprite: (npc: string, sprite: string) => {
        scripter.script.push(`changeSprite ${npc} ${sprite}`)
        return scripter
    },
    changeToTemporaryMap: (map: string, pan: boolean) => {
        scripter.script.push(`changeToTemporaryMap ${map}${!pan ? ' pan' : ''}`)
        return scripter
    },
    changeYSourceRectOffset: (npc: string, offset: boolean) => {
        scripter.script.push(`changeYSourceRectOffset ${npc} ${offset}`)
        return scripter
    },
    characterSelect: () => {
        scripter.script.push(`characterSelect`)
        return scripter
    },
    cutscene: (cutscene: boolean) => {
        scripter.script.push(`cutscene ${cutscene}`)
        return scripter
    },
    doAction: (x: number, y: number) => {
        scripter.script.push(`doAction ${x} ${y}`)
        return scripter
    },
    dump: (group: 'girls' | 'guys') => {
        scripter.script.push(`dump ${group}`)
        return scripter
    },
    endSimultaneousCommand: () => {
        scripter.script.push(`endSimultaneousCommand`)
        return scripter
    },
    elliotbooktalk: () => {
        scripter.script.push(`elliotbooktalk`)
        return scripter
    },
    emote: (actor: string, id: number) => {
        scripter.script.push(`emote ${actor} ${id}`)
        return scripter
    },
    end: () => {
        scripter.script.push(`end`)
        return scripter
    },
    endBed: () => {
        scripter.script.push(`end bed`)
        return scripter
    },
    endBeginGame: () => {
        scripter.script.push(`end beginGame`)
        return scripter
    },
    endCredits: () => {
        scripter.script.push(`end credits`)
        return scripter
    },
    endDialogue: (npc: string, nextLine: string) => {
        scripter.script.push(`end dialogue ${npc} "${nextLine}"`)
        return scripter
    },
    endDialogueWarpOut: (npc: string, nextLine: string) => {
        scripter.script.push(`end dialogueWarpOut ${npc} "${nextLine}"`)
        return scripter
    },
    endInvisible: (npc: string) => {
        scripter.script.push(`end invisible ${npc}`)
        return scripter
    },
    endInvisibleWarpOut: (npc: string) => {
        scripter.script.push(`end invisibleWarpOut ${npc}`)
        return scripter
    },
    endNewDay: () => {
        scripter.script.push(`end newDay`)
        return scripter
    },
    endPosition: (x: number, y: number) => {
        scripter.script.push(`end position ${x} ${y}`)
        return scripter
    },
    endWarpOut: () => {
        scripter.script.push(`end warpOut`)
        return scripter
    },
    endWedding: () => {
        scripter.script.push(`end endWedding`)
        return scripter
    },
    resetSourceRect: (actor: string) => {
        scripter.script.push(`extendSourceRect ${actor} reset`)
        return scripter
    },
    extendSourceRect: (actor: string, horizontal: number, veritcal: number, ignoreUpdates: boolean) => {
        scripter.script.push(`extendSourceRect ${actor} ${horizontal} ${veritcal} ${ignoreUpdates ? ignoreUpdates : ''}`)
        return scripter
    },
    /**
     * Change the player's eyes. Eyes is represented by and Integer from 0 - 5 (open, closed, right, left, half closed, wide open). Blink is a timer that is represented with a negative number. -1000 is the default timer
     */
    eyes: (eyeType: 0 | 1 | 2 | 3 | 4 | 5, blink: number) => {
        scripter.script.push(`eyes ${eyeType} ${blink}`)
        return scripter
    },
    faceDirection: (actor: string, direction: number, _continue?: boolean) => {
        scripter.script.push(`faceDirection ${actor} ${direction}${_continue ? ' ' + _continue : ''}`)
        return scripter
    },
    fade: (unfade: boolean = false) => {
        scripter.script.push(`fade${unfade ? ' unfade' : ''}`)
        return scripter
    },
    farmerAnimation: (anim: number) => {
        scripter.script.push(`farmerAnimation ${anim}`)
        return scripter
    },
    farmerEat: (id: number) => {
        scripter.script.push(`farmerEat ${id}`)
        return scripter
    },
    fork: (req: string, eventID: number) => {
        scripter.script.push(`farmerEat ${req} ${eventID}`)
        return scripter
    },
    friendship: (npc: string, amount: number) => {
        scripter.script.push(`friendship ${npc} ${amount}`)
        return scripter
    },
    globalFade: (speed: number, _conintue: boolean) => {
        scripter.script.push(`globalFade ${speed} ${_conintue ? ' continue' : ''}`)
        return scripter
    },
    globalFadeToClear: (speed: number, _conintue: boolean) => {
        scripter.script.push(`globalFadeToClear ${speed} ${_conintue ? ' continue' : ''}`)
        return scripter
    },
    glow: (r: number, g: number, b: number, hold: boolean) => {
        scripter.script.push(`glow ${r} ${g} ${b} ${hold}`)
        return scripter
    },
    grandpaCandles: () => {
        scripter.script.push(`grandpaCandles`)
        return scripter
    },
    grandpaEvaluation: () => {
        scripter.script.push(`grandpaEvaluation`)
        return scripter
    },
    grandpaEvaluation2: () => {
        scripter.script.push(`grandpaEvaluation2`)
        return scripter
    },
    halt: () => {
        scripter.script.push(`halt`)
        return scripter
    },
    hideShadow: (actor: string, hide: boolean) => {
        scripter.script.push(`hideShadow ${actor} ${hide}`)
        return scripter
    },
    hospitalDeath: () => {
        scripter.script.push(`hospitaldeath`)
        return scripter
    },
    ignoreCollisions: (npcID: string) => {
        scripter.script.push(`ignoreCollisions ${npcID}`)
        return scripter
    },
    ignoreEventTileOffset: () => {
        scripter.script.push(`ignoreEventTileOffset`)
        return scripter
    },
    itemAboveHead: (type: 'pan' | 'hero' | 'sculpture' | 'joja' | 'slimeEgg' | 'rod' | 'sword' | 'ore') => {
        scripter.script.push(`itemAboveHead ${type}`)
        return scripter
    },
    jump: (actor: string, intensity: number) => {
        scripter.script.push(`itemAboveHead ${actor} ${intensity}`)
        return scripter
    },
    loadActors: (layer: string) => {
        scripter.script.push(`itemAboveHead ${layer}`)
        return scripter
    },
    makeInvisible: (x: number, y: number, xDimension: number, yDimension: number) => {
        scripter.script.push(`makeInvisible ${x} ${y} ${xDimension} ${yDimension}`)
        return scripter
    },
    mail: (letterID: number | string) => {
        scripter.script.push(`mail ${letterID}`)
        return scripter
    },
    message: (msg: string) => {
        scripter.script.push(`message "${msg}"`)
        return scripter
    },
    minedeath: () => {
        scripter.script.push(`minedeath`)
        return scripter
    },
    money: (amount: number) => {
        scripter.script.push(`money ${amount}`)
        return scripter
    },
    move: (actor: string, x: number, y: number, facing: number, _continue?: boolean) => {
        scripter.script.push(`move ${actor} ${x} ${y} ${facing} ${_continue ?? ''}`)
        return scripter
    },
    pause: (ms: number) => {
        scripter.script.push(`pause ${ms}`)
        return scripter
    },
    playMusic: (track: string) => {
        scripter.script.push(`playMusic ${track}`)
        return scripter
    },
    playSound: (track: string) => {
        scripter.script.push(`playSound ${track}`)
        return scripter
    },
    playerControl: () => {
        scripter.script.push(`playerControl`)
        return scripter
    },
    positionOffset: (actor: string, x: number, y: number) => {
        scripter.script.push(`positionOffset ${actor} ${x} ${y}`)
        return scripter
    },
    proceedPosition: (actor: string) => {
        scripter.script.push(`proceedPosition ${actor}`)
        return scripter
    },
    question: (question: string, ...answers: string[]) => {
        scripter.script.push(`question null "${question}#${answers.join('#')}"`)
        return scripter
    },
    questionFork: (question: string, answerIndex: number, ...answers: string[]) => {
        scripter.script.push(`question fork "${answerIndex}${question}#${answers.join('#')}"`)
        return scripter
    },
    /**
     * TODO. Do not use.
     */
    quickQuestion: () => {
        
        return scripter
    },
    removeItem: (id: number) => {
        scripter.script.push(`removeItem ${id}`)
        return scripter
    },
    removeObject: (x: number, y: number) => {
        scripter.script.push(`removeObject ${x} ${y}`)
        return scripter
    },
    removeQuest: (id: number) => {
        scripter.script.push(`removeQuest ${id}`)
        return scripter
    },
    removeSprite: (x: number, y: number) => {
        scripter.script.push(`removeSprite ${x} ${y}`)
        return scripter
    },
    removeTemporarySprites: () => {
        scripter.script.push(`removeTemporarySprites`)
        return scripter
    },
    removeTile: (x: number, y: number, layer: string) => {
        scripter.script.push(`removeTile ${x} ${y} ${layer}`)
        return scripter
    },
    resetVariable: () => {
        scripter.script.push(`resetVariable`)
        return scripter
    },
    rustyKey: () => {
        scripter.script.push(`rustyKey`)
        return scripter
    },
    screenFlash: (alpha: number) => {
        scripter.script.push(`screenFlash ${alpha}`)
        return scripter
    },
    setRunning: () => {
        scripter.script.push(`setRunning`)
        return scripter
    },
    shake: (actor: string, ms: number) => {
        scripter.script.push(`shake ${actor} ${ms}`)
        return scripter
    },
    flipFarmer: () => {
        scripter.script.push(`showFrame farmer flip`)
        return scripter
    },
    showFrame: (actor: string, frameID: number | string) => {
        scripter.script.push(`showFrame ${actor} ${frameID}`)
        return scripter
    },
    showRivalFrame: (frame: number | string) => {
        scripter.script.push(`showRivalFrame ${frame}`)
        return scripter
    },
    skippable: () => {
        scripter.script.push(`skippable`)
        return scripter
    },
    speak: (character: string, text: string) => {
        scripter.script.push(`speak ${character} "${text}"`)
        return scripter
    },
    /**
     * TODO. Do not use.
     */
    specificTemporarySprite: () => {},
    speedFarmerModifier: (modifier: number) => {
        scripter.script.push(`speed farmer ${modifier}`)
        return scripter
    },
    speed: (actor: string, speed: number) => {
        scripter.script.push(`speed ${actor} ${speed}`)
        return scripter
    },
    splitSpeak: (actor: string, text: string) => {
        scripter.script.push(`splitSpeak ${actor} "${text}"`)
        return scripter
    },
    startJittering: () => {
        scripter.script.push(`startJittering`)
        return scripter
    },
    stopAdvancedMoves: () => {
        scripter.script.push(`stopAdvancedMoves`)
        return scripter
    },
    stopAnimationFarmer: () => {
        scripter.script.push(`stopAnimation farmer`)
        return scripter
    },
    stopAnimation: (actor: string, endFrame: number | string) => {
        scripter.script.push(`stopAnimation ${actor} ${endFrame}`)
        return scripter
    },
    stopGlowing: () => {
        scripter.script.push(`stopGlowing`)
        return scripter
    },
    stopJittering: () => {
        scripter.script.push(`stopJittering`)
        return scripter
    },
    stopMusic: () => {
        scripter.script.push(`stopMusic`)
        return scripter
    },
    stopRunning: () => {
        scripter.script.push(`stopRunning`)
        return scripter
    },
    stopSwimming: (actor: string) => {
        scripter.script.push(`stopSwimming ${actor}`)
        return scripter
    },
    swimming: (actor: string) => {
        scripter.script.push(`swimming ${actor}`)
        return scripter
    },
    switchEvent: (id: number) => {
        scripter.script.push(`switchEvent ${id}`)
        return scripter
    },
    /**
     * Trigger voting for or against a 3% shipping tax. (No effect on game?) 
     */
    taxvote: () => {
        scripter.script.push(`taxvote`)
        return scripter
    },
    temporarySprite: (x: number, y: number, rowInTexture: number, animationLength: number, animationInterval: number, flipped: boolean, layerDepth: number) => {
        scripter.script.push(`temporarySprite ${x} ${y} ${rowInTexture} ${animationLength} ${animationInterval} ${flipped} ${layerDepth}`)
        return scripter
    },
    textAboveHead: (actor: string, text: string) => {
        scripter.script.push(`textAboveHead ${actor} "${text}"`)
        return scripter
    } ,
    tutorialMenu: () => {
        scripter.script.push(`tutorialMenu`)
        return scripter
    },
    updateMinigame: (eventData: string) => {
        scripter.script.push(`updateMinigame ${eventData}`)
        return scripter
    },
    viewportMove: (x: number, y: number, ms: number) => {
        scripter.script.push(`viewportMove ${x} ${y} ${ms}`)
        return scripter
    },
    waitForAllStationary: () => {
        scripter.script.push(`waitForAllStationary`)
        return scripter
    },
    waitForOtherPlayers: () => {
        scripter.script.push(`waitForOtherPlayers`)
        return scripter
    },
    warp: (actor: string, x: number, y: number) => {
        scripter.script.push(`warp ${actor} ${x} ${y}`)
        return scripter
    },
    weddingSprite: (frame: string | number) => {
        scripter.script.push(`weddingSprite ${frame}`)
        return scripter
    },
})