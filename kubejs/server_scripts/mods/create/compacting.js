// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:create/compacting/${id}`;

    // -- FIRECLAY BRICKS -- // 
    createCompacting(
        event,
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