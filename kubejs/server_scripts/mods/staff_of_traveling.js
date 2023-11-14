// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:travelstaff/${id}`;

    // -- STAFF OF TRAVELING REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        ts('travel_anchor'),
        ts('travel_staff')
    ]
    REMOVED_RECIPES.forEach(id => event.remove( {id: id} ));

    // -- TRAVEL ANCHOR -- //
    event.shaped(ts('travel_anchor'), [
        'BIB',
        'IPI',
        'BIB'
    ],
    {
        B: '#c:steel_blocks',
        I: '#c:steel_ingots',
        P: '#c:ender_pearls'
    })
    .id(st('travel_anchor'));

    // -- TRAVEL STAFF -- //
    event.shaped(ts('travel_staff'), [
        ' PE',
        ' RP',
        'R  '
    ],
    {
        R: mi('steel_rod'),
        E: mc('emerald'),
        P: mc('ender_pearl')
    })
    .id(st('travel_staff'));
});