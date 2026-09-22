// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

/**  PLANT
 *   @param {string} seed Namespaced identifier of this plant's seed
 *   @param {MIItem} primaryOutput MIItem object containing an item, quantity, and probability for the primary output of the plant.
 *   @param {MIItem} secondaryOutput MIItem object containing an item, quantity,  and probability for the secondary output of the plant.
 *   @param {?MIItem} extraDrop MIItem object containing an item, quantity, and probability for any extra drops a plant may have, like more seeds.
 *   @param {?string} fluid Namespaced identifier of the fluid needed to grow this plant. Assumes the fluid is water if not supplied.
 *
 * @example
 * ```javascript
 *  Plant(mc('pumpkin_seeds'), { amount: 1, item: mc('pumpkin') }, { amount: 1, item: mc('pumpkin_seeds'), probability: 0.5 } );
 *  Plant(mc('wheat_seeds'), { amount: 1, item: mc('wheat') }, { amount: 1, item: mc('wheat'), probability: 0.5 }, { amount: 1, item: mc('wheat_seeds'), probability: 0.5 } );
 *  Plant(mc('chorus_flower'), { amount: 1, item: mc('chorus_fruit') }, { amount: 1, item: mc('chorus_fruit'), probability: 0.5 }, { amount: 1, item: mc('chorus_flower'), probability: 0.5 }, mi('liquid_ender') );
 * ```
 */
