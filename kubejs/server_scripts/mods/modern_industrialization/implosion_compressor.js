// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/implosion_compressor/${id}`;

    // -- IMPLOSION COMPRESSOR REMOVED RECIPES -- //
    const REMOVED_RECIPE = [
        mi('electric_age/component/implosion_compressor/singularity'),
        mi('vanilla_recipes/implosion_compressor/nether_star'),
        mi('materials/implosion_compressor/beryllium')
    ]
    REMOVED_RECIPE.forEach(id => event.remove({id: id}));

    // -- ULTRADENSE METAL BALL -- //
    implosionCompressor(
        event,
        st('ultradense_metal_ball'),
        512,
        600,
        [
            { amount: 64, item: mi('tungstensteel_large_plate') },
            { amount: 64, item: mi('enderium_plate') },
            { amount: 64, item: kj('core_fragment') },
            { amount: 8, item: mi('nuke') }
        ],
        [ { amount: 1, item: mi('ultradense_metal_ball') } ]
    );

    // -- ULTRADENSE METAL BALL -- //
    implosionCompressor(
        event,
        st('abs_building_brick'),
        1,
        20,
        [
            { amount: 2, item: mi('acrylonitrile_butadiene_styrene_dust') },
            { amount: 1, item: mc('red_dye') }

        ],
        [ { amount: 1, item: kj('abs_building_brick') } ]
    );

});
