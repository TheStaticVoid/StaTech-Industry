// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ItemEvents.tooltip(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let mi = (id) => `modern_industrialization:${id}`;
    let kj = (id) => `kubejs:${id}`;
    let aa = (id) => `ad_astra:${id}`;

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
    const ADDED_BY_STATECH = Text.gold('Added by StaTech Industry');
    CUSTOM_MACHINES.forEach(item => {
        e.addAdvanced(item, (item, adv, text) => {
            text.remove(ADDED_BY_STATECH);
            text.add(ADDED_BY_STATECH);
        });
    });
    
    const SEE_THROUGH = Text.yellow('Completely see through when placed');
    e.addAdvanced(kj('clear_glass'), (item, adv, text) => {
        text.remove(SEE_THROUGH);
        text.add(SEE_THROUGH);
    });
    
    const FUEL_REFINERY_TOOLTIP = Text.green('Converts boosted diesel into fuel.');
    e.addAdvanced(aa('fuel_refinery'), (item, adv, text) => {
        if (e.shift) {
            text.remove(1);
            text.add(1, [FUEL_REFINERY_TOOLTIP]);
        }
    });
});