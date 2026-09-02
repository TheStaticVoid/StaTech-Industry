// -----------------------------------------
// CREATED BY GRONK FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

// priority: 10000
/**
 * @typedef {{item?: Special.Item, tag?: string}} ShapelessInput An array of {item: id} or {tag: id}
 * @typedef {[item: Special.Item, count: number, chance?: number?]} SPItems A tuple of [item, count, chance?]
 */

// -- FARMER'S DELIGHT COOKING -- //
/**
 * Cooking Pot
 * @param {*} event
 * @param {!string} id - Recipe ID
 * @param {!number} xp - XP output
 * @param {?string} book_tab - Recipe book tab
 * @param {!{count: number, id: string}} container - Container that item can be removed from pot with
 * @param {ShapelessInput} item_inputs - An array of {item: id} or {tag: id}
 * @param {!{count: number, id: string}} item_outputs
 */
let cooking = (
    event,
    id,
    xp,
    book_tab,
    container,
    item_inputs,
    item_outputs
) => {
    let newRecipe = {
        type: fd('cooking'),
        experience: xp,
        recipe_book_tab: book_tab,
    };

    if (container) newRecipe['container'] = container;
    if (item_inputs) newRecipe['ingredients'] = item_inputs;
    if (item_outputs) newRecipe['result'] = item_outputs;

    event.custom(newRecipe).id(id);
};

// -- SPECTRUM CINDERHEARTH -- //
/**
 * Cinderhearth
 * @param {*} event
 * @param {!string} id - Recipe ID
 * @param {!number} time - Recipe duration in ticks (1 second is 20 ticks)
 * @param {!number} xp - XP output
 * @param {Special.Item} item_input - Item ID
 * @param {SPItems[]} item_outputs - An array of tuples of [item, count, chance?]
 * @param {?string} advancement - advancement prerequisite ID
 * @param {?string} group - Recipe group ID
 * @param {?boolean} secret - hide recipe from recipe viewers
 */
let cinderhearth = (
    event,
    id,
    time,
    xp,
    item_input,
    item_outputs,
    advancement,
    group,
    secret
) => {
    let newRecipe = {
        type: sp('cinderhearth'),
        experience: xp,
        time: time,
    };
    newRecipe['ingredient'] = item_input;
    if (item_outputs) newRecipe['results'] = item_outputs;
    if (advancement) newRecipe.advancement = advancement;
    if (group) newRecipe.group = group;
    if (secret) newRecipe.secret = secret;
    event.custom(newRecipe).id(id);
};

// -- SPECTRUM FUSION SHRINE -- //
/**
 * Fusion Shrine
 * @param {*} event
 * @param {!string} id - Recipe ID
 * @param {!number} time - Recipe duration in ticks (1 second is 20 ticks)
 * @param {!number} xp - XP output
 * @param {!ShapelessInput[]} item_inputs - An array of {item: id} or {tag: id}
 * @param {!SPItems} item_outputs - Output ItemStack {item: 'spectrum:onyx_shard', count: 2, chance: 0.5}
 * @param {?{fluid: Special.Fluid}} fluid_input - Fluid ID for optional fluid input
 * @param {?*} world_conditions - See https://github.com/DaFuqs/Spectrum/wiki/Custom-Fusion-Shrine-Recipes#worldconditions
 * @param {?string} start_effect - See https://github.com/DaFuqs/Spectrum/wiki/Custom-Fusion-Shrine-Recipes#worldeffects
 * @param {string[]?} during_effects - See start_effect
 * @param {?string} end_effect - See start_effect
 * @param {?string} advancement - advancement prerequisite ID
 * @param {?string} group - Recipe group ID
 * @param {?boolean} secret - hide recipe from recipe viewers
 * @param {?boolean} copy_nbt - When true, copes the nbt custom name, enchants, ...) of the first item in the recipe
 * @param {?boolean} disable_boosts - When true, yield upgrades does not affect the output of the recipe
 * @param {?string} description - A localization string explaining the recipe (like the requirements). Is shown in recipe viewers
 */
let fusion_shrine = (
    event,
    id,
    time,
    xp,
    item_inputs,
    item_outputs,
    fluid_input,
    world_conditions,
    start_effect,
    during_effects,
    end_effect,
    advancement,
    group,
    secret,
    copy_nbt,
    disable_boosts,
    description
) => {
    let newRecipe = {
        type: sp('fusion_shrine'),
        experience: xp,
        time: time,
    };
    if (fluid_input) newRecipe['fluid'] = fluid_input;
    if (item_inputs) newRecipe['ingredients'] = item_inputs;
    if (item_outputs) newRecipe['result'] = item_outputs;
    if (advancement) newRecipe.advancement = advancement;
    if (group) newRecipe.group = group;
    if (secret) newRecipe.secret = secret;
    if (world_conditions) newRecipe['world_conditions'] = world_conditions;
    if (disable_boosts) newRecipe.disable_yield_upgrades = disable_boosts;
    if (description) newRecipe.description = description;
    if (copy_nbt) newRecipe.copy_nbt = copy_nbt;
    if (start_effect) {
        let effects = { start: start_effect };
        if (during_effects) effects.during = during_effects;
        if (end_effect) effects.finish = end_effect;
        newRecipe.effects = effects;
    }
    event.custom(newRecipe).id(id);
};

// -- SPECTRUM PEDESTAL -- //
/**
 * Pedestal
 * @param {*} event
 * @param {!string} id - Recipe ID
 * @param {!number} time - Recipe duration in ticks (1 second is 20 ticks)
 * @param {!string} tier - Pedestal tier
 * @param {?Map<string!, number!>} colors - Map with required amount of Gemstone Powders, {'spectrum:white': 1}
 * @param {!number} xp - XP output
 * @param {!string[]} pattern - Shaped crafting pattern
 * @param {{item: Special.Item}[]} item_inputs - Array of craftting pattern keys {A: 'minecraft:dirt', B: 'minecraft:cobblestone'}
 * @param {!SPItems} item_outputs - Output ItemStack {item: 'spectrum:onyx_shard', count: 2, chance: 0.5}
 * @param {?string} advancement - advancement prerequisite ID
 * @param {?string} group - Recipe group ID
 * @param {?boolean} secret - hide recipe from recipe viewers
 * @param {?boolean} skip_remainders - If recipe remainders should not be given (like empty buckets by crafting with a water bucket)
 * @param {?boolean} disable_boosts - When true, yield upgrades does not affect the output of the recipe
 */
let pedestal = (
    event,
    id,
    time,
    tier,
    colors,
    xp,
    pattern,
    item_inputs,
    item_outputs,
    advancement,
    group,
    secret,
    skip_remainders,
    disable_boosts
) => {
    let newRecipe = {
        type: sp('pedestal'),
        experience: xp,
        time: time,
        tier: tier,
    };
    if (colors) newRecipe['colors'] = colors;
    if (pattern) newRecipe['pattern'] = pattern;
    if (item_inputs) newRecipe['key'] = item_inputs;
    if (item_outputs) newRecipe['result'] = item_outputs;
    if (advancement) newRecipe.advancement = advancement;
    if (group) newRecipe.group = group;
    if (secret) newRecipe.secret = secret;
    if (skip_remainders) newRecipe.skip_recipe_remainders = skip_remainders;
    if (disable_boosts) newRecipe.disable_yield_upgrades = disable_boosts;
    event.custom(newRecipe).id(id);
};
