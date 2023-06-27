ServerEvents.recipes(e => {

    let st = (id) => `statech:modern_industrialization/mega_smelter/${id}`;

    let item_blacklist = [
        'minecraft:golden_pickaxe',
        'minecraft:golden_shovel',
        'minecraft:golden_axe',
        'minecraft:golden_hoe',
        'minecraft:golden_sword',
        'minecraft:golden_helmet',
        'minecraft:golden_chestplate',
        'minecraft:golden_leggings',
        'minecraft:golden_boots',
        'minecraft:golden_horse_armor',
        'minecraft:iron_chestplate',
        'minecraft:iron_shovel',
        'minecraft:netherite_hoe',
        'nethersdelight:iron_machete',
        'minecraft:water_bucket',
        'minecraft:chainmail_helmet',
        'minecraft:netherite_boots',
        'minecraft:chainmail_chestplate',
        'minecraft:iron_hoe',
        'farmersdelight:iron_knife',
        'nethersdelight:golden_machete',
        'minecraft:netherite_leggings',
        'minecraft:netherite_chestplate',
        'minecraft:iron_helmet',
        'minecraft:chainmail_boots',
        'minecraft:netherite_sword',
        'minecraft:chainmail_leggings',
        'anim_guns:plastic',
        'minecraft:iron_pickaxe',
        'minecraft:iron_sword',
        'minecraft:netherite_pickaxe',
        'minecraft:iron_axe',
        'artifacts:everlasting_beef',
        'farmersdelight:golden_knife',
        'minecraft:netherite_shovel',
        'minecraft:iron_boots',
        'minecraft:netherite_helmet',
        'minecraft:iron_leggings',
        'modern_industrialization:iridium_dust',
        'c:iron_ingots',
        'c:iron_plates',
        'minecraft:netherite_axe',
        'minecraft:iron_horse_armor',
        'minecraft:sugar_cane',
        'modern_industrialization:raw_iridium',
        'modern_industrialization:iridium_dust',
        'modern_industrialization:iridium_ore',
        'c:sheldonite_ores',
        'simplyswords:uniques',
        'c:platinum_dusts',
        'c:iron_blocks',
        'c:uranium_ores',
        'c:raw_uranium_ores',
        'create:crushed_uranium_ore'
    ];

    // The cost of every recipe
    let eu = 16;
    // The duration (in ticks) of every recipe
    let duration = 200;
    // The amount at a time to process
    let amount = 16;

    let megaSmelt = (id, input, output) => {
        e.custom({
            type: 'modern_industrialization:mega_smelter',
            eu: eu,
            duration: duration,
            id: id,
            item_inputs: input,
            item_outputs: output
        });
    }
    

    e.forEachRecipe( {type: 'minecraft:smelting', not: { mod: 'catwalksinc' }}, recipe => {
        const recipeJson = JSON.parse(recipe.json.toString());
        for (let key in recipeJson.ingredient) {
            if (key == 'item' || key == 'tag') {
                let newIngredient = { amount: amount }
                newIngredient[key] = recipeJson.ingredient[key];

                if (item_blacklist.includes(recipeJson.ingredient[key]))
                    continue;

                let newResult = { amount: amount }
                newResult['item'] = recipeJson.result;
                
                let id = st(`${recipeJson.result.split(':')[1]}_from_${newIngredient[key].split(':')[1]}`);                
                megaSmelt(id, newIngredient, newResult);
            }
        }
    });

    // I think the load order of KJS scripts makes it so galena smelting doesn't get added to the function above
    // -- GALENA ORE -- //
    megaSmelt(
        st('galena_ingot_from_galena_ore'),
        [ { amount: 16, tag: 'c:galena_ores' } ],
        [ { amount: 16, item: 'modern_industrialization:lead_ingot' } ]
    );

    // -- GALENA DUST -- //
    megaSmelt(
        st('galena_ingot_from_galena_dust'),
        [ { amount: 16, item: 'techreborn:galena_dust' } ],
        [ { amount: 16, item: 'modern_industrialization:lead_ingot' } ]
    );
});