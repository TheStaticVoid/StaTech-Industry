// -----------------------------------------
// CREATED BY GRONK FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:pointblank/${id}`;

    // -- POINT BLANK REMOVED REICPES -- //
    const POINTBLANK_REMOVED_RECIPES = [
        pb('gunmetal_mesh'),
        pb('processor'),
        pb('printer'),
        pb('gunmetal_ingot_from_smelting_gunmetal_mesh'),
        pb('gunmetal_ingot_from_blasting_gunmetal_mesh'),
        pb('guninternals'),
    ];
    POINTBLANK_REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // -------------------//
    // ----- SHAPED ----- //
    // -------------------//

    // -- GUN INTERNALS -- //
    event
        .shaped(pb('guninternals'), [' GG', 'GSS'], {
            G: pb('gunmetal_ingot'),
            S: mi('steel_plate'),
        })
        .id(st('gun_internals'));

    // -- WEAPON PRINTER -- //
    event
        .shaped(pb('printer'), ['GGG', 'PCP', 'GGG'], {
            G: pb('gunmetal_ingot'),
            P: '#c:glass_panes',
            C: pb('processor'),
        })
        .id(st('weapon_printer'));

    // ----------------------//
    // --- ALLOY SMELTER --- //
    // ----------------------//

    // -- GUNMETAL INGOT -- //
    alloySmelter(
        event,
        st('gunmetal_ingot'),
        4,
        200,
        [
            { amount: 1, item: pb('gunmetal_mesh') },
            { amount: 3, tag: 'c:ingots/steel' },
        ],
        [{ amount: 2, item: pb('gunmetal_ingot') }]
    );

    // --------------------//
    // ---- ASSEMBLER ---- //
    // --------------------//

    // -- KAMICAT PROCESSOR -- //
    assembler(
        event,
        st('kamicat_processor'),
        16,
        200,
        [
            { amount: 4, item: pb('gunmetal_ingot') },
            { amount: 1, item: mi('electronic_circuit') },
        ],
        [{ amount: 1, item: pb('processor') }],
        [{ amount: 250, fluid: mi('polyethylene') }]
    );

    // ---------------------//
    // ------ PACKER ------ //
    // ---------------------//

    // -- GUNMETAL MESH -- //
    packer(
        event,
        st('gunmetal_mesh'),
        16,
        200,
        [
            { amount: 1, item: mi('iron_plate') },
            { amount: 1, item: mi('cupronickel_plate') },
        ],
        [{ amount: 1, item: pb('gunmetal_mesh') }]
    );

    // -- GUNMETAL INGOT FROM NUGGETS -- //
    packer(
        event,
        st('gunmetal_ingot_from_nuggets'),
        16,
        200,
        [{ amount: 9, item: pb('gunmetal_nugget') }],
        [{ amount: 1, item: pb('gunmetal_ingot') }]
    );

    // ---------------------//
    // ----- UNPACKER ----- //
    // ---------------------//

    // -- GUNMETAL NUGGETS FROM INGOT -- //
    unpacker(
        event,
        st('gunmetal_nuggets_from_ingot'),
        16,
        200,
        [{ amount: 1, item: pb('gunmetal_ingot') }],
        [{ amount: 9, item: pb('gunmetal_nugget') }]
    );
});
