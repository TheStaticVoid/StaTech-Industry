ServerEvents.recipes(e => {
    e.remove({id: 'timeinabottle:time_in_a_bottle'});
    e.shaped('timeinabottle:time_in_a_bottle', [
        'GGG',
        'DWD',
        'LBL'
    ],
    {
        G: 'modern_industrialization:gold_curved_plate',
        D: 'minecraft:diamond',
        W: 'minecraft:clock',
        L: '#c:lapis',
        B: 'minecraft:glass_bottle'
    });
});