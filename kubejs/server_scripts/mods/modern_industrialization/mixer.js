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
});