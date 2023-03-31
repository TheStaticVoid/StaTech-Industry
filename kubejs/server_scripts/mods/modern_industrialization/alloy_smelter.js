ServerEvents.recipes(e => {
    // -- REFINED IRON INGOT -- //
    e.custom({
        type: 'modern_industrialization:alloy_smelter',
        duration: 300,
        eu: 16,
        item_inputs: [
            {
                amount: 4,
                item: 'techreborn:calcite_dust'
            },
            {
                amount: 1,
                item: 'minecraft:iron_ingot'
            }
        ],
        item_outputs: [
            {
                amount: 1,
                item: 'techreborn:refined_iron_ingot'
            }
        ]
    });

    // -- NETHERITE INGOT -- //
    e.custom({
        type: 'modern_industrialization:alloy_smelter',
        duration: 600,
        eu: 16,
        item_inputs: [
            {
                amount: 4,
                item: 'minecraft:gold_ingot'
            },
            {
                amount: 4,
                item: 'minecraft:netherite_scrap'
            }
        ],
        item_outputs: [
            {
                amount: 1,
                item: 'minecraft:netherite_ingot'
            }
        ]
    });

    // -- INVAR INGOT -- //
    e.custom({
        type: 'modern_industrialization:alloy_smelter',
        duration: 200,
        eu: 8,
        item_inputs: [
            {
                amount: 3,
                item: 'minecraft:iron_ingot'
            },
            {
                amount: 1, 
                item: 'modern_industrialization:nickel_ingot'
            }
        ],
        item_outputs: [
            {
                amount: 4,
                item: 'modern_industrialization:invar_ingot'
            }
        ]
    });

    // -- BRONZE INGOT -- //
    e.custom({
        type: 'modern_industrialization:alloy_smelter',
        duration: 100,
        eu: 8,
        item_inputs: [
            {
                amount: 3,
                item: 'minecraft:copper_ingot'
            },
            {
                amount: 1,
                item: 'modern_industrialization:tin_ingot'
            }
        ],
        item_outputs: [
            {
                amount: 4,
                item: 'modern_industrialization:bronze_ingot'
            }
        ]
    });

    // -- BRASS INGOT -- //
    e.custom({
        type: 'modern_industrialization:alloy_smelter',
        duration: 300,
        eu: 16,
        item_inputs: [
            {
                amount: 3,
                item: 'minecraft:copper_ingot'
            },
            {
                amount: 1,
                item: 'create:zinc_ingot'
            }
        ],
        item_outputs: [
            {
                amount: 4,
                item: 'create:brass_ingot'
            }
        ]
    });

    // -- ELECTRUM INGOT -- //
    e.custom({
        type: 'modern_industrialization:alloy_smelter',
        duration: 300,
        eu: 16,
        item_inputs: [
            {
                amount: 2,
                tag: 'c:gold_ingots'
            },
            {
                amount: 2,
                tag: 'c:silver_ingots'
            }
        ],
        item_outputs: [
            {
                amount: 4,
                item: 'modern_industrialization:electrum_ingot'
            }
        ]
    });

    // -- CUPRONICKEL INGOT -- //
    e.custom({
        type: 'modern_industrialization:alloy_smelter',
        duration: 200,
        eu: 16,
        item_inputs: [
            {
                amount: 1, 
                tag: 'c:copper_ingots'
            },
            {
                amount: 1,
                tag: 'c:nickel_ingots'
            }
        ],
        item_outputs: [
            {
                amount: 2,
                item: 'modern_industrialization:cupronickel_ingot'
            }
        ]
    });
});