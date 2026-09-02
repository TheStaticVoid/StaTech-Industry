// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:create/mixing/${id}`;

    // Remove the create compat recipe for ae2 mixing
    event.remove({ type: cr('mixing'), output: ae('fluix_crystal') });

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let mixing = (id, heat_requirement, item_inputs, item_outputs) => {
        let newRecipe = {
            type: cr('mixing'),
            heatRequirement: heat_requirement,
        };

        if (item_inputs) newRecipe['ingredients'] = item_inputs;
        if (item_outputs) newRecipe['results'] = item_outputs;

        event.custom(newRecipe).id(id);
    };

    // -- DOUGH -- //
    mixing(
        st('wheat_dough'),
        null,
        [
            { item: cr('wheat_flour') },
            { type: 'neoforge:single', amount: 1000, fluid: mc('water') },
        ],
        [{ count: 2, id: cr('dough') }]
    );
});
