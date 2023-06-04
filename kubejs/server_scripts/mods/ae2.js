ServerEvents.recipes(e => {
    // -- REMOVE RECIPES -- //
    const REMOVED_RECIPES = [
        'ae2:network/blocks/inscribers',
        'ae2:transform/fluix_crystals',
        'ae2:transform/fluix_crystal',
        'ae2:transform/certus_quartz_crystals',
        'ae2:network/blocks/controller',
        'ae2:network/blocks/crystal_processing_charger',
        'ae2:network/blocks/energy_vibration_chamber',
        'ae2:network/crafting/patterns_blank',
        'ae2:misc/tank_sky_stone',
        'ae2:network/blocks/security_station',
        'ae2:network/blocks/quantum_ring',
        'ae2:network/blocks/spatial_io_port',
        'ae2:network/blocks/storage_drive',
        'ae2:network/blocks/storage_chest',
        'ae2:network/blocks/interfaces_interface',
        'ae2:network/blocks/cell_workbench',
        'ae2:network/blocks/io_port',
        'ae2:network/blocks/io_condenser',
        'ae2:network/blocks/energy_energy_acceptor',
        'ae2:network/blocks/crystal_processing_quartz_growth_accelerator',
        'ae2:network/crafting/cpu_crafting_unit',
        'ae2:network/blocks/pattern_providers_interface',
        'ae2:network/crafting/molecular_assembler',
        'ae2:network/blocks/spatial_anchor',
        'ae2:tools/misctools_entropy_manipulator',
        'ae2:tools/misctools_charged_staff',
        'ae2:tools/network_color_applicator',
        'ae2:tools/matter_cannon',
        'ae2:tools/network_biometric_card',
        'ae2:tools/network_memory_card',
        'ae2:materials/basiccard',
        'ae2:materials/advancedcard',
        'ae2:network/cells/item_cell_housing',
        'ae2:network/wireless_part',
        'ae2:network/wireless_booster',
        'ae2:network/cells/view_cell',
        'ae2:network/cells/item_storage_cell_1k',
        'ae2:network/cells/item_storage_cell_4k',
        'ae2:network/cells/item_storage_cell_16k',
        'ae2:network/cells/item_storage_cell_64k',
        'ae2:network/cells/item_storage_cell_256k',
        'ae2:network/cells/spatial_storage_cell_2_cubed',
        'ae2:network/cells/spatial_storage_cell_16_cubed',
        'ae2:network/cells/spatial_storage_cell_128_cubed',
        'ae2:network/parts/panels_semi_dark_monitor',
        'ae2:network/parts/import_bus',
        'ae2:network/parts/annihilation_plane_alt2',
        'ae2:network/parts/annihilation_plane_alt',
        'ae2:network/parts/formation_plane_alt',
        'ae2:network/parts/formation_plane',
        'ae2:network/parts/tunnels_me',
        'ae2:network/parts/export_bus',
    ];
    REMOVED_RECIPES.forEach(id => e.remove( {id: id} ));

    let mi = (id) => `modern_industrialization:${id}`;
    let ae = (id) => `ae2:${id}`;
    let st = (id) => `statech:ae2/${id}`;

    // -- REMOVE ALL ENDER DUST OUTPUTS -- //
    e.remove({output: ae('ender_dust')});
    
    // -- INSCRIBER -- //
    e.shaped(ae('inscriber'), [
        'MPM',
        'CHC',
        'MPM'
    ],
    {
        P: mi('piston'),
        M: mi('advanced_motor'),
        H: mi('turbo_machine_hull'),
        C: mi('digital_circuit')
    })
    .id(st('inscriber'));

    // -- CONTROLLER -- //
    e.shaped(ae('controller'), [
        'EFE',
        'CHC',
        'LFP'
    ],
    {
        E: ae('engineering_processor'),
        F: ae('fluix_crystal'),
        C: mi('digital_circuit'),
        H: mi('turbo_machine_hull'),
        L: ae('logic_processor'),
        P: ae('calculation_processor')
    })
    .id(st('controller'));

    // -- CHARGER -- //
    e.shaped(ae('charger'), [
        'SCS',
        'B  ',
        'SCS'
    ],
    {
        S: mi('steel_large_plate'),
        C: mi('annealed_copper_wire'),
        B: 'techreborn:low_voltage_su'
    })
    .id(st('charger'));

    // Buff the Blank Pattern recipe
    e.shaped('4x ae2:blank_pattern', [
        'QGQ',
        'GCG',
        'SSS'
    ],
    {
        Q: ae('quartz_glass'),
        G: '#c:glowstone_dusts',
        C: '#c:certus_quartz',
        S: '#c:stainless_steel_ingots'
    })
    .id(st('blank_pattern'));

    // -- PRINTED SILICON FROM SILICON INGOT -- //
    e.custom({
        id: st('printed_silicon_from_ingot'),
        type: ae('inscriber'),
        ingredients: {
            middle: {
                tag: 'c:silicon_ingots'
            },
            top: {
                item: ae('silicon_press')
            }
        },
        mode: 'inscribe',
        result: {
            item: ae('printed_silicon')
        }
    });

    // -- Replace the remaining iron ingots in recipes to be stainless steel -- //
    // This shit doesn't work on servers?????
    // e.replaceInput({mod: 'ae2'}, 'minecraft:iron_ingot', '#c:stainless_steel_ingots');
    // e.replaceInput({mod: 'ae2'}, '#c:iron_ingots', '#c:stainless_steel_ingots')

    // -- ME SECURITY TERMINAL -- //
    e.shaped(ae('security_station'), [
        'SCS',
        'FOF',
        'SES'
    ],
    {
        S: '#c:stainless_steel_ingots',
        C: ae('chest'),
        F: ae('fluix_glass_cable'),
        O: ae('cell_component_16k'),
        E: ae('engineering_processor')
    })
    .id(st('security_station'));

    // -- ME QUANTUM RING -- //
    e.shaped(ae('quantum_ring'), [
        'SLS',
        'ECF',
        'SLS'
    ],
    {
        S: '#c:stainless_steel_ingots',
        L: ae('logic_processor'),
        E: ae('engineering_processor'),
        C: ae('energy_cell'),
        F: '#ae2:smart_dense_cable',
    })
    .id(st('quantum_ring'));

    // -- SPATIAL IO PORT -- //
    e.shaped(ae('spatial_io_port'), [
        'GGG',
        'FIF',
        'SES'
    ],
    {
        S: '#c:stainless_steel_ingots',
        G: '#c:glass',
        F: ae('fluix_glass_cable'),
        I: ae('io_port'),
        E: ae('engineering_processor')
    })
    .id(st('spatial_io_port'));

    // -- ME DRIVE -- // 
    e.shaped(ae('drive'), [
        'SES',
        'F F',
        'SES'
    ],
    {
        S: '#c:stainless_steel_ingots',
        E: ae('engineering_processor'),
        F: ae('fluix_glass_cable')
    })
    .id(st('drive'));
    
    // -- ME CHEST -- //
    e.shaped(ae('chest'), [
        'GTG',
        'F F',
        'SCS'
    ],
    {
        G: '#c:glass',
        T: ae('terminal'),
        F: ae('fluix_glass_cable'),
        S: '#c:stainless_steel_ingots',
        C: '#c:copper_ingots'
    })
    .id(st('chest'));

    // -- ME INTERFACE -- //
    e.shaped(ae('interface'), [
        'SGS',
        'A F',
        'SGS'
    ],
    {
        S: '#c:stainless_steel_ingots',
        G: '#c:glass',
        A: ae('annihilation_core'),
        F: ae('formation_core')
    })
    .id(st('interface'));

    // -- CELL WORKBENCH -- //
    e.shaped(ae('cell_workbench'), [
        'WCW',
        'SHS',
        'SSS'
    ],
    {
        W: '#minecraft:wool',
        C: ae('calculation_processor'),
        S: '#c:stainless_steel_ingots',
        H: '#c:wooden_chests'
    })
    .id(st('cell_workbench'));

    // -- ME IO PORT -- //
    e.shaped(ae('io_port'), [
        'GGG',
        'DFD',
        'SLS'
    ],
    {
        G: '#c:glass',
        D: ae('drive'),
        F: ae('fluix_glass_cable'),
        S: '#c:stainless_steel_ingots',
        L: ae('logic_processor')
    })
    .id(st('io_port'));

    // -- MATTER CONDENSER -- //
    e.shaped(ae('condenser'), [
        'SGS',
        'GFG',
        'SGS'
    ],
    {
        S: '#c:stainless_steel_ingots',
        G: '#c:glass',
        F: ae('fluix_dust')
    })
    .id(st('condenser'));

    // -- ENERGY ACCEPTOR -- //
    e.shaped(ae('energy_acceptor'), [
        'SGS',
        'GCG',
        'SGS'
    ],
    {
        S: '#c:stainless_steel_ingots',
        G: ae('quartz_glass'),
        C: '#c:copper_ingots'
    })
    .id(st('energy_acceptor'));

    // -- CRYSTAL GROWTH ACCELERATOR -- // 
    e.shaped(ae('quartz_growth_accelerator'), [
        'SFS',
        'GBG',
        'SFS'
    ],
    {
        S: '#c:stainless_steel_ingots',
        F: ae('fluix_glass_cable'),
        G: ae('quartz_glass'),
        B: ae('fluix_block')
    })
    .id(st('quartz_growth_accelerator'));

    // -- CRAFTING UNIT -- //
    e.shaped(ae('crafting_unit'), [
        'SCS',
        'FLF',
        'SCS'
    ],
    {
        S: '#c:stainless_steel_ingots',
        C: ae('calculation_processor'),
        F: ae('fluix_glass_cable'),
        L: ae('logic_processor')
    })
    .id(st('crafting_unit'));

    // -- ME PATTERN PROVIDER -- //
    e.shaped(ae('pattern_provider'), [
        'SCS',
        'A F',
        'SCS'
    ],
    {
        S: '#c:stainless_steel_ingots',
        C: '#c:workbench',
        A: ae('annihilation_core'),
        F: ae('formation_core')
    })
    .id(st('pattern_provider'));

    // -- MOLECULAR ASSEMBLER -- //
    e.shaped(ae('molecular_assembler'), [
        'SGS',
        'AWF',
        'SGS'
    ],
    {
        S: '#c:stainless_steel_ingots',
        G: ae('quartz_glass'),
        A: ae('annihilation_core'),
        W: '#c:workbench',
        F: ae('formation_core')
    })
    .id(st('molecular_assembler'));

    // -- SPATIAL ANCHOR -- //
    e.shaped(ae('spatial_anchor'), [
        'PPP',
        'FCF',
        'SES'
    ],
    {
        P: ae('spatial_pylon'),
        F: ae('fluix_glass_cable'),
        C: ae('spatial_cell_component_128'),
        S: '#c:stainless_steel_ingots',
        E: ae('engineering_processor')
    })
    .id(st('spatial_anchor'));

    // -- ENTROPY MANIPULATOR -- //
    e.shaped(ae('entropy_manipulator'), [
        'FC ',
        'ES ',
        '  S'
    ],
    {
        F: ae('fluix_crystal'),
        C: ae('energy_cell'),
        E: ae('engineering_processor'),
        S: '#c:stainless_steel_ingots'
    })
    .id(st('entropy_manipulator'));

    // -- CHARGED STAFF -- //
    e.shaped(ae('charged_staff'), [
        'C  ',
        ' S ',
        '  S'
    ],
    {
        C: ae('charged_certus_quartz_crystal'),
        S: '#c:stainless_steel_ingots'
    })
    .id(st('charged_staff'));

    // -- COLOR APPLICATOR -- //
    e.shaped(ae('color_applicator'), [
        'FS ',
        'SC ',
        '  E'
    ],
    {
        F: ae('formation_core'),
        S: '#c:stainless_steel_ingots',
        C: ae('cell_component_4k'),
        E: ae('energy_cell')
    })
    .id(st('color_applicator'));

    // -- MATTER CANNON -- //
    e.shaped(ae('matter_cannon'), [
        'SSF',
        'CE ',
        'S  '
    ],
    {
        S: '#c:stainless_steel_ingots',
        F: ae('formation_core'),
        C: ae('cell_component_4k'),
        E: ae('energy_cell')
    })
    .id(st('matter_cannon'));

    // -- BIOMETRIC CARD -- //
    e.shaped(ae('biometric_card'), [
        'ESS',
        'GRG'
    ],
    {
        E: ae('engineering_processor'),
        S: '#c:stainless_steel_ingots',
        G: '#c:gold_ingots',
        R: '#c:redstone_dusts'
    })
    .id(st('biometric_card'));

    // -- MEMORY CARD -- // 
    e.shaped(ae('memory_card'), [
        'CSS',
        'GRG'
    ],
    {
        C: ae('calculation_processor'),
        S: '#c:stainless_steel_ingots',
        G: '#c:gold_ingots',
        R: '#c:redstone_dusts'
    })
    .id(st('memory_card'));

    // -- BASIC CARD -- //
    e.shaped('2x ' + ae('basic_card'), [
        'GS ',
        'RCS',
        'GS '
    ],
    {
        G: '#c:gold_ingots',
        S: '#c:stainless_steel_ingots',
        R: '#c:redstone_dusts',
        C: ae('calculation_processor')
    })
    .id(st('basic_card'));

    // -- ADVANCED CARD -- //
    e.shaped('2x ' + ae('advanced_card'), [
        'DS ',
        'RCS',
        'DS '
    ],
    {
        D: '#c:diamonds',
        S: '#c:stainless_steel_ingots',
        R: '#c:redstone_dusts',
        C: ae('calculation_processor')
    })
    .id(st('advanced_card'));

    // -- ME ITEM CELL HOUSING -- //
    e.shaped(ae('item_cell_housing'), [
        'GRG',
        'R R',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        S: '#c:stainless_steel_ingots'
    })
    .id(st('item_cell_housing'));

    // -- WIRELESS RECEIVER -- // 
    e.shaped(ae('wireless_receiver'), [
        ' F ',
        'SQS',
        ' S '
    ],
    {
        F: ae('fluix_pearl'),
        S: '#c:stainless_steel_ingots',
        Q: ae('quartz_fiber')
    })
    .id(st('wireless_receiver'));

    // -- WIRELESS BOOSTER -- // 
    e.shaped('2x ' + ae('wireless_booster'), [
        'FQE',
        'SSS'
    ],
    {
        F: ae('fluix_dust'),
        Q: '#c:certus_quartz',
        E: '#c:ender_pearl_dusts',
        S: '#c:stainless_steel_ingots'
    })
    .id(st('wireless_booster'));

    // -- VIEW CELL -- //
    e.shaped(ae('view_cell'), [
        'GRG',
        'RQR',
        'SSS'
    ],
    {
        G: ae('quartz_block'),
        R: '#c:redstone_dusts',
        Q: '#c:certus_quartz',
        S: '#c:stainless_steel_ingots'
    })
    .id(st('view_cell'));

    // -- 1K ME ITEM STORAGE CELL -- //
    e.shaped(ae('item_storage_cell_1k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_block'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_1k'),
        S: '#c:stainless_steel_ingots'
    })
    .id(st('item_storage_cell_1k'));

    // -- 4K ME ITEM STORAGE CELL -- //
    e.shaped(ae('item_storage_cell_4k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_block'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_4k'),
        S: '#c:stainless_steel_ingots'
    })
    .id(st('item_storage_cell_4k'));

    // -- 16K ME ITEM STORAGE CELL -- //
    e.shaped(ae('item_storage_cell_16k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_block'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_16k'),
        S: '#c:stainless_steel_ingots'
    })
    .id(st('item_storage_cell_16k'));

    // -- 64K ME ITEM STORAGE CELL -- //
    e.shaped(ae('item_storage_cell_64k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_block'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_64k'),
        S: '#c:stainless_steel_ingots'
    })
    .id(st('item_storage_cell_64k'));

    // -- 256K ME ITEM STORAGE CELL -- //
    e.shaped(ae('item_storage_cell_256k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_block'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_256k'),
        S: '#c:stainless_steel_ingots'
    })
    .id(st('item_storage_cell_256k'));

    // -- 2^3 SPATIAL STORAGE CELL -- //
    e.shaped(ae('spatial_storage_cell_2'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_block'),
        R: '#c:redstone_dusts',
        C: ae('spatial_cell_component_2'),
        S: '#c:stainless_steel_ingots'
    })
    .id(st('spatial_storage_cell_2'));

    // -- 16^3 SPATIAL STORAGE CELL -- //
    e.shaped(ae('spatial_storage_cell_16'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_block'),
        R: '#c:redstone_dusts',
        C: ae('spatial_cell_component_16'),
        S: '#c:stainless_steel_ingots'
    })
    .id(st('spatial_storage_cell_16'));

    // -- 128^3 SPATIAL STORAGE CELL -- //
    e.shaped(ae('spatial_storage_cell_128'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_block'),
        R: '#c:redstone_dusts',
        C: ae('spatial_cell_component_128'),
        S: '#c:stainless_steel_ingots'
    })
    .id(st('spatial_storage_cell_128'));

    // -- ILLUMINATED PANEL -- //
    e.shaped(ae('semi_dark_monitor'), [
        ' GQ',
        'SRQ',
        ' GQ'
    ],
    {
        G: '#c:glowstone_dusts',
        Q: ae('quartz_glass'),
        S: '#c:stainless_steel_ingots',
        R: '#c:redstone_dusts'
    })
    .id(st('semi_dark_monitor'));

    // -- IMPORT BUS -- //
    e.shaped(ae('import_bus'), [
        ' A ',
        'SPS'
    ],
    {
        A: ae('annihilation_core'),
        S: '#c:stainless_steel_ingots',
        P: 'minecraft:sticky_piston'
    })
    .id(st('import_bus'));

    // -- ANNIHILATION PLANE -- //
    e.shaped(ae('annihilation_plane'), [
        'SF',
        'AF',
        'SF'
    ],
    {
        S: '#c:stainless_steel_ingots',
        F: ae('fluix_crystal'),
        A: ae('annihilation_core'),
    })
    .id(st('annihilation_plane'));

    e.shaped(ae('annihilation_plane'), [
        'FFF',
        'SAS'
    ],
    {
        S: '#c:stainless_steel_ingots',
        F: ae('fluix_crystal'),
        A: ae('annihilation_core'),
    })
    .id(st('annihilation_plane_alt'));

    // -- FORMATION PLANE -- //
    e.shaped(ae('formation_plane'), [
        'SF',
        'AF',
        'SF'
    ],
    {
        S: '#c:stainless_steel_ingots',
        F: ae('fluix_crystal'),
        A: ae('formation_core'),
    })
    .id(st('formation_plane'));

    e.shaped(ae('formation_plane'), [
        'FFF',
        'SAS'
    ],
    {
        S: '#c:stainless_steel_ingots',
        F: ae('fluix_crystal'),
        A: ae('formation_core'),
    })
    .id(st('formation_plane_alt'));

    // -- EXPORT BUS -- //
    e.shaped(ae('export_bus'), [
        'SFS',
        ' P '
    ],
    {
        S: '#c:stainless_steel_ingots',
        F: ae('formation_core'),
        P: 'minecraft:piston'
    })
    .id(st('export_bus'));

    // -- ME P2P TUNNEL -- //
    e.shaped(ae('me_p2p_tunnel'), [
        ' S ',
        'SES',
        'FFF'
    ],
    {
        S: '#c:stainless_steel_ingots',
        E: ae('engineering_processor'),
        F: ae('fluix_crystal')
    })
    .id(st('me_p2p_tunnel'));
});

ServerEvents.tags('item', e=> {
    const CRAFTING_STORAGE = [
        'ae2:1k_crafting_storage',
        'ae2:4k_crafting_storage',
        'ae2:16k_crafting_storage',
        'ae2:64k_crafting_storage',
        'ae2:256k_crafting_storage'
    ];

    CRAFTING_STORAGE.forEach(id => { e.add('kubejs:crafting_storage', id) });

    // -- REMOVE ENDER DUST -- //
    e.removeAllTagsFrom('ae2:ender_dust');
});
