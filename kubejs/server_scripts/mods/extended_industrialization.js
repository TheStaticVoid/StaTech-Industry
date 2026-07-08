// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:extended_industrialization/${id}`;

    // -- EXTENDED INDUSTRIALIZATION REMOVED RECIPES -- //
    const EI_DELETED_ITEMS = [
        ei('machines/large_electric_furnace/assembler'),
        ei('machines/large_electric_furnace/craft'),
        ei('machines/bending_machine/assembler/bronze'),
        ei('machines/bending_machine/craft/bronze'),
        ei('machines/bending_machine/assembler/electric'),
        ei('machines/bending_machine/craft/electric'),
        ei('machines/bending_machine/unpacker/downgrade_steel'),
        ei('machines/bending_machine/packer/upgrade_steel'),
        ei('machines/bending_machine/craft/upgrade_steel'),
        ei('machines/alloy_smelter/craft/electric'),
        ei('machines/alloy_smelter/assembler/electric'),
        ei('machines/processing_array/craft'),
        ei('machines/processing_array/assembler'),
        ei('tool/craft/steam_chainsaw'),
        ei('tool/craft/tesla_handheld_receiver'),
        ei('machines/large_steam_macerator/craft'),
        ei('machines/large_steam_macerator/assembler')
    ];
    EI_DELETED_ITEMS.forEach(id => event.remove( {id: id} ));

    // -- LARGE STEAM MACERATOR -- //
    event.shaped(ei('large_steam_macerator'), [
        'PBP',
        'MCM',
        'PBP'
    ],
    {
        P: mi('bronze_curved_plate'),
        B: mi('bronze_plated_bricks'),
        M: mi('bronze_macerator'),
        C: mi('steel_machine_casing')
    }).id(st('large_steam_macerator'));

    // -- STEAM CHAINSAW -- //
    event.shaped(ei('steam_chainsaw'), [
        'FDD',
        'PGD',
        'BPF'
    ],
    {
        F: mc('furnace'),
        D: '#c:gems/diamond',
        P: '#c:large_plates/steel',
        G: '#c:gears/copper',
        B: mc('bucket')
    }).id(st('steam_chainsaw'));

    // -- TESLA HANDHELD RECEIVER -- //
    event.shaped(ei('tesla_handheld_receiver'), [
        'S  ',
        'CDD',
        'ETT'
    ],
    {
        S: ei('silver_tesla_top_load'),
        D: mi('diode'),
        T: mi('transistor'),
        C: mi('cupronickel_coil'),
        E: mi('electronic_circuit')
    }).id(st('tesla_handheld_receiver'));


    // -- ALLOY SMELTER -- //
    event.shaped(ei('electric_alloy_smelter'), [
        'MAM',
        'IFI',
        'TAT'
    ],
    {
        M: mi('cupronickel_wire_magnetic'),
        A: mi('analog_circuit'),
        I: mi('inductor'),
        T: mi('tin_cable'),
        F: mi('electric_furnace')
    }).id(st('electric_alloy_smelter'));

    // -- MEGA SMELTER -- //
    event.shaped(ei('large_electric_furnace'), [
        'MCM',
        'FHF',
        'MCM'
    ],
    {
        M: mi('cupronickel_wire_magnetic'),
        C: mi('electronic_circuit'),
        F: mi('electric_furnace'),
        H: mi('advanced_machine_hull')
    }).id(st('large_electric_furnace'));

    // -- ELECTRIC BENDING MACHINES -- //
    event.shaped(ei('electric_bending_machine'), [
        'APA',
        'MCM',
        'TPT'
    ],
    {
        M: mi('motor'),
        A: mi('analog_circuit'),
        T: mi('tin_cable'),
        P: mi('piston'),
        C: mi('electric_compressor')
    }).id(st('electric_bending_machine'));

    // -- PROCESSING ARRAY -- //
    event.shaped(ei('processing_array'), [
        'SQS',
        'GAG',
        'SQS'
    ],
    {
        S: mi('clean_stainless_steel_machine_casing'),
        G: '#c:glass_blocks',
        A: mi('assembler'),
        Q: mi('quantum_upgrade')
    }).id(st('processing_array'));
    
    // -- TESLA RECEIVERS FROM ENERGY INPUT HATCH
    const TIER_NAMES = ['lv', 'mv', 'hv', 'ev', 'superconductor'];
    TIER_NAMES.forEach(tierName => {
        event.shaped(ei(`${tierName}_tesla_receiver_hatch`),
        [
            ' C',
            ' T'
        ],
        {
            C: ei('tesla_receiver'),
            T: mi(`${tierName}_energy_input_hatch`)
        })
        .id(st(`${tierName}_tesla_receiver_hatch_from_${tierName}_energy_input_hatch`));
    });

    //-------------------------//
    // -- ASSEMBLER RECIPES -- //
    //-------------------------//
    
    // -- PROCESSING ARRAY -- //
    assembler(
        event,
        st('assembler_processing_array'),
        8,
        200,
        [
            { amount: 4, item: mi('clean_stainless_steel_machine_casing') },
            { amount: 1, item: mi('assembler') },
            { amount: 2, item: mi('quantum_upgrade') },
            { amount: 2, tag: 'c:glass_blocks' }
        ],
        [ { amount: 1, item: ei('processing_array') } ]
    );

     // -- LARGE ELECTRIC FURNACE -- //
    assembler(
        event,
        st('assembler_large_electric_furnace'),
        8,
        200,
        [
            { amount: 4, item: mi('cupronickel_wire_magnetic') },
            { amount: 2, item: mi('electric_furnace') },
            { amount: 2, item: mi('electronic_circuit') },
            { amount: 1, item: mi('advanced_machine_hull') }
        ],
        [ { amount: 1, item: ei('large_electric_furnace') } ]
    );

     // -- ELECTRIC BENDING MACHINE -- //
    assembler(
        event,
        st('assembler_electric_bending_machine'),
        8,
        200,
        [
            { amount: 1, item: mi('electric_compressor') },
            { amount: 2, item: mi('piston') },
            { amount: 2, item: mi('analog_circuit') },
            { amount: 2, item: mi('motor') },
            { amount: 2, item: mi('tin_cable') }
        ],
        [ { amount: 1, item: ei('electric_bending_machine') } ]
    );

});

ServerEvents.tags('item', event => {
    const ENERGY_INPUT_HATCH = [
        ei('lv_tesla_receiver_hatch'),
        ei('mv_tesla_receiver_hatch'),
        ei('hv_tesla_receiver_hatch'),
        ei('ev_tesla_receiver_hatch'),
        ei('superconductor_tesla_receiver_hatch')
    ];
    ENERGY_INPUT_HATCH.forEach(id => {
        event.add('kubejs:energy_input_hatch', id);
        event.add('kubejs:wireless_energy_input_hatch', id);
    });
    
    const TESLA_WINDING_TYPE = ['copper', 'annealed_copper', 'electrum', 'superconductor', 'aluminum'];
    TESLA_WINDING_TYPE.forEach(typeName=>{
        event.add('kubejs:tesla_winding', ei(`${typeName}_tesla_winding`));
    });
});
