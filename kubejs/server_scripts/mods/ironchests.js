// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:ironchests/${id}`;
    
    // -- IRON CHESTS REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        ic('copper_chest'),
        ic('iron_chest'),
        ic('gold_chest'),
        ic('diamond_chest'),
        ic('copper_barrel'),
        ic('iron_barrel'),
        ic('gold_barrel'),
        ic('diamond_barrel'),
        ic('iron_chest_upgrade'),
        ic('gold_chest_upgrade'),
        ic('diamond_chest_upgrade'),
        ic('copper_chest_upgrade'),
        ic('iron_dolly'),
        ic('diamond_dolly')
    ];
    REMOVED_RECIPES.forEach(id => event.remove({id: id}));

    // -- COPPER CHEST -- //
    event.shaped(ic('copper_chest'), [
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
    event.shaped(ic('copper_chest_upgrade'), [
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
    event.shaped(ic('iron_chest'), [
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
    event.shaped(ic('iron_chest_upgrade'), [
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
    event.shaped(ic('gold_chest'), [
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
    event.shaped(ic('gold_chest_upgrade'), [
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
    event.shaped(ic('diamond_chest'), [
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
    event.shaped(ic('diamond_chest_upgrade'), [
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
    event.shaped(ic('iron_dolly'), [
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
    event.shaped(ic('diamond_dolly'), [
        'D D',
        'D D',
        'WDW'
    ],
    {
        D: '#c:diamond_plates',
        W: ad('wheel')
    })
    .id(st('diamond_dolly'));

    // -- COPPER BARREL -- //
    event.shaped(ic('copper_barrel'), [
        'CCC',
        'CBC',
        'CCC'
    ],
    {
        C: '#c:copper_plates',
        B: '#c:barrels'
    })
    .id(st('copper_barrel'));

    // -- IRON BARREL -- //
    event.shaped(ic('iron_barrel'), [
        'III',
        'IBI',
        'III'
    ],
    {
        I: '#c:iron_plates',
        B: ic('copper_barrel')
    })
    .id(st('iron_barrel'));

    // -- GOLD BARREL -- //
    event.shaped(ic('gold_barrel'), [
        'GGG',
        'GBG',
        'GGG'
    ],
    {
        G: '#c:gold_plates',
        B: ic('iron_barrel')
    })
    .id(st('gold_barrel'));

    // -- DIAMOND BARREL -- //
    event.shaped(ic('diamond_barrel'), [
        'DDD',
        'DBD',
        'DDD'
    ],
    {
        D: '#c:diamond_plates',
        B: ic('gold_barrel')
    })
    .id(st('diamond_barrel'));
});

ServerEvents.tags('item', event => {    
    const CHEST_UPGRADES = [
        ic('obsidian_chest_upgrade'),
        ic('copper_chest_upgrade'),
        ic('gold_chest_upgrade'),
        ic('crystal_chest_upgrade'),
        ic('netherite_chest_upgrade'),
        ic('diamond_chest_upgrade'),
        ic('iron_chest_upgrade')
    ];
    CHEST_UPGRADES.forEach(id => event.add(kj('chest_upgrade'), id));
});