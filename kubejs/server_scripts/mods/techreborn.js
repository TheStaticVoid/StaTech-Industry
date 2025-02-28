// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:tech_reborn/${id}`;
    let tr = (id) => `techreborn:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let ae = (id) => `ae2:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let te = (id) => `tech_enhanced:${id}`;

    // -- TECHREBORN REMOVED RECIPES -- //
    const DELETED_RECIPES = [
        tr('smelting/refined_iron_ingot_from_iron_ingot'),
        tr('blasting/refined_iron_ingot_from_iron_ingot'),
        tr('smelting/refined_iron_block'),
        tr('smelting/refined_iron_block_by_blasting'),
        tr('smelting/refined_iron_plate_from_c_iron_plates'),
        tr('blasting/refined_iron_plate_from_c_iron_plates'),
        tr('rolling_machine/cupronickel_heating_coil'),
        tr('crafting_table/machine/low_voltage_su'),
        tr('crafting_table/paper'),
        tr('crafting_table/machine/extractor'),
        tr('crafting_table/battery/red_cell_battery'),
        tr('crafting_table/tool/electric_treetap'),
        tr('crafting_table/machine/auto_crafting_table'),
        tr('crafting_table/machine/recycler'),
        tr('crafting_table/parts/wood_plate'),
        tr('rolling_machine/nichrome_heating_coil'),
        tr('chemical_reactor/synthetic_redstone_crystal'),
        tr('assembling_machine/lithium_ion_battery'),
        tr('centrifuge/glowstone_dust'),
        tr('centrifuge/endstone_dust'),
        tr('crafting_table/armor/lithium_ion_batpack'),
        tr('crafting_table/small_dust/titanium_small_dust_from_dust'),
        tr('industrial_electrolyzer/pyrite_dust'),
        tr('centrifuge/lapis_lazuli'),
        tr('compressor/lazurite_plate'),
        tr('assembling_machine/energy_crystal'),
        tr('crafting_table/battery/lapotron_crystal'),
        tr('crafting_table/tool/industrial_drill'),
        tr('crafting_table/tool/industrial_chainsaw'),
        tr('crafting_table/tool/nanosaber'),
        tr('crafting_table/tool/industrial_jackhammer'),
        tr('crafting_table/ingot/tungsten_ingot_from_nugget'),
        tr('crafting_table/dust/raw_tungsten_from_small'),
        tr('crafting_table/dust/chrome_dust_from_small'),
        tr('crafting_table/dust/invar_dust_from_small'),
        tr('crafting_table/machine/alloy_smelter'),
        tr('crafting_table/machine/iron_alloy_furnace'),
        tr('crafting_table/machine/dragon_egg_syphon'),
        tr('crafting_table/battery/lapotronic_orb'),
        tr('crafting_table/armor/lapotronic_orbpack'),
        tr('scrapbox/auto/saw_dust'),
        tr('crafting_table/dust/electrum_dust_from_small'),
        tr('crafting_table/armor/cloaking_device'),
        tr('smelting/platinum_ingot_from_c_sheldonite_ores'),
        tr('blasting/platinum_ingot_from_c_sheldonite_ores'),
        tr('smelting/platinum_ingot_from_c_platinum_dusts'),
        tr('crafting_table/solar_panel/basic_solar_panel'),
        tr('crafting_table/solar_panel/advanced_solar_panel'),
        tr('crafting_table/solar_panel/advanced_solar_panel_alt'),
        tr('crafting_table/solar_panel/industrial_solar_panel'),
        tr('crafting_table/solar_panel/industrial_solar_panel_alt'),
        tr('crafting_table/solar_panel/ultimate_solar_panel'),
        tr('crafting_table/solar_panel/ultimate_solar_panel_alt'),
        tr('crafting_table/solar_panel/quantum_solar_panel'),
        tr('crafting_table/unit/storage/crude_storage_unit'),
        tr('crafting_table/parts/basic_display'),
        tr('crafting_table/unit/storage/basic_storage_unit'),
        tr('crafting_table/parts/advanced_circuit'),
        tr('crafting_table/parts/electronic_ciruit'),
        tr('crafting_table/unit/storage/advanced_storage_unit'),
        tr('assembling_machine/industrial_circuit'),
        tr('crafting_table/unit/storage/industrial_storage_unit'),
        tr('crafting_table/unit/storage/quantum_storage_unit'),
        tr('crafting_table/parts/data_storage_core'),
        tr('crafting_table/unit/upgrader/crude_unit_upgrader'),
        tr('crafting_table/unit/upgrader/basic_unit_upgrader'),
        tr('crafting_table/unit/upgrader/advanced_unit_upgrader'),
        tr('crafting_table/unit/upgrader/industrial_unit_upgrader'),
        tr('crafting_table/machine/resin_basin'),
        tr('crafting_table/machine/rolling_machine'),
        tr('crafting_table/machine/scrapboxinator'),
        tr('crafting_table/machine_block/basic_machine_casing_alt_alt'),
        tr('crafting_table/machine_block/basic_machine_casing_alt'),
        tr('crafting_table/machine_block/basic_machine_casing'),
        tr('crafting_table/machine/thermal_generator'),
        tr('crafting_table/machine/water_mill'),
        tr('crafting_table/machine/wind_mill'),
        tr('crafting_table/machine/wind_mill_alt'),
        tr('crafting_table/machine/charge_o_mat'),
        tr('crafting_table/machine/alarm'),
        tr('crafting_table/machine/lamp_incandescent'),
        tr('crafting_table/machine/lamp_led'),
        tr('crafting_table/frequency_transmitter'),
        tr('crafting_table/upgrade/muffler_upgrade'),
        tr('crafting_table/upgrade/energy_storage_upgrade'),
        tr('crafting_table/upgrade/overclocker_upgrade_alt_alt'),
        tr('crafting_table/upgrade/overclocker_upgrade_alt'),
        tr('crafting_table/upgrade/overclocker_upgrade'),
        tr('crafting_table/parts/helium_coolant_cell_60k'),
        tr('crafting_table/parts/superconductor'),
        tr('crafting_table/parts/thick_neutron_reflector'),
        tr('blasting/platinum_ingot_from_c_platinum_dusts'),
        tr('crafting_table/cable/hv_cable'),
        tr('crafting_table/tool/basic_jackhammer'),
        tr('crafting_table/tool/basic_drill'),
        tr('crafting_table/tool/basic_chainsaw'),
        tr('crafting_table/parts/electronic_circuit'),
        tr('crafting_table/manual'),
        tr('crafting_table/machine/industrial_sawmill'),
        tr('crafting_table/machine/wire_mill'),
        tr('crafting_table/tool/rock_cutter'),
        tr('crafting_table/machine/semi_fluid_generator_alt'),
        tr('crafting_table/machine/semi_fluid_generator'),
        tr('crafting_table/machine/grinder'),
        tr('crafting_table/machine/electric_furnace'),
        tr('crafting_table/machine/diesel_generator'),
        tr('crafting_table/machine/diesel_generator_alt'),
        tr('crafting_table/machine/compressor'),
        tr('crafting_table/mahine/canning_machine'),
        tr('crafting_table/machine/block_placer'),
        tr('crafting_table/machine/block_breaker'),
        tr('crafting_table/cable/insulated_hv_cable'),
        tr('crafting_table/machine/industrial_centrifuge'),
        tr('crafting_table/machine/industrial_sawmill'),
        tr('crafting_table/machine/solid_fuel_generator'),
        tr('crafting_table/machine/mv_transformer'),
        tr('crafting_table/machine/medium_voltage_su'),
        tr('crafting_table/unit/tank/advanced_tank_unit_from_basic'),
        tr('crafting_table/machine/industrial_grinder'),
        tr('crafting_table/machine/industrial_electrolyzer'),
        tr('crafting_table/machine/industrial_centrifuge'),
        tr('crafting_table/machine/industrial_centrifuge_alt'),
        tr('crafting_table/machine/industrial_blast_furnace'),
        tr('crafting_table/machine/implosion_compressor'),
        tr('crafting_table/machine/high_voltage_su'),
        tr('crafting_table/machine/assembling_machine'),
        tr('crafting_table/cable/superconductor_cable'),
        tr('crafting_table/small_dust/clay_small_dust_from_dust'),
        tr('crafting_table/dust/clay_dust_from_small'),
        tr('crafting_table/cell'),
        tr('crafting_table/armor/quantum_helmet'),
        tr('crafting_table/armor/quantum_chestplate'),
        tr('crafting_table/armor/quantum_leggings'),
        tr('crafting_table/armor/quantum_boots'),
        tr('crafting_table/uu_matter/ore/iridium_ore'),
        tr('crafting_table/uu_matter/ore/deepslate_iridium_ore'),
        //unused small dusts
        tr('scrapbox/auto/yellow_garnet_small_dust'),
        tr('scrapbox/auto/uvarovite_small_dust'),
        tr('scrapbox/auto/phosphorous_small_dust'),
        tr('scrapbox/auto/olivine_small_dust'),
        tr('scrapbox/auto/grossular_small_dust'),
        tr('scrapbox/auto/flint_small_dust'),
        tr('scrapbox/auto/ender_eye_small_dust'),
        tr('scrapbox/auto/basalt_small_dust'),
        tr('scrapbox/auto/andradite_small_dust'),
        tr('scrapbox/auto/phosphorous_small_dust')
    ];
    DELETED_RECIPES.forEach(id => e.remove({id: id}));

    // DELETE ALL SMALL DUST RECIPES
    e.remove({mod: 'techreborn', type: 'minecraft:crafting_shapeless', output: '#techreborn:small_dusts' });

    // -- QUANTUM HELMET -- //
    e.shaped(tr('quantum_helmet'), [
        'DLD',
        'SHS'
    ],
    {
        D: tr('data_storage_chip'),
        L: tr('lapotron_crystal'),
        S: tr('superconductor'),
        H: te('nano_helmet')
    })
    .id(st('quantum_helmet'));

    // -- QUANTUM CHESTPLATE -- //
    e.shaped(tr('quantum_chestplate'), [
        'TCT',
        'SLS',
        'DID'
    ],
    {
        D: tr('data_storage_chip'),
        L: tr('lapotron_crystal'),
        S: tr('superconductor'),
        C: te('nano_chestplate'),
        T: tr('tungstensteel_plate'),
        I: tr('iridium_neutron_reflector')
    })
    .id(st('quantum_chestplate'));

    // -- QUANTUM LEGGINGS -- //
    e.shaped(tr('quantum_leggings'), [
        'DLD',
        'SNS',
        'T T'
    ],
    {
        D: tr('data_storage_chip'),
        L: tr('lapotron_crystal'),
        S: tr('superconductor'),
        N: te('nano_leggings'),
        T: tr('tungstensteel_plate'),
    })
    .id(st('quantum_leggings'));

    // -- QUANTUM BOOTS -- //
    e.shaped(tr('quantum_boots'), [
        'L L',
        'D D',
        'SBS'
    ],
    {
        D: tr('data_storage_chip'),
        L: tr('lapotron_crystal'),
        S: tr('superconductor'),
        B: te('nano_boots'),
    })
    .id(st('quantum_boots'));

    // -- CELL -- //
    e.shaped(tr('cell'), [
        ' T ',
        'T T',
        ' T '
    ],
    {
        T: '#c:tin_plates'
    })
    .id(st('cell'));

    // -- INDUSTRIAL DRILL -- //
    e.shaped(tr('industrial_drill'), [
        'CRD',
        'MPR',
        'LMC'
    ], 
    {
        C: mi('digital_circuit'),
        R: mi('invar_rotary_blade'),
        D: mi('stainless_steel_drill_head'),
        M: mi('advanced_motor'),
        P: mi('advanced_pump'),
        L: tr('lapotron_crystal')
    })
    .id(st('industrial_drill'));

    // -- INDUSTRIAL CHAINSAW -- //
    e.shaped(tr('industrial_chainsaw'), [
        'CSR',
        'MRS',
        'LMC'
    ], 
    {
        C: mi('digital_circuit'),
        R: mi('invar_rotary_blade'),
        M: mi('advanced_motor'),
        S: mi('rubber_sheet'),
        L: tr('lapotron_crystal')
    })
    .id(st('industrial_chainsaw'));

    // -- INDUSTRIAL JACKHAMMER -- //
    e.shaped(tr('industrial_jackhammer'), [
        'CSR',
        'MBS',
        'LMC'
    ],
    {
        R: mi('stainless_steel_drill_head'),
        M: mi('advanced_motor'),
        L: tr('lapotron_crystal'),
        B: mi('stainless_steel_rod'),
        C: mi('digital_circuit'),
        S: mi('rubber_sheet')
    })
    .id(st('industrial_jackhammer'));

    // -- CHARGE O MAT -- //
    e.shaped(tr('charge_o_mat'), [
        'PPP',
        'KAK',
        'CHC'
    ],
    {
        P: mi('aluminum_large_plate'),
        K: mi('kanthal_wire'),
        A: ae('charger'),
        C: mi('digital_circuit'),
        H: mi('turbo_machine_hull')
    })
    .id(st('charge_o_mat'));

    // -- NANOSABER -- //
    e.shaped(tr('nanosaber'), [
        '  B',
        'CB ',
        'NL '
    ],
    {
        N: mc('netherite_sword'),
        B: mi('stainless_steel_blade'),
        C: mi('digital_circuit'),
        L: tr('lapotron_crystal')
    })
    .id(st('nanosaber'));

    // -- RECYCLER -- //
    e.shaped(tr('recycler'), [
        'AMA',
        'CHC',
        'AMA'
    ],
    {
        H: mi('advanced_machine_hull'),
        C: mi('electronic_circuit'),
        M: mi('large_motor'),
        A: '#c:aluminum_plates'
    })
    .id(st('recycler'));

    // -- SCRAPBOXINATOR -- //
    e.shaped(tr('scrapboxinator'), [
        'WBW',
        'CHC',
        'MBM'
    ],
    {
        H: mi('advanced_machine_hull'),
        C: mi('electronic_circuit'),
        M: mi('large_motor'),
        B: mc('chest'),
        W: mi('cupronickel_cable')
    })
    .id(st('scrapboxinator'));

    // -- NUKE CONVERSION -- //
    e.shapeless(tr('nuke'), [mi('nuke')]);
    e.shapeless(mi('nuke'), [tr('nuke')]);

    // -- BASIC SOLAR PANEL -- //
    e.shaped(tr('basic_solar_panel'), [
        'GGG',
        'ZZZ',
        'AHA'
    ],
    {
        G: mc('blue_stained_glass_pane'),
        Z: '#c:zinc_ingots',
        A: mi('analog_circuit'),
        H: mi('basic_machine_hull')
    })
    .id(st('basic_solar_panel'));

    // -- ADVANCED SOLAR PANEL -- //
    e.shaped(tr('advanced_solar_panel'), [
        'GGG',
        'SSS',
        'EHE'
    ],
    {
        G: mc('blue_stained_glass_pane'),
        S: '#c:silver_ingots',
        E: mi('electronic_circuit'),
        H: mi('advanced_machine_hull')
    })
    .id(st('advanced_solar_panel'));

    // -- INDUSTRIAL SOLAR PANEL -- //
    e.shaped(tr('industrial_solar_panel'), [
        'GGG',
        'AAA',
        'DHD'
    ],
    {
        G: mc('blue_stained_glass_pane'),
        A: '#c:stainless_steel_ingots',
        D: mi('electronic_circuit'),
        H: mi('advanced_machine_hull')
    })
    .id(st('industrial_solar_panel'));

    // -- ULTIMATE SOLAR PANEL -- //
    e.shaped(tr('ultimate_solar_panel'), [
        'GGG',
        'TTT',
        'PHP'
    ],
    {
        G: mc('blue_stained_glass_pane'),
        T: '#c:annealed_copper_ingots',
        P: mi('digital_circuit'),
        H: mi('turbo_machine_hull')
    })
    .id(st('ultimate_solar_panel'));

    // -- QUANTUM SOLAR PANEL -- //
    e.shaped(tr('quantum_solar_panel'), [
        'GGG',
        'III',
        'QHC'
    ],
    {
        G: mc('blue_stained_glass_pane'),
        I: '#c:iridium_ingots',
        Q: mi('quantum_circuit'),
        H: mi('highly_advanced_machine_hull'),
        C: mi('large_heat_exchanger')
    })
    .id(st('quantum_solar_panel'));

    // -- BATTERY BOX -- //
    e.shaped(tr('low_voltage_su'), [
        'PCP',
        'BBB',
        'PPP'
    ],
    {
        P: tr('wood_plate'),
        B: mi('redstone_battery'),
        C: mi('copper_cable')
    })
    .id(st('low_voltage_su'));

    // -- EXTRACTOR -- //
    e.shaped(tr('extractor'), [
        'THT',
        'TCT'
    ],
    {
        T: tr('treetap'),
        C: mi('analog_circuit'),
        H: mi('basic_machine_hull')
    })
    .id(st('extractor'));

    // -- RED CELL BATTERY -- //
    e.shaped(tr('red_cell_battery'), [
        ' C ',
        'LBL',
        'LBL'
    ],
    {
        C: mi('copper_cable'),
        L: '#c:lead_plates',
        B: mi('redstone_battery')
    })
    .id(st('red_cell_battery'));

    // -- ELECTRIC TREETAP -- //
    e.shaped(tr('electric_treetap'), [
        '  T',
        'CS ',
        'SB '
    ],
    {
        T: tr('treetap'),
        C: mi('analog_circuit'),
        S: '#c:wood_sticks',
        B: tr('red_cell_battery')
    })
    .id(st('electric_treetap'));

    // -- DRAGON EGG SIPHON -- //
    e.shaped(tr('dragon_egg_syphon'), [
        'PUP',
        'THT',
        'POP'
    ],
    {
        H: mi('highly_advanced_machine_hull'),
        T: '#c:tungsten_plates',
        U: mi('hv_storage_unit'),
        O: tr('lapotronic_orb'),
        P: '#c:iridium_alloy_plates'
    })
    .id(st('dragon_egg_syphon'));

    // -- LAPOTRONIC ENERGY ORB -- //
    e.shaped(tr('lapotronic_orb'), [
        'CCC',
        'CHC',
        'CCC'
    ],
    { 
        C: tr('lapotron_crystal'),
        H: mi('highly_advanced_machine_hull')
    })
    .id(st('lapotronic_orb'));

    // -- LAPOTRONIC ORBPACK -- //
    e.shaped(tr('lapotronic_orbpack'), [
        'PIP',
        'SBS',
        'POP'
    ],
    {
        P: '#c:iridium_alloy_plates',
        S: mi('superconductor_cable'),
        B: tr('lithium_ion_batpack'),
        I: '#c:iridium_plates',
        O: tr('lapotronic_orb')
    })
    .id(st('lapotronic_orbpack'));

    // -- CRUDE STORAGE UNIT -- //
    e.shaped(tr('crude_storage_unit'), [
        'PPP',
        'PBP',
        'PAP'
    ],
    {
        P: '#minecraft:planks',
        B: mi('bronze_barrel'),
        A: mc('paper')
    })
    .id(st('crude_storage_unit'));

    // -- BASIC DISPLAY -- //
    e.shaped(tr('basic_display'), [
        'RIR',
        'ICI',
        'RGR'
    ],
    {
        R: '#c:refined_iron_plates',
        I: '#c:black_dyes',
        C: mi('analog_circuit'),
        G: '#c:colorless_glass_panes'
    })
    .id(st('basic_display'));

    // -- BASIC STORAGE UNIT -- //
    e.shaped(tr('basic_storage_unit'), [
        'PPP',
        'BMB',
        'CDC'
    ],
    {
        P: '#c:refined_iron_plates',
        B: mi('steel_barrel'),
        M: tr('basic_machine_frame'),
        C: mi('analog_circuit'),
        D: tr('basic_display')
    })
    .id(st('basic_storage_unit'));

    // -- CRUDE UNIT UPGRADER -- //
    e.shaped(tr('crude_unit_upgrader'), [
        'PPP',
        'BM ',
        'CDC'
    ],
    {
        P: '#c:refined_iron_plates',
        B: mi('steel_barrel'),
        M: tr('basic_machine_frame'),
        C: mi('analog_circuit'),
        D: tr('basic_display')
    })
    .id(st('crude_unit_upgrader'));

    // -- ADVANCED CIRCUIT -- //
    e.shaped(tr('advanced_circuit'), [
        'RGR',
        'LCL',
        'RGR'
    ],
    {
        R: '#c:redstone_dusts',
        G: '#c:glowstone_dusts',
        L: '#c:lapis',
        C: mi('analog_circuit')
    })
    .id(st('advanced_circuit'));

    // -- ADVANCED STORAGE UNIT -- //
    e.shaped(tr('advanced_storage_unit'), [
        'EEE',
        'BFB',
        'CDC'
    ],
    {
        E: '#c:electrum_plates',
        B: mi('aluminum_barrel'),
        F: tr('advanced_machine_frame'),
        C: tr('advanced_circuit'),
        D: tr('digital_display')
    })
    .id(st('advanced_storage_unit'));

    // -- BASIC UNIT UPGRADER -- //
    e.shaped(tr('basic_unit_upgrader'), [
        'EEE',
        'BF ',
        'CDC'
    ],
    {
        E: '#c:electrum_plates',
        B: mi('aluminum_barrel'),
        F: tr('advanced_machine_frame'),
        C: tr('advanced_circuit'),
        D: tr('digital_display')
    })
    .id(st('basic_unit_upgrader'));

    // -- INDUSTRIAL STORAGE UNIT -- //
    e.shaped(tr('industrial_storage_unit'), [
        'PPP',
        'GFG',
        'CDC'
    ],
    {
        P: '#c:stainless_steel_plates',
        G: mi('stainless_steel_gear'),
        F: tr('advanced_machine_frame'),
        C: tr('advanced_circuit'),
        D: tr('digital_display')
    })
    .id(st('industrial_storage_unit'));

    // -- ADVANCED UNIT UPGRADER -- //
    e.shaped(tr('advanced_unit_upgrader'), [
        'PPP',
        'GF ',
        'CDC'
    ],
    {
        P: '#c:stainless_steel_plates',
        G: mi('stainless_steel_gear'),
        F: tr('advanced_machine_frame'),
        C: tr('advanced_circuit'),
        D: tr('digital_display')
    })
    .id(st('advanced_unit_upgrader'));

    // -- QUANTUM STORAGE UNIT -- //
    e.shaped(tr('quantum_storage_unit'), [
        'PPP',
        'BFB',
        'CDC'
    ],
    {
        P: '#c:tungsten_plates',
        B: mi('titanium_barrel'),
        F: tr('industrial_machine_frame'),
        C: tr('data_storage_chip'),
        D: tr('digital_display')
    })
    .id(st('quantum_storage_unit'));

    // -- INDUSTRIAL UNIT UPGRADER -- //
    e.shaped(tr('industrial_unit_upgrader'), [
        'PPP',
        'BF ',
        'CDC'
    ],
    {
        P: '#c:tungsten_plates',
        B: mi('titanium_barrel'),
        F: tr('industrial_machine_frame'),
        C: tr('data_storage_chip'),
        D: tr('digital_display')
    })
    .id(st('industrial_unit_upgrader'));

    // -- DATA STORAGE CHIPS -- //
    e.shaped(tr('data_storage_core'), [
        'RGR',
        'LCL',
        'PPP'
    ],
    {
        R: '#c:redstone_dusts',
        G: '#c:glowstone_dusts',
        L: '#c:lapis',
        C: tr('advanced_circuit'),
        P: '#c:peridot_plates'
    })
    .id(st('data_storage_core'));

    // -- RESIN BASIN -- //
    e.shaped(tr('resin_basin'), [
        'WTW',
        'W W',
        'WDW'
    ],
    {
        W: tr('rubber_planks'),
        T: tr('treetap'),
        D: tr('rubber_trapdoor')
    })
    .id(st('resin_basin'));

    // -- ROLLING MACHINE -- //
    e.shaped(tr('rolling_machine'), [
        'PCP',
        'RFR',
        'PCP'
    ],
    {
        P: mi('piston'),
        C: tr('advanced_circuit'),
        R: '#c:refined_iron_plates',
        F: tr('basic_machine_frame')
    })
    .id(st('rolling_machine'));

    // -- STANDARD MACHINE CASING -- //
    e.shaped(tr('basic_machine_casing'), [
        'III',
        'ACA',
        'III'
    ],
    {
        I: '#c:iron_plates',
        A: mi('analog_circuit'),
        C: tr('basic_machine_frame')
    })
    .id(st('basic_machine_casing'));

    // -- THERMAL GENERATOR -- //
    e.shaped(tr('thermal_generator'), [
        'III',
        'IGI',
        'CHC'
    ],
    {
        I: '#c:invar_plates',
        G: tr('reinforced_glass'),
        C: mi('electronic_circuit'),
        H: mi('advanced_machine_hull')
    })
    .id(st('thermal_generator'));

    // -- WATER MILL -- //
    e.shaped(tr('water_mill'), [
        'TGT',
        'IHI',
        'PCP'
    ],
    {
        T: mi('tin_rotor'),
        G: '#c:glass',
        I: '#c:iron_plates',
        H: mi('basic_machine_hull'),
        P: mi('pump'),
        C: mi('analog_circuit')
    })
    .id(st('water_mill'));

    // -- WIND MILL -- //
    e.shaped(tr('wind_mill'), [
        'MHM'
    ],
    {
        M: '#c:magnalium_plates',
        H: mi('basic_machine_hull')
    })
    .id(st('wind_mill'));

    // -- ALARM -- //
    e.shaped(tr('alarm'), [
        'RWR',
        'CBC',
        'RWR'
    ],
    {
        R: '#c:refined_iron_ingots',
        W: mi('copper_wire'),
        C: mi('copper_cable'),
        B: mc('redstone_block')
    })
    .id(st('alarm'));

    // -- INCANDESCENT LAMP -- //
    e.shaped(tr('lamp_incandescent'), [
        'GGG',
        'WCW',
        'GGG'
    ],
    {
        G: '#c:colorless_glass_panes',
        W: mi('copper_wire'),
        C: tr('carbon_fiber')
    })
    .id(st('lamp_incandescent'));

    // -- LED LAMP -- //
    e.shaped(tr('lamp_led'), [
        'GGG',
        'WOW',
        'GGG'
    ],
    {
        G: '#c:colorless_glass_panes',
        W: mi('tin_wire'),
        O: mc('glowstone_dust')
    })
    .id(st('lamp_led'));

    // -- FREQUENCY TRANSMITTER -- //
    e.shapeless(tr('frequency_transmitter'), [
        mi('analog_circuit'), mi('electrum_wire')
    ])
    .id(st('frequency_transmitter'));

    // -- ENERGY STORAGE UPGRADE -- //
    e.shaped(tr('energy_storage_upgrade'), [
        'PPP',
        'CBC',
        'PAP'
    ],
    {
        P: '#minecraft:planks',
        C: mi('copper_cable'),
        B: tr('red_cell_battery'),
        A: mi('analog_circuit')
    })
    .id(st('energy_storage_upgrade'));

    // -- MUFFLER UPGRADE -- //
    e.shaped(tr('muffler_upgrade'), [
        ' W ',
        'WAW',
        ' W '
    ],
    {
        W: '#minecraft:wool',
        A: mi('analog_circuit')
    })
    .id(st('muffler_upgrade'));

    // -- OVERCLOCKER UPGRADE -- //
    e.shaped(tr('overclocker_upgrade'), [
        'CCC',
        'WAW'
    ],
    {
        C: tr('water_coolant_cell_10k'),
        W: mi('copper_cable'),
        A: mi('analog_circuit')
    })
    .id(st('overclocker_upgrade'));

    // -- 60k HELIUM COOLANT CELL -- //
    e.shaped(tr('helium_coolant_cell_60k'), [
        ' T ',
        'THT',
        ' T '
    ],
    {
        T: '#c:tin_ingots',
        H: mi('helium_bucket')
    })
    .id(st('helium_coolant_cell_60k'));

    // -- SUPERCONDUCTOR -- //
    e.shaped('4x ' + tr('superconductor'), [
        'HHH',
        'TCT',
        'FFF'
    ],
    {
        H: tr('helium_coolant_cell_60k'),
        T: '#c:tungsten_ingots',
        C: mi('quantum_circuit'),
        F: tr('energy_flow_chip')
    })
    .id(st('superconductor'));

    // -- SUPERCONDUCTOR UPGRADE -- //
    e.shaped(tr('superconductor_upgrade'), [
        'SCS',
        'SFS',
        'SCS'
    ],
    {
        S: tr('superconductor'),
        C: tr('data_storage_chip'),
        F: tr('industrial_machine_frame')
    })
    .id(st('superconductor_upgrade'));

    // -- THICK NEUTRON DEFLECTOR -- //
    e.shaped(tr('thick_neutron_reflector'), [
        ' R ',
        'RBR',
        ' R '
    ],
    {
        R: tr('neutron_reflector'),
        B: mi('beryllium_dust')
    })
    .id(st('thick_neutron_reflector'));

    // -- LEAD INGOT FROM GALENA ORE -- //
    e.smelting(mi('lead_ingot'), '#c:galena_ores', 1);
    e.blasting(mi('lead_ingot'), '#c:galena_ores', 1);

    // -- LEAD INGOT FROM GALENA DUST -- //
    e.smelting(mi('lead_ingot'), tr('galena_dust'), 0.7);
    e.blasting(mi('lead_ingot'), tr('galena_dust'), 0.7);
    
    // -- MISSING DUST FROM SMALL DUST -- //
    e.shapeless(mi('tungsten_dust'), [
        tr('tungsten_small_dust'),
        tr('tungsten_small_dust'),
        tr('tungsten_small_dust'),
        tr('tungsten_small_dust')
    ]);
    e.shapeless(mi('electrum_dust'), [
        tr('electrum_small_dust'),
        tr('electrum_small_dust'),
        tr('electrum_small_dust'),
        tr('electrum_small_dust')
    ]);
    e.shapeless(mi('chromium_dust'), [
        tr('chrome_small_dust'),
        tr('chrome_small_dust'),
        tr('chrome_small_dust'),
        tr('chrome_small_dust')
    ]);
    e.shapeless(mi('invar_dust'), [
        tr('invar_small_dust'),
        tr('invar_small_dust'),
        tr('invar_small_dust'),
        tr('invar_small_dust')
    ]);
});

