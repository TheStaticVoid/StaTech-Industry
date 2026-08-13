// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/assembler/${id}`;

    // -- ASSEMBLER REMOVED RECIPES -- //
    const REMOVED_RECIPE = [
        mi('electric_age/component/assembler/qubit'),
        mi(
            'assembler_generated/electric_age/component/craft/ultradense_metal_ball'
        ),
        mi('assembler_generated/steam_age/bronze/furnace'),
        mi('assembler_generated/steam_age/bronze/boiler'),
        mi('assembler_generated/electric_age/component/craft/op_amp'),
        mi('materials/stainless_steel/assembler/tank'),
        mi('materials/titanium/assembler/tank'),
        mi('materials/tungstensteel/assembler/tank'),
        mi('electric_age/component/craft/diode_doped_asbl'),
        mi('machines/machine_chainer/assembler'),
        io('machines/pyrolyse_oven/assembler'),
        mi('assembler_generated/electric_age/machine/large_diesel_generator'),
        mi('assembler_generated/electric_age/machine/large_steam_turbine'),
        /*      mi('materials/uranium/assembler/fuel_rod'),
        mi('materials/he_uranium/assembler/fuel_rod'),
        mi('materials/le_uranium/assembler/fuel_rod'),
        mi('materials/he_mox/assembler/fuel_rod'),
        mi('materials/le_mox/assembler/fuel_rod') */
    ];
    REMOVED_RECIPE.forEach((id) => event.remove({ id: id }));

    // -- MATTER FABRICATOR -- //
    assembler(
        event,
        st('matter_fabricator'),
        8,
        200,
        [
            { amount: 4, item: kj('scrap') },
            { amount: 2, item: mi('advanced_motor') },
            { amount: 2, item: mi('digital_circuit') },
            { amount: 1, item: mi('turbo_machine_hull') },
        ],
        [{ amount: 1, item: mi('matter_fabricator') }]
    );

    // -- RECYCLER -- //
    assembler(
        event,
        st('recycler'),
        8,
        200,
        [
            { amount: 4, item: mi('electronic_circuit') },
            { amount: 2, item: mi('large_pump') },
            { amount: 2, item: mi('aluminum_rotor') },
            { amount: 1, item: mi('advanced_machine_hull') },
        ],
        [{ amount: 1, item: mi('recycler') }]
    );

    // -- BUFFED DOPED DIODE -- //
    assembler(
        event,
        st('buffed_diode_doped'),
        8,
        200,
        [
            { amount: 1, item: mi('silicon_n_doped_plate') },
            { amount: 3, item: mi('electrum_fine_wire') },
            { amount: 2, item: mi('steel_plate') },
        ],
        [{ amount: 4, item: mi('diode') }],
        [{ amount: 125, fluid: mi('molten_borosilicate_glass') }]
    );

    // -- BUFFED DOPED TRANSISTOR -- //
    assembler(
        event,
        st('buffed_transistor_doped'),
        16,
        200,
        [
            { amount: 1, item: mi('silicon_n_doped_plate') },
            { amount: 1, item: kj('silicon_extremely_p_doped_plate') },
            { amount: 1, item: mi('electrum_fine_wire') },
            { amount: 3, item: mi('steel_plate') },
        ],
        [{ amount: 6, item: mi('transistor') }]
    );

    // -- STAINLESS STEEL TANK -- //
    assembler(
        event,
        st('stainless_steel_tank'),
        8,
        200,
        [
            { amount: 8, item: mi('stainless_steel_plate') },
            { amount: 1, item: kj('borosilicate_glass') },
        ],
        [{ amount: 1, item: mi('stainless_steel_tank') }]
    );

    // -- TITANIUM TANK -- //
    assembler(
        event,
        st('titanium_tank'),
        8,
        200,
        [
            { amount: 8, item: mi('titanium_plate') },
            { amount: 1, item: kj('borosilicate_glass') },
        ],
        [{ amount: 1, item: mi('titanium_tank') }]
    );

    // -- TUNGSTENSTEEL TANK -- //
    assembler(
        event,
        st('tungstensteel_tank'),
        8,
        200,
        [
            { amount: 8, item: mi('tungstensteel_plate') },
            { amount: 1, item: kj('borosilicate_glass') },
        ],
        [{ amount: 1, item: mi('tungstensteel_tank') }]
    );

    // -- LENS MOLD -- //
    assembler(
        event,
        st('lens_mold'),
        32,
        200,
        [{ amount: 4, item: mi('stainless_steel_plate') }],
        [{ amount: 1, item: kj('lens_mold') }],
        [{ amount: 100, fluid: mi('polytetrafluoroethylene') }]
    );

    // -- PERSONAL SPACE SHIELD -- //
    assembler(
        event,
        st('personal_space_shield'),
        32,
        1200,
        [
            { amount: 4, item: mi('tungstensteel_tank') },
            { amount: 8, item: mi('processing_unit') },
            { amount: 12, item: mi('superconductor_cable') },
            { amount: 8, item: mi('small_heat_exchanger') },
            { amount: 2, item: mi('uranium_fuel_rod') },
            { amount: 16, item: mi('nuclear_alloy_plate') },
        ],
        [{ amount: 1, item: kj('personal_space_shield') }],
        [
            { amount: 16000, fluid: mi('oxygen') },
            { amount: 4000, fluid: mi('cryofluid') },
        ]
    );

    // -- PISTON -- //
    assembler(
        event,
        st('piston'),
        8,
        200,
        [
            { amount: 4, tag: 'c:stones' },
            { amount: 3, tag: mc('wooden_slabs') },
            { amount: 1, tag: 'c:rods/iron' },
            { amount: 1, item: mc('redstone') },
        ],
        [{ amount: 1, item: mc('piston') }]
    );

    // -- STICKY PISTON -- //
    assembler(
        event,
        st('sticky_piston'),
        8,
        20,
        [
            { amount: 1, item: mc('piston') },
            { amount: 1, item: mc('slime_ball') },
        ],
        [{ amount: 1, item: mc('sticky_piston') }]
    );

    // -- STICKY PISTON ALT -- //
    assembler(
        event,
        st('sticky_piston_alt'),
        8,
        20,
        [{ amount: 1, item: mc('piston') }],
        [{ amount: 1, item: mc('sticky_piston') }],
        [{ amount: 10, fluid: mi('acrylic_glue') }]
    );

    // -- ANNIHILATION CORE -- //
    assembler(
        event,
        st('annihilation_core'),
        8,
        200,
        [
            { amount: 1, item: mc('quartz') },
            { amount: 1, item: ae('fluix_dust') },
            { amount: 1, item: ae('logic_processor') },
        ],
        [{ amount: 2, item: ae('annihilation_core') }]
    );

    // -- FORMATION CORE -- //
    assembler(
        event,
        st('formation_core'),
        8,
        200,
        [
            { amount: 1, tag: ae('all_certus_quartz') },
            { amount: 1, item: ae('fluix_dust') },
            { amount: 1, item: ae('logic_processor') },
        ],
        [{ amount: 2, item: ae('formation_core') }]
    );

    // -- ME STORAGE BUS -- //
    assembler(
        event,
        st('storage_bus'),
        8,
        200,
        [
            { amount: 1, item: mc('sticky_piston') },
            { amount: 1, tag: ae('interface') },
            { amount: 1, item: mc('piston') },
        ],
        [{ amount: 1, item: ae('storage_bus') }]
    );

    // -- ME IMPORT BUS -- //
    assembler(
        event,
        st('import_bus'),
        8,
        200,
        [
            { amount: 2, item: mi('steel_plate') },
            { amount: 1, item: mc('sticky_piston') },
            { amount: 1, item: ae('annihilation_core') },
        ],
        [{ amount: 1, item: ae('import_bus') }]
    );

    // -- ME EXPORT BUS -- //
    assembler(
        event,
        st('export_bus'),
        8,
        200,
        [
            { amount: 2, item: mi('steel_plate') },
            { amount: 1, item: mc('piston') },
            { amount: 1, item: ae('formation_core') },
        ],
        [{ amount: 1, item: ae('export_bus') }]
    );

    // -- CONCURRENT PROCESSOR -- //
    assembler(
        event,
        st('concurrent_processor'),
        16,
        200,
        [
            { amount: 1, item: ea('concurrent_processor_print') },
            { amount: 1, item: ae('printed_silicon') },
        ],
        [{ amount: 1, item: ea('concurrent_processor') }],
        [{ amount: 90, fluid: mi('molten_redstone') }]
    );

    // -- ACCUMULATION PROCESSOR -- //
    assembler(
        event,
        st('accumulation_processor'),
        16,
        200,
        [
            { amount: 1, item: mg('printed_accumulation_processor') },
            { amount: 1, item: ae('printed_silicon') },
        ],
        [{ amount: 1, item: mg('accumulation_processor') }],
        [{ amount: 90, fluid: mi('molten_redstone') }]
    );

    // -- QUARTZ FIBER -- //
    assembler(
        event,
        st('quartz_fiber'),
        8,
        200,
        [
            { amount: 6, tag: 'c:glass_blocks' },
            { amount: 3, item: ae('certus_quartz_dust') },
        ],
        [{ amount: 3, item: ae('quartz_fiber') }]
    );

    // -- END CRYSTAL -- //
    assembler(
        event,
        st('end_crystal'),
        16,
        200,
        [
            { amount: 7, item: mc('glass') },
            { amount: 1, item: mc('ender_eye') },
            { amount: 1, item: mc('ghast_tear') },
        ],
        [{ amount: 1, item: mc('end_crystal') }]
    );

    // -- BETTER COVERED CABLE -- //
    assembler(
        event,
        st('covered_cable'),
        8,
        200,
        [
            { amount: 4, item: ae('fluix_glass_cable') },
            { amount: 1, tag: 'c:wools' },
        ],
        [{ amount: 4, item: ae('fluix_covered_cable') }],
        [{ amount: 500, fluid: mi('synthetic_rubber') }]
    );

    // -- LV TO MV TRANSFORMER -- //
    assembler(
        event,
        st('lv_mv_transformer'),
        8,
        200,
        [{ amount: 1, item: mi('lv_mv_transformer') }],
        [
            { amount: 1, item: mi('basic_machine_hull') },
            { amount: 4, item: mi('tin_cable') },
            { amount: 1, item: mi('electrum_cable') },
        ]
    );

    // -- MV TO LV TRANSFORMER -- //
    assembler(
        event,
        st('mv_lv_transformer'),
        8,
        200,
        [{ amount: 1, item: mi('mv_lv_transformer') }],
        [
            { amount: 1, item: mi('basic_machine_hull') },
            { amount: 4, item: mi('tin_cable') },
            { amount: 1, item: mi('electrum_cable') },
        ]
    );

    // -- MV TO HV TRANSFORMER -- //
    assembler(
        event,
        st('mv_hv_transformer'),
        8,
        200,
        [{ amount: 1, item: mi('mv_hv_transformer') }],
        [
            { amount: 1, item: mi('advanced_machine_hull') },
            { amount: 4, item: mi('electrum_cable') },
            { amount: 1, item: mi('aluminum_cable') },
        ]
    );

    // -- HV TO MV TRANSFORMER -- //
    assembler(
        event,
        st('hv_mv_transformer'),
        8,
        200,
        [{ amount: 1, item: mi('hv_mv_transformer') }],
        [
            { amount: 1, item: mi('advanced_machine_hull') },
            { amount: 4, item: mi('electrum_cable') },
            { amount: 1, item: mi('aluminum_cable') },
        ]
    );

    // -- HV TO EV TRANSFORMER -- //
    assembler(
        event,
        st('hv_ev_transformer'),
        8,
        200,
        [{ amount: 1, item: mi('hv_ev_transformer') }],
        [
            { amount: 1, item: mi('turbo_machine_hull') },
            { amount: 4, item: mi('aluminum_cable') },
            { amount: 1, item: mi('annealed_copper_cable') },
        ]
    );

    // -- EV TO HV TRANSFORMER -- //
    assembler(
        event,
        st('ev_hv_transformer'),
        8,
        200,
        [{ amount: 1, item: mi('ev_hv_transformer') }],
        [
            { amount: 1, item: mi('turbo_machine_hull') },
            { amount: 4, item: mi('aluminum_cable') },
            { amount: 1, item: mi('annealed_copper_cable') },
        ]
    );

    // -- EV TO SUPERCONDUCTOR TRANSFORMER -- //
    assembler(
        event,
        st('ev_superconductor_transformer'),
        8,
        200,
        [{ amount: 1, item: mi('ev_superconductor_transformer') }],
        [
            { amount: 1, item: mi('highly_advanced_machine_hull') },
            { amount: 4, item: mi('annealed_copper_cable') },
            { amount: 1, item: mi('superconductor_cable') },
        ]
    );

    // -- SUPERCONDUCTOR TO EV TRANSFORMER -- //
    assembler(
        event,
        st('superconductor_ev_transformer'),
        8,
        200,
        [{ amount: 1, item: mi('superconductor_ev_transformer') }],
        [
            { amount: 1, item: mi('highly_advanced_machine_hull') },
            { amount: 4, item: mi('annealed_copper_cable') },
            { amount: 1, item: mi('superconductor_cable') },
        ]
    );

    // -- BLOOD GENERATOR -- //
    assembler(
        event,
        st('blood_generator'),
        8,
        200,
        [
            { amount: 2, item: mi('advanced_pump') },
            { amount: 2, item: mi('digital_circuit') },
            { amount: 2, item: mi('hv_steam_turbine') },
            { amount: 2, item: mi('stainless_steel_rotor') },
            { amount: 1, item: mi('turbo_machine_hull') },
        ],
        [{ amount: 1, item: mi('blood_generator') }]
    );

    // -- MACHINE EXTENDER -- //
    assembler(
        event,
        st('machine_extender'),
        8,
        200,
        [
            { amount: 7, item: mc('iron_bars') },
            { amount: 1, item: md('item_pipe') },
            { amount: 1, item: md('fluid_pipe') },
        ],
        [{ amount: 4, item: md('machine_extender') }]
    );

    // -- ATTRACTOR -- //
    assembler(
        event,
        st('attractor'),
        8,
        200,
        [
            { amount: 2, item: mc('iron_ingot') },
            { amount: 1, item: mc('redstone') },
            { amount: 1, item: mc('ender_pearl') },
            { amount: 1, item: mc('paper') },
        ],
        [{ amount: 1, item: md('attractor') }]
    );

    // -- EXTRACTOR -- //
    assembler(
        event,
        st('extractor'),
        8,
        200,
        [
            { amount: 2, item: mc('iron_ingot') },
            { amount: 1, item: mc('redstone') },
            { amount: 1, item: mc('hopper') },
            { amount: 1, item: mc('paper') },
        ],
        [{ amount: 1, item: md('extractor') }]
    );

    // -- FILTER -- //
    assembler(
        event,
        st('filter'),
        8,
        200,
        [
            { amount: 2, item: mc('iron_ingot') },
            { amount: 1, item: mc('redstone') },
            { amount: 1, item: mc('lapis_lazuli') },
            { amount: 1, item: mc('paper') },
        ],
        [{ amount: 1, item: md('filter') }]
    );

    // -- INHIBITOR -- //
    assembler(
        event,
        st('inhibitor'),
        8,
        200,
        [
            { amount: 2, item: mc('iron_ingot') },
            { amount: 1, item: mc('iron_nugget') },
        ],
        [{ amount: 4, item: md('inhibitor') }]
    );

    // -- MISSING TEXTURE COOKIE -- //
    assembler(
        event,
        st('missing_texture_cookie'),
        8,
        200,
        [
            { amount: 1, item: mi('plutonium_dust') },
            { amount: 1, item: mc('cocoa_beans') },
        ],
        [{ amount: 3, item: kj('missing_texture_cookie') }],
        [{ amount: 100, fluid: mi('crude_oil') }]
    );

    // -- BOSS CRUSHER -- //
    assembler(
        event,
        st('boss_crusher'),
        8,
        200,
        [
            { amount: 2, item: mi('invar_rotary_blade') },
            { amount: 2, item: mi('piston') },
            { amount: 2, item: mi('large_pump') },
            { amount: 2, item: kj('withered_soc') },
            { amount: 1, item: mi('turbo_machine_hull') },
        ],
        [{ amount: 1, item: mi('boss_crusher') }]
    );

    // -- PTFE MACHINE CASING -- //
    assembler(
        event,
        st('ptfe_machine_casing'),
        8,
        200,
        [
            { amount: 8, item: mi('polytetrafluoroethylene_plate') },
            { amount: 1, item: mi('polytetrafluoroethylene_gear') },
        ],
        [{ amount: 1, item: mi('chemically_inert_ptfe_casing') }]
    );

    // -- PTFE PIPE CASING -- //
    assembler(
        event,
        st('ptfe_machine_casing_pipe'),
        8,
        200,
        [
            { amount: 1, item: mi('chemically_inert_ptfe_casing') },
            { amount: 6, item: mi('polytetrafluoroethylene_curved_plate') },
        ],
        [{ amount: 2, item: mi('polytetrafluoroethylene_machine_casing_pipe') }]
    );

    // -- TUNGSTENSTEEL MACHINE CASING -- //
    assembler(
        event,
        st('tungstensteel_machine_casing'),
        8,
        200,
        [
            { amount: 8, item: mi('tungstensteel_plate') },
            { amount: 1, item: mi('tungstensteel_gear') },
        ],
        [{ amount: 1, item: mi('tungstensteel_machine_casing') }]
    );

    // -- TUNGSTENSTEEL PIPE CASING -- //
    assembler(
        event,
        st('tungstensteel_machine_casing_pipe'),
        8,
        200,
        [
            { amount: 1, item: mi('tungstensteel_machine_casing') },
            { amount: 6, item: mi('tungstensteel_curved_plate') },
        ],
        [{ amount: 2, item: mi('tungstensteel_machine_casing_pipe') }]
    );

    // -- LASER ENGRAVER -- //
    assembler(
        event,
        st('laser_engraver'),
        8,
        200,
        [
            { amount: 3, item: mi('copper_wire') },
            { amount: 2, item: mi('analog_circuit') },
            { amount: 2, item: mi('motor') },
            { amount: 1, tag: 'c:glass_blocks' },
            { amount: 1, item: mi('basic_machine_hull') },
        ],
        [{ amount: 1, item: mi('laser_engraver') }]
    );

    // -- PHOTOSYNTHETIC CHAMBER -- //
    assembler(
        event,
        st('photosynthetic_chamber'),
        8,
        200,
        [
            { amount: 2, item: mi('inductor') },
            { amount: 2, item: mi('motor') },
            { amount: 1, item: mi('pump') },
            { amount: 1, item: mi('steel_tank') },
            { amount: 1, item: mc('dirt') },
            { amount: 1, tag: 'c:glass_blocks' },
            { amount: 1, item: mi('basic_machine_hull') },
        ],
        [{ amount: 1, item: mi('photosynthetic_chamber') }]
    );

    // -- ROCKET PART ASSEMBLER -- //
    assembler(
        event,
        st('rocket_part_assembler'),
        8,
        200,
        [
            { amount: 2, item: mi('robot_arm') },
            { amount: 2, tag: 'c:gears/stainless_steel' },
            { amount: 2, item: mi('digital_circuit') },
            { amount: 1, item: mi('advanced_motor') },
            { amount: 1, item: mi('advanced_pump') },
            { amount: 1, item: mi('basic_machine_hull') },
        ],
        [{ amount: 1, item: mi('rocket_part_assembler') }]
    );

    // -- CORE MINING DRILL -- //
    assembler(
        event,
        st('core_mining_drill'),
        8,
        200,
        [
            { amount: 3, item: mi('clean_stainless_steel_machine_casing') },
            { amount: 2, item: mi('quantum_circuit') },
            { amount: 2, item: mi('large_advanced_motor') },
            { amount: 1, item: mi('quantum_machine_hull') },
            { amount: 1, item: mi('desh_drill_head') },
        ],
        [{ amount: 1, item: mi('core_drill') }]
    );

    // -- INDUSTRIAL GREENHOUSE -- //
    assembler(
        event,
        st('industrial_greenhouse'),
        8,
        200,
        [
            { amount: 2, item: mi('motor') },
            { amount: 2, item: mi('analog_circuit') },
            { amount: 2, item: mi('pump') },
            { amount: 2, item: mi('tin_rotor') },
            { amount: 1, item: mi('basic_machine_hull') },
        ],
        [{ amount: 1, item: mi('greenhouse') }]
    );

    // -- MOB CRUSHER -- //
    assembler(
        event,
        st('mob_crusher'),
        8,
        200,
        [
            { amount: 2, item: mi('invar_rotary_blade') },
            { amount: 2, item: mi('piston') },
            { amount: 2, item: mi('large_pump') },
            { amount: 2, item: mi('electronic_circuit') },
            { amount: 1, item: mi('steel_machine_casing') },
        ],
        [{ amount: 1, item: mi('mob_crusher') }]
    );

    // -- QUASI QUANTUM SINGULARITY FORGE -- //
    assembler(
        event,
        st('singularity_forge'),
        8,
        200,
        [
            { amount: 6, item: mi('plasma_handling_iridium_machine_casing') },
            { amount: 2, item: mi('quantum_circuit') },
            { amount: 1, item: mi('quantum_machine_hull') },
        ],
        [{ amount: 1, item: mi('singularity_forge') }]
    );

    // -- SPACE PROBE LAUNCHER -- //
    assembler(
        event,
        st('space_probe_launcher'),
        8,
        200,
        [
            { amount: 2, item: mi('stainless_steel_gear') },
            { amount: 2, item: mi('advanced_motor') },
            { amount: 2, item: mi('stainless_steel_machine_casing_pipe') },
            { amount: 1, item: mi('digital_circuit') },
            { amount: 1, item: mi('clean_stainless_steel_machine_casing') },
            { amount: 1, item: mi('turbo_machine_hull') },
        ],
        [{ amount: 1, item: mi('space_probe_launcher') }]
    );

    // -- QUANTUM SPACE PROBE LAUNCHER -- //
    assembler(
        event,
        st('quantum_space_probe_launcher'),
        8,
        200,
        [
            { amount: 2, item: mi('calorite_gear') },
            { amount: 2, item: mi('large_advanced_motor') },
            { amount: 2, item: mi('calorite_machine_casing_pipe') },
            { amount: 1, item: mi('processing_unit') },
            { amount: 1, item: mi('calorite_machine_casing') },
            { amount: 1, item: mi('highly_advanced_machine_hull') },
        ],
        [{ amount: 1, item: mi('quantum_space_probe_launcher') }]
    );

    // -- UNCOOKED PIZZA -- //
    assembler(
        event,
        st('uncooked_pizza'),
        8,
        200,
        [
            { amount: 1, item: kj('pizza_dough') },
            { amount: 1, item: fd('tomato_sauce') },
            { amount: 1, item: fd('onion') },
            { amount: 1, tag: 'c:mushrooms' },
            { amount: 1, tag: bc('foods/cheese_wedge') },
            { amount: 1, item: fd('minced_beef') },
        ],
        [{ amount: 1, item: kj('uncooked_pizza') }]
    );

    // -- OP AMP -- //
    assembler(
        event,
        st('op_amp'),
        8,
        200,
        [
            { amount: 4, item: mi('resistor') },
            { amount: 4, item: mi('transistor') },
            { amount: 1, item: mi('diode') },
        ],
        [{ amount: 1, item: mi('op_amp') }],
        [{ amount: 50, fluid: mi('polytetrafluoroethylene') }]
    );

    // -- BASIC CARD -- //
    assembler(
        event,
        st('basic_card'),
        8,
        200,
        [
            { amount: 3, tag: 'c:plates/steel' },
            { amount: 2, tag: 'c:ingots/gold' },
            { amount: 1, item: ae('calculation_processor') },
        ],
        [{ amount: 2, item: ae('basic_card') }],
        [{ amount: 90, fluid: mi('molten_redstone') }]
    );

    // -- ADVANCED CARD -- //
    assembler(
        event,
        st('advanced_card'),
        8,
        200,
        [
            { amount: 3, tag: 'c:plates/steel' },
            { amount: 2, tag: 'c:gems/diamond' },
            { amount: 1, item: ae('calculation_processor') },
        ],
        [{ amount: 2, item: ae('advanced_card') }],
        [{ amount: 90, fluid: mi('molten_redstone') }]
    );

    // -- WITHERED SOC -- //
    assembler(
        event,
        st('withered_soc'),
        32,
        1200,
        [
            { amount: 3, item: mc('wither_skeleton_skull') },
            { amount: 4, item: mc('soul_sand') },
            { amount: 2, item: mi('arithmetic_logic_unit') },
            { amount: 4, item: mi('electronic_circuit') },
            { amount: 1, item: mi('processing_unit_board') },
            { amount: 4, item: mi('industrial_tnt') },
        ],
        [{ amount: 1, item: kj('withered_soc') }],
        [{ amount: 100, fluid: mi('polytetrafluoroethylene') }]
    );

    // -- BRONZE BOILER -- //
    assembler(
        event,
        st('bronze_boiler'),
        8,
        200,
        [
            { amount: 4, tag: 'c:plates/bronze' },
            { amount: 1, item: mi('bronze_tank') },
            { amount: 1, item: mi('bronze_machine_casing') },
            { amount: 3, item: mi('fire_clay_bricks') },
        ],
        [{ amount: 1, item: mi('bronze_boiler') }]
    );

    // -- BRONZE FURNACE -- /
    assembler(
        event,
        st('bronze_furnace'),
        8,
        200,
        [
            { amount: 7, tag: 'c:plates/bronze' },
            { amount: 1, item: mi('bronze_machine_casing') },
            { amount: 1, item: mc('furnace') },
        ],
        [{ amount: 1, item: mi('bronze_furnace') }]
    );

    // -- SPACE PROBE -- //
    assembler(
        event,
        st('space_probe'),
        32,
        200,
        [
            { amount: 2, item: kj('rocket_fin') },
            { amount: 2, item: mi('enderium_gear') },
            { amount: 1, item: mi('desh_drill') },
            { amount: 1, item: kj('calorite_fuel_tank') },
            { amount: 1, item: mi('processing_unit') },
            { amount: 1, item: kj('calorite_engine') },
            { amount: 1, item: mi('titanium_tank') },
            { amount: 1, item: mi('titanium_tank') },
        ],
        [{ amount: 4, item: kj('space_probe') }]
    );

    // -- ZINC DRILL -- //
    assembler(
        event,
        st('zinc_drill'),
        8,
        200,
        [
            { amount: 1, item: mi('zinc_drill_head') },
            { amount: 2, item: mi('iron_gear') },
            { amount: 1, item: 'create:electron_tube' },
            { amount: 1, tag: 'c:plates/bronze' },
        ],
        [{ amount: 4, item: mi('zinc_drill') }]
    );

    // -- DESH DRILL -- //
    assembler(
        event,
        st('desh_drill'),
        16,
        200,
        [
            { amount: 1, item: mi('desh_drill_head') },
            { amount: 2, tag: 'modern_industrialization:item_pipes' },
            { amount: 2, item: mi('enderium_gear') },
            { amount: 2, item: mi('large_advanced_motor') },
            { amount: 1, item: mi('processing_unit') },
            { amount: 1, item: mi('annealed_copper_wire') },
        ],
        [{ amount: 4, item: mi('desh_drill') }]
    );

    // -- QBIT -- //
    assembler(
        event,
        st('qubit'),
        20,
        200,
        [
            { amount: 2, item: mi('arithmetic_logic_unit') },
            { amount: 2, tag: 'c:plates/carbon' },
            { amount: 2, item: mi('tungstensteel_plate') },
            { amount: 6, item: mi('superconductor_wire') },
        ],
        [{ amount: 1, item: mi('qubit') }],
        [
            { amount: 250, fluid: mi('cryofluid') },
            { amount: 50, fluid: mi('tritium') },
        ]
    );

    // -- CALORITE MACHINE CASING -- //
    assembler(
        event,
        st('calorite_machine_casing'),
        16,
        200,
        [
            { amount: 8, item: mi('calorite_plate') },
            { amount: 1, item: mi('calorite_gear') },
        ],
        [{ amount: 1, item: mi('calorite_machine_casing') }]
    );

    // -- CALORITE MACHINE PIPE CASING -- //
    assembler(
        event,
        st('calorite_machine_casing_pipe'),
        16,
        200,
        [
            { amount: 1, item: mi('calorite_machine_casing') },
            { amount: 6, item: mi('calorite_curved_plate') },
        ],
        [{ amount: 2, item: mi('calorite_machine_casing_pipe') }]
    );

    // -- DESH MACHINE CASING -- //
    assembler(
        event,
        st('desh_machine_casing'),
        16,
        200,
        [
            { amount: 8, item: mi('desh_plate') },
            { amount: 1, item: mi('desh_gear') },
        ],
        [{ amount: 1, item: mi('desh_machine_casing') }]
    );

    // -- DESH MACHINE PIPE CASING -- //
    assembler(
        event,
        st('desh_machine_casing_pipe'),
        16,
        200,
        [
            { amount: 1, item: mi('desh_machine_casing') },
            { amount: 6, item: mi('desh_curved_plate') },
        ],
        [{ amount: 2, item: mi('desh_machine_casing_pipe') }]
    );

    // -- ENDERIUM MACHINE CASING -- //
    assembler(
        event,
        st('enderium_machine_casing'),
        16,
        200,
        [
            { amount: 8, item: mi('enderium_plate') },
            { amount: 1, item: mi('enderium_gear') },
        ],
        [{ amount: 1, item: mi('enderium_machine_casing') }]
    );

    // -- OSTRUM MACHINE CASING -- //
    assembler(
        event,
        st('ostrum_machine_casing'),
        16,
        200,
        [
            { amount: 8, item: mi('ostrum_plate') },
            { amount: 1, item: mi('ostrum_gear') },
        ],
        [{ amount: 1, item: mi('ostrum_machine_casing') }]
    );

    // -- OSTRUM MACHINE PIPE CASING -- //
    assembler(
        event,
        st('ostrum_machine_casing_pipe'),
        16,
        200,
        [
            { amount: 1, item: mi('ostrum_machine_casing') },
            { amount: 6, item: mi('ostrum_curved_plate') },
        ],
        [{ amount: 2, item: mi('ostrum_machine_casing_pipe') }]
    );

    // -- REDSTONE REPEATER -- //
    assembler(
        event,
        st('repeater'),
        8,
        100,
        [{ amount: 3, tag: 'c:stones' }],
        [{ amount: 1, item: mc('repeater') }],
        [{ amount: 180, fluid: mi('molten_redstone') }]
    );

    // -- REDSTONE COMPARATOR -- //
    assembler(
        event,
        st('comparator'),
        8,
        100,
        [
            { amount: 1, item: mc('quartz') },
            { amount: 3, tag: 'c:stones' },
        ],
        [{ amount: 1, item: mc('comparator') }],
        [{ amount: 180, fluid: mi('molten_redstone') }]
    );

    // -- REDSTONE TORCH -- //
    assembler(
        event,
        st('redstone_torch'),
        8,
        100,
        [{ amount: 1, tag: 'c:rods/wooden' }],
        [{ amount: 1, item: mc('redstone_torch') }],
        [{ amount: 45, fluid: mi('molten_redstone') }]
    );

    // -- FACTORY BLOCK -- //
    assembler(
        event,
        st('factory_block'),
        8,
        100,
        [
            { amount: 4, item: mc('iron_ingot') },
            { amount: 4, item: mc('stone') },
        ],
        [{ amount: 32, item: 'factory_blocks:factory' }]
    );

    // -- IRON BARS -- //
    assembler(
        event,
        st('iron_bars'),
        8,
        100,
        [{ amount: 6, item: mi('iron_rod') }],
        [{ amount: 16, item: mc('iron_bars') }]
    );

    // -- LARGE STEAM TURBINE -- //
    assembler(
        event,
        st('large_steam_turbine'),
        8,
        200,
        [
            { amount: 1, item: mi('highly_advanced_machine_hull') },
            { amount: 4, item: mi('hv_steam_turbine') },
            { amount: 2, item: mi('large_advanced_pump') },
            { amount: 2, item: mi('stainless_steel_rotor') },
        ],
        [{ amount: 1, item: mi('large_steam_turbine') }]
    );

    // -- LARGE DIESEL GENERATOR -- //
    assembler(
        event,
        st('large_diesel_generator'),
        8,
        200,
        [
            { amount: 1, item: mi('turbo_machine_hull') },
            { amount: 4, item: mi('hv_diesel_generator') },
            { amount: 2, item: mi('advanced_motor') },
            { amount: 2, item: mi('titanium_gear') },
        ],
        [{ amount: 1, item: mi('large_diesel_generator') }]
    );

    // --------------------- //
    // -- ENDGAME RECIPES -- //
    // --------------------- //

    // -- CREATIVE STORAGE UNIT -- //
    assembler(
        event,
        st('creative_storage_unit'),
        32000,
        2400,
        [
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 1, item: mi('superconductor_storage_unit') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
        ],
        [{ amount: 1, item: mi('creative_storage_unit') }],
        [
            { amount: 8000, fluid: mi('uu_matter') },
            { amount: 8000, fluid: mi('neutronium') },
        ]
    );

    // -- CREATIVE BARREL -- //
    assembler(
        event,
        st('creative_barrel'),
        32000,
        2400,
        [
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 1, item: mi('quantum_barrel') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
        ],
        [{ amount: 1, item: mi('creative_barrel') }],
        [
            { amount: 8000, fluid: mi('uu_matter') },
            { amount: 8000, fluid: mi('neutronium') },
        ]
    );

    // -- CREATIVE TANK -- //
    assembler(
        event,
        st('creative_tank'),
        32000,
        2400,
        [
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 1, item: mi('quantum_tank') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
        ],
        [{ amount: 1, item: mi('creative_tank') }],
        [
            { amount: 8000, fluid: mi('uu_matter') },
            { amount: 8000, fluid: mi('neutronium') },
        ]
    );

    // -- CREATIVE MOTOR -- //
    assembler(
        event,
        st('creative_motor'),
        32000,
        2400,
        [
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 1, item: mi('plasma_turbine') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
        ],
        [{ amount: 1, item: 'create:creative_motor' }],
        [
            { amount: 8000, fluid: mi('uu_matter') },
            { amount: 8000, fluid: mi('neutronium') },
        ]
    );

    // -- CREATIVE WORLDSHAPER -- //
    assembler(
        event,
        st('handheld_worldshaper'),
        32000,
        2400,
        [
            { amount: 1, item: mi('quantum_helmet') },
            { amount: 1, item: mi('creative_tank') },
            { amount: 1, item: mi('quantum_chestplate') },
            { amount: 1, item: mi('creative_storage_unit') },
            { amount: 1, item: mi('quantum_sword') },
            { amount: 1, item: 'create:creative_motor' },
            { amount: 1, item: mi('quantum_leggings') },
            { amount: 1, item: mi('creative_barrel') },
            { amount: 1, item: mi('quantum_boots') },
        ],
        [{ amount: 1, item: 'create:handheld_worldshaper' }],
        [
            { amount: 16000, fluid: mi('uu_matter') },
            { amount: 16000, fluid: mi('neutronium') },
        ]
    );

    // --------------- //
    // -- SPACE AGE -- //
    // --------------- //

    // -- TIERED SPACE PROBE -- //
    assembler(
        event,
        st('basic_space_probe'),
        8,
        200,
        [
            { amount: 2, tag: 'c:gears/steel' },
            { amount: 2, item: mi('electrum_cable') },
            { amount: 1, item: kj('steel_fuel_tank') },
            { amount: 2, item: kj('rocket_fin') },
            { amount: 1, item: mi('aluminum_drill') },
            { amount: 1, tag: 'modern_industrialization:item_pipes' },
        ],
        [{ amount: 4, item: kj('basic_space_probe') }]
    );

    assembler(
        event,
        st('advanced_space_probe'),
        8,
        200,
        [
            { amount: 2, tag: 'c:gears/desh' },
            { amount: 2, item: mi('aluminum_cable') },
            { amount: 1, item: kj('desh_fuel_tank') },
            { amount: 2, item: kj('rocket_fin') },
            { amount: 1, item: mi('stainless_steel_drill') },
            { amount: 1, tag: 'modern_industrialization:item_pipes' },
        ],
        [{ amount: 4, item: kj('advanced_space_probe') }]
    );

    assembler(
        event,
        st('highly_advanced_space_probe'),
        8,
        200,
        [
            { amount: 2, tag: 'c:gears/ostrum' },
            { amount: 2, item: mi('annealed_copper_cable') },
            { amount: 1, item: kj('ostrum_fuel_tank') },
            { amount: 2, item: kj('rocket_fin') },
            { amount: 1, item: mi('titanium_drill') },
            { amount: 1, tag: 'modern_industrialization:item_pipes' },
        ],
        [{ amount: 4, item: kj('highly_advanced_space_probe') }]
    );

    // ------------------- //
    // -- CREATE COMPAT -- //
    // ------------------- //

    // -- ELECTRON TUBE -- //
    assembler(
        event,
        st('electron_tube'),
        8,
        100,
        [
            { amount: 1, item: mi('iron_plate') },
            { amount: 1, item: cr('polished_rose_quartz') },
        ],
        [{ amount: 1, item: cr('electron_tube') }]
    );

    // ------------------- //
    // -- XTONES COMPAT -- //
    // ------------------- //

    const baseXtonesMaterials = [
        ['agon', 'stone_slab', '0'],
        ['azur', 'blue_dye', '0'],
        ['bitt', 'coal', '0'],
        ['cray', 'clay', '0'],
        ['fort', 'brick', '0'],
        ['glaxx', 'glass', '0'],
        ['iszm', 'stone', '0'],
        ['jelt', 'orange_dye', '0'],
        ['korp', 'gravel', '0'],
        ['kryp', 'dirt', '0'],
        ['lair', 'netherrack', '0'],
        ['lave', 'blue_dye', '0'],
        ['mint', 'lime_dye', '0'],
        ['myst', 'snow', '0'],
        ['reds', 'red_dye', '0'],
        ['reed', 'sugar_cane', '0'],
        ['roen', 'sand', '0'],
        ['sols', 'yellow_dye', '0'],
        ['sync', 'green_dye', '0'],
        ['tank', 'gray_dye', '0'],
        ['vect', 'black_dye', '0'],
        ['vena', 'cobbled_deepslate', '0'],
        ['zane', 'clay_ball', '15'],
        ['zech', 'iron_ingot', '15'],
        ['zest', 'snowball', '15'],
        ['zeta', 'string', '15'],
        ['zion', 'torch', '15'],
        ['zkul', 'bone', '15'],
        ['zoea', 'andesite', '15'],
        ['zome', 'cobblestone', '15'],
        ['zone', 'smooth_stone_slab', '15'],
        ['zorg', 'terracotta', '15'],
        ['ztyl', 'light_gray_dye', '0'],
        ['zyth', 'stick', '15'],
    ];

    baseXtonesMaterials.forEach((material) => {
        assembler(
            event,
            st(`${material[0]}_in_assembler`),
            2,
            100,
            [
                { amount: 8, item: xt('xtone_tile') },
                { amount: 1, item: mc(`${material[1]}`) },
            ],
            [{ amount: 8, item: xt(`${material[0]}_block_${material[2]}`) }]
        );
    });

    assembler(
        event,
        st('xtone_tile_in_assembler'),
        2,
        100,
        [
            { amount: 6, item: mc('stone_slab') },
            { amount: 1, item: mc('stone') },
        ],
        [{ amount: 8, item: xt('xtone_tile') }]
    );

    // This code sucks, look away
    const xtoneRecipes = event.findRecipes({
        mod: 'xtonesreworked',
        input: '#c:dyes',
    });
    xtoneRecipes.forEach((recipe) => {
        let recipeJson = recipe.json;
        let recipeId = recipeJson.get('result').get('id').toString();
        let inputs = recipeJson.get('key');

        // Dye is either multiple keys. This is janky as shit and WILL break if
        // the dev decides to use a different character as a key for the dye
        let dye;
        if (inputs.get('C')) {
            dye = inputs.get('C');
        } else if (inputs.get('D')) {
            dye = inputs.get('D');
        } else if (inputs.get('S')) {
            dye = inputs.get('S');
        } else if (inputs.get('G')) {
            dye = inputs.get('G');
        } else {
            console.log('Did not match: ' + inputs);
        }
        dye = dye.toString();
        let dyeColor = dye.substring(
            dye.lastIndexOf('/') + 1,
            dye.lastIndexOf('"')
        );

        let blockName = recipeId.substring(
            recipeId.indexOf(':') + 1,
            recipeId.lastIndexOf('"')
        );
        let blockType = blockName.substring(0, blockName.indexOf('_'));

        assembler(
            event,
            st(`${blockName}_from_${dyeColor}_dye`),
            2,
            200,
            [
                { amount: 8, tag: xt(blockType) },
                { amount: 1, item: mc(`${dyeColor}_dye`) },
            ],
            [{ amount: 8, item: xt(blockName) }]
        );
    });
});
