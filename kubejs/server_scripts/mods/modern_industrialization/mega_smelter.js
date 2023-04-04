ServerEvents.recipes(e => {
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
        'minecraft:iron_horse_armor'
    ];

    let megaSmelt = (input, output, isTag) => {
        if (!item_blacklist.includes(input)) {
            if (!isTag) {
                e.custom({
                    type: 'modern_industrialization:mega_smelter',
                    eu: 16,
                    duration: 20,
                    item_inputs: [ {
                        amount: 8,
                        item: input
                    }],
                    item_outputs: [ {
                        amount: 8,
                        item: output
                    }]
                });
            } else {
                e.custom({
                    type: 'modern_industrialization:mega_smelter',
                    eu: 16,
                    duration: 20,
                    item_inputs: [{
                            amount: 8,
                            tag: input
                    }],
                    item_outputs: [{
                            amount: 8,
                            item: output
                    }]
                });
            }
        }
    }

    let loopList = (input, output, recipeJson) => {
        console.info('input: ' + recipeJson.ingredient[input].item);
        console.info('tag: ' + recipeJson.ingredient[input].tag);

        recipeJson.ingredient[input].item == null ? megaSmelt(recipeJson.ingredient[input].tag, output, true) : megaSmelt(recipeJson.ingredient[input].item, output, false);
    }   
    

    e.forEachRecipe( {type: 'minecraft:smelting', not: { mod: 'catwalksinc' }}, recipe => {
        const recipeJson = JSON.parse(recipe.json.toString());
        console.info('recipeJson: ' + recipeJson);

        let recipeOutput = recipeJson.result;
        for (let input in recipeJson.ingredient) {
            console.info('input: ' + input);
            switch(input) {
                case 'item':
                        megaSmelt(recipeJson.ingredient.item, recipeOutput, false);
                        break;
                case 'tag':
                        megaSmelt(recipeJson.ingredient.tag, recipeOutput, true);
                        break;
                default:
                    loopList(input, recipeOutput, recipeJson);
            }
        }

        if (recipeOutput == 'techreborn:refined_iron_ingot') {
            console.info(recipeJson);
        }
    });
});