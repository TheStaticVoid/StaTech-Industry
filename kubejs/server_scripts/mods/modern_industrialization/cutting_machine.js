// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/cutting_machine/${id}`;

    // -- CUTTING MACHINE VARIABLE CONSTANTS -- //
    const lubricantAmount = 10;

    let recipesToRemove = [];
    event.forEachRecipe({ type: mi('cutting_machine') }, recipe => {
        recipesToRemove.push(recipe.getId());
        let recipeJson = recipe.json;
        let inputs = recipeJson.get('fluid_inputs');
        let amount;


        if (inputs.get(0) != null) {
            amount = inputs.get(0).get('amount');
            if (amount == 1) {
                recipeJson.get('fluid_inputs').get(0).add('amount', lubricantAmount);
            }
        } else {
            amount = inputs.get('amount');
            if (amount == 1) {
                recipeJson.get('fluid_inputs').add('amount', lubricantAmount);
            }
        }
        event.custom(recipeJson).id(st(recipe.getPath()));
    });

    recipesToRemove.forEach(id => event.remove({id: id}));

    // -- EMPTY CAN -- //
    cuttingMachine(
        event,
        st('empty_can'),
        2,
        200,
        [ { amount: 1, tag: 'c:plates/tin' } ],
        [ { amount: 4, item: kj('empty_can') } ]
    );

    // -- BRASS ROD -- //
    cuttingMachine(
        event,
        st('brass_rod'),
        2,
        200,
        [ { amount: 1, tag: 'c:ingots/brass' } ],
        [ { amount: 2, item: ca('brass_rod') } ]
    );

    // -- STRAW -- //
    cuttingMachine(
        event,
        st('straw'),
        2,
        200,
        [ { amount: 1, item: mc('paper') } ],
        [ { amount: 1, item: ca('straw') } ]
    );

    // -- PIZZA SLICE -- //
    cuttingMachine(
        event,
        st('pizza_slice'),
        2,
        200,
        [ { amount: 1, item: kj('pizza') } ],
        [ { amount: 8, item: kj('pizza_slice') } ]
    );

    // -- CONCRETE PIZZA SLICE -- //
    cuttingMachine(
        event,
        st('concrete_pizza_slice'),
        8,
        200,
        [ { amount: 1, item: kj('concrete_pizza') } ],
        [ { amount: 8, item: kj('concrete_pizza_slice') } ]
    );

    // -- MINECRAFT MISSING WOOD -- //
    cuttingMachine(
        event,
        st('bamboo_planks'),
        2,
        100,
        [ { amount: 1, tag: mc('bamboo_blocks') } ],
        [ { amount: 4, item: mc('bamboo_planks') } ]
    );

    // -- ARCHITECTS PALETTE MISSING WOOD -- //
    cuttingMachine(
        event,
        st('twisted_planks'),
        2,
        100,
        [ { amount: 1, tag: ap('twisted_logs') } ],
        [ { amount: 6, item: ap('twisted_planks') } ]
    );

    // -- EXPANDED DELIGHT MISSING WOOD -- //
    cuttingMachine(
        event,
        st('cinnamon_planks'),
        2,
        100,
        [ { amount: 1, tag: ed('cinnamon_logs') } ],
        [ { amount: 6, item: ed('cinnamon_planks') } ]
    );

    // -- NO MANS LAND MISSING WOOD -- //
    const nmlMissingPlanks = ['pine', 'maple', 'walnut', 'willow'];
    nmlMissingPlanks.forEach(wood => {
        cuttingMachine(
            event,
            st(`${wood}_planks`),
            2,
            100,
            [ { amount: 1, tag: nm(`${wood}_logs`) } ],
            [ { amount: 6, item: nm(`${wood}_planks`) } ]
        );
    });

    // -- SPECTRUM MISSING WOOD -- //
    const spectrumLogMissingPlanks = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black', 'weeping_gala'];
    spectrumLogMissingPlanks.forEach(wood => {
        cuttingMachine(
            event,
            st(`${wood}_planks`),
            2,
            100,
            [ { amount: 1, tag: sp(`${wood}_logs`) } ],
            [ { amount: 6, item: sp(`${wood}_planks`) } ]
        );
    });

    const spectrumNoxwoodMissingPlanks = ['slate_nox', 'ebony_nox', 'ivory_nox', 'chestnut_nox', ];
    spectrumNoxwoodMissingPlanks.forEach(noxwood => {
        cuttingMachine(
            event,
            st(`${noxwood}wood_planks`),
            2,
            100,
            [ { amount: 1, tag: sp(`${noxwood}cap_stems`) } ],
            [ { amount: 6, item: sp(`${noxwood}wood_planks`) } ]
        );
    });

    // -- WOOD BEAMS -- //
    const woodBeams = ['mangrove', 'oak', 'cherry', 'dark_oak', 'jungle', 'acacia', 'birch', 'spruce'];
    woodBeams.forEach(wood => {
        cuttingMachine(
            event,
            st(`${wood}_beam`),
            2,
            100,
            [ { amount: 1, item: mc(`stripped_${wood}_log`) } ],
            [ { amount: 1, item: db(`${wood}_beam`) } ]
        );
    });

    // -- WOOD BEAMS NETHER -- //
    const woodBeamsNether = ['warped', 'crimson'];
    woodBeamsNether.forEach(wood => {
        cuttingMachine(
            event,
            st(`${wood}_beam`),
            2,
            100,
            [ { amount: 1, item: mc(`stripped_${wood}_stem`) } ],
            [ { amount: 1, item: db(`${wood}_beam`) } ]
        );
    });
});
