ServerEvents.recipes(e => {
    e.remove({id: 'explorerscompass:explorers_compass'});
    e.shaped('explorerscompass:explorerscompass', [
        'CSC',
        'SOS',
        'CSC'
    ],
    {
        C: 'minecraft:cobweb',
        S: '#c:steel_ingots',
        O: 'minecraft:compass'
    });
});