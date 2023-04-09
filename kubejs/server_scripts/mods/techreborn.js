ServerEvents.recipes(e => {
    const DELETED_RECIPES = [
        'techreborn:smelting/refined_iron_ingot_from_iron_ingot',
        'techreborn:blasting/refined_iron_ingot_from_iron_ingot',
        'techreborn:smelting/refined_iron_plate_from_c_iron_plates',
        'techreborn:blasting/refined_iron_plate_from_c_iron_plates',
        'techreborn:rolling_machine/cupronickel_heating_coil',
        'techreborn:crafting_table/machine/low_voltage_su',
        'techreborn:crafting_table/paper',
        'techreborn:crafting_table/machine/extractor',
        'techreborn:crafting_table/battery/red_cell_battery',
        'techreborn:crafting_table/tool/electric_treetap',
        'techreborn:crafting_table/machine/auto_crafting_table',
        'techreborn:crafting_table/machine/recycler',
        'techreborn:crafting_table/parts/wood_plate',
        'techreborn:rolling_machine/nichrome_heating_coil',
        'techreborn:chemical_reactor/synthetic_redstone_crystal',
        'techreborn:assembling_machine/lithium_ion_battery',
        'techreborn:centrifuge/glowstone_dust',
        'techreborn:centrifuge/endstone_dust',
        'techreborn:crafting_table/armor/lithium_ion_batpack',
        'techreborn:crafting_table/small_dust/titanium_small_dust_from_dust',
        'techreborn:industrial_electrolyzer/pyrite_dust',
        'techreborn:centrifuge/lapis_lazuli',
        'techreborn:compressor/lazurite_plate',
        'techreborn:assembling_machine/energy_crystal',
        'techreborn:crafting_table/battery/lapotron_crystal',
        'techreborn:crafting_table/tool/industrial_drill',
        'techreborn:crafting_table/tool/industrial_chainsaw',
        'techreborn:crafting_table/tool/nanosaber',
        'techreborn:crafting_table/tool/industrial_jackhammer',
        'techreborn:crafting_table/ingot/tungsten_ingot_from_nugget',
        'techreborn:crafting_table/dust/raw_tungsten_from_small',
        'techreborn:crafting_table/dust/chrome_dust_from_small'
    ];
    DELETED_RECIPES.forEach(id => e.remove({id: id}));

    // -- INDUSTRIAL DRILL -- //
    e.shaped('techreborn:industrial_drill', [
        'CRD',
        'MPR',
        'LMC'
    ], 
    {
        C: 'modern_industrialization:digital_circuit',
        R: 'modern_industrialization:invar_rotary_blade',
        D: 'modern_industrialization:stainless_steel_drill_head',
        M: 'modern_industrialization:advanced_motor',
        P: 'modern_industrialization:advanced_pump',
        L: 'techreborn:lapotron_crystal'
    });

    // -- INDUSTRIAL CHAINSAW -- //
    e.shaped('techreborn:industrial_chainsaw', [
        'CSR',
        'MRS',
        'LMC'
    ], 
    {
        C: 'modern_industrialization:digital_circuit',
        R: 'modern_industrialization:invar_rotary_blade',
        M: 'modern_industrialization:advanced_motor',
        S: 'modern_industrialization:rubber_sheet',
        L: 'techreborn:lapotron_crystal'
    });

    // -- INDUSTRIAL JACKHAMMER -- //
    e.shaped('techreborn:industrial_jackhammer', [
        'CSR',
        'MBS',
        'LMC'
    ],
    {
        R: 'modern_industrialization:stainless_steel_drill_head',
        M: 'modern_industrialization:advanced_motor',
        L: 'techreborn:lapotron_crystal',
        B: 'modern_industrialization:stainless_steel_rod',
        C: 'modern_industrialization:digital_circuit',
        S: 'modern_industrialization:rubber_sheet'
    });

    // -- CHARGE O MAT -- //
    e.shaped('techreborn:charge_o_mat', [
        'PPP',
        'KAK',
        'CHC'
    ],
    {
        P: 'modern_industrialization:aluminum_large_plate',
        K: 'modern_industrialization:kanthal_wire',
        A: 'ae2:charger',
        C: 'modern_industrialization:digital_circuit',
        H: 'modern_industrialization:turbo_machine_hull'
    });

    // -- NANOSABER -- //
    e.shaped('techreborn:nanosaber', [
        '  B',
        'CB ',
        'NL '
    ],
    {
        N: 'minecraft:netherite_sword',
        B: 'modern_industrialization:stainless_steel_blade',
        C: 'modern_industrialization:digital_circuit',
        L: 'techreborn:lapotron_crystal'
    });

    // -- RECYCLER -- //
    e.shaped('techreborn:recycler', [
        'AMA',
        'CHC',
        'AMA'
    ],
    {
        H: 'modern_industrialization:advanced_machine_hull',
        C: 'modern_industrialization:electronic_circuit',
        M: 'modern_industrialization:large_motor',
        A: '#c:aluminum_plates'
    });

    // -- SCRAPBOXINATOR -- //
    e.shaped('techreborn:scrapboxinator', [
        'WBW',
        'CHC',
        'MBM'
    ],
    {
        H: 'modern_industrialization:advanced_machine_hull',
        C: 'modern_industrialization:electronic_circuit',
        M: 'modern_industrialization:large_motor',
        B: 'minecraft:chest',
        W: 'modern_industrialization:cupronickel_cable'
    });

    // -- URANIUM ORE FROM UU -- //
    e.shaped('modern_industrialization:uranium_ore', [
        'UUU',
        'UUU',
        'USU'
    ], 
    {
        U: 'techreborn:uu_matter',
        S: '#c:stones'
    });

    // -- NUKE CONVERSION -- //
    e.shapeless('techreborn:nuke', ['modern_industrialization:nuke']);
    e.shapeless('modern_industrialization:nuke', ['techreborn:nuke']);

    // -- BASIC SOLAR PANEL -- //
    e.shaped('techreborn:basic_solar_panel', [
        'GGG',
        'ZZZ',
        'AHA'
    ],
    {
        G: 'minecraft:blue_stained_glass_pane',
        Z: '#c:zinc_ingots',
        A: 'modern_industrialization:analog_circuit',
        H: 'modern_industrialization:basic_machine_hull'
    });

    // -- ADVANCED SOLAR PANEL -- //
    e.shaped('techreborn:advanced_solar_panel', [
        'GGG',
        'SSS',
        'EHE'
    ],
    {
        G: 'minecraft:blue_stained_glass_pane',
        S: '#c:silver_ingots',
        E: 'modern_industrialization:electronic_circuit',
        H: 'modern_industrialization:advanced_machine_hull'
    });

    // -- INDUSTRIAL SOLAR PANEL -- //
    e.shaped('techreborn:industrial_solar_panel', [
        'GGG',
        'AAA',
        'DHD'
    ],
    {
        G: 'minecraft:blue_stained_glass_pane',
        A: '#c:annealed_copper_ingots',
        D: 'modern_industrialization:digital_circuit',
        H: 'modern_industrialization:turbo_machine_hull'
    });

    // -- ULTIMATE SOLAR PANEL -- //
    e.shaped('techreborn:ultimate_solar_panel', [
        'GGG',
        'TTT',
        'PHC'
    ],
    {
        G: 'minecraft:blue_stained_glass_pane',
        T: '#c:titanium_ingots',
        P: 'modern_industrialization:processing_unit',
        H: 'modern_industrialization:highly_advanced_machine_hull',
        C: 'modern_industrialization:small_heat_exchanger'
    });

    // -- QUANTUM SOLAR PANEL -- //
    e.shaped('techreborn:quantum_solar_panel', [
        'GGG',
        'III',
        'QHC'
    ],
    {
        G: 'minecraft:blue_stained_glass_pane',
        I: '#c:iridium_ingots',
        Q: 'modern_industrialization:quantum_circuit',
        H: 'modern_industrialization:quantum_machine_hull',
        C: 'modern_industrialization:large_heat_exchanger'
    });

    // -- BATTERY BOX -- //
    e.shaped('techreborn:low_voltage_su', [
        'PCP',
        'BBB',
        'PPP'
    ],
    {
        P: 'techreborn:wood_plate',
        B: 'modern_industrialization:redstone_battery',
        C: 'modern_industrialization:copper_cable'
    });

    // -- EXTRACTOR -- //
    e.shaped('techreborn:extractor', [
        'THT',
        'TCT'
    ],
    {
        T: 'techreborn:treetap',
        C: 'modern_industrialization:analog_circuit',
        H: 'modern_industrialization:basic_machine_hull'
    });

    // -- RED CELL BATTERY -- //
    e.shaped('techreborn:red_cell_battery', [
        ' C ',
        'LBL',
        'LBL'
    ],
    {
        C: 'modern_industrialization:copper_cable',
        L: '#c:lead_plates',
        B: 'modern_industrialization:redstone_battery'
    });

    // -- ELECTRIC TREETAP -- //
    e.shaped('techreborn:electric_treetap', [
        '  T',
        'CS ',
        'SB '
    ],
    {
        T: 'techreborn:treetap',
        C: 'modern_industrialization:analog_circuit',
        S: '#c:wood_sticks',
        B: 'techreborn:red_cell_battery'
    });
});