// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

RecipeViewerEvents.removeEntriesCompletely('item', (event) => {
    const VARIOUS_UNOBTAINABLE = [
        'modonomicon:modonomicon_blue',
        'modonomicon:modonomicon_green',
        'modonomicon:modonomicon_purple',
        'modonomicon:leaflet',
        'modonomicon:modonomicon_red',
        'modonomicon:modonomicon',
        'ftbquests:barrier',
        'ftbquests:stage_barrier',
        'ftbquests:detector',
        'moonlight:spawn_box',
        'nomansland:monster_anchor',
    ];
    VARIOUS_UNOBTAINABLE.forEach((id) => event.remove(id));

    const CREATE_CRUSHED = [
        cr('crushed_raw_platinum'),
        cr('crushed_raw_iron'),
        cr('crushed_raw_gold'),
        cr('crushed_raw_copper'),
        cr('crushed_raw_zinc'),
        cr('crushed_raw_tin'),
        cr('crushed_raw_lead'),
        cr('crushed_raw_nickel'),
        cr('crushed_raw_uranium'),
    ];
    CREATE_CRUSHED.forEach((id) => event.remove(id));

    const LIMITED_BARRELS = [
        ss('limited_gold_barrel_1'),
        ss('limited_gold_barrel_2'),
        ss('limited_gold_barrel_3'),
        ss('limited_gold_barrel_4'),
        ss('limited_copper_barrel_1'),
        ss('limited_copper_barrel_2'),
        ss('limited_copper_barrel_3'),
        ss('limited_copper_barrel_4'),
        ss('limited_diamond_barrel_1'),
        ss('limited_diamond_barrel_2'),
        ss('limited_diamond_barrel_3'),
        ss('limited_diamond_barrel_4'),
        ss('limited_netherite_barrel_1'),
        ss('limited_netherite_barrel_2'),
        ss('limited_netherite_barrel_3'),
        ss('limited_netherite_barrel_4'),
        ss('limited_iron_barrel_1'),
        ss('limited_iron_barrel_2'),
        ss('limited_iron_barrel_3'),
        ss('limited_iron_barrel_4'),
        ss('pump_upgrade'),
        ss('stack_upgrade_omega_tier'),
        sb('stack_upgrade_omega_tier'),
        sb('battery_upgrade'),
        sb('pump_upgrade'),
        sb('advanced_pump_upgrade'),
        sb('infinity_upgrade'),
        sb('survival_infinity_upgrade'),
        ss('advanced_pump_upgrade'),
        ss('xp_pump_upgrade'),
        ss('compression_upgrade'),
        ss('infinity_upgrade'),
        ss('survival_infinity_upgrade'),
        ss('debug_tool'),
    ];
    LIMITED_BARRELS.forEach((id) => event.remove(id));

    const FAKE_MATERIALS = [mi('raw_kernite'), mi('raw_kernite_block')];
    FAKE_MATERIALS.forEach((id) => event.remove(id));

    const UNUSED_EI = [
        ei('bronze_bending_machine'),
        ei('steel_bending_machine'),
    ];
    UNUSED_EI.forEach((id) => event.remove(id));

    const UNUSED_MORE_RED = [mr('soldering_table')];
    UNUSED_MORE_RED.forEach((id) => event.remove(id));

    const UNUSED_NML = [nm('pancake')];
    UNUSED_NML.forEach((id) => event.remove(id));

    const UNUSED_FD = [fd('wheat_dough'), bc('pizza'), bc('pizza_slice')];
    UNUSED_FD.forEach((id) => event.remove(id));

    const UNUSED_GAG = [gag('pigment_jar')];
    UNUSED_GAG.forEach((id) => event.remove(id));

    const UNUSED_YAI = [
        yai('arboreous_greenhouse'),
        yai('nutrient_rich_water_bucket'),
    ];
    UNUSED_YAI.forEach((id) => event.remove(id));

    const UNUSED_CREATEADDITION = [
        ca('biomass'),
        ca('biomass_pellet'),
        ca('biomass_pellet_block'),
        ca('seed_oil_bucket'),
        ca('bioethanol_bucket'),
        ca('digital_adapter'),
        ca('gold_wire'),
        ca('iron_wire'),
        ca('electrum_rod'),
        ca('gold_rod'),
        ca('rolling_mill'),
        ca('capacitor'),
    ];
    UNUSED_CREATEADDITION.forEach((id) => event.remove(id));

    const UNUSED_EA = [
        ea('infinity_water_cell'),
        ea('infinity_cobblestone_cell'),
    ];
    UNUSED_EA.forEach((id) => event.remove(id));

    const UNUSED_SUPPLEMENTARIES = [
        /supplementaries:spectrum\/way_sign.*/,
        'supplementaries:architects_palette/way_sign_twisted',
    ];
    UNUSED_SUPPLEMENTARIES.forEach((id) => event.remove(id));

    const UNUSED_SPECTRUM = [
        sp('pedestal_tier_1_structure_placer'),
        sp('pedestal_tier_2_structure_placer'),
        sp('pedestal_tier_3_structure_placer'),
        sp('fusion_shrine_structure_placer'),
        sp('spirit_instiller_structure_placer'),
        sp('enchanter_structure_placer'),
        sp('cinderhearth_structure_placer'),
        sp('deep_light_chiseled_preservation_stone'),
        sp('preservation_item_bowl'),
        sp('preservation_glass'),
        sp('tinted_preservation_glass'),
        sp('preservation_roundel'),
        sp('preservation_block_detector'),
        sp('preservation_controller'),
        sp('black_chiseled_preservation_stone'),
        sp('blue_chiseled_preservation_stone'),
        sp('brown_chiseled_preservation_stone'),
        sp('cyan_chiseled_preservation_stone'),
        sp('gray_chiseled_preservation_stone'),
        sp('green_chiseled_preservation_stone'),
        sp('light_blue_chiseled_preservation_stone'),
        sp('light_gray_chiseled_preservation_stone'),
        sp('preservation_stone'),
        sp('preservation_stairs'),
        sp('preservation_slab'),
        sp('preservation_wall'),
        sp('preservation_bricks'),
        sp('shimmering_preservation_bricks'),
        sp('powder_chiseled_preservation_stone'),
        sp('dike_chiseled_preservation_stone'),
        sp('dream_chiseled_preservation_stone'),
        sp('lime_chiseled_preservation_stone'),
        sp('magenta_chiseled_preservation_stone'),
        sp('orange_chiseled_preservation_stone'),
        sp('pink_chiseled_preservation_stone'),
        sp('purple_chiseled_preservation_stone'),
        sp('red_chiseled_preservation_stone'),
        sp('white_chiseled_preservation_stone'),
        sp('yellow_chiseled_preservation_stone'),
        sp('preservation_chest'),
        sp('dream_gate'),
        sp('dike_gate'),
        sp('dike_gate_fountain'),
        sp('invisible_wall'),
    ];
    UNUSED_SPECTRUM.forEach((id) => event.remove(id));

    const UNUSED_FUNCTIONNAL_STORAGE = [
        fs('armory_cabinet'),
        fs('fluid_1'),
        fs('fluid_2'),
        fs('fluid_4'),
        fs('framed_fluid_1'),
        fs('framed_fluid_2'),
        fs('framed_fluid_4'),
        fs('compacting_drawer'),
        fs('compacting_framed_drawer'),
        fs('simple_compacting_drawer'),
        fs('framed_simple_compacting_drawer'),
    ];
    UNUSED_FUNCTIONNAL_STORAGE.forEach((id) => event.remove(id));

    const UNUSED_MD = [md('wrench')];
    UNUSED_MD.forEach((id) => event.remove(id));

    const UNUSED_DEV = [
        kj('computer_casing'),
        kj('personal_space_shield'),
        kj('lens_mold'),
        kj('short_range_lens'),
        kj('deep_space_lens'),
        kj('unrefined_simple_stellar_data'),
        kj('unrefined_deep_space_stellar_data'),
        kj('planetary_data'),
        kj('star_data'),
        kj('black_hole_data'),
        kj('anomalous_stellar_data'),
        kj('star_location_telemetry'),
        kj('planetary_location_telemetry'),
        kj('black_hole_location_telemetry'),
        kj('anomaly_location_telemetry'),
        kj('research_probe'),
        kj('star_imploder'),
        kj('dark_matter'),
        kj('antimatter_housing'),
        kj('antimatter'),
        kj('contained_antimatter'),
        kj('basic_space_circuit'),
        kj('advanced_space_circuit'),
        kj('anomalous_space_circuit'),
        mi('supercomputer'),
        mi('telescope'),
        /^modern_industrialization:.*(cobalt).*/,
    ];
    UNUSED_DEV.forEach((id) => event.remove(id));

    const UNUSED_ADVANCED_PERIPHERALS = [
        adp('computer_tool'),
        adp('colony_integrator'),
        adp('rs_bridge'),
        adp('gas_detector'),
        /^advancedperipherals:ae_disk_cell_.*/,
    ];
    UNUSED_ADVANCED_PERIPHERALS.forEach((id) => event.remove(id));

    const UNUSED_TACZ = [
        tz('gun_smith_table'),
        tz('workbench_c'),
        tz('workbench_a'),
    ];
    UNUSED_TACZ.forEach((id) => event.remove(id));
});

