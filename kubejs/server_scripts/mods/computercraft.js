// -----------------------------------------
// CREATED BY STATIC AND DINO FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:computercraft/${id}`;

    // -- COMPUTERCRAFT REMOVED RECIPES -- //
    const COMPUTERCRAFT_REMOVED_RECIPES = [
        cc('computer_normal'),
        cc('turtle_normal'),
        cc('pocket_computer_normal'),
        cc('wireless_modem_normal'),
        cc('monitor_normal'),
        cc('cable'),
        cc('wired_modem'),
        cc('redstone_relay'),
        cc('speaker'),
        cc('printer'),
        cc('disk_drive'),
        cc('computer_advanced'),
        cc('turtle_advanced'),
        cc('pocket_computer_advanced'),
        cc('wireless_modem_advanced'),
        cc('monitor_advanced'),
        cc('computer_advanced_upgrade'),
        cc('turtle_advanced_upgrade'),
        cc('pocket_computer_advanced_upgrade'),
        adp('computer_tool'),
        adp('peripheral_casing'),
        adp('memory_card'),
        adp('chunk_controller'),
        adp('weak_automata_core'),
        adp('nbt_storage'),
        adp('geo_scanner'),
        adp('block_reader'),
        adp('inventory_manager'),
        adp('environment_detector'),
        adp('chat_box'),
        adp('player_detector'),
        adp('energy_detector'),
    ];
    COMPUTERCRAFT_REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // ---------------------//
    // ------ SHAPED ------ //
    // ---------------------//

    // -- NORMAL COMPUTER -- //
    event
        .shaped(cc('computer_normal'), ['RRR', 'SCS', 'SGS'], {
            S: mi('steel_plate'),
            C: lbr('redstone_circuit_board'),
            R: mr('red_alloy_ingot'),
            G: '#c:glass_panes',
        })
        .id(st('computer_normal'));

    // -- NORMAL TURTLE -- //
    event
        .shaped(cc('turtle_normal'), ['SRS', 'SCS', 'STS'], {
            S: mi('steel_plate'),
            C: cc('computer_normal'),
            R: mr('red_alloy_ingot'),
            T: '#c:chests/wooden',
        })
        .id(st('turtle_normal'));

    // -- NORMAL POCKET COMPUTER -- //
    event
        .shaped(cc('pocket_computer_normal'), ['SC ', 'RG '], {
            S: mi('steel_plate'),
            C: cc('computer_normal'),
            R: mr('red_alloy_ingot'),
            G: mc('golden_apple'),
        })
        .id(st('pocket_computer_normal'));

    // -- NORMAL WIRELESS MODEM -- //
    event
        .shaped(cc('wireless_modem_normal'), ['SRS', 'RER', 'SRS'], {
            S: mi('steel_plate'),
            E: mc('ender_eye'),
            R: mr('red_alloy_ingot'),
        })
        .id(st('wireless_modem_normal'));

    // -- NETWORK CABLE RUBBER SHEET SHAPED -- //
    event
        .shaped('3x ' + cc('cable'), ['RRR', 'WWW', 'RRR'], {
            W: mr('red_alloy_wire'),
            R: mi('rubber_sheet'),
        })
        .id(st('cable_shaped'));

    // -- WIRED MODEM -- //
    event
        .shaped(cc('wired_modem'), ['SSS', 'SRS', 'SSS'], {
            S: mi('steel_plate'),
            R: mr('red_alloy_wire'),
        })
        .id(st('wired_modem'));

    // -- REDSTONE RELAY -- //
    event
        .shaped(cc('redstone_relay'), ['SRS', 'RMR', 'SRS'], {
            S: mi('steel_plate'),
            R: mr('red_alloy_wire'),
            M: cc('wired_modem'),
        })
        .id(st('redstone_relay'));

    // -- NORMAL MONITOR -- //
    event
        .shaped(cc('monitor_normal'), ['SRS', 'SGS', 'SSS'], {
            S: mi('steel_plate'),
            R: mc('glowstone_dust'),
            G: '#c:glass_panes',
        })
        .id(st('monitor_normal'));

    // -- SPEAKER -- //
    event
        .shaped(cc('speaker'), ['SSS', 'SNS', 'SRS'], {
            S: mi('steel_plate'),
            R: mr('red_alloy_ingot'),
            N: mc('note_block'),
        })
        .id(st('speaker'));

    // -- PRINTER -- //
    event
        .shaped(cc('printer'), ['SSS', 'SDS', 'SRS'], {
            S: mi('steel_plate'),
            R: mr('red_alloy_ingot'),
            D: '#c:dyes',
        })
        .id(st('printer'));

    // -- DISK DRIVE -- //
    event
        .shaped(cc('disk_drive'), ['SSS', 'SDS', 'SRS'], {
            S: mi('steel_plate'),
            R: mr('red_alloy_ingot'),
            D: lbr('redstone_circuit_board'),
        })
        .id(st('disk_drive'));

    // -- ADVANCED COMPUTER -- //
    event
        .shaped(cc('computer_advanced'), ['EEE', 'ECE', 'ARA'], {
            E: mi('electrum_plate'),
            C: cc('computer_normal'),
            R: mi('electronic_circuit'),
            A: mi('aluminum_plate'),
        })
        .id(st('computer_advanced'));

    // -- ADVANCED TURTLE -- //
    event
        .shaped(cc('turtle_advanced'), ['EBE', 'ECE', 'ARA'], {
            E: mi('electrum_plate'),
            C: cc('turtle_normal'),
            R: mi('electronic_circuit'),
            A: mi('aluminum_plate'),
            B: mi('electrum_block'),
        })
        .id(st('turtle_advanced'));

    // -- ADVANCED POCKET COMPUTER -- //
    event
        .shaped(cc('pocket_computer_advanced'), ['ERE', 'ECE', 'A A'], {
            E: mi('electrum_plate'),
            C: cc('pocket_computer_normal'),
            R: mi('electronic_circuit'),
            A: mi('aluminum_plate'),
        })
        .id(st('pocket_computer_advanced'));

    // -- ADVANCED WIRELESS MODEM -- //
    event
        .shaped(cc('wireless_modem_advanced'), ['SAS', 'SRS', 'SSS'], {
            S: mi('electrum_plate'),
            R: cc('wireless_modem_normal'),
            A: mi('aluminum_plate'),
        })
        .id(st('wireless_modem_advanced'));

    // -- ADVANCED MONITOR -- //
    event
        .shaped(cc('monitor_advanced'), ['SSS', 'SMS'], {
            S: mi('electrum_plate'),
            M: cc('monitor_normal'),
        })
        .id(st('advanced_monitor'));

    // -- PERIPHERAL CASING -- //
    event
        .shaped(adp('peripheral_casing'), ['SSS', 'SMS', 'SSS'], {
            S: mi('aluminum_plate'),
            M: lbr('redstone_circuit_board'),
        })
        .id(st('advanced_monitor'));

    // --------------------//
    // ---- ASSEMBLER ---- //
    // --------------------//

    // -- NETWORK CABLE SYNTHETIC RUBBER -- //
    assembler(
        event,
        st('assembler/cable_synth_rubber'),
        2,
        100,
        [{ amount: 3, item: mr('red_alloy_wire') }],
        [{ amount: 3, item: cc('cable') }],
        [{ amount: 30, fluid: mi('synthetic_rubber') }]
    );

    // -- NETWORK CABLE SBR -- //
    assembler(
        event,
        st('assembler/cable_sbr'),
        2,
        100,
        [{ amount: 3, item: mr('red_alloy_wire') }],
        [{ amount: 3, item: cc('cable') }],
        [{ amount: 6, fluid: mi('styrene_butadiene_rubber') }]
    );

    // -- NORMAL COMPUTER ASSEMBLER -- //
    assembler(
        event,
        st('assembler/computer_normal'),
        8,
        200,
        [
            { amount: 4, item: mi('steel_plate') },
            { amount: 3, item: mr('red_alloy_ingot') },
            { amount: 1, item: lbr('redstone_circuit_board') },
            { amount: 1, tag: 'c:glass_panes' },
        ],
        [{ amount: 1, item: cc('computer_normal') }]
    );

    // -- NORMAL MONITOR ASSEMBLER -- //
    assembler(
        event,
        st('assembler/monitor_normal'),
        8,
        200,
        [
            { amount: 7, item: mi('steel_plate') },
            { amount: 1, item: mc('glowstone_dust') },
            { amount: 1, tag: 'c:glass_panes' },
        ],
        [{ amount: 1, item: cc('monitor_normal') }]
    );

    // -- ADVANCED COMPUTER ASSEMBLER -- //
    assembler(
        event,
        st('assembler/computer_advanced'),
        8,
        200,
        [
            { amount: 5, item: mi('electrum_plate') },
            { amount: 1, item: cc('computer_normal') },
            { amount: 2, item: mi('aluminum_plate') },
            { amount: 1, item: mi('electronic_circuit') },
        ],
        [{ amount: 1, item: cc('computer_advanced') }]
    );

    // -- PERIPHERAL CASING ASSEMBLER -- //
    assembler(
        event,
        st('assembler/peripheral_casing'),
        8,
        200,
        [
            { amount: 8, item: mi('aluminum_plate') },
            { amount: 1, item: lbr('redstone_circuit_board') },
        ],
        [{ amount: 1, item: adp('peripheral_casing') }]
    );

    // -- MEMORY CARD ASSEMBLER -- //
    assembler(
        event,
        st('assembler/memory_card'),
        8,
        200,
        [
            { amount: 4, item: mi('aluminum_plate') },
            { amount: 1, item: mi('analog_circuit') },
            { amount: 1, item: lbr('redstone_circuit_board') },
        ],
        [{ amount: 1, item: adp('memory_card') }],
        [{ amount: 180, fluid: mi('molten_redstone') }]
    );

    // -- CHUNK CONTROLLER ASSEMBLER -- //
    assembler(
        event,
        st('assembler/chunk_controller'),
        8,
        200,
        [
            { amount: 4, item: mi('aluminum_plate') },
            { amount: 1, item: mc('ender_eye') },
            { amount: 1, item: lbr('redstone_circuit_board') },
        ],
        [{ amount: 1, item: adp('chunk_controller') }],
        [{ amount: 360, fluid: mi('molten_redstone') }]
    );

    // -- WEAK AUTOMATA CORE ASSEMBLER -- //
    assembler(
        event,
        st('assembler/weak_automata_core'),
        8,
        200,
        [
            { amount: 4, item: mi('aluminum_plate') },
            { amount: 1, item: mc('soul_lantern') },
            { amount: 1, item: mi('electronic_circuit') },
            { amount: 1, item: adp('peripheral_casing') },
        ],
        [{ amount: 1, item: adp('weak_automata_core') }],
        [{ amount: 3240, fluid: mi('molten_redstone') }]
    );

    // -- NBT STORAGE ASSEMBLER -- //
    assembler(
        event,
        st('assembler/nbt_storage'),
        8,
        200,
        [
            { amount: 4, item: mc('ender_chest') },
            { amount: 2, item: mi('aluminum_plate') },
            { amount: 1, item: mi('electronic_circuit') },
            { amount: 1, item: adp('peripheral_casing') },
        ],
        [{ amount: 1, item: adp('nbt_storage') }],
        [{ amount: 1620, fluid: mi('molten_redstone') }]
    );

    // -- GEO SCANNER ASSEMBLER -- //
    assembler(
        event,
        st('assembler/geo_scanner'),
        8,
        200,
        [
            { amount: 4, tag: cc('wired_modem') },
            { amount: 2, item: mi('aluminum_plate') },
            { amount: 2, item: mc('observer') },
            { amount: 1, item: adp('peripheral_casing') },
        ],
        [{ amount: 1, item: adp('geo_scanner') }],
        [{ amount: 1620, fluid: mi('molten_redstone') }]
    );

    // -- BLOCK READER ASSEMBLER -- //
    assembler(
        event,
        st('assembler/block_reader'),
        8,
        200,
        [
            { amount: 4, item: mi('aluminum_plate') },
            { amount: 2, tag: cc('wired_modem') },
            { amount: 2, item: mc('observer') },
            { amount: 1, item: adp('peripheral_casing') },
        ],
        [{ amount: 1, item: adp('block_reader') }],
        [{ amount: 1620, fluid: mi('molten_redstone') }]
    );

    // -- INVENTORY MANAGER ASSEMBLER -- //
    assembler(
        event,
        st('assembler/inventory_manager'),
        8,
        200,
        [
            { amount: 4, item: mc('ender_chest') },
            { amount: 4, item: mi('aluminum_plate') },
            { amount: 1, item: mi('electronic_circuit') },
            { amount: 1, item: adp('peripheral_casing') },
        ],
        [{ amount: 1, item: adp('inventory_manager') }]
    );

    // -- ENVIRONMENT DETECTOR ASSEMBLER -- //
    assembler(
        event,
        st('assembler/environment_detector'),
        8,
        200,
        [
            { amount: 4, tag: mc('leaves') },
            { amount: 4, item: mi('aluminum_plate') },
            { amount: 1, item: 'naturescompass:naturescompass' },
            { amount: 1, item: adp('peripheral_casing') },
        ],
        [{ amount: 1, item: adp('environment_detector') }]
    );

    // -- CHAT BOX ASSEMBLER -- //
    assembler(
        event,
        st('assembler/chat_box'),
        8,
        200,
        [
            { amount: 7, tag: mc('logs') },
            { amount: 4, item: mi('aluminum_plate') },
            { amount: 1, item: adp('peripheral_casing') },
        ],
        [{ amount: 1, item: adp('chat_box') }]
    );

    // -- PLAYER DETECTOR ASSEMBLER -- //
    assembler(
        event,
        st('assembler/player_detector'),
        8,
        200,
        [
            { amount: 7, item: mc('smooth_stone') },
            { amount: 4, item: mi('aluminum_plate') },
            { amount: 2, item: mc('observer') },
            { amount: 1, item: adp('peripheral_casing') },
        ],
        [{ amount: 1, item: adp('player_detector') }],
        [{ amount: 810, fluid: mi('molten_redstone') }]
    );

    // -- ENERGY DETECTOR ASSEMBLER -- //
    assembler(
        event,
        st('assembler/energy_detector'),
        8,
        200,
        [
            { amount: 4, item: mi('aluminum_plate') },
            { amount: 2, item: lbr('comparator') },
            { amount: 4, item: mi('silicon_battery') },
            { amount: 1, item: adp('peripheral_casing') },
        ],
        [{ amount: 1, item: adp('energy_detector') }],
        [{ amount: 3240, fluid: mi('molten_redstone') }]
    );

    // ---------------------//
    // ------ PACKER ------ //
    // ---------------------//

    // -- NETWORK CABLE RUBBER SHEET -- //
    packer(
        event,
        st('packer/cable_rubber_sheet'),
        2,
        100,
        [
            { amount: 3, item: mr('red_alloy_wire') },
            { amount: 6, item: mi('rubber_sheet') },
        ],
        [{ amount: 3, item: cc('cable') }]
    );

    // -- ADVANCED MONITOR PACKER -- //
    packer(
        event,
        st('packer/monitor_advanced'),
        8,
        100,
        [
            { amount: 5, item: mi('electrum_plate') },
            { amount: 1, item: cc('monitor_normal') },
        ],
        [{ amount: 1, item: cc('monitor_advanced') }]
    );
});

MoreJS.villagerTrades((event) => {
    event.removeModdedTypedTrades(adp('computer_scientist'));
});
