// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------
StartupEvents.registry('block', (event) => {
    createSample(event, 'Titanium');
    createSample(event, 'Uranium');
    createSample(event, 'Salt');
    createSample(event, 'Bauxite');
    createSample(event, 'Lead');
    createSample(event, 'Nickel');
    createSample(event, 'Platinum');
    createSample(event, 'Tin');
});


let createSample = (event, name) => {
    let id = name.toLowerCase();
    event.create(id + '_ore_sample')
        .displayName(name + ' Ore Sample')
        .soundType('tuff')
        .hardness(0.1)
        .fullBlock(false)
        .waterlogged()
        .notSolid()
        .opaque(false)
        .box(1.0, 0.0, 1.0, 13.0, 3.0, 13.0);
};