ServerEvents.recipes(e => {
    // -- RECIPE REMOVAL -- //
    const CREATE_DELETED_ITEMS = [
        'create:crafting/materials/andesite_alloy_from_zinc',
        'create:crafting/materials/andesite_alloy',
        'create:crafting/kinetics/cogwheel',
        'create:crafting/kinetics/large_cogwheel',
        'create:crafting/kinetics/large_cogwheelfrom_little'
    ];
    CREATE_DELETED_ITEMS.forEach(id => e.remove( {id: id} ));
    e.remove( {type: 'create:mixing', output: 'ae2:fluix_crystal' });

    // -- ANDESITE ALLOY -- //
    e.shaped('create:andesite_alloy', [
        'IA',
        'AI'
    ],
    {
        I: '#c:iron_ingots',
        A: 'minecraft:andesite'
    });

    // -- COGWHEEL -- //
    e.shaped('create:cogwheel', [
        ' W ',
        'WCW',
        ' W '
    ],
    {
        W: '#minecraft:planks',
        C: 'create:shaft'
    });

    // -- LARGE COGWHEEL -- //
    e.shaped('create:large_cogwheel', [
        'WWW',
        'WCW',
        'WWW'
    ],
    {
        W: '#minecraft:planks',
        C: 'create:shaft'
    });
    // Upgrade from little cogwheel
    e.shaped('create:large_cogwheel', [
        ' W ',
        'WCW',
        ' W '
    ],
    {
        W: '#minecraft:planks',
        C: 'create:shaft'
    });

    // -- BRONZE DUST -- //
    e.custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
            { tag: 'c:raw_copper_ores' },
            { tag: 'c:raw_copper_ores' },
            { tag: 'c:raw_copper_ores' },
            { tag: 'c:raw_tin_ores' }            
        ],
        results: [
            {
                item: 'modern_industrialization:bronze_ingot',
                count: 2
            }
        ]
    });

    // -- FIRE CLAY DUST -- //
    e.custom({
        type: 'create:mixing',
        ingredients: [
            { item: 'minecraft:clay_ball' },
            { item: 'minecraft:clay_ball' },
            { tag: 'c:brick_dusts' }, 
            { tag: 'c:brick_dusts' }           
        ],
        results: [
            {
                item: 'modern_industrialization:fire_clay_dust',
                count: 2
            }
        ]
    });
});