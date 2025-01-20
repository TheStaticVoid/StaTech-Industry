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
    let ae2 = (id) => `ae2:${id}`;
    let byg = (id) => `byg:${id}`;

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
    
    //Multiplie output for lsm. Accept javascript object with fields(minimum): item - item name, output - number of output for common macerator. Return array of objects with multiplied output value.
    let multiplyItemsAcceptObject = (input) => {
        let itemMax = 64;
        let newItemList = [];
        let tag = input["tag"] ? true : false;
        let amount = input["amount"] * amountMultiplier;
        let item = tag ? input["tag"] : input["item"];
        let prob = input["probability"];

        if (amount > itemMax) {
            let fullStacks = Math.floor(amount / itemMax);
            let leftOver = amount % itemMax;
            for (let i = 0; i < fullStacks; i++) {
                newItemList.push(newItem(tag, itemMax, item, prob));
            }

            if (leftOver > 0) {
                newItemList.push(newItem(tag, leftOver, item, prob));
            }
        } else {
            input["amount"] = amount;
            newItemList.push(input);
        }
        return newItemList;
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
    let gemRecipes = (gemName) => {
        const DATA = [
            { inputName: `${gemName}_shard`, outputAmount: 2 },
            { inputName: `${gemName}_block`, outputAmount: 4 },
            { inputName: `small_${gemName}_bud`, outputAmount: 4 },
            { inputName: `medium_${gemName}_bud`, outputAmount: 6 },
            { inputName: `large_${gemName}_bud`, outputAmount: 8 },
            { inputName: `${gemName}_cluster`, outputAmount: 16 }
        ];

        DATA.forEach(data => {
            let gemID = data.inputName.includes('amethyst') ? mc(data.inputName) : sp(data.inputName);
            lsm(
                st(`${gemName}_powder_from_${data.inputName}`),
                powerConstant,
                200 * timeMultiplier,
                [ { amount: 1 * amountMultiplier, item: gemID } ],
                multiplyItemsAcceptObject( { amount: data.outputAmount, item: sp(`${gemName}_powder`) })
            );
        });
    }
    
    const GEM_NAMES = [
        'amethyst',
        'citrine',
        'topaz',
        'moonstone',
        'onyx'
    ];

    GEM_NAMES.forEach(name => {
        gemRecipes(name);
    });

    // -- QUITOXIC POWDER -- //
    lsm(
        st('quitoxic_powder'),
        powerConstant,
        200 * timeMultiplier,
        [ { amount: 1 * amountMultiplier, item: sp('quitoxic_reeds') } ],
        [ { amount: 2 * amountMultiplier, item: sp('quitoxic_powder') } ]
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
    
    // -- CERTUS QUARTZ FROM BUDS AND CLUSTER
    const CERTUS_DUST_DATA = [
        { inputName: "small_quartz_bud", outputAmount: 2 },
        { inputName: "medium_quartz_bud", outputAmount: 2 },
        { inputName: "large_quartz_bud", outputAmount: 2 },
        { inputName: "quartz_cluster", outputAmount: 8 }
    ];
    
    CERTUS_DUST_DATA.forEach(data=>{
        lsm(
            st(`certus_quartz_dust_from_${data.inputName}`),
            powerConstant,
            200 * timeMultiplier,
            [ { amount: 1 * amountMultiplier, item: ae2(data.inputName) } ],
            [ { amount: data.outputAmount * amountMultiplier, item: ae2('certus_quartz_dust') } ]
        );
    });
    
    // -- BYG SAND FROM SANDSTONE -- //
    const BYG_SAND_COLORS = [
        'blue',
        'black',
        'white',
        'pink',
        'purple'
    ];
    
    BYG_SAND_COLORS.forEach(color => {
        lsm(
            st(`${color}_sand_from_sandstone`),
            powerConstant,
            100 * timeMultiplier,
            [ { amount: 1 * amountMultiplier, item: byg(`${color}_sandstone`) } ],
            [ { amount: 4 * amountMultiplier, item: byg(`${color}_sand`) } ]
        );
    });
    
    // -- SPECTRUM RESOURCE BUDS AND CLUSTERS
    const SPECTRUM_ONE = [
        { in: "coal", out: mc("coal") },
        { in: "iron", out: mi("iron_dust") },
        { in: "gold", out: mi("gold_dust") },
        { in: "diamond", out: mc("diamond") },
        { in: "emerald", out: mc("emerald") },
        { in: "redstone", out: mc("redstone") },
        { in: "lapis", out: mc("lapis_lazuli") },
        { in: "copper", out: mi("copper_dust") },
        { in: "quartz", out: mc("quartz") },
        { in: "netherite_scrap", out: mc("netherite_scrap") },
        { in: "echo", out: mc("echo_shard") },
        { in: "prismarine", out: mc("prismarine_crystals") }
    ];
    
    const SPECTRUM_TWO = [
        { in: "certus_quartz", out: ae2("certus_quartz_dust") },
        { in: "fluix", out: ae2("fluix_dust") }
    ];
    
    let recipeForSpBudsAndClusters = (inputOutputNames, numberOfOutput) => {
        inputOutputNames.forEach(data => {
            let outName = data.out.slice(data.out.indexOf(':') + 1, data.out.length);
            lsm(
                st(`${outName}_from_small_${data.in}_bud`),
                powerConstant,
                200 * timeMultiplier,
                [ { amount: 1 * amountMultiplier, item: sp(`small_${data.in}_bud`) } ],
                multiplyItemsAcceptObject({ amount: numberOfOutput[0], item: data.out }),
            );
            lsm(
                st(`${outName}_from_large_${data.in}_bud`),
                powerConstant,
                200 * timeMultiplier,
                [ { amount: 1 * amountMultiplier, item: sp(`large_${data.in}_bud`) } ],
                multiplyItemsAcceptObject({ amount: numberOfOutput[1], item: data.out }),
            );
            lsm(
                st(`${outName}_from_${data.in}_cluster`),
                powerConstant,
                200 * timeMultiplier,
                [ { amount: 1 * amountMultiplier, item: sp(`${data.in}_cluster`) } ],
                multiplyItemsAcceptObject({ amount: numberOfOutput[2], item: data.out }),
            );
        });
    };
    
    //output for [small bud, large bud, cluster]
    recipeForSpBudsAndClusters(SPECTRUM_ONE, [1,1,6]);
    recipeForSpBudsAndClusters(SPECTRUM_TWO, [2,2,12]);
    recipeForSpBudsAndClusters([ { in: "bismuth", out: sp("bismuth_crystal") } ], [2,2,5]);
    recipeForSpBudsAndClusters([ { in: "glowstone", out: mc("glowstone_dust") } ], [1,1,12]);
});