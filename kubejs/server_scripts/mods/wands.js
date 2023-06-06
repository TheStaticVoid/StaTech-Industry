ServerEvents.tags('item', e => {
    const BUILDER_WANDS = [
        'wands:stone_wand',
        'wands:iron_wand',
        'wands:diamond_wand',
        'wands:netherite_wand'
    ];

    BUILDER_WANDS.forEach(id => e.add('kubejs:builder_wands', id));
});