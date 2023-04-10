ServerEvents.recipes(e => {
    const REMOVED_RECIPES = [
        'modern_industrialization:materials/blast_furnace/steel',
        'modern_industrialization:materials/aluminum/blast_furnace/dust',
        'modern_industrialization:materials/aluminum/blast_furnace/tiny_dust'
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;

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
        ],
        null,
        null
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
        ],
        null,
        null
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
        ],
        null,
        null
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
        ],
        null,
        null
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
        ],
        null,
        null
    );
});