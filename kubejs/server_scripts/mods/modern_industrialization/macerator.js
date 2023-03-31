ServerEvents.recipes(e => {
    // -- WHEAT DOUGH -- //
    e.custom({
        type: 'modern_industrialization:macerator',
        eu: 2,
        duration: 200,
        item_inputs: [
            {
                amount: 1,
                item: 'minecraft:wheat'
            }
        ],
        item_outputs: [
            {
                amount: 2,
                item: 'create:wheat_flour'
            }
        ]
    });

    // -- SALT DUST -- //
    e.custom({
        type: 'modern_industrialization:macerator',
        duration: 100,
        eu: 2,
        item_inputs: [
            {
                amount: 1,
                item: 'expandeddelight:salt_rock'
            }
        ],
        item_outputs: [
            {
                amount: 1,
                item: 'expandeddelight:ground_salt'
            }
        ]
    });

    // -- CALCITE DUST -- //
    e.custom({
        type: 'modern_industrialization:macerator',
        duration: 100,
        eu: 16,
        item_inputs: [
            {
                amount: 1,
                item: 'minecraft:calcite'
            }
        ],
        item_outputs: [
            {
                amount: 2,
                item: 'techreborn:calcite_dust'
            }
        ]
    });
});