ServerEvents.recipes(e => {
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

    // -- DIRT CHEST -- //
    e.shaped('ironchests:dirt_chest', [
        'DDD',
        'D D',
        'DDD'
    ],
    {
        D: '#minecraft:dirt'
    });

    // -- COPPER CHEST -- //
    e.shaped('ironchests:copper_chest', [
        'PPP',
        'PCP',
        'PPP'
    ],
    {
        P: '#c:copper_plates',
        C: '#c:wooden_chests'
    });

    // -- COPPER CHEST UPGRADE -- //
    e.shaped('ironchests:copper_chest_upgrade', [
        'PPP',
        'PUP',
        'PPP'
    ],
    {
        P: '#c:copper_plates',
        U: 'ironchests:blank_chest_upgrade'
    });

    // -- IRON CHEST -- // 
    e.shaped('ironchests:iron_chest', [
        'PPP',
        'PCP',
        'PPP'
    ],
    {
        P: '#c:iron_plates',
        C: 'ironchests:copper_chest'
    });

    // -- IRON CHEST UPGRADE -- //
    e.shaped('ironchests:iron_chest_upgrade', [
        'PPP',
        'PUP',
        'PPP'
    ],
    {
        P: '#c:iron_plates',
        U: 'ironchests:blank_chest_upgrade'
    });

    // -- GOLD CHEST -- //
    e.shaped('ironchests:gold_chest', [
        'PPP',
        'PCP',
        'PPP'
    ],
    {
        P: '#c:gold_plates',
        C: 'ironchests:iron_chest'
    });

    // -- GOLD CHEST UPGRADE -- //
    e.shaped('ironchests:gold_chest_upgrade', [
        'PPP',
        'PUP',
        'PPP'
    ],
    {
        P: '#c:gold_plates',
        U: 'ironchests:blank_chest_upgrade'
    });

    // -- DIAMOND CHEST -- //
    e.shaped('ironchests:diamond_chest', [
        'PPP',
        'PCP',
        'PPP'
    ],
    {
        P: '#c:diamond_plates',
        C: 'ironchests:gold_chest'
    });

    // -- DIAMOND CHEST UPGRADE -- //
    e.shaped('ironchests:diamond_chest_upgrade', [
        'PPP',
        'PUP',
        'PPP'
    ],
    {
        P: '#c:diamond_plates',
        U: 'ironchests:blank_chest_upgrade'
    });

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
    });

    // -- DIAMOND DOLLY -- //
    e.shaped('ironchests:diamond_dolly', [
        'D D',
        'D D',
        'WDW'
    ],
    {
        D: '#c:diamond_plates',
        W: 'ad_astra:wheel'
    });
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