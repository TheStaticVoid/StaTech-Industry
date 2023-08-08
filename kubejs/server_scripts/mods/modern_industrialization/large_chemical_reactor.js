// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/lcr/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let cr = (id) => `create:${id}`;

    // -- LCR VARIABLE CONSTANTS -- //
    const gsonJsonArray = Java.loadClass('com.google.gson.JsonArray');
    const amountMultiplier = 4;
    const powerMultiplier = 2;
    const timeMultiplier = 1;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let lcr = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('large_chemical_reactor'),
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
    
    let multiplyItems = (input) => {
        let itemMax = 64;
        let newItemList = [];
        let tag = input.get('tag') ? true : false;
        let amount = input.get('amount');
        let item = tag ? input.get('tag') : input.get('item');
        let newAmount = amount * amountMultiplier;

        if (newAmount > itemMax) {
            let fullStacks = Math.floor(newAmount / itemMax);
            let leftOver = newAmount % itemMax;
            for (let i = 0; i < fullStacks; i++) {
                newItemList.push(newItem(tag, itemMax, item));
            }

            if (leftOver > 0) {
                newItemList.push(newItem(tag, leftOver, item));
            }
        } else {
            newItemList.push(newItem(tag, newAmount, item));
        }

        return newItemList;
    }

    let multiplyFluids = (input) => {
        let fluidMax = 64000;
        let newFluidList = [];
        let tag = input.get('tag') ? true : false;
        let amount = input.get('amount');
        let fluid = tag ? input.get('tag') : input.get('fluid');
        let newAmount = amount * amountMultiplier;

        if (newAmount > fluidMax) {
            let fullStacks = Math.floor(newAmount / fluidMax);
            let leftOver = newAmount % fluidMax;
            for (let i = 0; i < fullStacks; i++) {
                newFluidList.push(newFluid(tag, fluidMax, fluid));
            }

            if (leftOver > 0) {
                newFluidList.push(newFluid(tag, leftOver, fluid));
            }
        } else { 
            newFluidList.push(newFluid(tag, newAmount, fluid));
        }

        return newFluidList;
    }

    let newItem = (tag, amount, item) => {
        return tag ? { amount: amount, tag: item } : { amount: amount, item: item };
    }

    let newFluid = (tag, amount, fluid) => {
        return tag ? { amount: amount, tag: fluid } : { amount: amount, fluid: fluid };
    }

    let getItemName = (item) => {
        return item.get('item') ? 
                item.get('item').getAsString().split(':')[1] :
                item.get('tag').getAsString().split(':')[1];
    }

    let getFluidName = (fluid) => {
        return fluid.get('fluid') ?
                fluid.get('fluid').getAsString().split(':')[1] :
                fluid.get('tag').getAsString().split(':')[1];
    }

    e.forEachRecipe( { type: mi('chemical_reactor') }, recipe => {
        const recipeJson = recipe.json;
        
        let eu = recipeJson.get('eu')
        let duration = recipeJson.get('duration');
        let item_inputs = recipeJson.get('item_inputs');
        let item_outputs = recipeJson.get('item_outputs');
        let fluid_inputs = recipeJson.get('fluid_inputs');
        let fluid_outputs = recipeJson.get('fluid_outputs');

        let newId = '';
        let newEu = eu * powerMultiplier;
        let newDuration = duration * timeMultiplier;
        let newItemInputs = [];
        let newItemOutputs = [];
        let newFluidInputs = [];
        let newFluidOutputs = [];
        let allInputs = [];
        let allOutputs = [];

        if (item_inputs != null) {
            let itemNames = [];
            if (item_inputs.getClass() === gsonJsonArray) {
                item_inputs.forEach(input => {
                    newItemInputs = newItemInputs.concat(multiplyItems(input));
                    itemNames.push(getItemName(input));
                });
            } else {
                newItemInputs = newItemInputs.concat(multiplyItems(item_inputs));
                itemNames.push(getItemName(item_inputs));
            }
            allInputs = allInputs.concat(itemNames);
        }

        if (item_outputs != null) {
            let itemNames = [];
            if (item_outputs.getClass() === gsonJsonArray) {
                item_outputs.forEach(output => {
                    newItemOutputs = newItemOutputs.concat(multiplyItems(output));
                    itemNames.push(getItemName(output));
                });
            } else {
                newItemOutputs = newItemOutputs.concat(multiplyItems(item_outputs));
                itemNames.push(getItemName(item_outputs));
            }
            allOutputs = allOutputs.concat(itemNames);
        }

        if (fluid_inputs != null) {
            let fluidNames = [];
            if (fluid_inputs.getClass() === gsonJsonArray) {
                fluid_inputs.forEach(input => {
                    newFluidInputs = newFluidInputs.concat(multiplyFluids(input));
                    fluidNames.push(getFluidName(input));
                });
            } else { 
                newFluidInputs = newFluidInputs.concat(multiplyFluids(fluid_inputs));
                fluidNames.push(getFluidName(fluid_inputs));
            }
            allInputs = allInputs.concat(fluidNames);
        }

        if (fluid_outputs != null) {
            let fluidNames = [];
            if (fluid_outputs.getClass() === gsonJsonArray) {
                fluid_outputs.forEach(output => {
                    newFluidOutputs = newFluidOutputs.concat(multiplyFluids(output));
                    fluidNames.push(getFluidName(output));
                });
            } else {
                newFluidOutputs = newFluidOutputs.concat(multiplyFluids(fluid_outputs));
                fluidNames.push(getFluidName(fluid_outputs));
            }
            allOutputs = allOutputs.concat(fluidNames);
        }
        newId = allOutputs.join('_and_');
        if (allInputs.length > 0)
            newId += '_from_' + allInputs.join('_and_');

        lcr(
            st(newId),
            newEu,
            newDuration,
            newItemInputs,
            newItemOutputs,
            newFluidInputs,
            newFluidOutputs
        );
    });


    // There's technically a really convoluted way to get all recipes, even ones added,
    // but I couldn't be bothered to figure it out for 6.1
    // -- BLAZE ROD -- //
    lcr(
        st('blaze_rod'),
        8 * powerMultiplier,
        200 * timeMultiplier,
        [ 
            { amount: 1 * amountMultiplier, item: mi('steel_rod') },
            { amount: 16 * amountMultiplier, item: mc('nether_wart') }
        ],
        [ { amount: 1 * amountMultiplier, item: mc('blaze_rod') } ],
        [ { amount: 1000 * amountMultiplier, fluid: mc('lava')} ]
    );

    // -- GHAST TEAR -- //
    lcr(
        st('ghast_tear'),
        8 * powerMultiplier,
        200 * timeMultiplier,
        [ 
            { amount: 16 * amountMultiplier, item: mc('tnt') },
            { amount: 16 * amountMultiplier, item: mi('salt_dust') }
        ],
        [ { amount: 1 * amountMultiplier, item: mc('ghast_tear') } ],
        [ { amount: 1000 * amountMultiplier, fluid: mc('lava')} ]
    );

    // -- ROTTEN FLESH -- //
    lcr(
        st('rotten_flesh'),
        8 * powerMultiplier,
        200 * timeMultiplier,
        [ { amount: 4 * amountMultiplier, item: mc('leather') } ],
        [ { amount: 1 * amountMultiplier, item: mc('rotten_flesh') } ],
        [ { amount: 500 * amountMultiplier, fluid: mi('hydrofluoric_acid')} ]
    );

    // -- ENDER PEARL -- //
    lcr(
        st('ender_pearl'),
        8 * powerMultiplier,
        200 * timeMultiplier,
        [ 
            { amount: 1 * amountMultiplier, item: mc('slime_ball') },
            { amount: 4 * amountMultiplier, item: 'xps:xp_dust' },
            { amount: 4, item: mc('spider_eye') },
        ],
        [ { amount: 1 * amountMultiplier, item: mc('ender_pearl')} ],
        [ { amount: 500 * amountMultiplier, fluid: 'xps:xp_fluid'} ]
    );
    
    // -- ROSE QUARTZ -- //
    lcr(
        st('rose_quartz'),
        16 * powerMultiplier,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: mc('quartz') } ],
        [ { amount: 1 * amountMultiplier, item: cr('polished_rose_quartz') } ],
        [ { amount: 500 * amountMultiplier, fluid: mi('molten_redstone') } ]
    );

    // -- EYE OF ENDER -- //
    lcr(
        st('eye_of_ender'),
        8 * powerMultiplier,
        600 * timeMultiplier,
        [
            { amount: 1 * amountMultiplier, item: mc('ender_pearl') },
            { amount: 1 * amountMultiplier, item: mc('blaze_powder') }
        ],
        [ { amount: 2 * amountMultiplier, item: mc('ender_eye') } ]
    );

    // -- PLASTIC BAR -- //
    lcr(
        st('plastic_bar'),
        16 * powerMultiplier,
        300 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: mc('paper') } ],
        [ { amount: 1 * amountMultiplier, item: 'anim_guns:plastic' } ],
        [ { amount: 500 * amountMultiplier, fluid: mi('polyethylene') } ]
    );

    // -- SNYTHETIC REDSTONE CRYSTAL -- //
    lcr(
        st('synthetic_redstone_crystal'),
        24 * powerMultiplier,
        400 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: mc('diamond') } ],
        [ { amount: 1 * amountMultiplier, item: 'techreborn:synthetic_redstone_crystal' } ],
        [ { amount: 3600 * amountMultiplier, fluid: mi('molten_redstone') } ]
    );

    // -- POLYTETRAFLUOROETHYLENE -- //
    lcr(
        st('polytetrafluoroethylene'),
        20 * powerMultiplier,
        300 * timeMultiplier,
        null,
        null,
        [ 
            { amount: 300 * amountMultiplier, fluid: mi('tetrafluoroethylene') },
            { amount: 1000 * amountMultiplier, fluid: mi('oxygen') }
        ],
        [ { amount: 400 * amountMultiplier, fluid: mi('polytetrafluoroethylene') } ]
    );

    // -- TETRAFLUOROETHYLENE -- //
    lcr(
        st('tetrafluoroethylene'),
        24 * powerMultiplier,
        400 * timeMultiplier,
        null,
        null,
        [
            { amount: 2000 * amountMultiplier, fluid: mi('hydrofluoric_acid') },
            { amount: 1000 * amountMultiplier, fluid: mi('chloroform') }
        ],
        [
            { amount: 2500 * amountMultiplier, fluid: mi('hydrochloric_acid') },
            { amount: 500 * amountMultiplier, fluid: mi('tetrafluoroethylene') }
        ]
    );

    // -- CHLOROFORM -- //
    lcr(
        st('chloroform'),
        18 * powerMultiplier,
        200 * timeMultiplier, 
        null,
        null,
        [
            { amount: 2000 * amountMultiplier, fluid: mi('chlorine') },
            { amount: 500 * amountMultiplier, fluid: mi('methane') }
        ],
        [
            { amount: 2000 * amountMultiplier, fluid: mi('hydrochloric_acid') },
            { amount: 500 * amountMultiplier, fluid: mi('chloroform') }
        ]
    );

    // -- FLUORINE -- //
    lcr(
        st('fluorine'),
        24 * powerMultiplier,
        300 * timeMultiplier,
        null,
        null,
        [
            { amount: 1000 * amountMultiplier, fluid: mi('fluorine') },
            { amount: 1000 * amountMultiplier, fluid: mi('hydrogen') }
        ],
        [ { amount: 2000 * amountMultiplier, fluid: mi('hydrofluoric_acid') } ]
    );
});