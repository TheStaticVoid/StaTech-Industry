ServerEvents.recipes(e => {
    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;
    
    const REMOVED_RECIPES = [
        mi('materials/blast_furnace/steel'),
        mi('materials/aluminum/blast_furnace/dust'),
        mi('materials/aluminum/blast_furnace/tiny_dust'),
        mi('materials/blast_furnace/superconductor')
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));


    let blastFurnace = (eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
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
        
        e.custom(newRecipe);
    }

    // -- UNCOOKED STEEL DUST -> STEEL INGOT -- //
    blastFurnace(
        2,
        1200,
        [
            { amount: 1, item: mi('uncooked_steel_dust') }
        ],
        [ 
            { amount: 1, item: mi('steel_ingot') }
        ]
    );

    // -- REFINED IRON INGOT -> STEEL INGOT -- //
    blastFurnace(
        16,
        40,
        [
            { amount: 1, tag: 'c:refined_iron_ingots' },
            { amount: 4, tag: 'c:carbon_dusts' }
        ],
        [
            { amount: 1, item: mi('steel_ingot') }
        ]
    );

    // -- ALUMINUM EBF -- //
    blastFurnace(
        32,
        600,
        [
            { amount: 1, item: mi('aluminum_dust') }
        ],
        [
            { amount: 1, item: mi('aluminum_ingot') }
        ]
    );

    // -- IRON INGOTS -> HARDENED IRON INGOT -- //
    blastFurnace(
        16,
        300,
        [
            { amount: 1, tag: 'c:iron_ingots' },
        ],
        [
            { amount: 1, item: 'anim_guns:hardened_iron_ingot' }
        ]
    );

    // -- TUNGSTEN + STEEL -> HOT TUNGSTENSTEEL -- //
    blastFurnace(
        128,
        3600,
        [
            { amount: 1, tag: 'c:tungsten_ingots' },
            { amount: 1, tag: 'c:steel_ingots' }
        ],
        [
            { amount: 1, item: tr('hot_tungstensteel_ingot') }
        ]
    );

    // -- SUPERCONDUCTOR -- //
    blastFurnace(
        512,
        1200,
        [
            { amount: 1, tag: 'c:superconductor_dusts' }
        ],
        [
            { amount: 1, item: mi('superconductor_hot_ingot') }
        ]
    );
});