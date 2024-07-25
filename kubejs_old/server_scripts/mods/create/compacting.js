// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:create/compacting/${id}`;
    let cr = (id) => `create:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let compacting = (id, item_inputs, item_outputs) => {
        let newRecipe = {
            type: cr('compacting'),
        }

        if (item_inputs)
            newRecipe['ingredients'] = item_inputs;
        if (item_outputs)
            newRecipe['results'] = item_outputs;

        e.custom(newRecipe).id(id);
    }

    // -- FIRECLAY BRICKS -- // 
    compacting(
        st('fire_clay_bricks'),
        [
            { item: mi('fire_clay_brick') },
            { item: mi('fire_clay_brick') },
            { item: mi('fire_clay_brick') },
            { item: mi('fire_clay_brick') }
        ],
        [ { item: mi('fire_clay_bricks') } ]
    );
});