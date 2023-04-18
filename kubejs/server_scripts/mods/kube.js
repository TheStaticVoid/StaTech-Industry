ServerEvents.recipes(e => {
    let kjs = (id) => `kubejs:${id}`;
    let astra = (id) => `ad_astra:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    // -- SPACE PROBE -- //
    e.shaped(kjs('space_probe'), [
        'FCD',
        'TMC',
        'ETF'
    ],
    {
        D: mi('desh_drill'),
        T: mi('titanium_tank'),
        M: mi('processing_unit'),
        F: astra('rocket_fin'),
        E: astra('desh_engine'),
        C: mi('aluminum_gear')
    });
});