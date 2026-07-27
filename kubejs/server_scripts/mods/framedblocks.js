// -----------------------------------------
// CREATED BY GRONKDEV FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:framedblocks/${id}`;

    // -- WAYSTONES REMOVED RECIPES -- //
    const FRAMEDBLOCKS_REMOVED_RECIPES = [
        fb('framing_saw'),
        fb('powered_framing_saw')
    ];
    FRAMEDBLOCKS_REMOVED_RECIPES.forEach(id => event.remove({ id: id }));

    // -- FRAMING SAW -- //
    event.shaped(fb('framing_saw'), [
        ' B ',
        'FFF',
        'III'
    ], {
        B: mi('invar_rotary_blade'),
        F: fb('framed_cube'),
        I: mi('iron_plate')

    })
        .id(st('framing_saw'));

    // -- POWERED FRAMING SAW -- //
    event.shaped(fb('powered_framing_saw'), [
        ' S ',
        'AFA',
        'RAR'
    ], {
        S: fb('framing_saw'),
        F: fb('framed_cube'),
        A: mi('analog_circuit'),
        R: mi('robot_arm')

    })
        .id(st('powered_framing_saw'));

    // --------------- //
    // -- ASSEMBLER -- //
    // --------------- //

    // -- FRAMING SAW -- //
    assembler(
        event,
        st('framing_saw_assembler'),
        8,
        200,
        [
            { amount: 3, item: fb('framed_cube') },
            { amount: 3, item: mi('iron_plate') },
            { amount: 1, item: mi('invar_rotary_blade') }
        ],
        [{ amount: 1, item: fb('framing_saw') }],
    );

    // -- POWERED FRAMING SAW -- //
    assembler(
        event,
        st('powered_framing_saw_assembler'),
        8,
        200,
        [
            { amount: 1, item: fb('framing_saw') },
            { amount: 1, item: fb('framed_cube') },
            { amount: 3, item: mi('analog_circuit') },
            { amount: 2, item: mi('robot_arm') }
        ],
        [{ amount: 1, item: fb('powered_framing_saw') }],
    );

    // -- FRAMED CUBE ASSEMBLER -- //
    assembler(
        event,
        st('framed_cube'),
        8,
        100,
        [
            { amount: 4, tag: 'minecraft:planks' },
            { amount: 4, item: mc('stick') }
        ],
        [{ amount: 4, item: fb('framed_cube') }],
    );

    // -- FRAMED CUBE ASSEMBLER ALT -- //
    assembler(
        event,
        st('framed_cube_alt'),
        8,
        100,
        [
            { amount: 4, tag: 'minecraft:planks' },
            { amount: 4, item: mc('stick') }
        ],
        [{ amount: 8, item: fb('framed_cube') }],
        [{ amount: 100, fluid: mi('creosote') }],
    );
});
