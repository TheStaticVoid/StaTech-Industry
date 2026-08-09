// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ItemEvents.modifyTooltips((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let mi = (id) => `modern_industrialization:${id}`;
    let mt = (id) => `mi_tweaks:${id}`;
    let yai = (id) => `yet_another_industrialization:${id}`;
    let kj = (id) => `kubejs:${id}`;

    // -- LIST OF ALL DISABLED MACHINES AND ITEMS -- //
    const DISABLED_MACHINES_AND_ITEMS = [
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

    // -- LIST OF ALL CUSTOM FLUIDS -- //

    const CUSTOM_FLUIDS = [
        mi('stellar_plasma'),
        mi('dragons_blood'),
        mi('impure_resonating_fluid'),
        mi('salt_water'),
        mi('brine'),
        mi('nutrient_rich_water'),
        mi('nutrient_rich_liquid_ender'),
        mi('nutrient_rich_blood'),
        mi('molten_nether_star'),
        mi('impure_liquid_nether_star'),
        mi('lithium'),
        mi('neutronium'),
        mi('blood'),
        mi('concrete'),
        mi('drilling_fluid'),
        mi('core_slurry'),
        mi('wood_tar'),
        mi('polytetrafluoroethylene'),
        mi('tetrafluoroethylene'),
        mi('hydrofluoric_acid'),
        mi('chloroform'),
        mi('fluorine'),
        mi('liquid_ender'),
        mi('molten_enderium'),
        mi('nitric_acid'),
        mi('ammonia'),
        mi('waste_beryl_ammonia_solution'),
        mi('beryllium_sulfate'),
        mi('beryllium_hydroxide'),
        mi('beryllium_chloride'),
        mi('acrylonitrile'),
        mi('acrylonitrile_butadiene_styrene'),
        mi('molten_borosilicate_glass'),
        mi('boron_trifluoride'),
        mi('diborane'),
        mi('pentaborane'),
        mi('molten_gold'),
    ];

    const CUSTOM_MACHINES_AND_ITEMS = [
        mt('bulk_compactor'),
        mt('blast_alloy_smelter'),
        mt('industrial_mixing_machine'),
        mt('large_chemical_reactor'),
        mt('large_scale_assembler'),
        mt('oversized_electrolysis_chamber'),
        mt('grand_mass_centrifuge'),
        mt('multi_cutter'),
        mt('high_capacity_packer'),
        mt('high_capacity_unpacker'),
        mt('colossal_blast_furnace'),
        mt('large_polarization_machine'),
        mt('arrayed_wiremill'),
        mi('laser_engraver'),
        mi('photosynthetic_chamber'),
        mi('rocket_part_assembler'),
        mi('blood_generator'),
        mi('boss_crusher'),
        mi('core_drill'),
        mi('greenhouse'),
        mi('mob_crusher'),
        mi('singularity_forge'),
        mi('space_probe_launcher'),
        mi('quantum_space_probe_launcher'),
        mi('stone_dust'),
        mi('clay_dust'),
        mi('clay_tiny_dust'),
        mi('recycler'),
        /^modern_industrialization:.*(calorite|tungstensteel|desh|moon_ice|ostrum|polytetrafluoroethylene|cobalt|zinc|dark_ashes|calcite|fluorite|acrylonitrile_butadiene_styrene|enderium|entro|sky_bronze|sky_steel|sapphire|peridot|ruby|boron_trioxide|kernite|lithium_hydride|lithium_tetrafluoroborate|lithium_fluoride).*/,
    ];

    // -- ADD TOOLTIP -- //
    const ADDED_BY_STATECH = Text.gold('Added by StaTech Industry');
    CUSTOM_MACHINES_AND_ITEMS.forEach((item) => {
        event.modify(item, (tooltip) => {
            tooltip.removeExactText(ADDED_BY_STATECH);
            tooltip.add([ADDED_BY_STATECH]);
        });
    });
    // Currently seems there is no way to add tooltip to fluids, at least not easily
    CUSTOM_FLUIDS.forEach((fluid) => {
        [`${fluid}_bucket`].forEach((item) => {
            event.modify(item, (tooltip) => {
                tooltip.removeExactText(ADDED_BY_STATECH);
                tooltip.add([ADDED_BY_STATECH]);
            });
        });
    });
    const SHIFTFORMOREDETAIL = Text.gray('Hold Shift for more details');
    const KEYFORMOREDETAIL = [
        '#decorative_blocks:seats',
        '#decorative_blocks:supports',
    ];
    KEYFORMOREDETAIL.forEach((item) => {
        event.modify(item, (tooltip) => {
            tooltip.add([SHIFTFORMOREDETAIL]);
        });
    });

    const CURRENTLY_DISABLED = Text.red('Dev Item [WIP]');
    DISABLED_MACHINES_AND_ITEMS.forEach((item) => {
        event.modify(item, (tooltip) => {
            tooltip.add([CURRENTLY_DISABLED]);
        });
    });
});
