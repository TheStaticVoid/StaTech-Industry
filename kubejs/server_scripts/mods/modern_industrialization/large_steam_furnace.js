// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/large_steam_furnace/${id}`;

    let item_blacklist = [
        mc('golden_pickaxe'),
        mc('golden_shovel'),
        mc('golden_axe'),
        mc('golden_hoe'),
        mc('golden_sword'),
        mc('golden_helmet'),
        mc('golden_chestplate'),
        mc('golden_leggings'),
        mc('golden_boots'),
        mc('golden_horse_armor'),
        mc('iron_chestplate'),
        mc('iron_shovel'),
        mc('netherite_hoe'),
        nd('iron_machete'),
        mc('water_bucket'),
        mc('chainmail_helmet'),
        mc('netherite_boots'),
        mc('chainmail_chestplate'),
        mc('iron_hoe'),
        fd('iron_knife'),
        nd('golden_machete'),
        mc('netherite_leggings'),
        mc('netherite_chestplate'),
        mc('iron_helmet'),
        mc('chainmail_boots'),
        mc('netherite_sword'),
        mc('chainmail_leggings'),
        ag('plastic'),
        mc('iron_pickaxe'),
        mc('iron_sword'),
        mc('netherite_pickaxe'),
        mc('iron_axe'),
        ar('everlasting_beef'),
        fd('golden_knife'),
        mc('netherite_shovel'),
        mc('iron_boots'),
        mc('netherite_helmet'),
        mc('iron_leggings'),
        mi('iridium_dust'),
        mc('netherite_axe'),
        mc('iron_horse_armor'),
        mc('sugar_cane'),
        mi('raw_iridium'),
        mi('iridium_dust'),
        mi('iridium_ore'),
        cr('crushed_uranium_ore'),
        'c:iron_ingots',
        'c:iron_plates',
        'c:sheldonite_ores',
        'simplyswords:uniques',
        'c:platinum_dusts',
        'c:raw_platinum_ores',
        'c:platinum_ores',
        'c:iron_blocks',
        'c:uranium_ores',
        'c:raw_uranium_ores',
    ];

    // The cost of every recipe
    let eu = 2;
    // The duration (in ticks) of every recipe
    let duration = 200;
    // The amount at a time to process
    let amount = 8;
    
    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    event.forEachRecipe( {type: mc('smelting'), not: { mod: 'catwalksinc' }}, recipe => {
        const recipeJson = JSON.parse(recipe.json.toString());
        for (let key in recipeJson.ingredient) {
            if (key == 'item' || key == 'tag') {
                let newIngredient = { amount: amount }
                newIngredient[key] = recipeJson.ingredient[key];

                if (item_blacklist.includes(recipeJson.ingredient[key]))
                    continue;

                let newResult = { amount: amount }
                newResult['item'] = recipeJson.result;
                
                let id = st(`${recipeJson.result.split(':')[0]}_${recipeJson.result.split(':')[1]}_from_${newIngredient[key].split(':')[0]}_${newIngredient[key].split(':')[1]}`);
                lsf(event, id, eu, duration, newIngredient, newResult);
            }
        }
    });

    // I think the load order of KJS scripts makes it so galena smelting doesn't get added to the function above
    // -- GALENA ORE -- //
    lsf(
        event,
        st('galena_ingot_from_galena_ore'),
        eu,
        duration,
        [ { amount: amount, tag: 'c:galena_ores' } ],
        [ { amount: amount, item: mi('lead_ingot') } ]
    );

    // -- GALENA DUST -- //
    lsf(
        event,
        st('galena_ingot_from_galena_dust'),
        eu,
        duration,
        [ { amount: amount, item: tr('galena_dust') } ],
        [ { amount: amount, item: mi('lead_ingot') } ]
    );

    lsf(
        event,
        st('tin_ingot_from_raw_tin'),
        eu,
        duration,
        [ { amount: amount, tag: 'c:raw_zinc_ores' } ],
        [ { amount: amount, item: tr('zinc_ingot') } ]
    );
});