// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:ae2/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let ae = (id) => `ae2:${id}`;
    let wt = (id) => `ae2wtlib:${id}`;
    let mc = (id) => `minecraft:${id}`;

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
    REMOVED_RECIPES.forEach(id => e.remove( {id: id} ));

    // -- REMOVE ALL ENDER DUST OUTPUTS -- //
    e.remove({ output: ae('ender_dust') });

    // -- REMOVE ALL INSCRIBER RECIPES -- // 
    e.remove({ type: ae('inscriber') });

    // -- CONTROLLER -- //
    e.shaped(ae('controller'), [
        'EFE',
        'CHC',
        'LFP'
    ],
    {
        E: ae('engineering_processor'),
        F: ae('fluix_crystal'),
        C: mi('analog_circuit'),
        H: mi('basic_machine_hull'),
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
        C: mi('copper_wire'),
        B: 'techreborn:low_voltage_su'
    })
    .id(st('charger'));

    // -- BLANK PATTERN -- //
    e.shaped(ae('blank_pattern'), [
        'QGQ',
        'GCG',
        'SSS'
    ],
    {
        Q: ae('quartz_glass'),
        G: '#c:glowstone_dusts',
        C: '#c:certus_quartz',
        S: '#c:aluminum_plates'
    })
    .id(st('blank_pattern'));

    // -- ME SECURITY TERMINAL -- //
    e.shaped(ae('security_station'), [
        'SCS',
        'FOF',
        'SES'
    ],
    {
        S: '#c:steel_plates',
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
        S: '#c:aluminum_plates',
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
        S: '#c:steel_plates',
        G: '#c:glass',
        F: ae('fluix_glass_cable'),
        I: ae('io_port'),
        E: ae('engineering_processor')
    })
    .id(st('spatial_io_port'));

    // -- ME DRIVE -- // 
    e.shaped(ae('drive'), [
        'SES',
        'FHF',
        'SES'
    ],
    {
        S: mi('steel_large_plate'),
        H: mi('basic_machine_hull'),
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
        S: '#c:steel_plates',
        C: '#c:copper_plates'
    })
    .id(st('chest'));

    // -- ME INTERFACE -- //
    e.shaped(ae('interface'), [
        'SGS',
        'A F',
        'SGS'
    ],
    {
        S: '#c:steel_plates',
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
        S: '#c:steel_plates',
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
        S: '#c:steel_plates',
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
        S: '#c:aluminum_plates',
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
        S: '#c:steel_plates',
        G: ae('quartz_glass'),
        C: '#c:copper_plates'
    })
    .id(st('energy_acceptor'));

    // -- CRYSTAL GROWTH ACCELERATOR -- // 
    e.shaped(ae('quartz_growth_accelerator'), [
        'SFS',
        'GBG',
        'SFS'
    ],
    {
        S: '#c:steel_plates',
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
        S: '#c:aluminum_plates',
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
        S: '#c:aluminum_plates',
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
        S: '#c:aluminum_plates',
        G: ae('quartz_glass'),
        A: ae('annihilation_core'),
        W: mi('advanced_machine_hull'),
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
        S: '#c:steel_plates',
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
        S: '#c:aluminum_plates'
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
        S: '#c:aluminum_plates'
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
        S: '#c:aluminum_plates',
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
        S: '#c:aluminum_plates',
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
        S: '#c:steel_plates',
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
        S: '#c:iron_plates',
        G: '#c:gold_plates',
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
        S: '#c:steel_plates',
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
        S: '#c:steel_plates',
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
        S: '#c:steel_plates'
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
        S: '#c:aluminum_plates',
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
        S: '#c:aluminum_plates'
    })
    .id(st('wireless_booster'));

    // -- VIEW CELL -- //
    e.shaped(ae('view_cell'), [
        'GRG',
        'RQR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        Q: '#c:certus_quartz',
        S: '#c:steel_plates'
    })
    .id(st('view_cell'));

    // -- 1K ME ITEM STORAGE CELL -- //
    e.shaped(ae('item_storage_cell_1k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_1k'),
        S: '#c:steel_plates'
    })
    .id(st('item_storage_cell_1k'));

    // -- 4K ME ITEM STORAGE CELL -- //
    e.shaped(ae('item_storage_cell_4k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_4k'),
        S: '#c:steel_plates'
    })
    .id(st('item_storage_cell_4k'));

    // -- 16K ME ITEM STORAGE CELL -- //
    e.shaped(ae('item_storage_cell_16k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_16k'),
        S: '#c:steel_plates'
    })
    .id(st('item_storage_cell_16k'));

    // -- 64K ME ITEM STORAGE CELL -- //
    e.shaped(ae('item_storage_cell_64k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_64k'),
        S: '#c:steel_plates'
    })
    .id(st('item_storage_cell_64k'));

    // -- 256K ME ITEM STORAGE CELL -- //
    e.shaped(ae('item_storage_cell_256k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_256k'),
        S: '#c:steel_plates'
    })
    .id(st('item_storage_cell_256k'));

    // -- ME FLUID CELL HOUSING -- //
    e.shaped(ae('fluid_cell_housing'), [
        'GRG',
        'R R',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        S: '#c:copper_plates'
    })
    .id(st('fluid_cell_housing'));

    // -- 1K ME FLUID STORAGE CELL -- //
    e.shaped(ae('fluid_storage_cell_1k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_1k'),
        S: '#c:copper_plates'
    })
    .id(st('fluid_storage_cell_1k'));

    // -- 4K ME FLUID STORAGE CELL -- //
    e.shaped(ae('fluid_storage_cell_4k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_4k'),
        S: '#c:copper_plates'
    })
    .id(st('fluid_storage_cell_4k'));

    // -- 16K ME FLUID STORAGE CELL -- //
    e.shaped(ae('fluid_storage_cell_16k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_16k'),
        S: '#c:copper_plates'
    })
    .id(st('fluid_storage_cell_16k'));

    // -- 64K ME FLUID STORAGE CELL -- //
    e.shaped(ae('fluid_storage_cell_64k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_64k'),
        S: '#c:copper_plates'
    })
    .id(st('fluid_storage_cell_64k'));

    // -- 256K ME FLUID STORAGE CELL -- //
    e.shaped(ae('fluid_storage_cell_256k'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('cell_component_256k'),
        S: '#c:copper_plates'
    })
    .id(st('fluid_storage_cell_256k'));

    // -- 2^3 SPATIAL STORAGE CELL -- //
    e.shaped(ae('spatial_storage_cell_2'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('spatial_cell_component_2'),
        S: '#c:steel_plates'
    })
    .id(st('spatial_storage_cell_2'));

    // -- 16^3 SPATIAL STORAGE CELL -- //
    e.shaped(ae('spatial_storage_cell_16'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('spatial_cell_component_16'),
        S: '#c:steel_plates'
    })
    .id(st('spatial_storage_cell_16'));

    // -- 128^3 SPATIAL STORAGE CELL -- //
    e.shaped(ae('spatial_storage_cell_128'), [
        'GRG',
        'RCR',
        'SSS'
    ],
    {
        G: ae('quartz_glass'),
        R: '#c:redstone_dusts',
        C: ae('spatial_cell_component_128'),
        S: '#c:steel_plates'
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
        S: '#c:steel_plates',
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
        S: '#c:steel_plates',
        P: mc('sticky_piston')
    })
    .id(st('import_bus'));

    // -- ANNIHILATION PLANE -- //
    e.shaped(ae('annihilation_plane'), [
        'SF',
        'AF',
        'SF'
    ],
    {
        S: '#c:steel_plates',
        F: ae('fluix_crystal'),
        A: ae('annihilation_core'),
    })
    .id(st('annihilation_plane'));

    e.shaped(ae('annihilation_plane'), [
        'FFF',
        'SAS'
    ],
    {
        S: '#c:steel_plates',
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
        S: '#c:steel_plates',
        F: ae('fluix_crystal'),
        A: ae('formation_core'),
    })
    .id(st('formation_plane'));

    e.shaped(ae('formation_plane'), [
        'FFF',
        'SAS'
    ],
    {
        S: '#c:steel_plates',
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
        S: '#c:steel_plates',
        F: ae('formation_core'),
        P: mc('piston')
    })
    .id(st('export_bus'));

    // -- ME P2P TUNNEL -- //
    e.shaped(ae('me_p2p_tunnel'), [
        ' S ',
        'SES',
        'FFF'
    ],
    {
        S: '#c:steel_plates',
        E: ae('engineering_processor'),
        F: ae('fluix_crystal')
    })
    .id(st('me_p2p_tunnel'));

    // -- MAGNET CARD -- //
    e.shaped(wt('magnet_card'), [
        'RAL',
        'ICI',
        'III'
    ],
    {
        R: '#c:redstone_blocks',
        L: '#c:lapis_blocks',
        A: ae('annihilation_plane'),
        C: ae('advanced_card'),
        I: '#c:steel_blocks'
    })
    .id(st('magnet_card'));

    // -- DENSE ENERGY CELL -- //
    e.shaped(ae('dense_energy_cell'), [
        'EEE',
        'EHE',
        'EEE'
    ],
    {
        E: ae('energy_cell'),
        H: mi('advanced_machine_hull')
    })
    .id(st('dense_energy_cell'));
});

ServerEvents.tags('item', e=> {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let ae = (id) => `ae2:${id}`;

    // Tag all the crafting storages
    const CRAFTING_STORAGE = [
        ae('1k_crafting_storage'),
        ae('4k_crafting_storage'),
        ae('16k_crafting_storage'),
        ae('64k_crafting_storage'),
        ae('256k_crafting_storage')
    ];
    CRAFTING_STORAGE.forEach(id => e.add('kubejs:crafting_storage', id) );

    // Tag all the budding blocks
    // Doesn't work in KubeJS :l
    const BUDDING_BLOCKS = [
        ae('flawless_budding_quartz'),
        ae('flawed_budding_quartz'),
        ae('chipped_budding_quartz'),
        ae('damaged_budding_quartz')
    ];
    BUDDING_BLOCKS.forEach(id => e.add('kubejs:budding_certus', id) );

    // -- REMOVE ENDER DUST -- //
    e.removeAllTagsFrom(ae('ender_dust'));
})