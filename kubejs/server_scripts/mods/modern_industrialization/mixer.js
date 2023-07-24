// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let xp = (id) => `xps:${id}`;
    let ae = (id) => `ae2:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let st = (id) => `statech:modern_industrialization/mixer/${id}`;

    // -- MIXER REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        mi('materials/mixer/fire_clay_dust')
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let mixer = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('mixer'),
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

    // -- LIQUID ENDER -- // 
    mixer(
        st('liquid_ender'),
        8,
        200,
        [ { amount: 2, item: tr('ender_pearl_dust') } ],
        null,
        [ { amount: 800, fluid: mc('water') } ],
        [ { amount: 1000, fluid: mi('liquid_ender') } ]
    );
    
    // -- SOULCOPPER BLEND -- //
    mixer(
        st('soul_copper_blend'),
        2,
        100,
        [
            { amount: 1, item: mc('raw_copper') },
            { amount: 1, item: mc('soul_sand') }
        ],
        [ { amount: 4, item: xp('soul_copper_blend') } ]
    );    

    // -- CERTUS QUARTS CRYSTAL -- //
    mixer(
        st('certus_quartz_crystal'),
        8,
        100,
        [
            { amount: 1, item: ae('charged_certus_quartz_crystal') },
            { amount: 1, item: ae('certus_quartz_dust') }
        ],
        [ { amount: 2, item: ae('certus_quartz_crystal') } ],
        [ { amount: 1000, fluid: mc('water'), probability: 0 } ]
    );

    // -- DAMAGED BUDDING CERTUS QUARTZ -- //
    mixer(
        st('damaged_budding_certus_quartz'),
        8,
        200,
        [
            { amount: 1, item: ae('charged_certus_quartz_crystal') },
            { amount: 1, item: ae('quartz_block') }
        ],
        [ { amount: 1, item: ae('damaged_budding_quartz') } ],
        [ { amount: 1000, fluid: mc('water'), probability: 0 } ]
    );

    // -- CHIPPED BUDDING CERTUS QUARTZ -- //
    mixer(
        st('chipped_budding_certus_quartz'),
        8,
        200,
        [
            { amount: 1, item: ae('charged_certus_quartz_crystal') },
            { amount: 1, item: ae('damaged_budding_quartz') }
        ],
        [ { amount: 1, item: ae('chipped_budding_quartz') } ],
        [ { amount: 1000, fluid: mc('water'), probability: 0 } ]
    );

    // -- FLAWED BUDDING CERTUS QUARTZ -- //
    mixer(
        st('flawed_budding_certus_quartz'),
        8,
        200,
        [
            { amount: 1, item: ae('charged_certus_quartz_crystal') },
            { amount: 1, item: ae('chipped_budding_quartz')}
        ],
        [ { amount: 1, item: ae('flawed_budding_quartz') } ],
        [ { amount: 1000, fluid: mc('water'), probability: 0 } ]
    );
    
    // -- DRILLING FLUID -- //
    mixer(
        st('drilling_fluid'),
        8,
        400,
        [ { amount: 16, item: mi('clay_dust') } ],
        null,
        [
            { amount: 700, fluid: mc('water') },
            { amount: 100, fluid: mi('lubricant') }
        ],
        [ { amount: 1000, fluid: mi('drilling_fluid') } ]
    );

    // -- GRASS BLOCK RECIPE PARITY -- //
    mixer(
        st('grass_block'),
        2,
        100,
        [
            { amount: 1, item: mc('dirt') },
            { amount: 1, item: mc('wheat_seeds') , probability: 0.0 }
        ],
        [ { amount: 1, item: mc('grass_block') } ],
        [ { amount: 1000, fluid: mc('water') } ]
    );

    // -- FIRE CLAY DUST -- //
    mixer(
        st('fire_clay_dust'),
        2,
        100,
        [
            { amount: 2, item: mi('brick_dust') },
            { amount: 2, item: mi('clay_dust') }
        ],
        [ { amount: 4, item: mi('fire_clay_dust') } ]
    );

    // -- LIQUID CONCRETE -- //
    mixer(
        st('liquid_concrete'),
        8,
        200,
        [ 
            { amount: 4, item: mi('clay_dust') },
            { amount: 10, item: mi('stone_dust') }
        ],
        null,
        [ { amount: 100, fluid: mc('water') } ],
        [ { amount: 500, fluid: mi('concrete') } ]
    );

    // -- UTILITY FUNCTION FOR THE FOLLOWING FOREACH -- //
    let mixerConsumable = (fluid, amount) => {
        if (amount < 100)
            amount = 1000;

        let newFluidInput = {
            fluid: fluid,
            amount: amount
        }

        return newFluidInput;
    }
    
    // -- CONVERT ALL NON-CONSUMABLE FLUID RECIPES IN MIXER TO CONSUME FLUID  -- //
    let toRemove = [];
    e.forEachRecipe( { type: mi('mixer') }, recipe => {
        const DONT_REPLACE = [
            'modern_industrialization:vanilla_recipes/mixer/lava',
            'modern_industrialization:compat/ae2/mixer/fluix'
        ];
        const recipeJson = JSON.parse(recipe.json.toString());
        let eu = recipeJson.eu;
        let duration = recipeJson.duration;
        let item_inputs = recipeJson.item_inputs;
        let item_outputs = recipeJson.item_outputs;
        let fluid_inputs = recipeJson.fluid_inputs;
        let fluid_outputs = recipeJson.fluid_outputs;
        let newFluidInput;

        if (fluid_inputs && !DONT_REPLACE.includes(recipe.getId())) {
            if (Array.isArray(fluid_inputs)) {
                let newFluidArr = [];
                for (let key in fluid_inputs) {
                    if (fluid_inputs[key].probability === 0) {
                        newFluidInput = mixerConsumable(
                            fluid_inputs[key].fluid,
                            fluid_inputs[key].amount
                        );
                        newFluidArr.push(newFluidInput);
                    }
                }
                if (newFluidArr.length > 0)
                    newFluidInput = newFluidArr;
            } else {
                if (fluid_inputs.probability === 0) {
                    newFluidInput = mixerConsumable(
                        fluid_inputs.fluid,
                        fluid_inputs.amount
                    );
                }
            }
        }

        if (newFluidInput) {
            toRemove.push(recipe.getId());
            let id = st(recipe.getId().split('mixer/')[1]);
            mixer(id, eu, duration, item_inputs, item_outputs, newFluidInput, fluid_outputs);
        }
    });
    toRemove.forEach(id => e.remove({ id: id }));
});