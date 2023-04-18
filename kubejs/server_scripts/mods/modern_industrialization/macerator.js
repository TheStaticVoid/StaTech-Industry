ServerEvents.recipes(e => {
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let crate = (id) => `create:${id}`; // mispelled on purpose ;)
    let ed = (id) => `expandeddelight:${id}`;
    let tr = (id) => `techreborn:${id}`;

    let macerator = (eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('macerator'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe);
    }

    // -- WHEAT DOUGH -- //
    macerator(
        2,
        200,
        [
            { amount: 1, item: mc('wheat') }
        ],
        [
            { amount: 2, item: crate('wheat_flour') }
        ]
    );

    // -- SALT DUST -- //
    macerator(
        2,
        100,
        [
            { amount: 1, item: ed('salt_rock') }
        ],
        [
            { amount: 1, item: ed('ground_salt') }
        ]
    );

    // -- CALCITE DUST -- //
    macerator(
        16,
        100,
        [
            { amount: 1, item: mc('calcite') }
        ],
        [
            { amount: 2, item: tr('calcite_dust') }
        ]   
    );

    // -- DESH DUST -- //
    macerator(
        2,
        100,
        [ { amount: 1, tag: 'c:desh_ingots' } ],
        [ { amount: 1, item: mi('desh_dust') } ]
    );
    macerator(
        2,
        100,
        [ { amount: 1, tag: 'c:desh_plates' } ],
        [ { amount: 1, item: mi('desh_dust') } ]
    );
    macerator(
        2,
        100,
        [ { amount: 1, tag: 'c:desh_nuggets' } ],
        [ { amount: 1, item: mi('desh_tiny_dust') } ]
    );
});