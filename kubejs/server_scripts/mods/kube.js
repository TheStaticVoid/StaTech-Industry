ServerEvents.recipes(e => {
    let kjs = (id) => `kubejs:${id}`;
    let astra = (id) => `ad_astra:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    // -- DESH DRILL HEAD -- //
    e.shaped(kjs('desh_drill_head'), [
        '  I',
        'PP ',
        'PP '
    ],
    {
        P: astra('desh_plate'),
        I: astra('desh_ingot')
    });

    // -- DESH DRILL -- //
    e.shaped(kjs('desh_drill'), [
        'GID',
        'MCF',
        'APG'
    ],
    {
        D: kjs('desh_drill_head'),
        I: '#modern_industrialization:item_pipes',
        F: '#modern_industrialization:fluid_pipes',
        G: mi('iron_gear'),
        M: mi('advanced_motor'),
        P: mi('advanced_pump'),
        C: mi('digital_circuit'),
        A: mi('aluminum_cable')
    });
});