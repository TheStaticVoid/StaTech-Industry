// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //     
    let st = (id) => `statech:create/crushing/${id}`;
    let cr = (id) => `create:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    // -- CREATE CRUSHING REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        cr('crushing/raw_uranium_ore'),
        cr('crushing/raw_platinum_ore'),
        cr('crushing/raw_uranium_block'),
        cr('crushing/raw_platinum_block'),
        cr('crushing/uranium_ore'),
        cr('crushing/platinum_ore'),
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let crushing = (id, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: cr('crushing'),
            processingTime: duration
        }

        if (item_inputs)
            newRecipe['ingredients'] = item_inputs;
        if (item_outputs)
            newRecipe['results'] = item_outputs;

        e.custom(newRecipe).id(id);
    }

    // -- BRICK DUST FROM BRICKS -- //
    crushing(
        st('brick_dust_from_bricks'),
        400,
        [ { item: mc('bricks') } ],
        [ { count: 4, item: mi('brick_dust') } ]
    );

    // -- BRICK DUST FROM BRICK -- //
    crushing(
        st('brick_dust_from_brick'),
        100,
        [ { item: mc('brick') } ],
        [ { item: mi('brick_dust') } ]
    );

    // -- CLAY DUST FROM CLAY -- //
    crushing(
        st('clay_dust_from_clay'),
        400,
        [ { item: mc('clay') } ],
        [ { count: 4, item: mi('clay_dust') } ]
    );

    // -- CLAY DUST FROM CLAY BALL -- // 
    crushing(
        st('clay_dust_from_clay_ball'),
        100,
        [ { item: mc('clay_ball') } ],
        [ { item: mi('clay_dust') } ]
    );
});