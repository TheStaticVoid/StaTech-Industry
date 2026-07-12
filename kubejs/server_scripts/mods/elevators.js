// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------

ServerEvents.recipes(event => {

    // REPLACE ENDER PEARL WITH PISTON //
    event.replaceInput(
        { mod: 'elevatorid' },
        'minecraft:ender_pearl', 
        'minecraft:piston'         
    );
})