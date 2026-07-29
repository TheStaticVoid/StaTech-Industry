RecipeViewerEvents.removeEntriesCompletely('item', (event) => {
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

    const UNUSED_FD = [
        fd('wheat_dough'),
        ed('salt'),
        ed('salt_ore'),
        ed('deepslate_salt_ore'),
        ed('salt_rock'),
    ];
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

    /*     const UNUSED_MORE_FUNCTIONNAL_STORAGE = [
            mfs('placer_upgrade'),
            mfs('breaker_upgrade'),
            mfs('refill_upgrade'),
            mfs('dimensional_refill_upgrade'),
            mfs('speed_upgrade_augment')
        ]
        UNUSED_MORE_FUNCTIONNAL_STORAGE.forEach(id => event.remove(id)); */

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
