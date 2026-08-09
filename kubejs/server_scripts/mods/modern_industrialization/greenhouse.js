// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

/**
 *   @param {string} sapling Namespaced identifier of this tree's sapling
 *   @param {string} log Namespaced identifier of this tree's log
 *   @param {string} leaves Namespaced identifier of this tree's leaves
 *   @param {string} fluid Namespaced identifier of the fluid needed to grow this tree
 *   @param {MIItem} extraDrop MIItem object containing an item and probability for any extra drops a tree may have, like apples.
 *
 * @example
 * ```javascript
 *  Tree(mc('spruce_sapling'), mc('spruce_log'), mc('spruce_leaves'), mc('water'));
 *  Tree(mc('oak_sapling'), mc('oak_log'), mc('oak_leaves'), mc('water'),
 *      {
 *          item: mc('apple'),
 *          amount: 1,
 *          probability: 0.12
 *      }
 *  );
 * ```
 */
function Tree(sapling, log, leaves, fluid, extraDrop) {
    return {
        sapling: sapling,
        log: log,
        leaves: leaves,
        fluid: fluid,
        extraDrop: extraDrop,
    };
}

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/greenhouse/${id}`;

    // This is all the saplings in the game with their corresponding logs and leaves

    // prettier-ignore
    const saplingLogList = [
              // Sapling                    Log                   Leaves                      Fluid
        Tree(mc('spruce_sapling'),       mc('spruce_log'),     mc('spruce_leaves'),        mc('water')),
        Tree(mc('birch_sapling'),        mc('birch_log'),      mc('birch_leaves'),         mc('water')),
        Tree(mc('jungle_sapling'),       mc('jungle_log'),     mc('jungle_leaves'),        mc('water')),
        Tree(mc('acacia_sapling'),       mc('acacia_log'),     mc('acacia_leaves'),        mc('water')),
        Tree(mc('mangrove_propagule'),   mc('mangrove_log'),   mc('mangrove_leaves'),      mc('water')),
        Tree(mc('cherry_sapling'),       mc('cherry_log'),     mc('cherry_leaves'),        mc('water')),
        Tree(mc('crimson_fungus'),       mc('crimson_stem'),   mc('nether_wart_block'),    mi('blood')),
        Tree(mc('warped_fungus'),        mc('warped_stem'),    mc('warped_wart_block'),    mi('blood')),
        Tree(nm('maple_sapling'),        nm('maple_log'),      nm('maple_leaves'),         mc('water')),
        Tree(nm('red_maple_sapling'),    nm('maple_log'),      nm('red_maple_leaves'),     mc('water')),
        Tree(nm('willow_sapling'),       nm('willow_log'),     nm('willow_leaves'),        mc('water')),
        Tree(nm('yellow_birch_sapling'), mc('birch_log'),      nm('yellow_birch_leaves'),  mc('water')),
        Tree(nm('pale_cherry_sapling'),  mc('cherry_log'),     nm('pale_cherry_leaves'),   mc('water')),
        Tree(ap('twisted_sapling'),      ap('twisted_log'),    ap('twisted_leaves'),       mc('water')),
    ];
    // prettier-ignore
    const spectrumSaplingList = [
        Tree(sp('orange_sapling'),       sp('orange_log'),     sp('orange_leaves'),        mc('water')),
        Tree(sp('magenta_sapling'),      sp('magenta_log'),    sp('magenta_leaves'),       mc('water')),
        Tree(sp('light_blue_sapling'),   sp('light_blue_log'), sp('light_blue_leaves'),    mc('water')),
        Tree(sp('yellow_sapling'),       sp('yellow_log'),     sp('yellow_leaves'),        mc('water')),
        Tree(sp('lime_sapling'),         sp('lime_log'),       sp('lime_leaves'),          mc('water')),
        Tree(sp('pink_sapling'),         sp('pink_log'),       sp('pink_leaves'),          mc('water')),
        Tree(sp('cyan_sapling'),         sp('cyan_log'),       sp('cyan_leaves'),          mc('water')),
        Tree(sp('purple_sapling'),       sp('purple_log'),     sp('purple_leaves'),        mc('water')),
        Tree(sp('blue_sapling'),         sp('blue_log'),       sp('blue_leaves'),          mc('water')),
        Tree(sp('brown_sapling'),        sp('brown_log'),      sp('brown_leaves'),         mc('water')),
        Tree(sp('green_sapling'),        sp('green_log'),      sp('green_leaves'),         mc('water')),
        Tree(sp('red_sapling'),          sp('red_log'),        sp('red_leaves'),           mc('water')),
        Tree(sp('black_sapling'),        sp('black_log'),      sp('black_leaves'),         mc('water')),
        Tree(sp('white_sapling'),        sp('white_log'),      sp('white_leaves'),         mc('water')),
        Tree(sp('gray_sapling'),         sp('gray_log'),       sp('gray_leaves'),          mc('water')),
        Tree(sp('light_gray_sapling'),   sp('light_gray_log'), sp('light_gray_leaves'),    mc('water')),
    ];
    // prettier-ignore
    const saplingWithExtraDrops = [
        Tree(mc('oak_sapling'),          mc('oak_log'),         mc('oak_leaves'),          mc('water'),     { item: mc('apple'),     probability: 0.75 }),
        Tree(mc('dark_oak_sapling'),     mc('dark_oak_log'),    mc('dark_oak_leaves'),     mc('water'),     { item: mc('apple'),     probability: 0.5  }),
        Tree(nm('autumnal_oak_sapling'), mc('oak_log'),         nm('autumnal_oak_leaves'), mc('water'),     { item: nm('pear'),      probability: 0.75 }),
        Tree(nm('walnut_sapling'),       nm('walnut_log'),      nm('walnut_leaves'),       mc('water'),     { item: nm('walnuts'),   probability: 0.05 }),
        Tree(nm('pine_sapling'),         nm('pine_log'),        nm('pine_leaves'),         mc('water'),     { item: nm('pine_nuts'), probability: 0.1  }),
        Tree(cud('avocado_sapling'),     cud('avocado_log'),    cud('avocado_leaves'),     mc('water'),     { item: cud('avocado'),  probability: 0.5  }),
    ];
    function makeGreenhouseRecipes(tree, condition) {
        let { log, sapling, leaves, fluid } = tree;
        let id = `${log.split(':')[1]}_from_${sapling.split(':')[1]}`;
        // calling the "helper function" directly was SUPER verbose, so this is a more concise wrapper around it.
        const greenhouseHelper = (fluid, multiplier, id_suffix) => {
            let treeOutputs = [
                { amount: multiplier * 8, item: log },
                { amount: multiplier * 16, item: leaves },
                {
                    amount: Math.ceil(multiplier / 2),
                    item: sapling,
                    probability: 0.5,
                },
            ];

            if (tree.extraDrop) {
                let extra = {
                    item: tree.extraDrop.item,
                    probability: tree.extraDrop.probability,
                    amount: multiplier * 2,
                };
                treeOutputs.push(extra);
            }
            // handle trees with block conditions
            if (condition.block && condition.direction) {
                greenhouse(
                    event,
                    st(id + id_suffix),
                    8,
                    1200,
                    [{ amount: 1, item: sapling, probability: 0.0 }],
                    treeOutputs,
                    [{ amount: 100, fluid: fluid }],
                    condition.block,
                    condition.direction
                );
            } else {
                greenhouse(
                    event,
                    st(id + id_suffix),
                    8,
                    1200,
                    [{ amount: 1, item: sapling, probability: 0.0 }],
                    treeOutputs,
                    [{ amount: 100, fluid: fluid }]
                );
            }
        };

        // For every sapling, add a regular and bone meal variant of the recipe
        greenhouseHelper(fluid, 1, '');
        greenhouseHelper(
            mi(`nutrient_rich_${fluid.split(':')[1]}`),
            2,
            '_bonemeal'
        );
        greenhouseHelper(ei('npk_fertilizer'), 4, '_npk');
    }

    saplingLogList.forEach((tree) => makeGreenhouseRecipes(tree, false));
    spectrumSaplingList.forEach((tree) =>
        makeGreenhouseRecipes(tree, {
            block: sp('polished_onyx'),
            direction: 'below',
        })
    );
    saplingWithExtraDrops.forEach((tree) => makeGreenhouseRecipes(tree, false));
});
