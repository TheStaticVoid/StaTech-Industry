ServerEvents.recipes(e => {

    let tr = (id) => `techreborn:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let ae = (id) => `ae2:${id}`;
    let mc = (id) => `minecraft:${id}`;

    const DELETED_RECIPES = [
        tr('smelting/refined_iron_ingot_from_iron_ingot'),
        tr('blasting/refined_iron_ingot_from_iron_ingot'),
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
        tr('crafting_table/dust/electrum_dust_from_small')
    ];
    DELETED_RECIPES.forEach(id => e.remove({id: id}));

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
    });

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
    });

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
    });

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
    });

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
    });

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
    });

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
    });

    // -- URANIUM ORE FROM UU -- //
    e.shaped(mi('uranium_ore'), [
        'UUU',
        'UUU',
        'USU'
    ], 
    {
        U: tr('uu_matter'),
        S: '#c:stones'
    });

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
    });

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
    });

    // -- INDUSTRIAL SOLAR PANEL -- //
    e.shaped(tr('industrial_solar_panel'), [
        'GGG',
        'AAA',
        'DHD'
    ],
    {
        G: mc('blue_stained_glass_pane'),
        A: '#c:annealed_copper_ingots',
        D: mi('digital_circuit'),
        H: mi('turbo_machine_hull')
    });

    // -- ULTIMATE SOLAR PANEL -- //
    e.shaped(tr('ultimate_solar_panel'), [
        'GGG',
        'TTT',
        'PHC'
    ],
    {
        G: mc('blue_stained_glass_pane'),
        T: '#c:titanium_ingots',
        P: mi('processing_unit'),
        H: mi('highly_advanced_machine_hull'),
        C: mi('small_heat_exchanger')
    });

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
        H: mi('quantum_machine_hull'),
        C: mi('large_heat_exchanger')
    });

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
    });

    // -- EXTRACTOR -- //
    e.shaped(tr('extractor'), [
        'THT',
        'TCT'
    ],
    {
        T: tr('treetap'),
        C: mi('analog_circuit'),
        H: mi('basic_machine_hull')
    });

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
    });

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
    });

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
    });

    // -- LAPOTRONIC ENERGY ORB -- //
    e.shaped(tr('lapotronic_orb'), [
        'CCC',
        'CHC',
        'CCC'
    ],
    { 
        C: tr('lapotron_crystal'),
        H: mi('highly_advanced_machine_hull')
    });

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
});