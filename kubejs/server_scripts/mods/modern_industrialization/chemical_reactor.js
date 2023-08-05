// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/chemical_reactor/${id}`;
    let mc = (id) => `minecraft:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let cr = (id) => `create:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let chemicalReactor = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('chemical_reactor'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;
        if (fluid_outputs)
            newRecipe['fluid_outputs'] = fluid_outputs;

        e.custom(newRecipe).id(id);
    }

    // -- BLAZE ROD -- //
    chemicalReactor(
        st('blaze_rod'),
        16,
        200,
        [ 
            { amount: 1, item: mc('stick') },
            { amount: 16, item: mc('nether_wart') }
        ],
        [ { amount: 1, item: mc('blaze_rod') } ],
        [ { amount: 1000, fluid: mc('lava')} ]
    );

    // -- GHAST TEAR -- //
    chemicalReactor(
        st('ghast_tear'),
        16,
        200,
        [ 
            { amount: 16, item: mi('industrial_tnt') },
            { amount: 16, item: mi('salt_dust') }
        ],
        [ { amount: 1, item: mc('ghast_tear') } ],
        [ { amount: 1000, fluid: mc('lava')} ]
    );

    // -- ROTTEN FLESH -- //
    chemicalReactor(
        st('rotten_flesh'),
        16,
        200,
        [ { amount: 4, item: mc('leather') } ],
        [ { amount: 1, item: mc('rotten_flesh') } ],
        [ { amount: 500, fluid: mi('wood_tar')} ]
    );

    // -- ENDER PEARL -- //
    chemicalReactor(
        st('ender_pearl'),
        16,
        200,
        [ 
            { amount: 64, item: 'xps:soul_copper_ingot' },
            { amount: 4, item: 'xps:xp_dust' },
            { amount: 1, item: mc('spider_eye') },
        ],
        [ { amount: 1, item: mc('ender_pearl')} ],
        [ { amount: 500, fluid: 'xps:xp_fluid'} ]
    );

    // -- ROSE QUARTZ -- //
    chemicalReactor(
        st('rose_quartz'),
        16,
        200,
        [ { amount: 1, item: mc('quartz') } ],
        [ { amount: 1, item: cr('polished_rose_quartz') } ],
        [ { amount: 500, fluid: mi('molten_redstone') } ]
    );

    // -- EYE OF ENDER -- //
    chemicalReactor(
        st('eye_of_ender'),
        8,
        600,
        [
            { amount: 1, item: mc('ender_pearl') },
            { amount: 1, item: mc('blaze_powder') }
        ],
        [ { amount: 2, item: mc('ender_eye') } ]
    );

    // -- PLASTIC BAR -- //
    chemicalReactor(
        st('plastic_bar'),
        16,
        300,
        [ { amount: 1, item: mc('paper') } ],
        [ { amount: 1, item: 'anim_guns:plastic' } ],
        [ { amount: 500, fluid: mi('polyethylene') } ]
    );

    // -- SNYTHETIC REDSTONE CRYSTAL -- //
    chemicalReactor(
        st('synthetic_redstone_crystal'),
        24,
        400,
        [ { amount: 1, item: mc('diamond') } ],
        [ { amount: 1, item: 'techreborn:synthetic_redstone_crystal' } ],
        [ { amount: 3600, fluid: mi('molten_redstone') } ]
    );

    // -- POLYTETRAFLUOROETHYLENE -- //
    chemicalReactor(
        st('polytetrafluoroethylene'),
        20,
        300,
        null,
        null,
        [ 
            { amount: 300, fluid: mi('tetrafluoroethylene') },
            { amount: 1000, fluid: mi('oxygen') }
        ],
        [ { amount: 400, fluid: mi('polytetrafluoroethylene') } ]
    );

    // -- TETRAFLUOROETHYLENE -- //
    chemicalReactor(
        st('tetrafluoroethylene'),
        24,
        400,
        null,
        null,
        [
            { amount: 2000, fluid: mi('hydrofluoric_acid') },
            { amount: 1000, fluid: mi('chloroform') }
        ],
        [
            { amount: 2500, fluid: mi('hydrochloric_acid') },
            { amount: 500, fluid: mi('tetrafluoroethylene') }
        ]
    );

    // -- CHLOROFORM -- //
    chemicalReactor(
        st('chloroform'),
        18,
        200, 
        null,
        null,
        [
            { amount: 2000, fluid: mi('chlorine') },
            { amount: 500, fluid: mi('methane') }
        ],
        [
            { amount: 2000, fluid: mi('hydrochloric_acid') },
            { amount: 500, fluid: mi('chloroform') }
        ]
    );

    // -- FLUORINE -- //
    chemicalReactor(
        st('fluorine'),
        24,
        300,
        null,
        null,
        [
            { amount: 1000, fluid: mi('fluorine') },
            { amount: 1000, fluid: mi('hydrogen') }
        ],
        [ { amount: 2000, fluid: mi('hydrofluoric_acid') } ]
    );
});