// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- ANIM GUNS REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        ag('hardened_iron_ingot_from_blasting'),
        ag('plastic'),
        ag('plastic_exported_mi_furnace'),
        ag('standard_handgun_cartridge'),
        ag('heavy_handgun_cartridge'),
        ag('standard_rifle_cartridge'),
        ag('heavy_rifle_cartridge'),
        ag('shotgun_shell')
    ];
    REMOVED_RECIPES.forEach(id => event.remove({id: id}));
});

ServerEvents.tags('item', event => {
    // Tag all guns for use in FTB Quests requirement
    const GUNS = [
        ag('pistol_light'),
        ag('pistol_heavy'),
        ag('revolver_magnum'),
        ag('revolver_coltarmy'),
        ag('smg_machinepistol'),
        ag('assaultrifle_light'),
        ag('assaultrifle_heavy'),
        ag('assaultrifle_rus'),
        ag('shotgun_doublebarrel'),
        ag('shotgun_combat'),
        ag('sniper_classic'),
        ag('sniper_cowboy'),
        ag('smg_heavy'),
        ag('shotgun_riot'),
        ag('lmg_m60')
    ];
    GUNS.forEach(id => event.add(kj('guns'), id));
});