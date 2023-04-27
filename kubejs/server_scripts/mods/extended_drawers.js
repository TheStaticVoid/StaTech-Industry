ServerEvents.recipes(e => {
    let ed = (id) => `extended_drawers:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    e.replaceInput({id: ed('t2_upgrade')}, mc('iron_block'), mc('iron_ingot'));
    e.replaceInput({id: ed('t3_upgrade')}, mc('blaze_rod'), mi('bronze_rod'));
    e.replaceInput({id: ed('t3_upgrade')}, mc('diamond_block'), mc('diamond'));
    e.replaceInput({id: ed('t4_upgrade')}, '#c:shulker_boxes', mc('emerald'));
    e.replaceInput({id: ed('t4_upgrade')}, mc('end_rod'), mi('steel_rod'));
});