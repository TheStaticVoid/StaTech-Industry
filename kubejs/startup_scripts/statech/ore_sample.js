// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------
StartupEvents.registry('block', (event) => {
    createSample(event, 'titanium_ore_sample', 'Titanium Ore Sample');
    createSample(event, 'uranium_ore_sample', 'Uranium Ore Sample');
});


let createSample = (event, id, name) => {
    event.create(id)
        .displayName(name)
        .soundType('stone')
        .fullBlock(false)
        .waterlogged()
        .notSolid()
        .box(1.0, 0.0, 1.0, 13.0, 3.0, 13.0);
};