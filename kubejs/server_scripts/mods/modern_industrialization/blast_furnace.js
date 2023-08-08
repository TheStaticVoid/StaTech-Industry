// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/blast_furnace/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let kj = (id) => `kubejs:${id}`;
    let mc = (id) => `minecraft:${id}`;
    
    // -- BLAST FURNACE REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        mi('materials/blast_furnace/steel'),
        mi('materials/aluminum/blast_furnace/dust'),
        mi('materials/aluminum/blast_furnace/tiny_dust'),
        mi('materials/blast_furnace/superconductor')
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let blastFurnace = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('blast_furnace'),
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

    // -- NETHER STAR -> MOLTEN NETHER STAR -- //
    blastFurnace(
        st('nether_star'),
        128,
        300,
        [ { amount: 1, item: mc('nether_star') } ],
        null,
        null,
        [ { amount: 500, fluid: mi('molten_nether_star') } ]
    );

    // -- IMPURRE LIQUID NETHER STAR -> MOLTEN NETHER STAR -- //
    blastFurnace(
        st('molten_nether_star'),
        128,
        900,
        [ { amount: 1, item: mi('platinum_dust') } ],
        null,
        [ { amount: 1000, fluid: mi('impure_liquid_nether_star') } ],
        [ { amount: 1000, fluid: mi('molten_nether_star') } ]
    );
    
    // -- PIZZA -- //
    blastFurnace(
        st('pizza'),
        2,
        600,
        [ { amount: 1, item: kj('uncooked_pizza') } ],
        [ { amount: 1, item: kj('pizza') } ]
    );

    // -- UNCOOKED STEEL DUST -> STEEL INGOT -- //
    blastFurnace(
        st('steel_ingot_from_uncooked_steel'),
        2,
        1200,
        [ { amount: 1, item: mi('uncooked_steel_dust') } ],
        [ { amount: 1, item: mi('steel_ingot') } ]
    );

    // -- MOLTEN ENDERIUM -- //
    blastFurnace(
        st('molten_enderium'),
        48,
        400,
        [ { amount: 1, item: mi('steel_dust') } ],
        null,
        [ { amount: 1000, fluid: mi('liquid_ender') } ],
        [ { amount: 1000, fluid: mi('molten_enderium') } ]
    );

    // -- ENDERIUM HOT INGOT -- // 
    blastFurnace(
        st('enderium_hot_ingot'),
        64,
        400,
        [ { amount: 1, item: mi('stainless_steel_dust') } ],
        [ { amount: 1, item: mi('enderium_hot_ingot') } ],
        [ { amount: 1000, fluid: mi('molten_enderium') } ]
    );

    // -- REFINED IRON INGOT -> STEEL INGOT -- //
    blastFurnace(
        st('steel_ingot_from_refined_iron'),
        16,
        100,
        [
            { amount: 3, tag: 'c:refined_iron_ingots' },
            { amount: 1, tag: 'c:carbon_dusts' }
        ],
        [ { amount: 4, item: mi('steel_ingot') } ]
    );

    // -- ALUMINUM EBF -- //
    blastFurnace(
        st('aluminum_ingot'),
        32,
        600,
        [ { amount: 1, item: mi('aluminum_dust') } ],
        [ { amount: 1, item: mi('aluminum_ingot') } ]
    );

    // -- IRON INGOTS -> HARDENED IRON INGOT -- //
    blastFurnace(
        st('hardend_iron_ingot'),
        16,
        300,
        [ { amount: 1, tag: 'c:iron_ingots' }, ],
        [ { amount: 1, item: 'anim_guns:hardened_iron_ingot' } ]
    );

    // -- TUNGSTEN + STEEL -> HOT TUNGSTENSTEEL -- //
    blastFurnace(
        st('hot_tungstensteel_ingot'),
        128,
        3600,
        [
            { amount: 1, tag: 'c:tungsten_ingots' },
            { amount: 1, tag: 'c:steel_ingots' }
        ],
        [ { amount: 1, item: tr('hot_tungstensteel_ingot') } ]
    );

    // -- SUPERCONDUCTOR -- //
    blastFurnace(
        st('superconductor_hot_ingot'),
        512,
        1200,
        [ { amount: 1, tag: 'c:superconductor_dusts' } ],
        [ { amount: 1, item: mi('superconductor_hot_ingot') } ],
        [ { amount: 50, fluid: mi('molten_nether_star') } ]
    );

    // -- FLUORINE -- //
    blastFurnace(
        st('fluorine'),
        16,
        200,
        [ { amount: 1, item: mi('fluorite_dust') } ],
        null,
        null,
        [ { amount: 1000, fluid: mi('fluorine') } ]
    );
});