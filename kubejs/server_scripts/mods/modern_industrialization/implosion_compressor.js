// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/implosion_compressor/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let kj = (id) => `kubejs:${id}`;

    // -- IMPLOSION COMPRESSOR REMOVED RECIPES -- //
    const REMOVED_RECIPE = [
        mi('electric_age/component/implosion_compressor/singularity'),
        mi('vanilla_recipes/implosion_compressor/nether_star')
    ]
    REMOVED_RECIPE.forEach(id => e.remove({id: id}));

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let implosionCompressor = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('implosion_compressor'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)   
            newRecipe['item_outputs'] = item_outputs;
    
        e.custom(newRecipe).id(id);
    }

    // -- ULTRADENSE METAL BALL -- //
    implosionCompressor(
        st('ultradense_metal_ball'),
        512,
        600,
        [
            { amount: 64, item: mi('tungstensteel_large_plate') },
            { amount: 64, tag: 'c:enderium_plates' },
            { amount: 64, item: kj('core_fragment') },
            { amount: 8, item: mi('nuke') }
        ],
        [ { amount: 1, item: mi('ultradense_metal_ball') } ]
    );

    // -- IRIDIUM ALLOY PLATE -- //
    implosionCompressor(
        st('iridum_alloy_plate'),
        64,
        10,
        [
            { amount: 1, item: tr('iridium_alloy_ingot') },
            { amount: 4, item: mi('industrial_tnt') }
        ],
        [ { amount: 1, item: tr('iridium_alloy_plate') } ]
    );

    // -- PERIDOT GEM -- //
    implosionCompressor(
        st('peridot_gem'),
        1,
        10,
        [
            { amount: 4, tag: 'c:peridot_dusts' },
            { amount: 1, item: mi('industrial_tnt') }
        ],
        [ { amount: 3, item: tr('peridot_gem') } ]
    );

    // -- RUBY GEM -- //
    implosionCompressor(
        st('ruby_gem'),
        1,
        10,
        [
            { amount: 4, tag: 'c:ruby_dusts' },
            { amount: 1, item: mi('industrial_tnt') }
        ],
        [ { amount: 3, item: tr('ruby_gem') } ]
    );

    // -- SAPPHIRE GEM -- //
    implosionCompressor(
        st('sapphire_gem'),
        1,
        10,
        [
            { amount: 4, tag: 'c:sapphire_dusts' },
            { amount: 1, item: mi('industrial_tnt') } 
        ],
        [ { amount: 1, item: tr('sapphire_gem') } ]
    );

    // -- RED GARNET DUST -- //
    implosionCompressor(
        st('red_garnet_dust'),
        1,
        10,
        [
            { amount: 9, tag: 'c:redstone_blocks' },
            { amount: 1, item: mi('industrial_tnt') }
        ],
        [ { amount: 4, item: tr('red_garnet_dust' ) } ]
    );

    // -- RED GARNET GEM -- //
    implosionCompressor(
        st('red_garnet_gem'),
        1,
        10,
        [
            { amount: 4, tag: 'c:red_garnet_dusts' },
            { amount: 1, item: mi('industrial_tnt') }
        ],
        [ { amount: 3, item: tr('red_garnet_gem') } ]
    );
});