ServerEvents.tags('item', e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let tr = (id) => `techreborn:${id}`;

    const ORES = [
        tr('cinnabar_ore'),
        tr('galena_ore'),
        tr('peridot_ore'),
        tr('pyrite_ore'),
        tr('ruby_ore'),
        tr('sapphire_ore'),
        tr('sheldonite_ore'),
        tr('silver_ore'),
        tr('sodalite_ore'),
        tr('sphalerite_ore'),
        tr('deepslate_galena_ore'),
        tr('deepslate_peridot_ore'),
        tr('deepslate_ruby_ore'),
        tr('deepslate_sapphire_ore'),
        tr('deepslate_sheldonite_ore'),
        tr('deepslate_silver_ore'),
        tr('deepslate_sodalite_ore')
    ];
    ORES.forEach(id => e.add('c:ores', id));
});

ServerEvents.tags('block', e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let tr = (id) => `techreborn:${id}`;
    let mc = (id) => `minecraft:${id}`;

    const BLOCKS = [
        tr('basic_solar_panel'),
        tr('advanced_solar_panel'),
        tr('industrial_solar_panel'),
        tr('ultimate_solar_panel'),
        tr('quantum_solar_panel'),
        tr('creative_solar_panel'),
        tr('storage_buffer'),
        tr('crude_storage_unit'),
        tr('basic_storage_unit'),
        tr('advanced_storage_unit'),
        tr('industrial_storage_unit'),
        tr('quantum_storage_unit'),
        tr('creative_storage_unit'),
        tr('auto_crafting_table'),
        tr('extractor'),
        tr('matter_fabricator'),
        tr('recycler'),
        tr('rolling_machine'),
        tr('scrapboxinator'),
        tr('greenhouse_controller'),
        tr('launchpad'),
        tr('dragon_egg_syphon'),
        tr('lightning_rod'),
        tr('thermal_generator'),
        tr('water_mill'),
        tr('wind_mill'),
        tr('adjustable_su'),
        tr('charge_o_mat'),
        tr('interdimensional_su'),
        tr('low_voltage_su'),
        tr('alarm'),
        tr('lamp_incandescent'),
        tr('lamp_led'),
        tr('player_detector'),
        tr('computer_cube'),
        tr('nuke'),
        tr('refined_iron_fence'),
        tr('reinforced_glass')
    ];

    BLOCKS.forEach(id => e.add(mc('mineable/pickaxe'), id));
    BLOCKS.forEach(id => e.add(mc('needs_stone_tool'), id));

    e.add(mc('mineable/axe'), tr('resin_basin'));
});