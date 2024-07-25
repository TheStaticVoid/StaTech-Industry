// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:extended_drawers/${id}`;
    let ed = (id) => `extended_drawers:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    // -- EXTENDED DRAWERS REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        ed('t2_upgrade'),
        ed('t3_upgrade'),
        ed('t4_upgrade')
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    // -- T2 UPGRADE -- //
    e.shaped(ed('t2_upgrade'), [
        'SSS',
        'UIU',
        'SSS'
    ],
    {
        S: mi('iron_rod'),
        U: ed('t1_upgrade'),
        I: '#c:iron_ingots'
    })
    .id(st('t2_upgrade'));

    // -- T3 UPGRADE -- //
    e.shaped(ed('t3_upgrade'), [
        'RRR',
        'UGU',
        'RRR'
    ],
    {
        R: mi('bronze_rod'),
        U: ed('t2_upgrade'),
        G: '#c:gold_ingots'
    })
    .id(st('t3_upgrade'));

    // -- T4 UPGRADE -- //
    e.shaped(ed('t4_upgrade'), [
        'RRR',
        'UDU',
        'RRR'
    ],
    {
        R: mi('steel_rod'),
        U: ed('t3_upgrade'),
        D: '#c:diamonds'
    })
    .id(st('t4_upgrade'));
});