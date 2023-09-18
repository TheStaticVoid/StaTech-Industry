// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/lsm/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let cr = (id) => `create:${id}`;
    let bl = (id) => `blockus:${id}`;
    let tr = (id) => `techreborn:${id}`;    
    let ed = (id) => `expandeddelight:${id}`;
    let sp = (id) => `spectrum:${id}`;

    // -- LSM VARIABLE CONSTANTS -- //
    const gsonJsonArray = Java.loadClass('com.google.gson.JsonArray');
    const amountMultiplier = 8;
    const powerConstant = 4;
    const timeMultiplier = 2;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let lsm = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('large_steam_macerator'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;

        e.custom(newRecipe).id(id);
    }

    let multiplyItems = (input) => {
        let itemMax = 64;
        let newItemList = [];
        let tag = input.get('tag') ? true : false;
        let amount = input.get('amount') * amountMultiplier;
        let item = tag ? input.get('tag') : input.get('item');
        let prob = input.get('probability');

        if (amount > itemMax) {
            if (item.getAsString().indexOf('_tiny_') > 0) {
                newItemList = newItemList.concat(compressTinyDust(tag, item, amount, prob, itemMax));
            } else {
                let fullStacks = Math.floor(amount / itemMax);
                let leftOver = amount % itemMax;
                for (let i = 0; i < fullStacks; i++) {
                    newItemList.push(newItem(tag, itemMax, item, prob));
                }

                if (leftOver > 0) {
                    newItemList.push(newItem(tag, leftOver, item, prob));
                }
            }
        } else {
            newItemList.push(newItem(tag, amount, item, prob));
        }
        return newItemList;
    }

    // This is genuinely over engineered, but I'm sure i'll be glad I did it in the future
    let compressTinyDust = (tag, input, amount, prob, itemMax) => {
        let inputString = input.getAsString();
        let tinyDustName = inputString;
        let dustName = inputString.slice(0, inputString.indexOf('_tiny')) + inputString.slice(inputString.indexOf('_dust'));
        
        let fullDusts = Math.floor(amount / 9);
        let leftOver = amount % 9;

        let compressedDusts = [];
        if (fullDusts > 0) {
            if (fullDusts > itemMax) {
                let fullStacks = Math.floor(fullDusts / itemMax);
                let leftOverDusts = fullDusts % itemMax;
                for (let i = 0; i < fullStacks; i++) {
                    compressedDusts.push(newItem(tag, itemMax, dustName, prob));
                }

                if (leftOverDusts > 0) {
                    compressedDusts.push(newItem(tag, leftOverDusts, dustName, prob));
                }
            } else {
                compressedDusts.push(newItem(tag, fullDusts, dustName, prob));
            }
        }

        if (leftOver > 0)
            compressedDusts.push(newItem(tag, leftOver, tinyDustName, prob));

        return compressedDusts;
    }

    let newItem = (tag, amount, item, prob) => {
        let returnedItem;
        returnedItem = tag ? { amount: amount, tag: item } : { amount: amount, item: item };
        if (prob)
            returnedItem['probability'] = prob;
        return returnedItem;
    }

    let getItemName = (item) => {
        return item.get('item') ?
                item.get('item').getAsString().split(':')[1] :
                item.get('tag').getAsString().split(':')[1];
    }

    e.forEachRecipe( { type: mi('macerator'), not: [{ id: mi('compat/techreborn/macerator/minecraft_clay_ball_to_techreborn_clay_dust')}, { id: mi('materials/zinc/macerator/drill_head') }]}, recipe => {
        const recipeJson = recipe.json;
        let eu = recipeJson.get('eu');
        let duration = recipeJson.get('duration');
        let item_inputs = recipeJson.get('item_inputs');
        let item_outputs = recipeJson.get('item_outputs');
        
        let newId = '';
        let newEu = powerConstant;
        let newDuration = duration * timeMultiplier;
        let newItemInputs = [];
        let newItemOutputs = [];
        let allInputNames = [];
        let allOutputNames = [];

        if (eu <= 4) {

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
            allInputNames = allInputNames.concat(itemNames);

            itemNames = [];
            if (item_outputs.getClass() === gsonJsonArray) {
                item_outputs.forEach(output => {
                    newItemOutputs = newItemOutputs.concat(multiplyItems(output));
                    itemNames.push(getItemName(output));
                });
            } else { 
                newItemOutputs = newItemOutputs.concat(multiplyItems(item_outputs));
                itemNames.push(getItemName(item_outputs));
            }
            
            allOutputNames = allOutputNames.concat(itemNames);
            newId = allOutputNames.join('_and_') + '_from_' + allInputNames.join('_and_');

            lsm(
                st(newId),
                newEu,
                newDuration,
                newItemInputs,
                newItemOutputs
            );
        }
    });

    // -- ZINC DRILL HEAD -- //
    lsm(
        st('zinc_drill_head'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: mi('zinc_drill_head') } ],
        [ 
            { amount: 56, item: tr('zinc_dust') },
            { amount: 8, item: mi('zinc_tiny_dust') },
            { amount: 24, item: mi('zinc_tiny_dust') }
        ]
    );

    // -- MARBLE DUST -- //
    lsm(
        st('marble_dust'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: bl('marble') } ],
        [ { amount: 2 * amountMultiplier, item: tr('marble_dust') } ]
    );

    // -- WHEAT DOUGH -- //
    lsm(
        st('wheat_flour'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: mc('wheat') } ],
        [ { amount: 2 * amountMultiplier, item: cr('wheat_flour') } ]
    );

    // -- SALT DUST -- //
    lsm(
        st('ground_salt'),
        powerConstant,
        100 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: ed('salt_rock') } ],
        [ { amount: 1 * amountMultiplier, item: ed('ground_salt') } ]
    );

    // -- RAW PLATINUM FROM SHELDONITE ORE -- //
    lsm(
        st('raw_platinum'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, tag: 'c:sheldonite_ores' } ],
        [ { amount: 3 * amountMultiplier, item: mi('raw_platinum') } ]
    );

    // -- RAW ZINC -- //
    lsm(
        st('raw_zinc'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, tag: 'c:zinc_ores' } ],
        [ { amount: 3 * amountMultiplier, item: 'create:raw_zinc'} ]
    );

    // -- ZINC DUST -- //
    lsm(
        st('zinc_dust'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, tag: 'c:raw_zinc_ores' } ],
        [
            { amount: 1 * amountMultiplier, item: tr('zinc_dust') },
            { amount: 1 * amountMultiplier, item: tr('zinc_dust'), probability: 0.50 }
        ]
    );

    // -- FLAX TO STRING -- //
    lsm(
        st('flax_to_string'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: 'supplementaries:flax' } ],
        [
            { amount: 2 * amountMultiplier, item: 'minecraft:string' },
            { amount: 1 * amountMultiplier, item: 'minecraft:string', probability: 0.25 }
        ]
    );

    // -- STONE DUST -- //
    lsm(
        st('stone_dust'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: mc('stone') } ],
        [ { amount: 4 * amountMultiplier, item: mi('stone_dust') } ]
    );

    // -- SPECTRUM POWDERS -- //
    lsm(
        st('topaz_powder_from_cluster'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: sp('topaz_cluster') } ],
        [ 
            { amount: 8 * amountMultiplier, item: sp('topaz_powder') },
            { amount: 8 * amountMultiplier, item: sp('topaz_powder') }
        ]
    );
    lsm(
        st('topaz_powder_from_block'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: sp('topaz_block') } ],
        [ { amount: 4 * amountMultiplier, item: sp('topaz_powder') } ]
    );
    lsm(
        st('topaz_powder_from_small_bud'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: sp('small_topaz_bud') } ],
        [ { amount: 4 * amountMultiplier, item: sp('topaz_powder') } ]
    );
    lsm(
        st('topaz_powder_from_shard'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: sp('topaz_shard') } ],
        [ { amount: 2 * amountMultiplier, item: sp('topaz_powder') } ]
    );
    lsm(
        st('topaz_powder_from_medium_bud'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: sp('medium_topaz_bud') } ],
        [ { amount: 6 * amountMultiplier, item: sp('topaz_powder') } ]
    );
    lsm(
        st('topaz_powder_from_large_bud'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: sp('large_topaz_bud') } ],
        [ { amount: 8 * amountMultiplier, item: sp('topaz_powder') } ]
    );

    lsm(
        st('amethyst_powder_from_cluster'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: mc('amethyst_cluster') } ],
        [ 
            { amount: 8 * amountMultiplier, item: sp('amethyst_powder') },
            { amount: 8 * amountMultiplier, item: sp('amethyst_powder') } 
        ]
    );
    lsm(
        st('amethyst_powder_from_block'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: mc('amethyst_block') } ],
        [ { amount: 4 * amountMultiplier, item: sp('amethyst_powder') } ]
    );
    lsm(
        st('amethyst_powder_from_small_bud'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: mc('small_amethyst_bud') } ],
        [ { amount: 4 * amountMultiplier, item: sp('amethyst_powder') } ]
    );
    lsm(
        st('amethyst_powder_from_shard'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: mc('amethyst_shard') } ],
        [ { amount: 2 * amountMultiplier, item: sp('amethyst_powder') } ]
    );
    lsm(
        st('amethyst_powder_from_medium_bud'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: mc('medium_amethyst_bud') } ],
        [ { amount: 6 * amountMultiplier, item: sp('amethyst_powder') } ]
    );
    lsm(
        st('amethyst_powder_from_large_bud'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: mc('large_amethyst_bud') } ],
        [ { amount: 8 * amountMultiplier, item: sp('amethyst_powder') } ]
    );

    lsm(
        st('citrine_powder_from_cluster'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: sp('citrine_cluster') } ],
        [ 
            { amount: 8 * amountMultiplier, item: sp('citrine_powder') },
            { amount: 8 * amountMultiplier, item: sp('citrine_powder') } 
        ]
    );
    lsm(
        st('citrine_powder_from_block'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: sp('citrine_block') } ],
        [ { amount: 4 * amountMultiplier, item: sp('citrine_powder') } ]
    );
    lsm(
        st('citrine_powder_from_small_bud'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: sp('small_citrine_bud') } ],
        [ { amount: 4 * amountMultiplier, item: sp('citrine_powder') } ]
    );
    lsm(
        st('citrine_powder_from_shard'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: sp('citrine_shard') } ],
        [ { amount: 2 * amountMultiplier, item: sp('citrine_powder') } ]
    );
    lsm(
        st('citrine_powder_from_medium_bud'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: sp('medium_citrine_bud') } ],
        [ { amount: 6 * amountMultiplier, item: sp('citrine_powder') } ]
    );
    lsm(
        st('citrine_powder_from_large_bud'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: sp('large_citrine_bud') } ],
        [ { amount: 8 * amountMultiplier, item: sp('citrine_powder') } ]
    );

    // -- QUITOXIC POWDER -- //
    lsm(
        st('quitoxic_powder'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: sp('quitoxic_reeds') } ],
        [ { amount: 2 * amountMultiplier, item: sp('quitoxic_powder') } ]
    );

    // -- ONYX POWDER -- //
    lsm(
        st('onyx_powder'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: sp('onyx_shard') } ],
        [ { amount: 2 * amountMultiplier, item: sp('onyx_powder') } ]
    );
    lsm(
        st('onyx_powder_from_onyx_block'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: sp('onyx_block') } ],
        [ { amount: 4 * amountMultiplier, item: sp('onyx_powder') } ]
    );

    // -- FIERY POWDER -- //
    lsm(
        st('fiery_powder'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: sp('blazing_crystal') } ],
        [ 
            { amount: 8 * amountMultiplier, item: sp('fiery_powder') },
            { amount: 8 * amountMultiplier, item: sp('fiery_powder') } 
        ]
    );

    // -- BLIZZARD POWDER -- //
    lsm(
        st('blizzard_powder'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: sp('frostbite_crystal') } ],
        [ 
            { amount: 8 * amountMultiplier, item: sp('blizzard_powder') },
            { amount: 8 * amountMultiplier, item: sp('blizzard_powder') }
        ]
    );

    // -- AMARANTH GRAINS -- //
    lsm(
        st('amaranth_grains'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: sp('amaranth_bushel') } ],
        [ { amount: 2 * amountMultiplier, item: sp('amaranth_grains') } ]
    );

    // -- COPPER FROM VERIDIUM -- //
    lsm(
        st('copper_dust_from_veridium'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: cr('veridium') } ],
        [ 
            { amount: 1 * amountMultiplier, item: mi('copper_dust') },
            { amount: 1 * amountMultiplier, item: mi('copper_dust'), probability: 0.5 }
        ]
    );

    // -- ZINC DUST ROM ASURINE -- //
    lsm(
        st('zinc_dust_from_asurine'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: cr('asurine') } ],
        [ 
            { amount: 1 * amountMultiplier, item: tr('zinc_dust') },
            { amount: 1 * amountMultiplier, item: tr('zinc_dust'), probability: 0.5 }
        ]
    );

    // -- GOLD DUST FROM OCHRUM -- //
    lsm(
        st('gold_dust_from_asurine'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: cr('ochrum') } ],
        [
            { amount: 1 * amountMultiplier, item: mi('gold_dust') },
            { amount: 1 * amountMultiplier, item: mi('gold_dust'), probability: 0.5 }
        ]
    );

    // -- IRON DUST FROM CRIMSITE -- //
    lsm(
        st('iron_dust_from_crimsite'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: cr('crimsite') } ],
        [
            { amount: 1 * amountMultiplier, item: mi('iron_dust') },
            { amount: 1 * amountMultiplier, item: mi('iron_dust'), probability: 0.5 }
        ]
    );

    // -- QUARTZ DUST FROM RAW QUARTZ BLOCK -- //
    lsm(
        st('quartz_dust_from_quartz_block'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: 'byg:raw_quartz_block' } ],
        [
            { amount: 1 * amountMultiplier, item: mi('quartz_dust') },
            { amount: 1 * amountMultiplier, item: mi('quartz_dust'), probability: 0.5 }
        ]
    );
});