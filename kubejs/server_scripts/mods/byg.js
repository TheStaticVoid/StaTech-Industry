// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // There was a weird recipe that had no input and had brown dye as an output
    // Might have been a mistagged item
    event.remove({id: bg('brown_dye')})
});

ServerEvents.tags('item', event => {
    event.add('c:quartz_ores', bg('blue_nether_quartz_ore'));
    event.add('c:quartz_ores', bg('brimstone_nether_quartz_ore'));
    event.add('c:redstone_ores', bg('cryptic_redstone_ore'));
});

// Block tagging provided by kevintok
ServerEvents.tags('block', event => {
    event.add('c:quartz_ores', bg('blue_nether_quartz_ore'))
    event.add('c:quartz_ores', bg('brimstone_nether_quartz_ore'))
    event.add('c:redstone_ores', bg('cryptic_redstone_ore'))
    event.add('c:emerald_ores', bg('emeraldite_ore'))
});