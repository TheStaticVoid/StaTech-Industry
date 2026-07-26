// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:create/crushing/${id}`;

    // -- CREATE CRUSHING REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        cr('crushing/raw_uranium_ore'),
        cr('crushing/raw_platinum_ore'),
        cr('crushing/raw_uranium_block'),
        cr('crushing/raw_platinum_block'),
        cr('crushing/uranium_ore'),
        cr('crushing/platinum_ore')
    ];
    REMOVED_RECIPES.forEach(id => event.remove({ id: id }));

    const REMOVED_CRUSHED = [
        cr('crushed_raw_platinum'),
        cr('crushed_raw_iron'),
        cr('crushed_raw_gold'),
        cr('crushed_raw_copper'),
        cr('crushed_raw_zinc'),
        cr('crushed_raw_tin'),
        cr('crushed_raw_lead'),
        cr('crushed_raw_nickel'),
        cr('crushed_raw_silver'),
        cr('crushed_raw_uranium')
    ];
    REMOVED_CRUSHED.forEach(output => event.remove({ output: output }));

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let crushing = (id, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: cr('crushing'),
            processing_time: duration
        }

        if (item_inputs)
            newRecipe['ingredients'] = item_inputs;
        if (item_outputs)
            newRecipe['results'] = item_outputs;

        event.custom(newRecipe).id(id);
    }

    // -- BRICK DUST FROM BRICKS -- //
    crushing(
        st('brick_dust_from_bricks'),
        400,
        [{ item: mc('bricks') }],
        [{ count: 4, id: mi('brick_dust') }]
    );

    // -- BRICK DUST FROM BRICK -- //
    crushing(
        st('brick_dust_from_brick'),
        100,
        [{ item: mc('brick') }],
        [{ id: mi('brick_dust') }]
    );

    // -- CLAY DUST FROM CLAY -- //
    crushing(
        st('clay_dust_from_clay'),
        400,
        [{ item: mc('clay') }],
        [{ count: 4, id: mi('clay_dust') }]
    );

    // -- CLAY DUST FROM CLAY BALL -- //
    crushing(
        st('clay_dust_from_clay_ball'),
        100,
        [{ item: mc('clay_ball') }],
        [{ id: mi('clay_dust') }]
    );
});
