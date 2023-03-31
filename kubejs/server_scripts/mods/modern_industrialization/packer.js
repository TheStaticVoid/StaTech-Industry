ServerEvents.recipes(e => {
    e.custom({
        type: 'modern_industrialization:packer',
        duration: 100,
        eu: 2,
        item_inputs: [
            {
                amount: 3,
                item: 'modern_industrialization:iron_ring'
            }
        ],
        item_outputs: [
            {
                amount: 8,
                item: 'minecraft:chain'
            }
        ]
    });
})