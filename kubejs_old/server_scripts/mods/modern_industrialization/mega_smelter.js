// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/mega_smelter/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let nd = (id) => `nethersdelight:${id}`;
    let fd = (id) => `farmersdelight:${id}`;
    let ag = (id) => `anim_guns:${id}`;
    let ar = (id) => `artifacts:${id}`;
    let cr = (id) => `create:${id}`;
    let tr = (id) => `techreborn:${id}`;

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
    let eu = 16;
    // The duration (in ticks) of every recipe
    let duration = 200;
    // The amount at a time to process
    let amount = 32;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let megaSmelt = (id, input, output) => {
        e.custom({
            type: mi('mega_smelter'),
            eu: eu,
            duration: duration,
            item_inputs: input,
            item_outputs: output
        })
        .id(id);
    }
    
    e.forEachRecipe( {type: mc('smelting'), not: { mod: 'catwalksinc' }}, recipe => {
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
                megaSmelt(id, newIngredient, newResult);
            }
        }
    });

    // I think the load order of KJS scripts makes it so galena smelting doesn't get added to the function above
    // -- GALENA ORE -- //
    megaSmelt(
        st('galena_ingot_from_galena_ore'),
        [ { amount: amount, tag: 'c:galena_ores' } ],
        [ { amount: amount, item: mi('lead_ingot') } ]
    );

    // -- GALENA DUST -- //
    megaSmelt(
        st('galena_ingot_from_galena_dust'),
        [ { amount: amount, item: tr('galena_dust') } ],
        [ { amount: amount, item: mi('lead_ingot') } ]
    );

    megaSmelt(
        st('tin_ingot_from_raw_tin'),
        [ { amount: amount, tag: 'c:raw_zinc_ores' } ],
        [ { amount: amount, item: tr('zinc_ingot') } ]
    );
});