// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:explorerscompass/${id}`;

    // -- EXPLORERS COMPASS REMOVED REICPES -- //
    const EXPLORERSCOMPASS_REMOVED_RECIPES = [
        ec('explorers_compass')
    ];
    EXPLORERSCOMPASS_REMOVED_RECIPES.forEach(id => event.remove( {id: id} ));

    // -- EXPLORER'S COMPASS -- //
    event.shaped(ec('explorerscompass'), [
        'WSW',
        'SCS',
        'WSW'
    ],
    {
        S: mi('steel_plate'),
        C: mc('compass'),
        W: mc('cobweb')
    })
    .id(st('explorerscompass'));
});