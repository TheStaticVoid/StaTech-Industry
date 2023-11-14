// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:extended_drawers/${id}`;

    // -- EXTENDED DRAWERS REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        dr('t2_upgrade'),
        dr('t3_upgrade'),
        dr('t4_upgrade')
    ];
    REMOVED_RECIPES.forEach(id => event.remove({id: id}));

    // -- T2 UPGRADE -- //
    event.shaped(dr('t2_upgrade'), [
        'SSS',
        'UIU',
        'SSS'
    ],
    {
        S: mi('iron_rod'),
        U: dr('t1_upgrade'),
        I: '#c:iron_ingots'
    })
    .id(st('t2_upgrade'));

    // -- T3 UPGRADE -- //
    event.shaped(dr('t3_upgrade'), [
        'RRR',
        'UGU',
        'RRR'
    ],
    {
        R: mi('bronze_rod'),
        U: dr('t2_upgrade'),
        G: '#c:gold_ingots'
    })
    .id(st('t3_upgrade'));

    // -- T4 UPGRADE -- //
    event.shaped(dr('t4_upgrade'), [
        'RRR',
        'UDU',
        'RRR'
    ],
    {
        R: mi('steel_rod'),
        U: dr('t3_upgrade'),
        D: '#c:diamonds'
    })
    .id(st('t4_upgrade'));
});