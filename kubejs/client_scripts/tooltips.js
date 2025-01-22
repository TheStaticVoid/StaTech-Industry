// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ItemEvents.tooltip(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let mi = (id) => `modern_industrialization:${id}`;
    let kj = (id) => `kubejs:${id}`;

    // -- LIST OF ALL CUSTOM MACHINES -- //
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

    // -- ADD TOOLTIP TO ALL MACHINES IN LIST -- //
    CUSTOM_MACHINES.forEach(item => {
        e.addAdvanced(item, (item, adv, text) => {
            text.add(Text.gold('Added by StaTech Industry'));
        });
    });
    e.addAdvanced(kj('clear_glass'), (item, adv, text) => {
        text.add(Text.yellow('Completely see through when placed'));
    });
});