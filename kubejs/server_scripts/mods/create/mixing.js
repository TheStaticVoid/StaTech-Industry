// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:create/mixing/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    // Remove the create compat recipe for ae2 mixing
    event.remove({ type: cr('mixing'), output: ae('fluix_crystal') });

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let mixing = (id, heatRequirement, item_inputs, item_outputs) => {
        let newRecipe = {
            type: cr('mixing'),
            heat_requirement: heatRequirement,
        };
        if (item_inputs) newRecipe['ingredients'] = item_inputs;
        if (item_outputs) newRecipe['results'] = item_outputs;

        event.custom(newRecipe).id(id);
    };

    

    // -- BRONZE INGOT -- //
    mixing(
        st('bronze_ingot'),
        'superheated',
        [
            { tag: 'c:raw_materials/copper' },
            { tag: 'c:raw_materials/copper' },
            { tag: 'c:raw_materials/copper' },
            { tag: 'c:raw_materials/tin' }
        ],
        [{ id: mi('bronze_ingot'), count: 2 }]
    );

});
