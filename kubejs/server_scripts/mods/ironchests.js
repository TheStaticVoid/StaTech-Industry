// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:ironchests/${id}`;
    let ic = (id) => `ironchests:${id}`;
    let ad = (id) => `ad_astra:${id}`;
    let cr = (id) => `create:${id}`;
    
    // -- IRON CHESTS REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        ic('copper_chest'),
        ic('iron_chest'),
        ic('gold_chest'),
        ic('diamond_chest'),
        ic('iron_chest_upgrade'),
        ic('gold_chest_upgrade'),
        ic('diamond_chest_upgrade'),
        ic('copper_chest_upgrade'),
        ic('iron_dolly'),
        ic('diamond_dolly')
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    // -- COPPER CHEST -- //
    e.shaped(ic('copper_chest'), [
        'PPP',
        'PCP',
        'PPP'
    ],
    {
        P: '#c:copper_plates',
        C: '#c:wooden_chests'
    })
    .id(st('copper_chest'));

    // -- COPPER CHEST UPGRADE -- //
    e.shaped(ic('copper_chest_upgrade'), [
        'PPP',
        'PUP',
        'PPP'
    ],
    {
        P: '#c:copper_plates',
        U: ic('blank_chest_upgrade')
    })
    .id(st('copper_chest_upgrade'));

    // -- IRON CHEST -- // 
    e.shaped(ic('iron_chest'), [
        'PPP',
        'PCP',
        'PPP'
    ],
    {
        P: '#c:iron_plates',
        C: ic('copper_chest')
    })
    .id(st('iron_chest'));

    // -- IRON CHEST UPGRADE -- //
    e.shaped(ic('iron_chest_upgrade'), [
        'PPP',
        'PUP',
        'PPP'
    ],
    {
        P: '#c:iron_plates',
        U: ic('blank_chest_upgrade')
    })
    .id(st('iron_chest_upgrade'));

    // -- GOLD CHEST -- //
    e.shaped(ic('gold_chest'), [
        'PPP',
        'PCP',
        'PPP'
    ],
    {
        P: '#c:gold_plates',
        C: ic('iron_chest')
    })
    .id(st('gold_chest'));

    // -- GOLD CHEST UPGRADE -- //
    e.shaped(ic('gold_chest_upgrade'), [
        'PPP',
        'PUP',
        'PPP'
    ],
    {
        P: '#c:gold_plates',
        U: ic('blank_chest_upgrade')
    })
    .id(st('gold_chest_upgrade'));

    // -- DIAMOND CHEST -- //
    e.shaped(ic('diamond_chest'), [
        'PPP',
        'PCP',
        'PPP'
    ],
    {
        P: '#c:diamond_plates',
        C: ic('gold_chest')
    })
    .id(st('diamond_chest'));

    // -- DIAMOND CHEST UPGRADE -- //
    e.shaped(ic('diamond_chest_upgrade'), [
        'PPP',
        'PUP',
        'PPP'
    ],
    {
        P: '#c:diamond_plates',
        U: ic('blank_chest_upgrade')
    })
    .id(st('diamond_chest_upgrade'));

    // -- IRON DOLLY -- //
    e.shaped(ic('iron_dolly'), [
        'R R',
        'R R',
        'CPC'
    ],
    {
        R: '#c:iron_rods',
        C: cr('cogwheel'),
        P: '#c:iron_plates'
    })
    .id(st('iron_dolly'));

    // -- DIAMOND DOLLY -- //
    e.shaped(ic('diamond_dolly'), [
        'D D',
        'D D',
        'WDW'
    ],
    {
        D: '#c:diamond_plates',
        W: ad('wheel')
    })
    .id(st('diamond_dolly'));
});

ServerEvents.tags('item', e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let ic = (id) => `ironchests:${id}`;
    
    const CHEST_UPGRADES = [
        ic('obsidian_chest_upgrade'),
        ic('copper_chest_upgrade'),
        ic('gold_chest_upgrade'),
        ic('crystal_chest_upgrade'),
        ic('netherite_chest_upgrade'),
        ic('diamond_chest_upgrade'),
        ic('iron_chest_upgrade')
    ];
    CHEST_UPGRADES.forEach(id => e.add('kubejs:chest_upgrade', id));
});