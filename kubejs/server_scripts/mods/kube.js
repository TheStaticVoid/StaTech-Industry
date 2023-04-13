ServerEvents.recipes(e => {
    let kjs = (id) => `kubejs:${id}`;
    let astra = (id) => `ad_astra:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    // -- SPACE PROBE -- //
    e.shaped(kjs('space_probe'), [
        'GID',
        'MCF',
        'APG'
    ],
    {
        D: mi('steel_drill_head'),
        I: '#modern_industrialization:item_pipes',
        F: '#modern_industrialization:fluid_pipes',
        G: mi('iron_gear'),
        M: mi('advanced_motor'),
        P: mi('advanced_pump'),
        C: mi('digital_circuit'),
        A: mi('aluminum_cable')
    });
});