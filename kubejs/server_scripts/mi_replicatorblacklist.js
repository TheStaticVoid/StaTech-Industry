ServerEvents.tags('item', e => {
    let ae = (id) => `ae2:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let im = (id) => `inmis:${id}`;

    const ITEMS = [
        ae('spatial_storage_cell_2'),
        ae('spatial_storage_cell_16'),
        ae('spatial_storage_cell_128'),
        ae('portable_item_cell_1k'),
        ae('portable_item_cell_4k'),
        ae('portable_item_cell_16k'),
        ae('portable_item_cell_64k'),
        ae('portable_item_cell_256k'),
        ae('portable_fluid_cell_1k'),
        ae('portable_fluid_cell_4k'),
        ae('portable_fluid_cell_16k'),
        ae('portable_fluid_cell_64k'),
        ae('portable_fluid_cell_256k'),
        ae('item_storage_cell_1k'),
        ae('item_storage_cell_4k'),
        ae('item_storage_cell_16k'),
        ae('item_storage_cell_64k'),
        ae('item_storage_cell_256k'),
        ae('fluid_storage_cell_1k'),
        ae('fluid_storage_cell_4k'),
        ae('fluid_storage_cell_16k'),
        ae('fluid_storage_cell_64k'),
        ae('fluid_storage_cell_256k'),
        tr('crude_storage_unit'),
        tr('basic_storage_unit'),
        tr('advanced_storage_unit'),
        tr('industrial_storage_unit'),
        tr('quantum_storage_unit'),
        tr('uu_matter'),
        tr('scrap_box'),
        tr('interdimensional_su'),
        tr('auto_crafting_table'),
        im('baby_backpack'),
        im('frayed_backpack'),
        im('plated_backpack'),
        im('gilded_backpack'),
        im('bejeweled_backpack'),
        im('blazing_backpack'),
        im('withered_backpack'),
        im('endless_backpack'),
        '#create:toolboxes',
    ];

    ITEMS.forEach(id => e.add(mi('replicator_blacklist'), id));
});