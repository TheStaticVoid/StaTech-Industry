// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:simplemagnets/${id}`;
    let sm = (id) => `simplemagnets:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;

    const SIMPLE_MAGNETS_REMOVED_RECIPES = [
        sm('basicmagnet'),
        sm('advancedmagnet'),
    ];
    SIMPLE_MAGNETS_REMOVED_RECIPES.forEach(id => e.remove( {id: id} ));

    // SIMPLE MAGNET
    e.shaped(sm('basicmagnet'), [
        'RRL',
        'RE ',
        'RRD'
    ],
    {
        R: mi('steel_rod_magnetic'),
        L: mc('blue_dye'),
        E: mc('ender_pearl'),
        D: mc('red_dye')
    }).id(st('basicmagnet'));

    // ADVANCED MAGNET
    e.shaped(sm('advancedmagnet'), [
        'GGL',
        'MEC',
        'GGR'
    ],
    {
       G: mi('gold_plate'),
       L: mc('blue_dye'),
       M: sm('basicmagnet'),
       E: mc('ender_eye'),
       C: mi('analog_circuit'),
       R: mc('red_dye')
    }).id(st('advancedmagnet'));
});