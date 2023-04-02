ServerEvents.recipes(e => {
    // -- SOULCOPPER BLEND -- //
    e.custom({
        type: 'modern_industrialization:mixer',
        duration: 100,
        eu: 2,
        item_inputs: [
            {
                amount: 1,
                item: 'minecraft:raw_copper'
            },
            {
                amount: 1,
                item: 'minecraft:soul_sand'
            }
        ],
        item_outputs: [
            {
                amount: 4,
                item: 'xps:soul_copper_blend'
            }
        ]
    });

    const RECIPES = [
        'modern_industrialization:vanilla_recipes/mixer/granite',
        'modern_industrialization:vanilla_recipes/mixer/mud',

    ];
    //RECIPES.forEach(id => e.remove({id: id}));
});