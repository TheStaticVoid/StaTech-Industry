ServerEvents.recipes(e => {
    let cr = (id) => `create:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let st = (id) => `statech:create/${id}`;
    // -- RECIPE REMOVAL -- //
    const CREATE_DELETED_ITEMS = [
        cr('crafting/kinetics/cogwheel'),
        cr('crafting/kinetics/large_cogwheel'),
        cr('crafting/kinetics/large_cogwheelfrom_little'),
        cr('smelting/platinum_ingot_compat_modern_industrialization'),
        cr('smelting/silver_ingot_compat_modern_industrialization'),
        cr('blasting/silver_ingot_compat_modern_industrialization'),
        cr('crafting/kinetics/fluid_tank')
    ];
    CREATE_DELETED_ITEMS.forEach(id => e.remove( {id: id} ));
    e.remove( {type: cr('mixing'), output: 'ae2:fluix_crystal' });
    e.remove( {type: cr('crushing'), output: cr('crushed_platinum_ore')} );

    // -- COGWHEEL -- //
    e.shaped(cr('cogwheel'), [
        ' W ',
        'WCW',
        ' W '
    ],
    {
        W: '#minecraft:planks',
        C: cr('shaft')
    })
    .id(st('cogwheel'));

    // -- LARGE COGWHEEL -- //
    e.shaped(cr('large_cogwheel'), [
        'WWW',
        'WCW',
        'WWW'
    ],
    {
        W: '#minecraft:planks',
        C: cr('shaft')
    })
    .id(st('large_cogwheel'));
    // Upgrade from little cogwheel
    e.shaped(cr('large_cogwheel'), [
        ' W ',
        'WCW',
        ' W '
    ],
    {
        W: '#minecraft:planks',
        C: cr('cogwheel')
    })
    .id(st('large_cogwheel_upgrade'));

    // -- BRONZE DUST -- //
    e.custom({
        id: st('bronze_dust'),
        type: cr('mixing'),
        heatRequirement: 'heated',
        ingredients: [
            { tag: 'c:raw_copper_ores' },
            { tag: 'c:raw_copper_ores' },
            { tag: 'c:raw_copper_ores' },
            { tag: 'c:raw_tin_ores' }            
        ],
        results: [
            {
                item: mi('bronze_ingot'),
                count: 2
            }
        ]
    });

    // -- FIRE CLAY DUST -- //
    e.custom({
        id: st('fire_clay_dust'),
        type: cr('mixing'),
        ingredients: [
            { item: 'minecraft:clay_ball' },
            { item: 'minecraft:clay_ball' },
            { tag: 'c:brick_dusts' }, 
            { tag: 'c:brick_dusts' }           
        ],
        results: [
            {
                item: mi('fire_clay_dust'),
                count: 2
            }
        ]
    });

    // -- TANK -- //
    e.shaped(cr('fluid_tank'), [
        'CGC',
        'GSG',
        'CGC'
    ],
    {
        C: '#c:copper_plates',
        S: '#c:steel_plates',
        G: '#c:glass_blocks'
    })
    .id(st('fluid_tank'));
});