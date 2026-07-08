// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:simplemagnets/${id}`;

    // -- SIMPLE MAGNETS REMOVED REICPES -- //
    const SIMPLEMAGNETS_REMOVED_RECIPES = [
        sm('advancedmagnet'),
        sm('basicmagnet')
    ];
    SIMPLEMAGNETS_REMOVED_RECIPES.forEach(id => event.remove( {id: id} ));
    
    // -- BASIC MAGNET -- //
    event.shaped(sm('basicmagnet'), [
        'IIL',
        'I  ',
        'IIR'
    ],
    {
        I: mi('iron_plate'),
        R: mc('redstone_block'),
        L: mc('lapis_block')
    })
    .id(st('basicmagnet'));
    
    // -- ADVANCED MAGNET -- //
    event.shaped(sm('advancedmagnet'), [
        'SSL',
        'SE ',
        'SSR'
    ],
    {
        S: mi('steel_plate'),
        R: mc('redstone_block'),
        L: mc('lapis_block'),
        E: sm('basicmagnet')
    })
    .id(st('advancedmagnet'));
});