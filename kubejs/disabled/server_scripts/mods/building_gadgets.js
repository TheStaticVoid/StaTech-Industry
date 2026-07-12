// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:building_gadgets/${id}`;
    let bg = (id) => `buildinggadgets:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    
    // -- BUILDING GADGETS REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        bg('gadget_building'),
        bg('gadget_exchanging'),
        bg('gadget_copy_paste'),
        bg('gadget_destruction'),
        bg('template_manager')
    ]; 
    REMOVED_RECIPES.forEach(id => e.remove( {id: id} ));

    // -- BUILDING GADGET -- //
    e.shaped(bg('gadget_building'), [
        'IRI',
        'DCD',
        'ILI'
    ],
    {
        I: '#c:iron_plates',
        R: '#c:redstone_dusts',
        D: '#c:diamonds',
        C: mi('electronic_circuit'),
        L: '#c:lapis'
    })
    .id(st('gadget_building'));

    // -- EXCHANGING GADGET -- // 
    e.shaped(bg('gadget_exchanging'), [
        'IRI',
        'DCD',
        'IRI'
    ],
    {
        I: '#c:iron_plates',
        R: '#c:redstone_dusts',
        D: '#c:diamonds',
        C: mi('electronic_circuit')
    })
    .id(st('gadget_exchanging'));

    // -- COPY & PASTE GADGET -- //
    e.shaped(bg('gadget_copy_paste'), [
        'IRI',
        'ECE',
        'ILI'
    ],
    {
        I: '#c:iron_plates',
        R: '#c:redstone_dusts',
        E: '#c:emeralds',
        C: mi('electronic_circuit'),
        L: '#c:lapis'
    })
    .id(st('gadget_copy_paste'));

    // -- DESTRUCTION GADGET -- //
    e.shaped(bg('gadget_destruction'), [
        'IRI',
        'ECE',
        'ILI'
    ],
    {
        I: '#c:iron_plates',
        R: '#c:redstone_dusts',
        E: '#c:ender_pearls',
        C: mi('electronic_circuit'),
        L: '#c:lapis'
    })
    .id(st('gadget_destruction'));

    // -- TEMPLATE MANAGER -- // 
    e.shaped(bg('template_manager'), [
        'GRG',
        'EFE',
        'GCG'
    ],
    {
        G: '#c:gold_plates',
        R: '#c:redstone_dusts',
        E: '#c:ender_pearls',
        C: mi('electronic_circuit'),
        F: mi('basic_machine_hull')
    })
    .id(st('template_manager'));
});