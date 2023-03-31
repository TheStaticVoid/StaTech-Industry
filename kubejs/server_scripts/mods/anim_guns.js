ServerEvents.recipes(e => {
    e.remove({ id: 'anim_guns:hardened_iron_ingot_from_blasting' });
    e.custom({
        type: 'modern_industrialization:blast_furnace',
        eu: 16,
        duration: 300,
        item_inputs: {
            tag: 'c:iron_ingots',
            amount: 1
        },
        item_outputs: {
            item: 'anim_guns:hardened_iron_ingot',
            amount: 1
        }
    });
});