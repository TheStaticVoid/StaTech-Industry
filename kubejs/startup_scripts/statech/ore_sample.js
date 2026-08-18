// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------
StartupEvents.registry('block', (event) => {
    event.create('titanium_ore_sample')
        .displayName('Titanium Ore Sample')
        .soundType('stone')
        .fullBlock(false)
        .waterlogged()
        .notSolid()
        .box(1.0, 0.0, 1.0, 13.0, 3.0, 13.0);
});