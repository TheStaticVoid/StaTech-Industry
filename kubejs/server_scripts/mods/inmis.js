// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:inmis/${id}`;
    let im = (id) => `inmis:${id}`;
    
    // -- INMIS REMOVED RECIPES -- //
    const INMIS_DELETED_RECIPES = [
        im('withered_backpack'),
        im('plated_backpack'),
        im('gilded_backpack'),
        im('bejeweled_backpack'),
        im('endless_backpack'),
        im('blazing_backpack')
    ];
    INMIS_DELETED_RECIPES.forEach(id => e.remove({ id: id }));

    // -- UTILITY FUNCTION FOR MODIFYING RESULTS IN RECIPE BUILDER -- // 
    let keepNBT = (name, inventory, itemstack) => {
        let backpack = inventory.find(Item.of(name));

        if (backpack.nbt == null)
            return itemstack;
        
        let nbt = backpack.nbt;
        return itemstack.withNBT(nbt);
    }

    // -- PLATED BACKPACK -- //
    e.shaped(im('plated_backpack'), [
        'RIR',
        'IBI',
        'RIR'
    ],
    {
        I: '#c:iron_plates',
        R: '#c:refined_iron_plates',
        B: im('frayed_backpack')
    })
    .modifyResult((inventory, itemstack) => { return keepNBT(im('frayed_backpack'), inventory, itemstack) })
    .id(st('plated_backpack'));

    // -- GILDED BACKPACK -- //
    e.shaped(im('gilded_backpack'), [
        'EGE',
        'GBG',
        'EGE'
    ],
    {
        E: '#c:electrum_plates',
        G: '#c:gold_plates',
        B: im('plated_backpack')
    })
    .modifyResult((inventory, itemstack) => { return keepNBT(im('plated_backpack'), inventory, itemstack) })
    .id(st('gilded_backpack'));

    // -- BEJEWELED BACKPACK -- //
    e.shaped(im('bejeweled_backpack'), [
        'DED',
        'EBE',
        'DED'
    ],
    {
        D: '#c:diamond_plates',
        E: '#c:emerald_plates',
        B: im('gilded_backpack')
    })
    .modifyResult((inventory, itemstack) => { return keepNBT(im('gilded_backpack'), inventory, itemstack) })
    .id(st('bejeweled_backpack'));

    // -- BLAZING BACKPACK -- //
    e.shaped(im('blazing_backpack'), [
        'NON',
        'OBO',
        'NON'
    ],
    {
        N: '#c:netherite_ingots',
        O: '#c:ostrum_plates',
        B: im('bejeweled_backpack')
    })
    .modifyResult((inventory, itemstack) => { return keepNBT(im('bejeweled_backpack'), inventory, itemstack) })
    .id(st('blazing_backpack'));

    // -- WITHERED BACKPACK -- // 
    e.shaped(im('withered_backpack'), [
        'ANA',
        'NBN',
        'ANA'
    ],
    {
        A: '#c:blastproof_alloy_plates',
        N: 'minecraft:nether_star',
        B: im('blazing_backpack')
    })
    .modifyResult((inventory, itemstack) => { return keepNBT(im('blazing_backpack'), inventory, itemstack) })
    .id(st('withered_backpack'));

    // -- ENDLESS BACKPACK -- //
    e.shaped(im('endless_backpack'), [
        'IHI',
        'EBE',
        'IEI'
    ],
    {
        I: '#c:iridium_plates',
        H: 'minecraft:dragon_head',
        B: im('withered_backpack'),
        E: '#c:endstone_dusts'
    })
    .modifyResult((inventory, itemstack) => { return keepNBT(im('withered_backpack'), inventory, itemstack) })
    .id(st('endless_backpack'));
});