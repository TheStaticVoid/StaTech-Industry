ServerEvents.recipes(e => {

    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let st = (id) => `statech:modern_industrialization/forge_hammer/${id}`;

    const MATERIALS = [
        'bronze',
        'steel',
        'tin',
        'iron',
        'copper',
        'gold',
    ];

    const MATERIAL_RAW_ORE = [
        'copper',
        'gold',
        'iron',
        'tin',

    ];

    const MATERIAL_CRUSHED_DUST = [
        'coal',
        'lignite_coal'
    ];

    const RECIPES = [
        'double_ingot_to_bolt',
        'double_ingot_to_bolt_with_tool',
        'double_ingot_to_curved_plate',
        'double_ingot_to_curved_plate_with_tool',
        'double_ingot_to_plate',
        'double_ingot_to_plate_with_tool',
        'double_ingot_to_ring',
        'double_ingot_to_ring_with_tool',
        'double_ingot_to_rod',
        'double_ingot_to_rod_with_tool',
        'ingot_to_bolt',
        'ingot_to_bolt_with_tool',
        'ingot_to_curved_plate',
        'ingot_to_curved_plate_with_tool',
        'ingot_to_dust',
        'ingot_to_plate',
        'ingot_to_plate_with_tool',
        'ingot_to_ring',
        'ingot_to_ring_with_tool',
        'ingot_to_rod',
        'ingot_to_rod_with_tool',
        'nugget_to_tiny_dust',
        'plate_to_curved_plate_with_tool',
        'rod_to_bolt_with_tool',
        'rod_to_ring_with_tool',
    ];

    RECIPES.forEach(recipe => {
        MATERIALS.forEach(material => {
            let combined = 'modern_industrialization:materials/' + material + '/forge_hammer/' + recipe;
            e.remove({id: combined});
        });
    });

    const ORE_RECIPES = [
        mi('materials/coal/forge_hammer/ore_to_crushed_dust'),
        mi('materials/coal/forge_hammer/ore_to_crushed_dust_with_tool'),
        mi('materials/coal/forge_hammer/ore_to_dust_with_tool'),
        mi('materials/copper/forge_hammer/raw_metal_to_dust_with_tool'),
        mi('materials/forge_hammer/brick_dust'),
        mi('materials/forge_hammer/brick_dust_with_tool'),
        mi('materials/forge_hammer/copper_ore_to_dust_with_tool'),
        mi('materials/forge_hammer/copper_ore_to_raw'),
        mi('materials/forge_hammer/copper_ore_to_raw_with_tool'),
        mi('materials/gold/forge_hammer/ore_to_dust_with_tool'),
        mi('materials/gold/forge_hammer/ore_to_raw_metal'),
        mi('materials/gold/forge_hammer/ore_to_raw_metal_with_tool'),
        mi('materials/gold/forge_hammer/raw_metal_to_dust_with_tool'),
        mi('materials/iron/forge_hammer/ore_to_dust_with_tool'),
        mi('materials/iron/forge_hammer/ore_to_raw_metal'),
        mi('materials/iron/forge_hammer/ore_to_raw_metal_with_tool'),
        mi('materials/iron/forge_hammer/raw_metal_to_dust_with_tool'),
        mi('materials/lignite_coal/forge_hammer/ore_to_crushed_dust'),
        mi('materials/lignite_coal/forge_hammer/ore_to_crushed_dust_with_tool'),
        mi('materials/lignite_coal/forge_hammer/ore_to_dust_with_tool'),
        mi('materials/tin/forge_hammer/ore_to_dust_with_tool'),
        mi('materials/tin/forge_hammer/ore_to_raw_metal'),
        mi('materials/tin/forge_hammer/ore_to_raw_metal_with_tool'),
        mi('materials/tin/forge_hammer/raw_metal_to_dust_with_tool')
    ];
    ORE_RECIPES.forEach(id => e.remove({id : id}));

    let forgeHammer = (id, eu, item_inputs, item_outputs) => {
        let newRecipe = {
            type: 'modern_industrialization:forge_hammer',
            eu: eu,
            duration: 0,
            id: id
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe);
    }

    MATERIAL_CRUSHED_DUST.forEach(material => {
        // -- CRUSHED DUST FROM ORE -- //
        forgeHammer(
            st(`${material}_crushed_dust`),
            10,
            [ { amount: 1, tag: `c:${material}_ores` } ],
            [ { amount: 2, item: mi(`${material}_crushed_dust`) } ]
        );
    
        // -- DUST FROM ORE -- //
        forgeHammer(
            st(`${material}_dust`),
            25,
            [ { amount: 1, tag: `c:${material}_ores` } ],
            [ { amount: 4, item: mi(`${material}_dust`) } ]
        );
    
        // -- DUST FROM CRUSHED DUST -- //
        forgeHammer(
            st(`${material}_dust_alt`),
            15,
            [ { amount: 1, item: mi(`${material}_crushed_dust`) } ],
            [ { amount: 2, item: mi(`${material}_dust`) } ]
        );
    });
    
    MATERIAL_RAW_ORE.forEach(material => {
        // -- RAW FROM ORE -- //
        if (material != 'tin') {
            forgeHammer(
                st(`raw_${material}_from_ore`),
                20,
                [ { amount: 1, tag: `c:${material}_ores` } ],
                [ { amount: 4, item: mc(`raw_${material}`) } ]
            );
        } else {
            forgeHammer(
                st(`raw_${material}_from_ore`),
                20,
                [ { amount: 1, tag: `c:${material}_ores` } ],
                [ { amount: 4, item: mi(`raw_${material}`) } ]
            );
        }
    
        // -- DUST FROM ORE -- //
        forgeHammer(
            st(`${material}_dust_from_ore`),
            60,
            [ { amount: 1, tag: `c:${material}_ores` } ],
            [ { amount: 8, item: mi(`${material}_dust`) } ]
        );
    
        // -- DUST FROM RAW METAL -- //
        forgeHammer(
            st(`${material}_dust_from_raw_metal`),
            15,
            [ { amount: 1, tag: `c:raw_${material}_ores` } ],
            [ { amount: 2, item: mi(`${material}_dust`) } ]
        );
    }); 

    MATERIALS.forEach(material => {
        // -- BOLTS -- //
        forgeHammer(
            st(`${material}_bolt_from_double_ingot`),
            50,
            [ { amount: 1, item: mi(`${material}_double_ingot`) } ],
            [ { amount: 4, item: mi(`${material}_bolt`) } ]
        );
        forgeHammer(
            st(`${material}_bolt_from_ingot`),
            30,
            [ { amount: 1, tag: `c:${material}_ingots` } ],
            [ { amount: 2, item: mi(`${material}_bolt`) } ]
        );
        forgeHammer(
            st(`${material}_bolt_from_rod`),
            10,
            [ { amount: 1, item: mi(`${material}_rod`) } ],
            [ { amount: 2, item: mi(`${material}_bolt`) } ]
        );

        if (material != 'iron') {
            // -- CURVED PLATES -- //
            forgeHammer(
                st(`${material}_curved_plate_from_double_ingot`),
                30,
                [ { amount: 1, item: mi(`${material}_double_ingot`) } ],
                [ { amount: 1, item: mi(`${material}_curved_plate`) } ]
            );
            forgeHammer(
                st(`${material}_curved_plate_from_ingot`),
                20,
                [ { amount: 2, tag: `c:${material}_ingots` } ],
                [ { amount: 1, item: mi(`${material}_curved_plate`) } ]
            );
        }

        // -- PLATES -- // 
        forgeHammer(
            st(`${material}_plate_from_double_ingot`),
            10,
            [ { amount: 1, item: mi(`${material}_double_ingot`) } ],
            [ { amount: 1, item: mi(`${material}_plate`) } ]
        );
        forgeHammer(
            st(`${material}_plate_from_ingot`),
            10,
            [ { amount: 2, tag: `c:${material}_ingots` } ],
            [ { amount: 1, item: mi(`${material}_plate`) } ]
        );

        // -- RINGS -- //
        forgeHammer(
            st(`${material}_ring_from_double_ingot`),
            50,
            [ { amount: 1, item: mi(`${material}_double_ingot`) } ],
            [ { amount: 2, item: mi(`${material}_ring`) } ]
        );
        forgeHammer(
            st(`${material}_ring_from_ingot`),
            30,
            [ { amount: 1, tag: `c:${material}_ingots` } ],
            [ { amount: 1, item: mi(`${material}_ring`) } ]
        );
        forgeHammer(
            st(`${material}_ring_from_rod`),
            10,
            [ { amount: 1, item: mi(`${material}_rod`) } ],
            [ { amount: 1, item: mi(`${material}_ring`) } ]
        );

        // -- RODS -- //
        forgeHammer(
            st(`${material}_rod_from_double_ingot`),
            10,
            [ { amount: 1, item: mi(`${material}_double_ingot`) } ],
            [ { amount: 2, item: mi(`${material}_rod`) } ]
        );
        forgeHammer(
            st(`${material}_rod_from_ingot`),
            10,
            [ { amount: 1, tag: `c:${material}_ingots` } ],
            [ { amount: 1, item: mi(`${material}_rod`) } ]
        );

        // -- DUSTS -- //
        forgeHammer(
            st(`${material}_dust_from_ingot`),
            10,
            [ { amount: 1, tag: `c:${material}_ingots` } ],
            [ { amount: 1, item: mi(`${material}_dust`) } ]
        );
        forgeHammer(
            st(`${material}_tiny_dust_from_nugget`),
            10,
            [ { amount: 1, tag: `c:${material}_nuggets` } ],
            [ { amount: 1, item: mi(`${material}_tiny_dust`) } ]
        );
    });

    // -- BRICK DUST FROM BRICK -- //
    forgeHammer(
        st('brick_tiny_dust'),
        20,
        [ { amount: 1, tag: 'c:brick_ingots' } ],
        [ { amount: 2, item: mi('brick_tiny_dust') } ]
    );
});