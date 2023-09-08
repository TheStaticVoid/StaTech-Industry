ItemEvents.tooltip(e => {
    let mi = (id) => `modern_industrialization:${id}`;

    const CUSTOM_MACHINES = [
        mi('large_steam_macerator'),
        mi('alloy_smelter'),
        mi('laser_engraver'),
        mi('photosynthetic_chamber'),
        mi('rocket_part_assembler'),
        mi('blood_generator'),
        mi('boss_crusher'),
        mi('core_mining_drill'),
        mi('greenhouse'),
        mi('large_chemical_reactor'),
        mi('large_steam_furnace'),
        mi('mega_smelter'),
        mi('mob_crusher'),
        mi('pyrolyse_oven'),
        mi('singularity_forge'),
        mi('space_probe_launcher')
    ];
    e.add(CUSTOM_MACHINES, Text.of('This is a custom machine\nadded by StaTech Industry').gold());
});