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
        sm('basic_demagnetization_coil'),
        sm('advanced_demagnetization_coil')
    ];
    SIMPLE_MAGNETS_REMOVED_RECIPES.forEach(id => e.remove( {id: id} ));

    // -- SIMPLE MAGNET -- //
    e.shaped(sm('basicmagnet'), [
        'RRL',
        'RE ',
        'RRD'
    ],
    {
        R: mi('steel_rod_magnetic'),
        L: '#c:dyes/blue',
        E: mc('ender_pearl'),
        D: '#c:dyes/red'
    }).id(st('basicmagnet'));

    // -- ADVANCED MAGNET -- //
    e.shaped(sm('advancedmagnet'), [
        'GGL',
        'MEC',
        'GGR'
    ],
    {
       G: '#c:plates/gold',
       L: '#c:dyes/blue',
       M: sm('basicmagnet'),
       E: mc('ender_eye'),
       C: mi('analog_circuit'),
       R: '#c:dyes/red'
    }).id(st('advancedmagnet'));

    // -- DEMAGNETIZATION COIL -- //
    e.shaped(sm('basic_demagnetization_coil'), [
        ' S ',
        'CSC',
        'PPP'
    ],
    {
        S: mi('steel_rod_magnetic'),
        C: mi('copper_wire'),
        P: '#c:plates/steel'
    }).id(st('basic_demagnization_coil'));

    // -- ADVANCED DEMAGNETIZATION COIL -- //
    e.shaped(sm('advanced_demagnetization_coil'), [
        'RAR',
        'GCG'
    ],
    {
        R: '#c:dusts/redstone',
        A: mi('analog_circuit'),
        G: mi('gold_wire'),
        C: sm('basic_demagnetization_coil')
    }).id(st('advanced_demagnetization_coil'));
});