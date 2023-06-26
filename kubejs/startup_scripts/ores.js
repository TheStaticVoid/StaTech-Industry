WorldgenEvents.remove(e => {
    let tr = (id) => `techreborn:${id}`;
    const ORES_TO_REMOVE = [
        tr('bauxite_ore'),
        tr('deepslate_bauxite_ore'),
        tr('iridium_ore'),
        tr('deepslate_iridium_ore'),
        tr('lead_ore'),
        tr('deepslate_lead_ore'),
        tr('tin_ore'),
        tr('deepslate_tin_ore'),
        tr('tungsten_ore'),
        tr('deepslate_tungsten_ore')
    ];
    e.removeOres(ores => {
        ores.blocks = ORES_TO_REMOVE;
    });
});