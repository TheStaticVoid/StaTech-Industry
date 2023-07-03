ServerEvents.recipes(e => {
    const REMOVED_RECIPES = [
        'anim_guns:hardened_iron_ingot_from_blasting',
        'anim_guns:plastic',
        'anim_guns:plastic_exported_mi_furnace',
        'anim_guns:standard_handgun_cartridge',
        'anim_guns:heavy_handgun_cartridge',
        'anim_guns:standard_rifle_cartridge',
        'anim_guns:heavy_rifle_cartridge',
        'anim_guns:shotgun_shell'
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));
});

ServerEvents.tags('item', e => {
    const GUNS = [
        'anim_guns:pistol_light',
        'anim_guns:pistol_heavy',
        'anim_guns:revolver_magnum',
        'anim_guns:revolver_coltarmy',
        'anim_guns:smg_machinepistol',
        'anim_guns:assaultrifle_light',
        'anim_guns:assaultrifle_heavy',
        'anim_guns:assaultrifle_rus',
        'anim_guns:shotgun_doublebarrel',
        'anim_guns:shotgun_combat',
        'anim_guns:sniper_classic',
        'anim_guns:sniper_cowboy',
        'anim_guns:smg_heavy',
        'anim_guns:shotgun_riot',
        'anim_guns:lmg_m60'
    ];
    GUNS.forEach(id => e.add('kubejs:guns', id));
});