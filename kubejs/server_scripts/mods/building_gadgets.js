ServerEvents.recipes(e => {
    const REMOVED_RECIPES = [
        'buildinggadgets:gadget_building',
        'buildinggadgets:gadget_exchanging',
        'buildinggadgets:gadget_copy_paste',
        'buildinggadgets:gadget_destruction',
        'buildinggadgets:template_manager'
    ]; 
    REMOVED_RECIPES.forEach(id => e.remove( {id: id} ));

    e.shaped('buildinggadgets:gadget_building', [
        'IRI',
        'DCD',
        'ILI'
    ],
    {
        I: '#c:iron_plates',
        R: '#c:redstone_dusts',
        D: '#c:diamonds',
        C: 'modern_industrialization:electronic_circuit',
        L: '#c:lapis'
    });

    e.shaped('buildinggadgets:gadget_exchanging', [
        'IRI',
        'DCD',
        'IRI'
    ],
    {
        I: '#c:iron_plates',
        R: '#c:redstone_dusts',
        D: '#c:diamonds',
        C: 'modern_industrialization:electronic_circuit'
    });

    e.shaped('buildinggadgets:gadget_copy_paste', [
        'IRI',
        'ECE',
        'ILI'
    ],
    {
        I: '#c:iron_plates',
        R: '#c:redstone_dusts',
        E: '#c:emeralds',
        C: 'modern_industrialization:electronic_circuit',
        L: '#c:lapis'
    });

    e.shaped('buildinggadgets:gadget_destruction', [
        'IRI',
        'ECE',
        'ILI'
    ],
    {
        I: '#c:iron_plates',
        R: '#c:redstone_dusts',
        E: '#c:ender_pearls',
        C: 'modern_industrialization:electronic_circuit',
        L: '#c:lapis'
    });

    e.shaped('buildinggadgets:template_manager', [
        'GRG',
        'EFE',
        'GCG'
    ],
    {
        G: '#c:gold_plates',
        R: '#c:redstone_dusts',
        E: '#c:ender_pearls',
        C: 'modern_industrialization:electronic_circuit',
        F: 'modern_industrialization:basic_machine_hull'
    });
});