function Plant(seeds, primaryOutput, secondaryOutput, extraDrop, fluid) {
    return {
        seeds: seeds,
        primaryOutput: primaryOutput,
        secondaryOutput: secondaryOutput,
        extraDrop: extraDrop,
        fluid: fluid,
    };
}

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) =>
        `statech:modern_industrialization/photosynthetic_chamber/${id}`;

    // This is all the seeds in the game with their respective outputs
    // prettier-ignore
    const cropList = [
                // Seed                             Primary Output                                                      Secondary Output                                                      Extra Drop                                                            Fluid
        Plant(mc('wheat_seeds'),                 { amount: 1, item: mc('wheat') },                                   { amount: 1, item: mc('wheat'), probability: 0.5 },                   { amount: 1, item: mc('wheat_seeds'), probability: 0.5 } ),
        Plant(mc('pumpkin_seeds'),               { amount: 1, item: mc('pumpkin') },                                 { amount: 1, item: mc('pumpkin_seeds'), probability: 0.5 } ),
        Plant(mc('melon_seeds'),                 { amount: 1, item: mc('melon') },                                   { amount: 1, item: mc('melon_seeds'), probability: 0.5 } ),
        Plant(mc('beetroot_seeds'),              { amount: 1, item: mc('beetroot') },                                { amount: 1, item: mc('beetroot'), probability: 0.5 },                { amount: 1, item: mc('beetroot_seeds'), probability: 0.5 } ),
        Plant(mc('carrot'),                      { amount: 1, item: mc('carrot') },                                  { amount: 1, item: mc('carrot'), probability: 0.5 } ),
        Plant(mc('potato'),                      { amount: 1, item: mc('potato') },                                  { amount: 1, item: mc('potato'), probability: 0.5 },                  { amount: 1, item: mc('poisonous_potato'), probability: 0.02 } ),
        Plant(fd('cabbage_seeds'),               { amount: 1, item: fd('cabbage') },                                 { amount: 1, item: fd('cabbage'), probability: 0.5 },                 { amount: 1, item: fd('cabbage_seeds'), probability: 0.5 } ),
        Plant(fd('tomato_seeds'),                { amount: 1, item: fd('tomato') },                                  { amount: 1, item: fd('rotten_tomato'), probability: 0.02 },          { amount: 1, item: fd('tomato_seeds'), probability: 0.5 } ),
        Plant(fd('onion'),                       { amount: 1, item: fd('onion') },                                   { amount: 1, item: fd('onion'), probability: 0.5 } ),
        Plant(fd('rice'),                        { amount: 1, item: fd('rice_panicle') },                            { amount: 1, item: fd('rice_panicle'), probability: 0.5 },            { amount: 1, item: fd('rice'), probability: 0.5 } ),
        Plant(mc('cactus'),                      { amount: 2, item: mc('cactus') },                                  { amount: 1, item: mc('cactus'), probability: 0.5 } ),
        Plant(mc('sugar_cane'),                  { amount: 2, item: mc('sugar_cane') },                              { amount: 1, item: mc('sugar_cane'), probability: 0.5 } ),
        Plant(mc('cocoa_beans'),                 { amount: 2, item: mc('cocoa_beans') },                             { amount: 2, item: mc('cocoa_beans'), probability: 0.5 } ),
        Plant(mc('kelp'),                        { amount: 4, item: mc('kelp') },                                    { amount: 4, item: mc('kelp'), probability: 0.5 } ),
        Plant(mc('bamboo'),                      { amount: 4, item: mc('bamboo') },                                  { amount: 4, item: mc('bamboo'), probability: 0.5 } ),
        Plant(mc('vine'),                        { amount: 1, item: mc('vine') },                                    { amount: 1, item: mc('vine'), probability: 0.5 } ),
        Plant(mc('sweet_berries'),               { amount: 1, item: mc('sweet_berries') },                           { amount: 1, item: mc('sweet_berries'), probability: 0.5 } ),
        Plant(mc('glow_berries'),                { amount: 1, item: mc('glow_berries') },                            { amount: 1, item: mc('glow_berries'), probability: 0.5 } ),
        Plant(mc('brown_mushroom'),              { amount: 1, item: mc('brown_mushroom') },                          { amount: 1, item: mc('brown_mushroom'), probability: 0.5 } ),
        Plant(mc('red_mushroom'),                { amount: 1, item: mc('red_mushroom') },                            { amount: 1, item: mc('red_mushroom'), probability: 0.5 } ),
        Plant(cud('corn_kernels'),               { amount: 1, item: cud('corn_cob') },                               { amount: 1, item: fd('straw') },                                     { amount: 2, item: cud('corn_kernels'), probability: 0.5 } ),
        Plant(cud('cucumber_seeds'),             { amount: 1, item: cud('cucumber') },                               { amount: 1, item: cud('cucumber'), probability: 0.5 },               { amount: 1, item: cud('cucumber_seeds'), probability: 0.5 } ),
        Plant(cud('eggplant_seeds'),             { amount: 1, item: cud('eggplant') },                               { amount: 1, item: cud('white_eggplant'), probability: 0.75 },        { amount: 1, item: cud('eggplant_seeds'), probability: 0.5 } ),
        Plant(rd('cotton_seeds'),                { amount: 1, item: rd('cotton_boll') },                             { amount: 1, item: rd('cotton_boll'), probability: 0.5 },             { amount: 1, item: rd('cotton_seeds'), probability: 0.5 } ),
        Plant(rd('coffee_beans'),                { amount: 1, item: rd('coffee_beans') },                            { amount: 4, item: rd('coffee_beans'), probability: 0.5 } ),
        Plant(rd('bell_pepper_seeds'),           { amount: 1, item: rd('bell_pepper_red'), probability: 0.75 },      { amount: 1, item: rd('bell_pepper_green'), probability: 0.275 },     { amount: 1, item: rd('bell_pepper_yellow'), probability: 0.275 } ),
        Plant(rd('pale_bell_pepper_seeds'),      { amount: 1, item: rd('bell_pepper_orange'), probability: 0.44 },   { amount: 1, item: rd('bell_pepper_white'), probability: 0.44 },      { amount: 1, item: rd('bell_pepper_pink'), probability: 0.44 } ),
        Plant(rd('dark_bell_pepper_seeds'),      { amount: 1, item: rd('bell_pepper_blue'), probability: 0.44 },     { amount: 1, item: rd('bell_pepper_purple'), probability: 0.44 },     { amount: 1, item: rd('bell_pepper_black'), probability: 0.44 } ),
        Plant(mc('nether_wart'),                 { amount: 1, item: mc('nether_wart') },                             { amount: 1, item: mc('nether_wart'), probability: 0.5 },             null,                                                                    mc('lava')),
        Plant(mc('chorus_flower'),               { amount: 1, item: mc('chorus_fruit') },                            { amount: 1, item: mc('chorus_fruit'), probability: 0.5 },            { amount: 1, item: mc('chorus_flower'), probability: 0.5 },              mi('liquid_ender')),
    ];

    // Create recipes for each of the items in the list
    function makePhotoChamberRecipes(plant, condition) {
        let { seeds, primaryOutput, secondaryOutput, extraDrop, fluid } = plant;
        let id = `${seeds.split(':')[1]}`;
        let photoChamberOutputs = [primaryOutput, secondaryOutput];
        let photoChamberFluidInput = [];

        // handle optional third output
        if (plant.extraDrop) {
            photoChamberOutputs.push(plant.extraDrop);
        }

        // use water unless otherwise specified
        if (plant.fluid) {
            let fluid = {
                amount: 100,
                fluid: plant.fluid,
            };
            photoChamberFluidInput.push(fluid);
        } else {
            photoChamberFluidInput.push({
                amount: 100,
                fluid: mc('water'),
            });
        }
        // handle plants with block conditions
        if (condition.block && condition.direction) {
            photoChamber(
                event,
                st(id),
                8,
                600,
                [{ amount: 1, item: seeds, probability: 0.0 }],
                photoChamberOutputs,
                photoChamberFluidInput,
                condition.block,
                condition.direction
            );
        } else {
            photoChamber(
                event,
                st(id),
                8,
                600,
                [{ amount: 1, item: seeds, probability: 0.0 }],
                photoChamberOutputs,
                photoChamberFluidInput
            );
        }
    }

    cropList.forEach((plant) => makePhotoChamberRecipes(plant, false));

    const flowers = Ingredient.of('#minecraft:flowers')
        .except([
            '#minecraft:leaves',
            'minecraft:chorus_flower',
            '#minecraft:saplings',
        ])
        .getStacks()
        .toArray();
    flowers.forEach((recipe) => {
        let namespace = recipe.id.split(':')[0];
        let itemName = recipe.id.split(':')[1];
        if (namespace != 'spectrum') {
            photoChamber(
                event,
                st(`${namespace}_${itemName}`),
                8,
                600,
                [{ amount: 1, item: recipe.id, probability: 0.0 }],
                [
                    { amount: 1, item: recipe.id },
                    { amount: 1, item: recipe.id, probability: 0.5 },
                ],
                [{ amount: 100, fluid: mc('water') }]
            );
        } else {
            photoChamber(
                event,
                st(`${namespace}_${itemName}`),
                8,
                600,
                [{ amount: 1, item: recipe.id, probability: 0.0 }],
                [
                    { amount: 1, item: recipe.id },
                    { amount: 1, item: recipe.id, probability: 0.5 },
                ],
                [{ amount: 100, fluid: mc('water') }],
                sp('polished_onyx'),
                'below'
            );
        }
    });
});
