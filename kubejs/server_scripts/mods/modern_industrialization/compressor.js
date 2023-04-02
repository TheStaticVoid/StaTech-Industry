ServerEvents.recipes(e => {
    const DELETED_RECIPE = [
        'modern_industrialization:materials/diamond/compressor/main',
        'modern_industrialization:materials/emerald/compressor/main',
        'modern_industrialization:vanilla_recipes/compressor/paper_with_sugarcane'
    ];
    DELETED_RECIPE.forEach(id => e.remove({id: id}));

    // -- DIAMOND PLATE -- //
    e.custom({
        type: 'modern_industrialization:compressor',
        duration: 800,
        eu: 48,
        item_inputs: [
            {
                amount: 1,
                item: 'minecraft:diamond'
            }
        ],
        item_outputs: [
            {
                amount: 1,
                item: 'modern_industrialization:diamond_plate'
            }
        ]
    });

    // -- EMERALD PLATE -- //
    e.custom({
        type: 'modern_industrialization:compressor',
        duration: 800,
        eu: 48,
        item_inputs: [
            {
                amount: 1,
                item: 'minecraft:emerald'
            }
        ],
        item_outputs: [
            {
                amount: 1,
                item: 'modern_industrialization:emerald_plate'
            }
        ]
    });

    // -- BRICKS -- //
    e.custom({
        type: 'modern_industrialization:compressor',
        duration: 300,
        eu: 2,
        item_inputs: [
            {
                amount: 4,
                item: 'minecraft:brick'
            }
        ],
        item_outputs: [
            {
                amount: 1,
                item: 'minecraft:bricks'
            }
        ]
    });

    // -- RUBBER SHEETS -- //
    e.custom({
        type: 'modern_industrialization:compressor',
        duration: 200,
        eu: 2,
        item_inputs: [
            {
                amount: 1,
                item: 'techreborn:rubber'
            }
        ],
        item_outputs: [
            {
                amount: 4,
                item: 'modern_industrialization:rubber_sheet'
            }
        ]
    });
})