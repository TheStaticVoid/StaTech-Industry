REIEvents.hide('item', e => {

    let astra = (id) => `ad_astra:${id}`;
    let ae2 = (id) => `ae2:${id}`;
    let kibe = (id) => `kibe:${id}`;
    let tr = (id) => `techreborn:${id}`;


    const REI_DELETED_ITEMS = [
        astra('coal_generator'),
        astra('steel_cable'),
        astra('desh_cable'),
        astra('desh_fluid_pipe'),
        astra('ostrum_fluid_pipe'),
        astra('hammer'),
        astra('compressor'),
        astra('oil_bucket'),
        astra('oil'),
        astra('water_pump'),
        astra('solar_panel'),
        astra('astrodux'),
        astra('cable_duct'),
        astra('fluid_pipe_duct'),
        ae2('vibration_chamber'),
        ae2('ender_dust'),
        ae2('sky_stone_tank'),
        'decorative_blocks:blockstate_copy_item',
        'farmersdelight:wheat_dough',
        kibe('tank'),
        kibe('xp_shower'),
        kibe('xp_drain'),
        kibe('angel_ring'),
        'kubejs:statech_logo',
        'modern_industrialization:guidebook',
        'spirit:soul_pedestal',
        tr('nichrome_heating_coil'),
        tr('lithium'),
        tr('heliumplasma'),
        tr('helium3'),
        tr('helium'),
        tr('titanium_small_dust'),
        tr('alloy_smelter'),
        tr('iron_alloy_furnace'),
        tr('saw_dust'),
        tr('cloaking_device'),
        tr('fusion_coil')
    ];
    REI_DELETED_ITEMS.forEach(id => e.hide(id));
});

REIEvents.removeCategories(e => {
    const REMOVED_CAT = [
        'minecraft:plugins/tag',
        tr('alloy_smelter')
    ];
    REMOVED_CAT.forEach(id => e.remove(id));
});