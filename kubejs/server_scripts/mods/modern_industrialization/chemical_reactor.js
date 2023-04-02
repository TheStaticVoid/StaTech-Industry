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

    // -- PLASTIC BAR -- //
    e.custom({
        type: 'modern_industrialization:chemical_reactor',
        eu: 16,
        duration: 300,
        item_inputs: [
            {
                amount: 1,
                item: 'minecraft:paper'
            }
        ],
        fluid_inputs: [
            {
                amount: 500,
                fluid: 'modern_industrialization:polyethylene'
            }
        ],
        item_outputs: [
            {
                amount: 1,
                item: 'anim_guns:plastic'
            }
        ]
    });
});