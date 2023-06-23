REIEvents.hide('item', e => {
    let gc = (id) => `geocluster:${id}`;
    const REI_DELETED_ITEMS = [
        gc('raw_aluminium'),
        gc('aluminium_ingot'),
        gc('aluminium_nugget'),
        gc('raw_ancient_debris'),
        gc('aluminium_ore'),
        gc('deepslate_aluminium_ore'),
        gc('deepslate_platinum_ore'),
        gc('deepslate_titanium_ore'),
        gc('quartz_ore'),
        gc('deepslate_quartz_ore'),
        gc('ancient_debris_ore')
    ];
    REI_DELETED_ITEMS.forEach(id => e.hide(id));
});