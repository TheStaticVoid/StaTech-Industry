ServerEvents.recipes(e => {
    // -- REMOVE RECIPES -- //
    const AE2_DELETED_ITEMS = [
        'ae2:network/blocks/inscribers',
        'ae2:transform/fluix_crystals',
        'ae2:transform/fluix_crystal',
        'ae2:network/blocks/controller',
        'ae2:network/blocks/crystal_processing_charger',
        'ae2:network/blocks/energy_vibration_chamber',
        'ae2:network/crafting/patterns_blank',
        'ae2:misc/tank_sky_stone'
    ];
    AE2_DELETED_ITEMS.forEach(id => e.remove( {id: id} ));
    // -- REMOVE ENDER DUST -- //
    e.remove({output: 'ae2:ender_dust'});
    
    // gregify the inscriber recipe
    e.shaped('ae2:inscriber', [
        'MPM',
        'CHC',
        'MPM'
    ],
    {
        P: 'modern_industrialization:piston',
        M: 'modern_industrialization:motor',
        H: 'modern_industrialization:basic_machine_hull',
        C: 'modern_industrialization:electronic_circuit'
    });

    // gregify the controller recipe
    e.shaped('ae2:controller', [
        'HFH',
        'PCP',
        'HFH'
    ],
    {
        H: 'modern_industrialization:basic_machine_hull',
        F: '#c:fluix',
        P: 'ae2:engineering_processor',
        C: 'modern_industrialization:electronic_circuit'
    });

    // Modify the charger recipe
    e.shaped('ae2:charger', [
        'SCS',
        'S  ',
        'SCS'
    ],
    {
        S: '#c:steel_plates',
        C: '#c:copper_plates'
    });

    // Buff the Blank Pattern recipe
    e.shaped('4x ae2:blank_pattern', [
        'QGQ',
        'GCG',
        'SSS'
    ],
    {
        Q: 'ae2:quartz_glass',
        G: '#c:glowstone_dusts',
        C: '#c:certus_quartz',
        S: '#c:stainless_steel_ingots'
    });

    // -- Replace the remaining iron ingots in recipes to be stainless steel -- //
    e.replaceInput({mod: 'ae2'}, 'minecraft:iron_ingot', '#c:stainless_steel_ingots');
});

ServerEvents.tags('item', e=> {
    const CRAFTING_STORAGE = [
        'ae2:1k_crafting_storage',
        'ae2:4k_crafting_storage',
        'ae2:16k_crafting_storage',
        'ae2:64k_crafting_storage',
        'ae2:256k_crafting_storage'
    ];

    CRAFTING_STORAGE.forEach(id => e.add('kubejs:crafting_storage', id));

    // -- REMOVE ENDER DUST -- //
    e.removeAllTagsFrom('ae2:ender_dust');
})