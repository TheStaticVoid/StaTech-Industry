ServerEvents.recipes(e => {
    let st = (id) => `statech:ironchests/${id}`;
    const REMOVED_RECIPES = [
        'ironchests:copper_chest',
        'ironchests:iron_chest',
        'ironchests:gold_chest',
        'ironchests:diamond_chest',
        'ironchests:iron_chest_upgrade',
        'ironchests:gold_chest_upgrade',
        'ironchests:diamond_chest_upgrade',
        'ironchests:copper_chest_upgrade',
        'ironchests:iron_dolly',
        'ironchests:diamond_dolly'
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    // -- COPPER CHEST -- //
    e.shaped('ironchests:copper_chest', [
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
    e.shaped('ironchests:copper_chest_upgrade', [
        'PPP',
        'PUP',
        'PPP'
    ],
    {
        P: '#c:copper_plates',
        U: 'ironchests:blank_chest_upgrade'
    })
    .id(st('copper_chest_upgrade'));

    // -- IRON CHEST -- // 
    e.shaped('ironchests:iron_chest', [
        'PPP',
        'PCP',
        'PPP'
    ],
    {
        P: '#c:iron_plates',
        C: 'ironchests:copper_chest'
    })
    .id(st('iron_chest'));

    // -- IRON CHEST UPGRADE -- //
    e.shaped('ironchests:iron_chest_upgrade', [
        'PPP',
        'PUP',
        'PPP'
    ],
    {
        P: '#c:iron_plates',
        U: 'ironchests:blank_chest_upgrade'
    })
    .id(st('iron_chest_upgrade'));

    // -- GOLD CHEST -- //
    e.shaped('ironchests:gold_chest', [
        'PPP',
        'PCP',
        'PPP'
    ],
    {
        P: '#c:gold_plates',
        C: 'ironchests:iron_chest'
    })
    .id(st('gold_chest'));

    // -- GOLD CHEST UPGRADE -- //
    e.shaped('ironchests:gold_chest_upgrade', [
        'PPP',
        'PUP',
        'PPP'
    ],
    {
        P: '#c:gold_plates',
        U: 'ironchests:blank_chest_upgrade'
    })
    .id(st('gold_chest_upgrade'));

    // -- DIAMOND CHEST -- //
    e.shaped('ironchests:diamond_chest', [
        'PPP',
        'PCP',
        'PPP'
    ],
    {
        P: '#c:diamond_plates',
        C: 'ironchests:gold_chest'
    })
    .id(st('diamond_chest'));

    // -- DIAMOND CHEST UPGRADE -- //
    e.shaped('ironchests:diamond_chest_upgrade', [
        'PPP',
        'PUP',
        'PPP'
    ],
    {
        P: '#c:diamond_plates',
        U: 'ironchests:blank_chest_upgrade'
    })
    .id(st('diamond_chest_upgrade'));

    // -- IRON DOLLY -- //
    e.shaped('ironchests:iron_dolly', [
        'R R',
        'R R',
        'CPC'
    ],
    {
        R: '#c:iron_rods',
        C: 'create:cogwheel',
        P: '#c:iron_plates'
    })
    .id(st('iron_dolly'));

    // -- DIAMOND DOLLY -- //
    e.shaped('ironchests:diamond_dolly', [
        'D D',
        'D D',
        'WDW'
    ],
    {
        D: '#c:diamond_plates',
        W: 'ad_astra:wheel'
    })
    .id(st('diamond_dolly'));
});

ServerEvents.tags('item', e => {
    const CHEST_UPGRADES = [
        'ironchests:obsidian_chest_upgrade',
        'ironchests:copper_chest_upgrade',
        'ironchests:gold_chest_upgrade',
        'ironchests:crystal_chest_upgrade',
        'ironchests:netherite_chest_upgrade',
        'ironchests:diamond_chest_upgrade',
        'ironchests:iron_chest_upgrade'
    ];
    CHEST_UPGRADES.forEach(id => e.add('kubejs:chest_upgrade', id));
});