RecipeViewerEvents.removeEntriesCompletely('fluid', (event) => {
    const UNUSED_FLD = [
        ca('seed_oil'),
        ca('bioethanol'),
        yai('nutrient_rich_water'),
        mi('dragons_blood'), // might want to do something with this in the future
        mi('impure_resonating_fluid'), // might want to do something with this in the future
    ];
    UNUSED_FLD.forEach((id) => event.remove(id));
});

// -- YET ANOTHER INDUSTRIALIZATION REMOVED MULTI -- //

RecipeViewerEvents.removeRecipes((event) => {
    event.remove([
        yai('/arboreous_greenhouse/4/0'),
        yai('/arboreous_greenhouse/4/1'),
        yai('/arboreous_greenhouse/4/2'),
        yai('/arboreous_greenhouse/4/3'),
        yai('/arboreous_greenhouse/4/4'),
        ca('/rolling/'),
    ]);
});

RecipeViewerEvents.removeCategories((event) => {
    event.remove([
        // 'tacz:gun_smith_table/tacz_ammo_workbench',
        // 'tacz:gun_smith_table/tacz_attachment_workbench',
        // 'tacz:gun_smith_table/tacz_gun_smith_workbench',
        'functionalstorage:dissolution',
        'emi:anvil_repairing',
        'emi:grinding',
        'modern_industrialization:supercomputer',
        'modern_industrialization:telescope',
    ]);
});
