// -----------------------------------------
// CREATED BY STATIC AND DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
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
        'black',
    ];

    // ---------------------//
    // ------ SHAPED ------ //
    // ---------------------//

    DYE_COLORS.forEach((DYE_COLORS) => {
        event.remove({ id: lbr(`microchip/${DYE_COLORS}`) });
        event.remove({ id: lbr(`logic_array/${DYE_COLORS}`) });
        event.remove({ id: lbr(`floppy_disk/${DYE_COLORS}`) });

        // -- MICRO CHIPS -- //
        event
            .shaped(lbr(`${DYE_COLORS}_microchip`), ['SBS', 'RCR', 'SDS'], {
                S: mi('steel_plate'),
                B: mi('steel_block'),
                C: lbr('redstone_circuit_board'),
                R: mr('red_alloy_ingot'),
                D: mc(`${DYE_COLORS}_dye`),
            })
            .id(st(`${DYE_COLORS}_microchip`));

        // -- LOGIC ARRAYS -- //
        event
            .shaped(lbr(`${DYE_COLORS}_logic_array`), ['SSS', 'DCQ', 'SSS'], {
                S: mi('steel_plate'),
                Q: mc('quartz'),
                C: '#c:chests/wooden',
                D: mc(`${DYE_COLORS}_dye`),
            })
            .id(st(`${DYE_COLORS}_logic_array`));

        // -- FLOPPY DISKS -- //
        event
            .shaped(lbr(`${DYE_COLORS}_floppy_disk`), ['SQD', 'SRS', 'SQS'], {
                S: mi('steel_plate'),
                Q: mc('quartz'),
                R: mr('red_alloy_ingot'),
                D: mc(`${DYE_COLORS}_dye`),
            })
            .id(st(`${DYE_COLORS}_floppy_disk`));
    });

    // --------------------//
    // ---- ASSEMBLER ---- //
    // --------------------//

    // -- REDSTONE CIRCUIT BOARD -- //
    assembler(
        event,
        st('redstone_circuit_board'),
        8,
        200,
        [
            { amount: 1, item: mi('analog_circuit') },
            { amount: 4, item: mi('steel_plate') },
            { amount: 9, item: mr('red_alloy_wire') },
        ],
        [{ amount: 1, item: lbr('redstone_circuit_board') }],
        [{ amount: 500, fluid: mi('molten_redstone') }]
    );

    DYE_COLORS.forEach((DYE_COLORS) => {
        // -- MICRO CHIPS ASSEMBLER -- //
        assembler(
            event,
            st(`assembler/${DYE_COLORS}_microchip`),
            8,
            200,
            [
                { amount: 4, item: mi('steel_plate') },
                { amount: 2, item: mr('red_alloy_ingot') },
                { amount: 1, item: lbr('redstone_circuit_board') },
                { amount: 1, item: mi('steel_block') },
                { amount: 1, item: mc(`${DYE_COLORS}_dye`) },
            ],
            [{ amount: 1, item: lbr(`${DYE_COLORS}_microchip`) }]
        );

        // -- LOGIC ARRAYS ASSEMBLER -- //
        assembler(
            event,
            st(`assembler/${DYE_COLORS}_logic_array`),
            8,
            200,
            [
                { amount: 6, item: mi('steel_plate') },
                { amount: 1, item: mc('quartz') },
                { amount: 1, tag: 'c:chests/wooden' },
                { amount: 1, item: mc(`${DYE_COLORS}_dye`) },
            ],
            [{ amount: 1, item: lbr(`${DYE_COLORS}_logic_array`) }]
        );

        // -- FLOPPY DISKS ASSEMBLER -- //
        assembler(
            event,
            st(`assembler/${DYE_COLORS}_floppy_disk`),
            8,
            200,
            [
                { amount: 5, item: mi('steel_plate') },
                { amount: 2, item: mc('quartz') },
                { amount: 1, item: mr('red_alloy_ingot') },
                { amount: 1, item: mc(`${DYE_COLORS}_dye`) },
            ],
            [{ amount: 1, item: lbr(`${DYE_COLORS}_floppy_disk`) }]
        );

        // -- STICKY NOTES ASSEMBLER -- //
        assembler(
            event,
            st(`assembler/${DYE_COLORS}_sticky_note`),
            8,
            200,
            [
                { amount: 1, item: mc('paper') },
                { amount: 1, item: mc('slime_ball') },
                { amount: 1, item: mc('iron_nugget') },
                { amount: 1, item: mc(`${DYE_COLORS}_dye`) },
            ],
            [{ amount: 1, item: lbr(`${DYE_COLORS}_sticky_note`) }]
        );
    });

    // -- IO ASSEMBLER -- //
    assembler(
        event,
        st(`assembler/io_port`),
        8,
        200,
        [{ amount: 1, item: lbr('redstone_bit') }],
        [{ amount: 1, item: lbr('io') }],
        [{ amount: 180, fluid: mi('molten_redstone') }]
    );

    // -- READER ASSEMBLER -- //
    assembler(
        event,
        st(`assembler/reader`),
        8,
        200,
        [
            { amount: 1, item: lbr('redstone_bit') },
            { amount: 1, item: mc('quartz') },
        ],
        [{ amount: 1, item: lbr('reader') }],
        [{ amount: 270, fluid: mi('molten_redstone') }]
    );

    // -- TAG ASSEMBLER -- //
    assembler(
        event,
        st(`assembler/tag`),
        8,
        200,
        [
            { amount: 3, item: mc('ender_pearl') },
            { amount: 2, item: mc('gold_ingot') },
            { amount: 2, item: mc('quartz') },
            { amount: 1, item: lbr('redstone_bit') },
        ],
        [{ amount: 1, item: lbr('tag') }],
        [{ amount: 90, fluid: mi('molten_redstone') }]
    );

    // -- NOT GATE ASSEMBLER -- //
    assembler(
        event,
        st(`assembler/not_gate`),
        8,
        200,
        [
            { amount: 1, item: mc('redstone_torch') },
            { amount: 1, item: lbr('redstone_bit') },
        ],
        [{ amount: 1, item: lbr('not_gate') }],
        [{ amount: 90, fluid: mi('molten_redstone') }]
    );

    // -- AND GATE ASSEMBLER -- //
    assembler(
        event,
        st(`assembler/and_gate`),
        8,
        200,
        [
            { amount: 3, item: mc('redstone_torch') },
            { amount: 1, item: lbr('redstone_bit') },
        ],
        [{ amount: 1, item: lbr('and_gate') }],
        [{ amount: 90, fluid: mi('molten_redstone') }]
    );

    // -- NAND GATE ASSEMBLER -- //
    assembler(
        event,
        st(`assembler/nand_gate`),
        8,
        200,
        [
            { amount: 2, item: mc('redstone_torch') },
            { amount: 1, item: lbr('redstone_bit') },
        ],
        [{ amount: 1, item: lbr('nand_gate') }],
        [{ amount: 180, fluid: mi('molten_redstone') }]
    );

    // -- OR GATE ASSEMBLER -- //
    assembler(
        event,
        st(`assembler/or_gate`),
        8,
        200,
        [{ amount: 1, item: lbr('redstone_bit') }],
        [{ amount: 1, item: lbr('or_gate') }],
        [{ amount: 360, fluid: mi('molten_redstone') }]
    );

    // -- NOR GATE ASSEMBLER -- //
    assembler(
        event,
        st(`assembler/nor_gate`),
        8,
        200,
        [
            { amount: 1, item: mc('redstone_torch') },
            { amount: 1, item: lbr('redstone_bit') },
        ],
        [{ amount: 1, item: lbr('nor_gate') }],
        [{ amount: 270, fluid: mi('molten_redstone') }]
    );

    // -- XOR GATE ASSEMBLER -- //
    assembler(
        event,
        st(`assembler/xor_gate`),
        8,
        200,
        [
            { amount: 2, item: lbr('nor_gate') },
            { amount: 1, item: lbr('and_gate') },
            { amount: 1, item: lbr('redstone_bit') },
        ],
        [{ amount: 1, item: lbr('xor_gate') }],
        [{ amount: 90, fluid: mi('molten_redstone') }]
    );

    // -- SEQUENCER ASSEMBLER -- //
    assembler(
        event,
        st(`assembler/sequencer`),
        8,
        200,
        [
            { amount: 6, item: mc('gold_ingot') },
            { amount: 1, item: mc('repeater') },
            { amount: 1, item: lbr('redstone_bit') },
        ],
        [{ amount: 1, item: lbr('sequencer') }],
        [{ amount: 90, fluid: mi('molten_redstone') }]
    );

    // -- PULSE THROTTLER ASSEMBLER -- //
    assembler(
        event,
        st(`assembler/pulse_throttler`),
        8,
        200,
        [
            { amount: 1, item: mc('sticky_piston') },
            { amount: 1, item: lbr('redstone_bit') },
        ],
        [{ amount: 1, item: lbr('pulse_throttler') }],
        [{ amount: 180, fluid: mi('molten_redstone') }]
    );

    // -- SELECTOR ASSEMBLER -- //
    assembler(
        event,
        st(`assembler/selector`),
        8,
        200,
        [
            { amount: 3, item: mc('repeater') },
            { amount: 2, item: mc('gold_ingot') },
            { amount: 1, item: lbr('redstone_bit') },
        ],
        [{ amount: 1, item: lbr('selector') }],
        [{ amount: 270, fluid: mi('molten_redstone') }]
    );

    // -- RANDOMIZER ASSEMBLER -- //
    assembler(
        event,
        st(`assembler/randomizer`),
        8,
        200,
        [
            { amount: 4, item: mc('gold_ingot') },
            { amount: 1, item: mc('dropper') },
            { amount: 1, item: lbr('redstone_bit') },
        ],
        [{ amount: 1, item: lbr('randomizer') }],
        [{ amount: 270, fluid: mi('molten_redstone') }]
    );

    // -- COMPARATOR ASSEMBLER -- //
    assembler(
        event,
        st(`assembler/comparator`),
        8,
        200,
        [
            { amount: 3, item: mc('redstone_torch') },
            { amount: 1, item: mc('quartz') },
            { amount: 1, item: lbr('redstone_bit') },
        ],
        [{ amount: 1, item: lbr('comparator') }],
        [{ amount: 180, fluid: mi('molten_redstone') }]
    );

    // -- CALCULATOR ASSEMBLER -- //
    assembler(
        event,
        st(`assembler/calculator`),
        8,
        200,
        [
            { amount: 4, item: mc('copper_ingot') },
            { amount: 2, item: mc('gold_ingot') },
            { amount: 1, item: mc('quartz') },
            { amount: 1, item: lbr('redstone_bit') },
        ],
        [{ amount: 1, item: lbr('calculator') }],
        [{ amount: 90, fluid: mi('molten_redstone') }]
    );

    // -- T FLIP FLOP ASSEMBLER -- //
    assembler(
        event,
        st(`assembler/t_flip_flop`),
        8,
        200,
        [
            { amount: 2, item: lbr('nand_gate') },
            { amount: 1, item: lbr('rs_nor_latch') },
            { amount: 1, item: lbr('redstone_bit') },
        ],
        [{ amount: 1, item: lbr('t_flip_flop') }],
        [{ amount: 90, fluid: mi('molten_redstone') }]
    );

    // -- RS NOR LATCH ASSEMBLER -- //
    assembler(
        event,
        st(`assembler/rs_nor_latch`),
        8,
        200,
        [
            { amount: 2, item: lbr('nor_gate') },
            { amount: 1, item: lbr('redstone_bit') },
        ],
        [{ amount: 1, item: lbr('rs_nor_latch') }],
        [{ amount: 270, fluid: mi('molten_redstone') }]
    );

    // ----------------------//
    // -- CUTTING MACHINE -- //
    // ----------------------//

    // -- REDSTONE BIT CUTTING -- //
    cuttingMachine(
        event,
        st('redstone_bit_cutting'),
        2,
        100,
        [{ amount: 1, item: mc('redstone') }],
        [{ amount: 2, item: lbr('redstone_bit') }]
    );
});
