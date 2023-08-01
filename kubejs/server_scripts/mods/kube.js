// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:kubejs/${id}`;
    let kj = (id) => `kubejs:${id}`;
    let ad = (id) => `ad_astra:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;

    // -- SPACE PROBE -- //
    e.shaped('4x ' + kj('space_probe'), [
        'FCD',
        'TMC',
        'ETF'
    ],
    {
        D: mi('desh_drill'),
        T: mi('titanium_tank'),
        M: mi('processing_unit'),
        F: ad('rocket_fin'),
        E: ad('desh_engine'),
        C: mi('enderium_gear')
    })
    .id(st('space_probe'));

    // -- JON BARTMAN --//
    e.shaped(kj('bartman'), [
        'PCP',
        'BWB',
        'BEB'
    ],
    {
        P: '#c:plutonium_dusts',
        C: mc('brain_coral_block'),
        B: mc('beef'),
        W: mc('black_wool'),
        E: mc('dragon_egg')
    })
    .id(st('bartman'));
});