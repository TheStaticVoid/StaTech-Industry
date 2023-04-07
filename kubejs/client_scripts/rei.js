const REI_DELETED_ITEMS = [
    'ad_astra:coal_generator',
    'ad_astra:steel_cable',
    'ad_astra:desh_cable',
    'ad_astra:desh_fluid_pipe',
    'ad_astra:ostrum_fluid_pipe',
    'ad_astra:hammer',
    'ad_astra:compressor',
    'ad_astra:oil_bucket',
    'ad_astra:oil',
    'ae2:vibration_chamber',
    'ae2:ender_dust',
    'farmersdelight:wheat_dough',
    'kibe:tank',
    'kibe:xp_shower',
    'kibe:xp_drain',
    'ae2:sky_stone_tank',
    'modern_industrialization:guidebook',
    'techreborn:nichrome_heating_coil',
    'techreborn:lithium',
    'techreborn:heliumplasma',
    'techreborn:helium3',
    'techreborn:helium',
    'techreborn:titanium_small_dust'
];

REIEvents.hide('item', e => {
    REI_DELETED_ITEMS.forEach(id => e.hide(id));
});

REIEvents.removeCategories(e => {
    const REMOVED_CAT = [
        'minecraft:plugins/tag'
    ];
    REMOVED_CAT.forEach(id => e.remove(id));
});