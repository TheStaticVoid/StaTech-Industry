// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:pineapple_delight/${id}`;
    let pd = (id) => `pineapple_delight:${id}`;
    let fd = (id) => `farmersdelight:${id}`;
    let mc = (id) => `minecraft:${id}`;

    // -- PINEAPPLE DELIGHT REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        pd('cut/pineapple_pie_side'),
        pd('cut/pineapple_side'),
        pd('cooking/pineapple_fried_rice'),
        pd('cooking/pineapple_ice_cream'),
        pd('cooking/pineapple_juice'),
        pd('cooking/pineapple_milk_shake')
    ];
    REMOVED_RECIPES.forEach(id => e.remove( {id: id} ));

    let fdCutting = (id, item_inputs, item_outputs) => {
        let newRecipe = {
            type: fd('cutting'),
            ingredients: item_inputs,
            tool: {
                type: fd('tool'),
                tag: 'c:tools/knives'
            },
            result: item_outputs
        }

        e.custom(newRecipe).id(id);
    }

    let fdCooking = (id, duration, item_inputs, item_outputs, container, experience) => {
        let newRecipe = {
            type: fd('cooking'),
            ingredients: item_inputs,
            recipe_book_tab: 'misc',
            result: item_outputs,
            container: container,
            cookingtime: duration,
            experience: experience
        }

        e.custom(newRecipe).id(id);
    }

    // -- PINEAPPLE PIE SIDE -- //
    fdCutting(
        st('pineapple_pie_side'),
        [ { item: pd('pineapple_pie') } ],
        [ { item: pd('pineapple_pie_side'), count: 4 } ]
    );

    // -- PINEAPPLE SIDE -- //
    fdCutting(
        st('pineapple_side'),
        [ { item: pd('pineapple') } ],
        [ 
            { item: pd('pineapple_side'), count: 2},
            { item: pd('pineapple_crop') } 
        ]
    );

    // -- PINEAPPLE FRIED RICE -- //
    fdCooking(
        st('pineapple_fried_rice'),
        200,
        [
            { item: pd('pineapple_side') },
            { tag: 'c:crops/rice' },
            { tag: 'c:eggs' },
            { item: mc('carrot') }
        ],
        { item: pd('pineapple_fried_rice') },
        { item: pd('pineapple') },
        1.0
    );

    // -- PINEAPPLE ICE CREAM -- //
    fdCooking(
        st('pineapple_ice_cream'),
        200,
        [
            { item: pd('pineapple_side') },
            { item: pd('pineapple_side') },
            { tag: 'c:milk' },
            { item: mc('sugar') },
            { item: mc('snowball') }
        ],
        { item: pd('pineapple_ice_cream') },
        { item: mc('glass_bottle') },
        1.0
    );

    // -- PINEAPPLE JUICE -- //
    fdCooking(
        st('pineapple_juice'),
        200,
        [
            { item: pd('pineapple_side') },
            { item: pd('pineapple_side') },
            { item: mc('sugar') }
        ],
        { item: pd('pineapple_juice') },
        { item: mc('glass_bottle') },
        1.0
    );

    // -- PINEAPPLE MILKSHAKE -- //
    fdCooking(
        st('pineapple_milkshake'),
        200,
        [
            { item: pd('pineapple_side') },
            { item: pd('pineapple_side') },
            { tag: 'c:milk' },
            { item: mc('sugar') },
            { item: mc('sugar') }
        ],
        { item: pd('pineapple_milk_shake') },
        { item: mc('glass_bottle') },
        1.0
    );
});