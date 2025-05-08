// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:measurements/${id}`;

    let MEASUREMENTS_REMOVED_RECIPES = [
        ms('tape_measure')
    ];
    MEASUREMENTS_REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    // -- TAPE MEASURE -- //
    e.shaped(ms('tape_measure'), [
        ' G ',
        'GPY',
        ' GY'
    ], {
        G: mc('gray_wool'),
        P: mi('iron_plate'),
        Y: mc('yellow_wool')
    }).id(st('tape_measure'));
});