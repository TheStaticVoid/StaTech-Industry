ServerEvents.recipes(e => {
    // -- STEEL TANK -- //
    e.custom({
        type: 'modern_industrialization:rocket_part_assembler',
        eu: 256,
        duration: 900,
        item_inputs: [
            {
                amount: 4,
                item: 'modern_industrialization:steel_ring'
            },
            {
                amount: 2,
                item: 'modern_industrialization:advanced_pump'
            },
            {
                amount: 1,
                item: 'modern_industrialization:steel_tank'
            }
        ],
        fluid_inputs: [
            {
                amount: 1000,
                fluid: 'modern_industrialization:soldering_alloy'
            }
        ],
        item_outputs: [
            {
                amount: 1,
                item: 'ad_astra:steel_tank'
            }
        ]
    });
});