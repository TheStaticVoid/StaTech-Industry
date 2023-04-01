ServerEvents.recipes(e => {
    const REMOVED_RECIPES = [
        'modern_industrialization:quarry/bronze',
        'modern_industrialization:quarry/gold'
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    // -- BRONZE DRILL -- //
    e.custom({
        type: 'modern_industrialization:quarry',
        eu: 4,
        duration: 600,
        item_inputs: [
            {
                item: 'modern_industrialization:bronze_drill',
                amount: 1,
                probability: 0.04
            }
        ],
        item_outputs: [
            {
                item: 'minecraft:iron_ore',
                amount: 1,
                probability: 0.4
            },
            {
                item: 'minecraft:coal_ore',
                amount: 1,
                probability: 0.4
            },
            {
                item: 'modern_industrialization:lignite_coal_ore',
                amount: 1,
                probability: 0.24
            },
            {
                item: 'minecraft:copper_ore',
                amount: 1,
                probability: 0.24
            },
            {
                item: 'modern_industrialization:tin_ore',
                amount: 1,
                probability: 0.3
            },
            {
                item: 'minecraft:gold_ore',
                amount: 1,
                probability: 0.15
            },
            {
                item: 'minecraft:redstone_ore',
                amount: 1,
                probability: 0.2
            },
            {
                item: 'create:zinc_ore',
                amount: 1,
                probability: 0.2
            }
        ]
    });

    // -- GOLD DRILL -- //
    e.custom({
        type: 'modern_industrialization:quarry',
        eu: 16,
        duration: 600,
        item_inputs: [
            {
                item: 'modern_industrialization:gold_drill',
                amount: 1,
                probability: 0.1
            }
        ],
        item_outputs: [
            {
                item: 'minecraft:netherrack',
                amount: 64,
            },
            {
                item: 'minecraft:blackstone',
                amount: 16,
                probability: 0.25
            },
            {
                item: 'minecraft:basalt',
                amount: 16,
                probability: 0.25
            },
            {
                item: 'minecraft:soul_soil',
                amount: 20,
                probability: 0.1
            },
            {
                item: 'minecraft:magma_block',
                amount: 5,
                probability: 0.1
            },
            {
                item: 'minecraft:soul_sand',
                amount: 20,
                probability: 0.25
            },
            {
                item: 'minecraft:ancient_debris',
                amount: 1,
                probability: 0.05
            },
            {
                item: 'minecraft:glowstone',
                amount: 16,
                probability: 0.15
            },
            {
                item: 'minecraft:nether_quartz_ore',
                amount: 8,
                probability: 0.15
            },
            {
                item: 'minecraft:nether_gold_ore',
                amount: 1,
                probability: 0.25
            },
            {
                item: 'byg:emeraldite_ore',
                amount: 1,
                probability: 0.1
            },
            {
                item: 'byg:pendorite_ore',
                amount: 1,
                probability: 0.1
            },
            {
                item: 'byg:anthracite_ore',
                amount: 1,
                probability: 0.15
            },
            {
                item: 'techreborn:cinnabar_ore',
                amount: 1,
                probability: 0.1
            },
            {
                item: 'techreborn:pyrite_ore',
                amount: 1,
                probability: 0.15
            },
            {
                item: 'techreborn:sphalerite_ore',
                amount: 1,
                probability: 0.15
            }
        ]
    });
});