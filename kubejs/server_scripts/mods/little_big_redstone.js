// -----------------------------------------
// CREATED BY STATIC AND DINO FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:little_big_redstone/${id}`;

    // -- LITTLE BIG REDSTONE REMOVED RECIPES -- //
    event.remove({ id: lbr('redstone_circuit_board') });

    const DYE_COLORS = [
        'white',
        'orange',
        'magenta',
        'yellow',
        'cyan',
        'lime',
        'pink',
        'gray',
        'light_blue',
        'light_gray',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black'
    ]

    // ---------------------//
    // ------ SHAPED ------ //
    // ---------------------//

    DYE_COLORS.forEach(DYE_COLORS => {
        event.remove({ id: lbr(`microchip/${DYE_COLORS}`) });
        event.remove({ id: lbr(`logic_array/${DYE_COLORS}`) });
        event.remove({ id: lbr(`floppy_disk/${DYE_COLORS}`) });

        // -- MICRO CHIPS -- //
        event.shaped(lbr(`${DYE_COLORS}_microchip`), [
            'SBS',
            'RCR',
            'SDS'
        ], {
            S: mi('steel_plate'),
            B: mi('steel_block'),
            C: lbr('redstone_circuit_board'),
            R: mr('red_alloy_ingot'),
            D: mc(`${DYE_COLORS}_dye`)
        }).id(st(`${DYE_COLORS}_microchip`));

        // -- LOGIC ARRAYS -- //
        event.shaped(lbr(`${DYE_COLORS}_logic_array`), [
            'SSS',
            'DCQ',
            'SSS'
        ], {
            S: mi('steel_plate'),
            Q: mc('quartz'),
            C: '#c:chests/wooden',
            D: mc(`${DYE_COLORS}_dye`)
        }).id(st(`${DYE_COLORS}_logic_array`));

        // -- FLOPPY DISKS -- //
        event.shaped(lbr(`${DYE_COLORS}_floppy_disk`), [
            'SQD',
            'SRS',
            'SQS'
        ], {
            S: mi('steel_plate'),
            Q: mc('quartz'),
            R: mr('red_alloy_ingot'),
            D: mc(`${DYE_COLORS}_dye`)
        }).id(st(`${DYE_COLORS}_floppy_disk`));
    })

    // ---------------------//
    // ---- ASSEMBLER ---- //
    // ---------------------//


    // -- REDSTONE CIRCUIT BOARD -- //
    assembler(
        event,
        st('redstone_circuit_board'),
        8,
        200,
        [
            { amount: 1, item: mi('analog_circuit') },
            { amount: 4, item: mi('steel_plate') },
            { amount: 9, item: mr('red_alloy_wire') }
        ],
        [{ amount: 1, item: lbr('redstone_circuit_board') }],
        [{ amount: 500, fluid: mi('molten_redstone') }],
    );
});
