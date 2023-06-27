ItemEvents.tooltip(e => {
    let ed = (id) => `extended_drawers:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;

    e.add([ ed('compacting_drawer') ], '§cWARNING: Do not apply void upgrade to this unless\nyou want to lose all your stuff!\n\nAdditionally, dont auto extract from MI machines and hatches\notherwise you can cause a crash!' );
});