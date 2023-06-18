ServerEvents.recipes(e => {
    e.remove({id: 'byg:brown_dye'})
});


ServerEvents.tags('block', e => {
    e.add('c:quartz_ores', 'byg:blue_nether_quartz_ore')
    e.add('c:quartz_ores', 'byg:brimstone_nether_quartz_ore')
    e.add('c:redstone_ores', 'byg:cryptic_redstone_ore')
    e.add('c:emerald_ores', 'byg:emeraldite_ore')
});