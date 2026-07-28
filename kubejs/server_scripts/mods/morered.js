// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:morered/${id}`;

    event.remove({ type: mr('soldering') })

    // -- MORE RED REMOVED RECIPES -- //
    const MORERED_REMOVED_RECIPES = [
        mr('red_alloy_ingot'),
        mr('red_alloy_wire'),
        mr('soldering_table'),
    ];
    MORERED_REMOVED_RECIPES.forEach(id => event.remove({ id: id }));


    // ----------------------//
    // ----- WIREMILL ----- //
    // ----------------------//


    // -- RED ALLOY WIRE -- //
    wiremill(
        event,
        st('red_alloy_wire'),
        2,
        100,
        [{ amount: 1, item: mr('red_alloy_ingot') }],
        [{ amount: 2, item: mr('red_alloy_wire') }],
    );


    // ---------------------//
    // ------ PACKER ------ //
    // ---------------------//

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

    DYE_COLORS.forEach(DYE_COLORS => {
        event.remove({ id: mr(`${DYE_COLORS}_network_cable`) });
        packer(
            event,
            st(`${DYE_COLORS}_red_alloy_cable`),
            2,
            200,
            [
                { amount: 8, item: mr('red_alloy_wire') },
                { amount: 1, item: mc(`${DYE_COLORS}_wool`) }
            ],
            [{ amount: 8, item: mr(`${DYE_COLORS}_network_cable`) }]
        );
    })

    // ---------------------//
    // ---- ASSEMBLER ---- //
    // ---------------------//


    // -- HEXIDECRUBROMETER -- //
    assembler(
        event,
        st('hexidecrubrometer'),
        8,
        200,
        [
            { amount: 8, item: mr('stone_plate') },
            { amount: 9, item: mc('redstone') },
            { amount: 4, item: mc('quartz') }
        ],
        [{ amount: 1, item: mr('hexidecrubrometer') }],
    );

    // -- REDWIRE POST RELAY PLATE -- //
    assembler(
        event,
        st('redwire_post_relay_plate'),
        8,
        200,
        [
            { amount: 1, item: mr('stone_plate') },
            { amount: 1, item: mc('redstone') },
            { amount: 2, item: mr('red_alloy_ingot') }
        ],
        [{ amount: 1, item: mr('redwire_post_relay_plate') }],
    );

    // -- LATCH -- //
    assembler(
        event,
        st('latch'),
        8,
        200,
        [
            { amount: 1, item: mr('stone_plate') },
            { amount: 3, item: mc('redstone') }
        ],
        [{ amount: 1, item: mr('latch') }],
    );

    // -- PULSE GATE -- //
    assembler(
        event,
        st('pulse_gate'),
        8,
        200,
        [
            { amount: 1, item: mr('stone_plate') },
            { amount: 1, item: mc('redstone') },
            { amount: 1, item: mr('red_alloy_ingot') }
        ],
        [{ amount: 1, item: mr('pulse_gate') }],
    );

    // -- REDWIRE POST -- //
    assembler(
        event,
        st('redwire_post'),
        8,
        200,
        [
            { amount: 2, item: mr('red_alloy_ingot') }
        ],
        [{ amount: 1, item: mr('redwire_post') }],
    );

    // -- REDWIRE POST PLATE -- //
    assembler(
        event,
        st('redwire_post_plate'),
        8,
        200,
        [
            { amount: 1, item: mr('stone_plate') },
            { amount: 2, item: mr('red_alloy_ingot') }
        ],
        [{ amount: 1, item: mr('redwire_post_plate') }],
    );

    // -- BUNDLED CABLE POST -- //
    assembler(
        event,
        st('bundled_cable_post'),
        8,
        200,
        [
            { amount: 1, item: mr('bundled_network_cable') },
            { amount: 1, item: mr('red_alloy_ingot') }
        ],
        [{ amount: 1, item: mr('bundled_cable_post') }],
    );

    // -- BUNDLED CABLE RELAY PLATE -- //
    assembler(
        event,
        st('bundled_cable_relay_plate'),
        8,
        200,
        [
            { amount: 2, item: mr('stone_plate') },
            { amount: 1, item: mr('bundled_network_cable') },
            { amount: 1, item: mr('red_alloy_ingot') }
        ],
        [{ amount: 1, item: mr('bundled_cable_relay_plate') }],
    );

    // -- BUNDLED CABLE -- //
    assembler(
        event,
        st('bundled_network_cable'),
        8,
        200,
        [
            { amount: 3, tag: 'morered:network_cables' }
        ],
        [{ amount: 3, item: mr('bundled_network_cable') }],
    );

    // -- DIODE -- //
    assembler(
        event,
        st('diode_mr'),
        8,
        200,
        [
            { amount: 1, item: mr('stone_plate') },
            { amount: 3, item: mc('redstone') }
        ],
        [{ amount: 1, item: mr('diode') }],
    );

    // -- NOT GATE -- //
    assembler(
        event,
        st('not_gate'),
        8,
        200,
        [
            { amount: 1, item: mr('stone_plate') },
            { amount: 2, item: mc('redstone') }
        ],
        [{ amount: 1, item: mr('not_gate') }],
    );

    // -- NOR GATE -- //
    assembler(
        event,
        st('nor_gate'),
        8,
        200,
        [
            { amount: 1, item: mr('stone_plate') },
            { amount: 2, item: mc('redstone') }
        ],
        [{ amount: 1, item: mr('nor_gate') }],
    );

    // -- NAND GATE -- //
    assembler(
        event,
        st('nand_gate'),
        8,
        200,
        [
            { amount: 1, item: mr('stone_plate') },
            { amount: 4, item: mc('redstone') }
        ],
        [{ amount: 1, item: mr('nand_gate') }],
    );

    // -- OR GATE -- //
    assembler(
        event,
        st('or_gate'),
        8,
        200,
        [
            { amount: 1, item: mr('stone_plate') },
            { amount: 3, item: mc('redstone') }
        ],
        [{ amount: 1, item: mr('or_gate') }],
    );

    // -- AND GATE -- //
    assembler(
        event,
        st('and_gate'),
        8,
        200,
        [
            { amount: 1, item: mr('stone_plate') },
            { amount: 5, item: mc('redstone') }
        ],
        [{ amount: 1, item: mr('and_gate') }],
    );

    // -- XOR GATE -- //
    assembler(
        event,
        st('xor_gate'),
        8,
        200,
        [
            { amount: 1, item: mr('stone_plate') },
            { amount: 4, item: mc('redstone') }
        ],
        [{ amount: 1, item: mr('xor_gate') }],
    );

    // -- XNOR GATE -- //
    assembler(
        event,
        st('xnor_gate'),
        8,
        200,
        [
            { amount: 1, item: mr('stone_plate') },
            { amount: 4, item: mc('redstone') }
        ],
        [{ amount: 1, item: mr('xnor_gate') }],
    );

    // -- MULTIPLEXER -- //
    assembler(
        event,
        st('multiplexer'),
        8,
        200,
        [
            { amount: 1, item: mr('stone_plate') },
            { amount: 1, item: mr('red_alloy_ingot') },
            { amount: 1, item: mc('redstone') }
        ],
        [{ amount: 1, item: mr('multiplexer') }],
    );

    // -- 2 INPUT 1 OUTPUT GATE -- //
    assembler(
        event,
        st('and_2_gate'),
        8,
        200,
        [
            { amount: 1, item: mr('stone_plate') },
            { amount: 4, item: mc('redstone') }
        ],
        [{ amount: 1, item: mr('and_2_gate') }],
    );

    // -- 2 INPUT NAND GATE -- //
    assembler(
        event,
        st('nand_2_gate'),
        8,
        200,
        [
            { amount: 1, item: mr('stone_plate') },
            { amount: 3, item: mc('redstone') }
        ],
        [{ amount: 1, item: mr('nand_2_gate') }],
    );

    // -- BITWISE DIODE -- //
    assembler(
        event,
        st('bitwise_diode'),
        8,
        200,
        [
            { amount: 2, item: mr('stone_plate') },
            { amount: 1, item: mc('quartz') },
            { amount: 1, item: mc('redstone') },
            { amount: 1, item: mr('bundled_network_cable') },
        ],
        [{ amount: 1, item: mr('bitwise_diode') }],
    );

    // -- BITWISE NOT GATE -- //
    assembler(
        event,
        st('bitwise_not_gate'),
        8,
        200,
        [
            { amount: 2, item: mr('stone_plate') },
            { amount: 1, item: mc('quartz') },
            { amount: 1, item: mc('redstone') },
            { amount: 1, item: mr('bundled_network_cable') },
        ],
        [{ amount: 1, item: mr('bitwise_not_gate') }],
    );

    // -- BITWISE OR GATE -- //
    assembler(
        event,
        st('bitwise_or_gate'),
        8,
        200,
        [
            { amount: 2, item: mr('stone_plate') },
            { amount: 1, item: mc('quartz') },
            { amount: 1, item: mc('redstone') },
            { amount: 1, item: mr('bundled_network_cable') },
        ],
        [{ amount: 1, item: mr('bitwise_or_gate') }],
    );

    // -- BITWISE AND GATE -- //
    assembler(
        event,
        st('bitwise_and_gate'),
        8,
        200,
        [
            { amount: 2, item: mr('stone_plate') },
            { amount: 1, item: mc('quartz') },
            { amount: 1, item: mc('redstone') },
            { amount: 1, item: mr('bundled_network_cable') },
        ],
        [{ amount: 1, item: mr('bitwise_and_gate') }],
    );

    // -- BITWISE XOR GATE -- //
    assembler(
        event,
        st('bitwise_xor_gate'),
        8,
        200,
        [
            { amount: 2, item: mr('stone_plate') },
            { amount: 1, item: mc('quartz') },
            { amount: 1, item: mc('redstone') },
            { amount: 1, item: mr('bundled_network_cable') },
        ],
        [{ amount: 1, item: mr('bitwise_xor_gate') }],
    );

    // -- BITWISE XNOR GATE -- //
    assembler(
        event,
        st('bitwise_xnor_gate'),
        8,
        200,
        [
            { amount: 2, item: mr('stone_plate') },
            { amount: 1, item: mc('quartz') },
            { amount: 1, item: mc('redstone') },
            { amount: 1, item: mr('bundled_network_cable') },
        ],
        [{ amount: 1, item: mr('bitwise_xnor_gate') }],
    );

    // -- REDWIRE SPOOL -- //
    assembler(
        event,
        st('redwire_spool'),
        8,
        200,
        [
            { amount: 3, item: mr('red_alloy_wire') },
            { amount: 4, item: mi('steel_plate') },
            { amount: 2, item: mc('stick') },
        ],
        [{ amount: 2, item: mr('redwire_spool') }],
    );

    // -- BUNDLED CABLE SPOOL -- //
    assembler(
        event,
        st('bundled_cable_spool'),
        8,
        200,
        [
            { amount: 3, item: mr('bundled_network_cable') },
            { amount: 4, item: mi('steel_plate') },
            { amount: 2, item: mc('stick') },
        ],
        [{ amount: 2, item: mr('bundled_cable_spool') }],
    );
});
