ServerEvents.recipes(e => {
    // -- LOGS TO CHARCOAL + CREOSOTE
    e.custom({
        type: 'modern_industrialization:pyrolyse_oven',
        duration: 600,
        eu: 16,
        item_inputs: [
            {
                amount: 16,
                tag: 'minecraft:logs'
            },
        ],
        fluid_inputs: [
            {
                amount: 8000,
                fluid: 'modern_industrialization:steam'
            }
        ],
        item_outputs: [
            {
                amount: 16,
                item: 'minecraft:charcoal'
            }
        ],
        fluid_outputs: [
            {
                amount: 2000,
                fluid: 'modern_industrialization:creosote'
            }
        ]
    });

    // -- COAL TO COKE + BENZENE -- //
    // Was originally going to be Phenol, but Benzene is basically phenol without the hydroxide
    // Maybe I will add the distillation later
    e.custom({
        type: 'modern_industrialization:pyrolyse_oven',
        duration: 600,
        eu: 16,
        item_inputs: [
            {
                amount: 16,
                item: 'minecraft:coal'
            }
        ],
        fluid_inputs: [
            {
                amount: 8000,
                fluid: 'modern_industrialization:steam'
            }
        ],
        item_outputs: [
            {
                amount: 16,
                item: 'modern_industrialization:coke'
            }
        ],
        fluid_outputs: [
            {
                amount: 2000,
                fluid: 'modern_industrialization:benzene'
            }
        ]
    });

    // -- COAL DUST TO COKE DUST + BENZENE -- //
    e.custom({
        type: 'modern_industrialization:pyrolyse_oven',
        duration: 600,
        eu: 16,
        item_inputs: [
            {
                amount: 16,
                tag: 'c:coal_dusts'
            }
        ],
        fluid_inputs: [
            {
                amount: 8000,
                fluid: 'modern_industrialization:steam'
            }
        ],
        item_outputs: [
            {
                amount: 16,
                item: 'modern_industrialization:coke_dust'
            }
        ],
        fluid_outputs: [
            {
                amount: 2000,
                fluid: 'modern_industrialization:benzene'
            }
        ]
    });
});