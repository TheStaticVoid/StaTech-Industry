ServerEvents.recipes(e => {

    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let astra = (id) => `ad_astra:${id}`;

    const REMOVED_RECIPE = [
        mi('materials/packer/mixed_ingot_blastproof')
    ];
    REMOVED_RECIPE.forEach(id => e.remove({id: id}));

    let packer = (eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('packer'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe);
    }

    // -- CHAIN -- //
    packer(
        2,
        100,
        [
            { amount: 3, item: mi('iron_ring') }
        ],
        [
            { amount: 8, item: mc('chain') }
        ]
    );

    // -- MIXED BLASTPROOF INGOT -- //
    packer(
        64,
        600,
        [
            { amount: 1, item: mi('titanium_ingot') },
            { amount: 1, item: mi('tungsten_ingot') },
            { amount: 1, item: astra('ostrum_ingot') }
        ],
        [
            { amount: 1, item: mi('mixed_ingot_blastproof') }
        ]
    );
})