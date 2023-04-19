ServerEvents.recipes(e => {
    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;

    const REMOVED_RECIPE = [
        mi('electric_age/component/implosion_compressor/singularity')
    ]
    REMOVED_RECIPE.forEach(id => e.remove({id: id}));

    let implosionCompressor = (eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('implosion_compressor'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)   
            newRecipe['item_outputs'] = item_outputs;
    
        e.custom(newRecipe);
    }

    // -- IRIDIUM ALLOY PLATE -- //
    implosionCompressor(
        64,
        2000,
        [
            { amount: 1, item: tr('iridium_alloy_ingot') },
            { amount: 4, item: mi('industrial_tnt') }
        ],
        [
            { amount: 1, item: tr('iridium_alloy_plate') }
        ]
    );

    // -- SINGULARITY -- //
    implosionCompressor(
        128,
        4800,
        [
            { amount: 1, item: mi('ultradense_metal_ball') },
            { amount: 64, item: mi('nuke') }
        ],
        [
            { amount: 1, item: mi('singularity') }
        ]
    );

    // -- PERIDOT GEM -- //
    implosionCompressor(
        1,
        10,
        [
            { amount: 4, tag: 'c:peridot_dusts' },
            { amount: 1, item: mi('industrial_tnt') }
        ],
        [
            { amount: 3, item: tr('peridot_gem') }
        ]
    );

    // -- RUBY GEM -- //
    implosionCompressor(
        1,
        10,
        [
            { amount: 4, tag: 'c:ruby_dusts' },
            { amount: 1, item: mi('industrial_tnt') }
        ],
        [
            { amount: 3, item: tr('ruby_gem') }
        ]
    );

    // -- SAPPHIRE GEM -- //
    implosionCompressor(
        1,
        10,
        [
            { amount: 4, tag: 'c:sapphire_dusts' },
            { amount: 1, item: mi('industrial_tnt') } 
        ],
        [
            { amount: 1, item: tr('sapphire_gem') }
        ]
    );

    // -- RED GARNET DUST -- //
    implosionCompressor(
        1,
        10,
        [
            { amount: 9, tag: 'c:redstone_blocks' },
            { amount: 1, item: mi('industrial_tnt') }
        ],
        [
            { amount: 4, item: tr('red_garnet_dust' ) }
        ]
    );

    // -- RED GARNET GEM -- //
    implosionCompressor(
        1,
        10,
        [
            { amount: 4, tag: 'c:red_garnet_dusts' },
            { amount: 1, item: mi('industrial_tnt') }
        ],
        [
            { amount: 3, item: tr('red_garnet_gem') }
        ]
    );
});