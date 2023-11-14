// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:kubejs/${id}`;

    // -- SPACE PROBE -- //
    event.shaped('4x ' + kj('space_probe'), [
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
    event.shaped(kj('bartman'), [
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