// -----------------------------------------
// CREATED BY GRONK FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

// -- FARMER'S DELIGHT COOKING -- //
/**
 * Cooking Pot
 * @param {!string} event
 * @param {!string} id
 * @param {!number} xp
 * @param {?string} book_tab
 * @param {!{!count: number, !id: string}} container
 * @param {!Map<!string, {tag | item: string}> } item_inputs
 * @param {!{!count: number, !id: string}} item_outputs
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
 * @param {!string} event
 * @param {!string} id
 * @param {!number} time
 * @param {!number} xp
 * @param {!{item | tag: string}} item_input
 * @param {!{!item: string, !count: number, !chance: number}[]} item_outputs
 * @param {?string} advancement
 * @param {?string} group
 * @param {?boolean} secret
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
 * @param {!string} event
 * @param {!string} id
 * @param {!number} time
 * @param {!number} xp
 * @param {!{item | tag: string}[]} item_inputs
 * @param {!{!item: string, ?count: number}} item_outputs
 * @param {?{fluid | tag: string}} fluid_input
 * @param {?*} world_conditions
 * @param {?string} start_effect
 * @param {*} during_effects
 * @param {?string} end_effect
 * @param {?string} advancement
 * @param {?string} group
 * @param {?boolean} secret
 * @param {?boolean} copy_nbt
 * @param {?boolean} disable_boosts
 * @param {?string} description
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
    if (start_effect) newRecipe.start_crafting_effect = start_effect;
    if (during_effects) newRecipe['during_crafting_effects'] = during_effects;
    if (end_effect) newRecipe.finish_crafting_effect = end_effect;
    event.custom(newRecipe).id(id);
};

// -- SPECTRUM PEDESTAL -- //
/**
 * Pedestal
 * @param {!string} event
 * @param {!string} id
 * @param {!number} time
 * @param {!string} tier
 * @param {?Map<!string, !number>} colors
 * @param {!number} xp
 * @param {!string[]} pattern
 * @param {!Map<!string, {item | tag: string}>} item_inputs
 * @param {!{!amount: count, !item: string}} item_outputs
 * @param {?string} advancement
 * @param {?string} group
 * @param {?boolean} secret
 * @param {?boolean} skip_remainders
 * @param {?boolean} disable_boosts
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
    if (item_inputs) newRecipe['ingredients'] = item_inputs;
    if (item_outputs) newRecipe['result'] = item_outputs;
    if (advancement) newRecipe.advancement = advancement;
    if (group) newRecipe.group = group;
    if (secret) newRecipe.secret = secret;
    if (skip_remainders) newRecipe.skip_recipe_remainders = skip_remainders;
    if (disable_boosts) newRecipe.disable_yield_upgrades = disable_boosts;
    event.custom(newRecipe).id(id);
};
