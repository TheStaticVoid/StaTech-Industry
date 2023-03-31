ServerEvents.recipes(e => {
    // -- EYE OF ENDER -- //
    e.custom({
        type: 'modern_industrialization:chemical_reactor',
        eu: 8,
        duration: 600,
        item_inputs: [
            {
                amount: 1,
                item: 'minecraft:ender_pearl'
            },
            {
                amount: 1,
                item: 'minecraft:blaze_powder'
            }
        ],
        item_outputs: [
            {
                amount: 2,
                item: 'minecraft:ender_eye'
            }
        ]
    });
});