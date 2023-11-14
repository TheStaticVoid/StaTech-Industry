// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:ae2/${id}`;

    // -- AE2 REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        ae('network/blocks/inscribers'),
        ae('transform/fluix_crystals'),
        ae('transform/fluix_crystal'),
        ae('transform/certus_quartz_crystals'),
        ae('network/blocks/controller'),
        ae('network/blocks/crystal_processing_charger'),
        ae('network/blocks/energy_vibration_chamber'),
        ae('network/crafting/patterns_blank'),
        ae('misc/tank_sky_stone'),
        ae('network/blocks/security_station'),
        ae('network/blocks/quantum_ring'),
        ae('network/blocks/spatial_io_port'),
        ae('network/blocks/storage_drive'),
        ae('network/blocks/storage_chest'),
        ae('network/blocks/interfaces_interface'),
        ae('network/blocks/cell_workbench'),
        ae('network/blocks/io_port'),
        ae('network/blocks/io_condenser'),
        ae('network/blocks/energy_energy_acceptor'),
        ae('network/blocks/crystal_processing_quartz_growth_accelerator'),
        ae('network/crafting/cpu_crafting_unit'),
        ae('network/blocks/pattern_providers_interface'),
        ae('network/crafting/molecular_assembler'),
        ae('network/blocks/spatial_anchor'),
        ae('tools/misctools_entropy_manipulator'),
        ae('tools/misctools_charged_staff'),
        ae('tools/network_color_applicator'),
        ae('tools/matter_cannon'),
        ae('tools/network_biometric_card'),
        ae('tools/network_memory_card'),
        ae('materials/basiccard'),
        ae('materials/advancedcard'),
        ae('network/cells/item_cell_housing'),
        ae('network/cells/fluid_cell_housing'),
        ae('network/wireless_part'),
        ae('network/wireless_booster'),
        ae('network/cells/view_cell'),
        ae('network/cells/item_storage_cell_1k'),
        ae('network/cells/item_storage_cell_4k'),
        ae('network/cells/item_storage_cell_16k'),
        ae('network/cells/item_storage_cell_64k'),
        ae('network/cells/item_storage_cell_256k'),
        ae('network/cells/fuid_cell_housing'),
        ae('network/cells/fluid_storage_cell_1k'),
        ae('network/cells/fluid_storage_cell_4k'),
        ae('network/cells/fluid_storage_cell_16k'),
        ae('network/cells/fluid_storage_cell_64k'),
        ae('network/cells/fluid_storage_cell_256k'),
        ae('network/cells/spatial_storage_cell_2_cubed'),
        ae('network/cells/spatial_storage_cell_16_cubed'),
        ae('network/cells/spatial_storage_cell_128_cubed'),
        ae('network/parts/panels_semi_dark_monitor'),
        ae('network/parts/import_bus'),
        ae('network/parts/annihilation_plane_alt2'),
        ae('network/parts/annihilation_plane_alt'),
        ae('network/parts/formation_plane_alt'),
        ae('network/parts/formation_plane'),
        ae('network/parts/tunnels_me'),
        ae('network/parts/export_bus'),
        wt('magnet_card'),
        ae('network/blocks/energy_dense_energy_cell')
    ];
    REMOVED_RECIPES.forEach(id => event.remove( {id: id} ));

    // -- REMOVE ALL ENDER DUST OUTPUTS -- //
    event.remove({ output: ae('ender_dust') });

    // -- REMOVE ALL INSCRIBER RECIPES -- // 
    event.remove({ type: ae('inscriber') });

    // -- CONTROLLER -- //
    event.shaped(ae('controller'), [
        'EFE',
        'CHC',
        'LFP'
    ],
    {
        E: ae('engineering_processor'),
        F: ae('fluix_crystal'),
        C: mi('electronic_circuit'),
        H: mi('advanced_machine_hull'),
        L: ae('logic_processor'),
        P: ae('calculation_processor')
    })
    .id(st('controller'));

    // -- CHARGER -- //
    event.shaped(ae('charger'), [
        'SCS',
        'B  ',
        'SCS'
    ],
    {
        S: mi('steel_large_plate'),
        C: mi('copper_wire'),
        B: 'techreborn:low_voltage_su'
    })
    .id(st('charger'));

    // -- BLANK PATTERN -- //
    event.shaped(ae('blank_pattern'), [
        'QGQ',
        'GCG',
        'SSS'
    ],
    {
        Q: ae('quartz_glass'),
        G: '#c:glowstone_dusts',
        C: '#c:certus_quartz',
        S: '#c:stainless_steel_plates'
    })
    .id(st('blank_pattern'));

    // -- ME SECURITY TERMINAL -- //
    event.shaped(ae('security_station'), [
        'SCS',
        'FOF',
        'SES'
    ],
    {
        S: '#c:aluminum_plates',
        C: ae('chest'),
        F: ae('fluix_glass_cable'),
        O: ae('cell_component_16k'),
        E: ae('engineering_processor')
    })
    .id(st('security_station'));

    // -- ME QUANTUM RING -- //
    event.shaped(ae('quantum_ring'), [
        'SLS',
        'ECF',
        'SLS'
    ],
    {
        S: '#c:stainless_steel_plates',
        L: ae('logic_processor'),
        E: ae('engineering_processor'),
        C: ae('energy_cell'),
        F: '#ae2:smart_dense_cable',
    })
    .id(st('quantum_ring'));

    // -- SPATIAL IO PORT -- //
    event.shaped(ae('spatial_io_port'), [
        'GGG',
        'FIF',
        'SES'
    ],
    {
        S: '#c:stainless_steel_plates',
        G: '#c:glass',
        F: ae('fluix_glass_cable'),
        I: ae('io_port'),
        E: ae('engineering_processor')
    })
    .id(st('spatial_io_port'));

    // -- ME DRIVE -- // 
    event.shaped(ae('drive'), [
        'SES',
        'FHF',
        'SES'
    ],
    {
        S: '#c:stainless_steel_plates',
        H: mi('turbo_machine_hull'),
        E: ae('engineering_processor'),
        F: ae('fluix_glass_cable')
    })
    .id(st('drive'));
    
    // -- ME CHEST -- //
    event.shaped(ae('chest'), [
        'GTG',
        'F F',
        'SCS'
    ],
    {
        G: '#c:glass',
        T: ae('terminal'),
        F: ae('fluix_glass_cable'),
        S: '#c:aluminum_plates',
        C: '#c:copper_plates'
    })
    .id(st('chest'));

    // -- ME INTERFACE -- //
    event.shaped(ae('interface'), [
        'SGS',
        'A F',
        'SGS'
    ],
    {
        S: '#c:aluminum_plates',
        G: '#c:glass',
        A: ae('annihilation_core'),
        F: ae('formation_core')
    })
    .id(st('interface'));

    // -- CELL WORKBENCH -- //
    event.shaped(ae('cell_workbench'), [
        'WCW',
        'SHS',
        'SSS'
    ],
    {
        W: '#minecraft:wool',
        C: ae('calculation_processor'),
        S: '#c:stainless_steel_plates',
        H: '#c:wooden_chests'
    })
    .id(st('cell_workbench'));

    // -- ME IO PORT -- //
    event.shaped(ae('io_port'), [
        'GGG',
        'DFD',
        'SLS'
    ],
    {
        G: '#c:glass',
        D: ae('drive'),
        F: ae('fluix_glass_cable'),
        S: '#c:stainless_steel_plates',
        L: ae('logic_processor')
    })
    .id(st('io_port'));

    // -- MATTER CONDENSER -- //
    event.shaped(ae('condenser'), [
        'SGS',
        'GFG',
        'SGS'
    ],
    {
        S: '#c:stainless_steel_plates',
        G: '#c:glass',
        F: ae('fluix_dust')
    })
    .id(st('condenser'));

    // -- ENERGY ACCEPTOR -- //
    event.shaped(ae('energy_acceptor'), [
        'SGS',
        'GCG',
        'SGS'
    ],
    {
        S: '#c:aluminum_plates',
        G: ae('quartz_glass'),
        C: '#c:copper_plates'
    })
    .id(st('energy_acceptor'));

    // -- CRYSTAL GROWTH ACCELERATOR -- // 
    event.shaped(ae('quartz_growth_accelerator'), [
        'SFS',
        'GBG',
        'SFS'
    ],
    {
        S: '#c:aluminum_plates',
        F: ae('fluix_glass_cable'),
        G: ae('quartz_glass'),
        B: ae('fluix_block')
    })
    .id(st('quartz_growth_accelerator'));

    // -- CRAFTING UNIT -- //
    event.shaped(ae('crafting_unit'), [
        'SCS',
        'FLF',
        'SCS'
    ],
    {
        S: '#c:stainless_steel_plates',
        C: ae('calculation_processor'),
        F: ae('fluix_glass_cable'),
        L: ae('logic_processor')
    })
    .id(st('crafting_unit'));

    // -- ME PATTERN PROVIDER -- //
    event.shaped(ae('pattern_provider'), [
        'SCS',
        'A F',
        'SCS'
    ],
    {
        S: '#c:stainless_steel_plates',
        C: '#c:workbench',
        A: ae('annihilation_core'),
        F: ae('formation_core')
    })
    .id(st('pattern_provider'));

    // -- MOLECULAR ASSEMBLER -- //
    event.shaped(ae('molecular_assembler'), [
        'SGS',
        'AWF',
        'SGS'
    ],
    {
        S: '#c:stainless_steel_plates',
        G: ae('quartz_glass'),
        A: ae('annihilation_core'),
        W: mi('turbo_machine_hull'),
        F: ae('formation_core')
    })
    .id(st('molecular_assembler'));

    // -- SPATIAL ANCHOR -- //
    event.shaped(ae('spatial_anchor'), [
        'PPP',
        'FCF',
        'SES'
    ],
    {
        P: ae('spatial_pylon'),
        F: ae('fluix_glass_cable'),
        C: ae('spatial_cell_component_128'),
        S: '#c:stainless_steel_plates',
        E: ae('engineering_processor')
    })
    .id(st('spatial_anchor'));

    // -- ENTROPY MANIPULATOR -- //
    event.shaped(ae('entropy_manipulator'), [
        'FC ',
        'ES ',
        '  S'
    ],
    {
        F: ae('fluix_crystal'),
        C: ae('energy_cell'),
        E: ae('engineering_processor'),
        S: '#c:stainless_steel_plates'
    })
    .id(st('entropy_manipulator'));

    // -- CHARGED STAFF -- //
    event.shaped(ae('charged_staff'), [
        'C  ',
        ' S ',
        '  S'
    ],
    {
        C: ae('charged_certus_quartz_crystal'),
        S: '#c:stainless_steel_plates'
    })
    .id(st('charged_staff'));

    // -- COLOR APPLICATOR -- //
    event.shaped(ae('color_applicator'), [
        'FS ',
        'SC ',
        '  E'
    ],
    {
        F: ae('formation_core'),
        S: '#c:stainless_steel_plates',
        C: ae('cell_component_4k'),
        E: ae('energy_cell')
    })
    .id(st('color_applicator'));

    // -- MATTER CANNON -- //
    event.shaped(ae('matter_cannon'), [
        'SSF',
        'CE ',
        'S  '
    ],
    {
        S: '#c:stainless_steel_plates',
        F: ae('formation_core'),
        C: ae('cell_component_4k'),
        E: ae('energy_cell')
    })
    .id(st('matter_cannon'));

    // -- BIOMETRIC CARD -- //
    event.shaped(ae('biometric_card'), [
        'ESS',
        'GRG'
    ],
    {
        E: ae('engineering_processor'),
        S: '#c:aluminum_plates',
        G: '#c:gold_ingots',
        R: '#c:redstone_dusts'
    })
    .id(st('biometric_card'));

    // -- MEMORY CARD -- // 
    event.shaped(ae('memory_card'), [
        'CSS',
        'GRG'
    ],
    {
        C: ae('calculation_processor'),
        S: '#c:aluminum_plates',
        G: '#c:gold_plates',
        R: '#c:redstone_dusts'
    })
    .id(st('memory_card'));

    // -- BASIC CARD -- //
    event.shaped('2x ' + ae('basic_card'), [
        'GS ',
        'RCS',
        'GS '
    ],
    {
        G: '#c:gold_ingots',
        S: '#c:aluminum_plates',
        R: '#c:redstone_dusts',
        C: ae('calculation_processor')
    })
    .id(st('basic_card'));

    // -- ADVANCED CARD -- //
    event.shaped('2x ' + ae('advanced_card'), [
        'DS ',
        'RCS',
        'DS '
    ],
    {
        D: '#c:diamonds',
        S: '#c:aluminum_plates',
        R: '#c:redstone_dusts',
        C: ae('calculation_processor')
    })
    .id(st('advanced_card'));

    // -- ME ITEM CELL HOUSING -- //
    event.shaped(ae('item_cell_housing'), [
        'GRG',
        'R R',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        S: '#c:stainless_steel_plates'
    })
    .id(st('item_cell_housing'));

    // -- WIRELESS RECEIVER -- // 
    event.shaped(ae('wireless_receiver'), [
        ' F ',
        'SQS',
        ' S '
    ],
    {
        F: ae('fluix_pearl'),
        S: '#c:stainless_steel_plates',
        Q: ae('quartz_fiber')
    })
    .id(st('wireless_receiver'));

    // -- WIRELESS BOOSTER -- // 
    event.shaped('2x ' + ae('wireless_booster'), [
        'FQE',
        'SSS'
    ],
    {
        F: ae('fluix_dust'),
        Q: '#c:certus_quartz',
        E: '#c:ender_pearl_dusts',
        S: '#c:stainless_steel_plates'
    })
    .id(st('wireless_booster'));

    // -- VIEW CELL -- //
    event.shaped(ae('view_cell'), [
        'GRG',
        'RQR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        Q: '#c:certus_quartz',
        S: '#c:stainless_steel_plates'
    })
    .id(st('view_cell'));

    // -- 1K ME ITEM STORAGE CELL -- //
    event.shaped(ae('item_storage_cell_1k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_1k'),
        S: '#c:stainless_steel_plates'
    })
    .id(st('item_storage_cell_1k'));

    // -- 4K ME ITEM STORAGE CELL -- //
    event.shaped(ae('item_storage_cell_4k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_4k'),
        S: '#c:stainless_steel_plates'
    })
    .id(st('item_storage_cell_4k'));

    // -- 16K ME ITEM STORAGE CELL -- //
    event.shaped(ae('item_storage_cell_16k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_16k'),
        S: '#c:stainless_steel_plates'
    })
    .id(st('item_storage_cell_16k'));

    // -- 64K ME ITEM STORAGE CELL -- //
    event.shaped(ae('item_storage_cell_64k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_64k'),
        S: '#c:stainless_steel_plates'
    })
    .id(st('item_storage_cell_64k'));

    // -- 256K ME ITEM STORAGE CELL -- //
    event.shaped(ae('item_storage_cell_256k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_256k'),
        S: '#c:stainless_steel_plates'
    })
    .id(st('item_storage_cell_256k'));

    // -- ME FLUID CELL HOUSING -- //
    event.shaped(ae('fluid_cell_housing'), [
        'GRG',
        'R R',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        S: '#c:annealed_copper_plates'
    })
    .id(st('fluid_cell_housing'));

    // -- 1K ME FLUID STORAGE CELL -- //
    event.shaped(ae('fluid_storage_cell_1k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_1k'),
        S: '#c:annealed_copper_plates'
    })
    .id(st('fluid_storage_cell_1k'));

    // -- 4K ME FLUID STORAGE CELL -- //
    event.shaped(ae('fluid_storage_cell_4k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_4k'),
        S: '#c:annealed_copper_plates'
    })
    .id(st('fluid_storage_cell_4k'));

    // -- 16K ME FLUID STORAGE CELL -- //
    event.shaped(ae('fluid_storage_cell_16k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_16k'),
        S: '#c:annealed_copper_plates'
    })
    .id(st('fluid_storage_cell_16k'));

    // -- 64K ME FLUID STORAGE CELL -- //
    event.shaped(ae('fluid_storage_cell_64k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_64k'),
        S: '#c:annealed_copper_plates'
    })
    .id(st('fluid_storage_cell_64k'));

    // -- 256K ME FLUID STORAGE CELL -- //
    event.shaped(ae('fluid_storage_cell_256k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_256k'),
        S: '#c:annealed_copper_plates'
    })
    .id(st('fluid_storage_cell_256k'));

    // -- 2^3 SPATIAL STORAGE CELL -- //
    event.shaped(ae('spatial_storage_cell_2'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('spatial_cell_component_2'),
        S: '#c:stainless_steel_plates'
    })
    .id(st('spatial_storage_cell_2'));

    // -- 16^3 SPATIAL STORAGE CELL -- //
    event.shaped(ae('spatial_storage_cell_16'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('spatial_cell_component_16'),
        S: '#c:stainless_steel_plates'
    })
    .id(st('spatial_storage_cell_16'));

    // -- 128^3 SPATIAL STORAGE CELL -- //
    event.shaped(ae('spatial_storage_cell_128'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('spatial_cell_component_128'),
        S: '#c:stainless_steel_plates'
    })
    .id(st('spatial_storage_cell_128'));

    // -- ILLUMINATED PANEL -- //
    event.shaped(ae('semi_dark_monitor'), [
        ' GQ',
        'SRQ',
        ' GQ'
    ],
    {
        G: '#c:glowstone_dusts',
        Q: ae('quartz_glass'),
        S: '#c:aluminum_plates',
        R: '#c:redstone_dusts'
    })
    .id(st('semi_dark_monitor'));

    // -- IMPORT BUS -- //
    event.shaped(ae('import_bus'), [
        ' A ',
        'SPS'
    ],
    {
        A: ae('annihilation_core'),
        S: '#c:aluminum_plates',
        P: mc('sticky_piston')
    })
    .id(st('import_bus'));

    // -- ANNIHILATION PLANE -- //
    event.shaped(ae('annihilation_plane'), [
        'SF',
        'AF',
        'SF'
    ],
    {
        S: '#c:aluminum_plates',
        F: ae('fluix_crystal'),
        A: ae('annihilation_core'),
    })
    .id(st('annihilation_plane'));

    event.shaped(ae('annihilation_plane'), [
        'FFF',
        'SAS'
    ],
    {
        S: '#c:aluminum_plates',
        F: ae('fluix_crystal'),
        A: ae('annihilation_core'),
    })
    .id(st('annihilation_plane_alt'));

    // -- FORMATION PLANE -- //
    event.shaped(ae('formation_plane'), [
        'SF',
        'AF',
        'SF'
    ],
    {
        S: '#c:aluminum_plates',
        F: ae('fluix_crystal'),
        A: ae('formation_core'),
    })
    .id(st('formation_plane'));

    event.shaped(ae('formation_plane'), [
        'FFF',
        'SAS'
    ],
    {
        S: '#c:aluminum_plates',
        F: ae('fluix_crystal'),
        A: ae('formation_core'),
    })
    .id(st('formation_plane_alt'));

    // -- EXPORT BUS -- //
    event.shaped(ae('export_bus'), [
        'SFS',
        ' P '
    ],
    {
        S: '#c:aluminum_plates',
        F: ae('formation_core'),
        P: mc('piston')
    })
    .id(st('export_bus'));

    // -- ME P2P TUNNEL -- //
    event.shaped(ae('me_p2p_tunnel'), [
        ' S ',
        'SES',
        'FFF'
    ],
    {
        S: '#c:aluminum_plates',
        E: ae('engineering_processor'),
        F: ae('fluix_crystal')
    })
    .id(st('me_p2p_tunnel'));

    // -- MAGNET CARD -- //
    event.shaped(wt('magnet_card'), [
        'RAL',
        'ICI',
        'III'
    ],
    {
        R: '#c:redstone_blocks',
        L: '#c:lapis_blocks',
        A: ae('annihilation_plane'),
        C: ae('advanced_card'),
        I: '#c:stainless_steel_blocks'
    })
    .id(st('magnet_card'));

    // -- DENSE ENERGY CELL -- //
    event.shaped(ae('dense_energy_cell'), [
        'EEE',
        'EHE',
        'EEE'
    ],
    {
        E: ae('energy_cell'),
        H: mi('turbo_machine_hull')
    })
    .id(st('dense_energy_cell'));
});

ServerEvents.tags('item', event => {
    // Tag all the crafting storages
    const CRAFTING_STORAGE = [
        ae('1k_crafting_storage'),
        ae('4k_crafting_storage'),
        ae('16k_crafting_storage'),
        ae('64k_crafting_storage'),
        ae('256k_crafting_storage')
    ];
    CRAFTING_STORAGE.forEach(id => event.add(kj('crafting_storage'), id) );

    // Tag all the budding blocks
    // Doesn't work in KubeJS :l
    const BUDDING_BLOCKS = [
        ae('flawless_budding_quartz'),
        ae('flawed_budding_quartz'),
        ae('chipped_budding_quartz'),
        ae('damaged_budding_quartz')
    ];
    BUDDING_BLOCKS.forEach(id => event.add(kj('budding_certus'), id) );

    // -- REMOVE ENDER DUST -- //
    event.removeAllTagsFrom(ae('ender_dust'));
})