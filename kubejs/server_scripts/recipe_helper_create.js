// -----------------------------------------
// CREATED BY GRONK FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

// priority: 10000
/**
 * @typedef {{item?: Special.Item, tag?: string}} ShapelessInput An type of {item: id}, {type: 'neoforge:single', amount: X, fluid: id}, or {tag: id}
 * @typedef {{item: Special.Item, count: number, chance?: number?}} CRItem A tuple of {id, count?, chance?}
 * @typedef {{type: 'neoforge:single', amount: number, fluid: string?}} CRFluid A tuple of {type: 'neoforge:single', amount, fluid}
 */

// -- CREATE COMPACTING -- //
/**
 * Compacting
 * @param {*} event
 * @param {!string} id - Recipe ID
 * @param {!ShapelessInput} inputs - An array of {item: id}, {type: 'neoforge:single', amount: X, fluid: id}, or {tag: id}
 * @param {id: string} item_outputs
 */
let compacting = (event, id, inputs, item_outputs) => {
    let newRecipe = {
        type: cr('compacting'),
    };

    if (inputs) newRecipe['ingredients'] = inputs;
    if (item_outputs) newRecipe['results'] = item_outputs;

    event.custom(newRecipe).id(id);
};

// -- CREATE CRUSHING -- //
/**
 * Crushing
 * @param {*} event
 * @param {!string} id - Recipe ID
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {!ShapelessInput} item_input - Item ID
 * @param {!CRItem[]} item_outputs - An array of tuples of [item, count?, chance?]
 */
let crushing = (event, id, duration, item_inputs, item_outputs) => {
    let newRecipe = {
        type: cr('crushing'),
        processing_time: duration,
    };

    if (item_inputs) newRecipe['ingredients'] = item_inputs;
    if (item_outputs) newRecipe['results'] = item_outputs;

    event.custom(newRecipe).id(id);
};

// -- CREATE MIXING -- //
/**
 * Mixing
 * @param {*} event
 * @param {!string} id - Recipe ID
 * @param {?string} heat_requirement - Sets heat requirement. Can be null, 'heated', or 'superheated'
 * @param {!ShapelessInput[]} inputs - An array of {item: id}, {type: 'neoforge:single', amount: X, fluid: id}, or {tag: id}
 * @param {CRItem|CRFluid} outputs - Output ItemStack or FluidStack
 */
let mixing = (event, id, heat_requirement, inputs, outputs) => {
    let newRecipe = {
        type: cr('mixing'),
    };
    if (heat_requirement) newRecipe.heat_requirement = heat_requirement;
    if (inputs) newRecipe['ingredients'] = inputs;
    if (outputs) newRecipe['results'] = outputs;

    event.custom(newRecipe).id(id);
};

// -- CREATE PRESSING -- //
/**
 * Pressing
 * @param {*} event
 * @param {!string} id - Recipe ID
 * @param {!ShapelessInput} item_inputs - An instance of {item: id}, {type: 'neoforge:single', amount: X, fluid: id}, or {tag: id}
 * @param {!CRItem} item_outputs - Output ItemStack {item: 'spectrum:onyx_shard', count: 2, chance: 0.5}
 */
let pressing = (event, id, item_inputs, item_outputs) => {
    let newRecipe = {
        type: cr('pressing'),
    };

    if (item_inputs) newRecipe['ingredients'] = item_inputs;
    if (item_outputs) newRecipe['results'] = item_outputs;

    event.custom(newRecipe).id(id);
};

// -- CREATE SPLASHING -- //
/**
 * Splashing
 * @param {*} event
 * @param {!string} id - Recipe ID
 * @param {!ShapelessInput} item_inputs - An instance of {item: id}, {type: 'neoforge:single', amount: X, fluid: id}, or {tag: id}
 * @param {!CRItem} item_outputs - Output ItemStack {item: 'spectrum:onyx_shard', count: 2, chance: 0.5}
 */
let splashing = (event, id, item_inputs, item_outputs) => {
    let newRecipe = {
        type: cr('splashing'),
    };

    if (item_inputs) newRecipe['ingredients'] = item_inputs;
    if (item_outputs) newRecipe['results'] = item_outputs;

    event.custom(newRecipe).id(id);
};

// -- CREATE DEPLOYING -- //
/**
 * Deploying
 * @param {*} event
 * @param {!string} id - Recipe ID
 * @param {!boolean} keep_item - Whether or not the item being deployed is consumed in the recipe
 * @param {!ShapelessInput[]} item_inputs - An array of {item: id} or {tag: id}. First instance is the item being deployed on, second instance is the item being deployed
 * @param {!ShapelessInput} item_outputs - An instance of {item: id}, {type: 'neoforge:single', amount: X, fluid: id}, or {tag: id}
 */
let deploying = (event, id, keep_item, item_inputs, item_outputs) => {
    let newRecipe = {
        type: cr('deploying'),
        keep_held_item: keep_item,
    };

    if (item_inputs) newRecipe['ingredients'] = item_inputs;
    if (item_outputs) newRecipe['results'] = item_outputs;

    event.custom(newRecipe).id(id);
};

// -- CREATE ADDITION CHARGING -- //
/**
 * Charging
 * @param {*} event
 * @param {!string} id - Recipe ID
 * @param {!number} energy: Total RF/FE required to complete the recipe
 * @param {!number} charge_rate: Maximum allowed RF/T or FE/T
 * @param {!ShapelessInput} item_inputs - An instance of {item: id} or {tag: id}
 * @param {!ShapelessInput} item_outputs - An instance of {item: id} or {tag: id}
 */
let charging = (event, id, energy, charge_rate, item_inputs, item_outputs) => {
    let newRecipe = {
        type: ca('charging'),
        energy: energy,
        max_charge_rate: charge_rate,
    };

    if (item_inputs) newRecipe['ingredients'] = item_inputs;
    if (item_outputs) newRecipe['results'] = item_outputs;

    event.custom(newRecipe).id(id);
};

// -- CREATE ADDITION LIQUID BURNING -- //
/**
 * Liquid Burning
 * @param {*} event
 * @param {!string} id - Recipe ID
 * @param {!number} burn_time: Duration in ticks of how long the fuel heats the blaze burner
 * @param {!CRFluid} fluid_input - An instance of {item: id} or {tag: id}
 * @param {?boolean} superheated: Whether or not the fuel allows superheated recipes to run
 */
let liquidBurning = (event, id, burn_time, fluid_input, superheated) => {
    let newRecipe = {
        type: ca('liquid_burning'),
        burn_time: burn_time,
        results: [],
        superheated: superheated,
    };

    if (fluid_input) newRecipe['ingredients'] = fluid_input;

    event.custom(newRecipe).id(id);
};
