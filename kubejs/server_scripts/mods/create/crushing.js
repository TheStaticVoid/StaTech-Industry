// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {  
    let st = (id) => `statech:create/crushing/${id}`;

    // -- CREATE CRUSHING REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        cr('crushing/raw_uranium_ore'),
        cr('crushing/raw_platinum_ore'),
        cr('crushing/raw_uranium_block'),
        cr('crushing/raw_platinum_block'),
        cr('crushing/uranium_ore'),
        cr('crushing/platinum_ore'),
    ];
    REMOVED_RECIPES.forEach(id => event.remove({id: id}));

    // -- BRICK DUST FROM BRICKS -- //
    createCrushing(
        event,
        st('brick_dust_from_bricks'),
        400,
        [ { item: mc('bricks') } ],
        [ { count: 4, item: mi('brick_dust') } ]
    );

    // -- BRICK DUST FROM BRICK -- //
    createCrushing(
        event,
        st('brick_dust_from_brick'),
        100,
        [ { item: mc('brick') } ],
        [ { item: mi('brick_dust') } ]
    );

    // -- CLAY DUST FROM CLAY -- //
    createCrushing(
        event,
        st('clay_dust_from_clay'),
        400,
        [ { item: mc('clay') } ],
        [ { count: 4, item: mi('clay_dust') } ]
    );

    // -- CLAY DUST FROM CLAY BALL -- // 
    createCrushing(
        event,
        st('clay_dust_from_clay_ball'),
        100,
        [ { item: mc('clay_ball') } ],
        [ { item: mi('clay_dust') } ]
    );
});