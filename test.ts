// import StardewEventScripter from "./index";
import { StardewEventScripter } from "./build/index";

const event = new StardewEventScripter(
    97,
    'none',
    [4, 18],
    [
        {
            //farmer 14 24 0
            name: 'farmer',
            x: 14,
            y: 24,
            facing: 0,
        },
        {
            // Clint 4 19 2
            name: 'Clint',
            x: 4,
            y: 19,
            facing: 2,
        },
        {
            //Emily 10 11 0
            name: 'Emily',
            x: 10,
            y: 11,
            facing: 0,
        },
        {
            //Gus 15 18 1
            name: 'Gus',
            x: 15,
            y: 18,
            facing: 1,
        },
        {
            //Shane 7 18 1
            name: 'Shane',
            x: 7,
            y: 18,
            facing: 1,
        }
    ]
)


event
    .preconditions.friendship('Clint', 750)
    .preconditions.time(1900, 2300)
    .preconditions.notOnDays(['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])

    .commands.skippable()
    .commands.move('farmer', 0, -3, 3)
    .commands.emote('Clint', 28)
    .commands.pause(500)
    .commands.move('Clint', 0, -1, 3)
    .commands.move('Clint', -3, 0, 0)
    .commands.pause(500)
    .commands.playSound('openBox')
    .commands.pause(150)
    .commands.playSound('shiny4')
    .commands.pause(400)
    .commands.playMusic('desolate')
    .commands.move('Clint', 3, 0, 2)
    .commands.move('Clint', 0, 1, 2)
    .commands.move('farmer', -3, 0, 0)
    .commands.move('farmer', 0, -1, 3)
    .commands.faceDirection('Shane', 2, true)
    .commands.move('farmer', -3, 0, 3)
    .commands.faceDirection('Shane', 1, true)
    .commands.move('farmer', -3, 0, 3)
    .commands.faceDirection('Clint', 1)
    .commands.speak('Clint', 'Hello, @... care to join me?')
    .commands.pause(400)
    .commands.faceDirection('farmer', 0)
    .commands.pause(800)
    .commands.faceDirection('farmer', 3)
    .commands.faceDirection('Clint', 2)
    .commands.speak('Clint', `Let me just go ahead and tell you what's on my mind.$u#$b#I have terrible luck with women, @...*sigh*$s#$b#I'm a nice guy if you get to know me, I swear!$u`)
    .commands.pause(500)
    .commands.faceDirection('farmer', 0)
    .commands.emote('farmer', 28)
    .commands.pause(500)
    .commands.faceDirection('farmer', 3)
    .commands.speak('Clint', `The girls all seem to like you, @...^You're a girl, @...`)
    .commands.speak('Clint', `$q 211 null#Got any tips?^What advice can you give me?#$r 211 25 event_advice1#Impress women with your strength and charm#$r 211 25 event_advice1#Act crazy, to keep people guessing#$r 211 0 event_advice2#Just act natural... be yourself#$r 211 25 event_advice1#Treat women the same as men`)
    .commands.speed('Emily', 4)
    .commands.move('Emily', -6, 0, 2)
    .commands.speed('Emily', 2)
    .commands.move('Emily', 0, 4, 2)
    .commands.doAction(4, 16)
    .commands.playSound('openBox')
    .commands.stopMusic()
    .commands.move('Emily', 0, 3, 1)
    .commands.move('Emily', 1, 0, 2)
    .commands.move('Emily', 0, 1, 3)
    .commands.pause(400)
    .commands.pause(700)
    .commands.speak('Emily', `Hi Clint, what can I get for you tonight?$h`)
    .commands.pause(600)
    .commands.faceDirection('Clint', 1)
    .commands.pause(200)
    .commands.speak('Clint', `Yes!`)
    .commands.pause(300)
    .commands.speak('Clint', `Er.. I mean, I'll have the Big n' Cheesy. With extra sauce,  please.$s#$b#...$u`)
    .commands.faceDirection('Clint', 3)
    .commands.faceDirection('Emily', 2)
    .commands.pause(300)
    .commands.faceDirection('Clint', 2)
    .commands.speak('Emily', 'Hi @.')
    .commands.pause(300)
    .commands.faceDirection('farmer', 0)
    .commands.faceDirection('Clint', 1)
    .commands.speak('Clint', `Er... *ahem* Th...Thanks, Emily. For... taking my order.#$b#Um, Emily? I was...*gulp*... I was wondering...$h`)
    .commands.pause(300)
    .commands.faceDirection('Emily', 3)
    .commands.emote('Emily', 8)
    .commands.pause(400)
    .commands.speak('Emily', 'Yes, Clint?$u')
    .commands.pause(500)
    .commands.emote('Clint', 28)
    .commands.pause(1200)
    .commands.speak('Clint', '... nevermind.$s')
    .commands.faceDirection('Clint', 0)
    .commands.playMusic('sadpiano')
    .commands.pause(300)
    .commands.faceDirection('Emily', 2)
    .commands.pause(300)
    .commands.faceDirection('Emily', 3)
    .commands.pause(500)
    .commands.move('Emily', 0, -1, 1)
    .commands.move('Emily', 1, 0, 1)
    .commands.faceDirection('Shane', 3)
    .commands.speak('Emily', `Hi, Shane! Here's your beverage.$h`)
    .commands.pause(300)
    .commands.faceDirection('Shane', 1)
    .commands.pause(400)
    .commands.addObject(8, 17, 346, 1)
    .commands.playSound('woodyStep')
    .commands.pause(400)
    .commands.faceDirection('Shane', 3)
    .commands.pause(300)
    .commands.faceDirection('Clint', 1)
    .commands.speak('Shane', `Thanks, Emily!$h#$b#So... How's your shift coming along?`)
    .commands.speak('Emily', `It's fine! Thanks for asking, Shane!$h#$b#Do you have any new chicken stories for me?`)
    .commands.pause(600)
    .commands.emote('Clint', 28)
    .commands.pause(500)
    .commands.faceDirection('Clint', 2)
    .commands.pause(800)
    .commands.speak('Clint', `*sigh*$s#$b#I'm doomed...$s`)
    .commands.endWarpOut()
    
    //move farmer 0 -3 3/emote Clint 28/pause 500/move Clint 0 -1 3/move Clint -3 0 0/pause 500/playSound openBox/pause 150/playSound shiny4/pause 400/playMusic desolate/move Clint 3 0 2/move Clint 0 1 2/move farmer -3 0 0/move farmer 0 -1 3/
    // faceDirection Shane 2 true/move farmer -3 0 3/faceDirection Shane 1 true/move farmer -3 0 3/faceDirection Clint 1/speak Clint \"Hello, @... care to join me?\"/pause 400/faceDirection farmer 0/pause 800/faceDirection farmer 3/faceDirection Clint 2/
    // speak Clint \"Let me just go ahead and tell you what's on my mind.$u#$b#I have terrible luck with women, @...*sigh*$s#$b#I'm a nice guy if you get to know me, I swear!$u\"/pause 500/faceDirection farmer 0/emote farmer 28/pause 500/
    // faceDirection farmer 3/speak Clint \"The girls all seem to like you, @...^You're a girl, @...\"/speak Clint \"$q 211 null#Got any tips?^What advice can you give me?#$r 211 25 event_advice1#Impress women with your strength and charm#$r 211 25
    // event_advice1#Act crazy, to keep people guessing#$r 211 0 event_advice2#Just act natural... be yourself#$r 211 25 event_advice1#Treat women the same as men\"/
    // speed Emily 4/move Emily -6 0 2/speed Emily 2/move Emily 0 4 2/doAction 4 16/playSound openBox/stopMusic/move Emily 0 3 1/move Emily 1 0 2/move Emily 0 1 3/pause 400/pause 700/speak Emily \"Hi Clint, what can I get for you tonight?$h\"/pause 600/
    // faceDirection Clint 1/pause 200/speak Clint \"Yes!\"/pause 300/speak Clint \"Er.. I mean, I'll have the Big n' Cheesy. With extra sauce, please.$s#$b#...$u\"/faceDirection Clint 3/faceDirection Emily 2/pause 300/faceDirection Clint 2/
    // speak Emily \"Hi @.\"/pause 300/faceDirection farmer 0/faceDirection Clint 1/speak Clint \"Er... *ahem* Th...Thanks, Emily. For... taking my order.#$b#Um, Emily? I was...*gulp*... I was wondering...$h\"/pause 300/faceDirection Emily 3
    // /emote Emily 8/pause 400/speak Emily \"Yes, Clint?$u\"/pause 500/emote Clint 28/pause 1200/speak Clint \"... nevermind.$s\"/faceDirection Clint 0/playMusic sadpiano/pause 300/faceDirection Emily 2/pause 300/faceDirection Emily 3/
    // pause 500/move Emily 0 -1 1/move Emily 1 0 1/faceDirection Shane 3/speak Emily \"Hi, Shane! Here's your beverage.$h\"/pause 300/faceDirection Shane 1/pause 400/addObject 8 17 346 1/playSound woodyStep/pause 400/faceDirection Shane 3/pause 300/
    // faceDirection Clint 1/speak Shane \"Thanks, Emily!$h#$b#So... How's your shift coming along?\"/speak Emily \"It's fine! Thanks for asking, Shane!$h#$b#Do you have any new chicken stories for me?\"/pause 600/emote Clint 28/pause 500/
    //faceDirection Clint 2/pause 800/speak Clint \"*sigh*$s#$b#I'm doomed...$s\"/end warpOut",
event.save()