// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

// Generic function for adding Create machine recipes
let newCreateRecipe = (type, item_inputs, item_outputs, duration, heat_requirement) => {
    let newRecipe = {
        type: type
    }
    if (item_inputs) newRecipe['ingredients'] = item_inputs;
    if (item_outputs) newRecipe['results'] = item_outputs;
    if (duration) newRecipe['processingTime'] = duration;
    if (heat_requirement) newRecipe['heatRequirement'] = heat_requirement;

    return newRecipe;
}

// -- COMPACTING -- //
let createCompacting = (event, id, item_inputs, item_outputs) => {
    event.custom(newCreateRecipe(cr('compacting'), item_inputs, item_outputs)).id(id);
}

// -- CRUSHING --//
let createCrushing = (event, id, duration, item_inputs, item_outputs) => {
    event.custom(newCreateRecipe(cr('crushing'), item_inputs, item_outputs, duration)).id(id);
}

let createMixing = (event, id, heat_requirement, item_inputs, item_outputs) => {
    event.custom(newCreateRecipe(cr('mixing'), item_inputs, item_outputs, null, heat_requirement)).id(id);
}

let createPressing = (event, id, item_inputs, item_outputs) => {
    event.custom(newCreateRecipe(cr('pressing'), item_inputs, item_outputs)).id(id);
}

let createSplashing = (event, id, item_inputs, item_outputs) => {
    event.custom(newCreateRecipe(cr('splashing'), item_inputs, item_outputs)).id(id);
}