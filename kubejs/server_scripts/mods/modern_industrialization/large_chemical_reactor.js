// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/large_chemical_reactor/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let lcr = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('large_chemical_reactor'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;
        if (fluid_outputs)
            newRecipe['fluid_outputs'] = fluid_outputs;

        e.custom(newRecipe).id(id);
    }

    // e.forEachRecipe( { type: mi('chemical_reactor') }, recipe => {
    //     let count = 0;
    //     const recipeJson = JSON.parse(recipe.json.toString());

    //     let eu = recipeJson.eu;
    //     let duration = recipeJson.duration;
    //     let item_inputs = recipeJson.item_inputs;
    //     let item_outputs = recipeJson.item_outputs;
    //     let fluid_inputs = recipeJson.fluid_inputs;
    //     let fluid_outputs = recipeJson.fluid_outputs;

    //     console.info('eu: ' + eu);
    //     console.info('duration: ' + duration);
    //     console.info('item_inputs: ' + item_inputs);
    //     console.info('item_outputs: ' + item_outputs);
    //     console.info('fluid_inputs: ' + fluid_inputs);
    //     console.info('fluid_outputs: ' + fluid_outputs);

    //     // lcr(
    //     //     st(count),
    //     //     recipeJson.eu,
    //     //     recipeJson.duration,
    //     //     recipeJson.item_inputs,
    //     //     recipeJson.item_outputs,
    //     //     recipeJson.fluid_inputs,
    //     //     recipeJson.fluid_outputs
    //     // );
    //     // count += 1;
    // });
});