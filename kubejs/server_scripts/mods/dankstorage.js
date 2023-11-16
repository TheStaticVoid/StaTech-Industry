// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:dankstorage/${id}`;

    // -- INMIS REMOVED RECIPES -- //
    const DELETED_RECIPES = [
        ds('1'),
        ds('2'),
        ds('3'),
        ds('4'),
        ds('5'),
        ds('6'),
        ds('7'),
        ds('1_to_2'),
        ds('2_to_3'),
        ds('3_to_4'),
        ds('4_to_5'),
        ds('5_to_6'),
        ds('6_to_7')
    ];
    DELETED_RECIPES.forEach(id => event.remove({ id: id }));

    // -- UTILITY FUNCTION FOR MODIFYING RESULTS IN RECIPE BUILDER -- // 
    let keepNBT = (name, inventory, itemstack) => {
        let dank = inventory.find(Item.of(name));

        if (dank.nbt == null) 
            return itemstack;
        
        let nbt = dank.nbt;
        return itemstack.withNBT(nbt);
    }

    // -- DANK 1 -- //
    event.shaped(ds('dank_1'), [
        'BBB',
        'BDB',
        'BBB'
    ],
    {
        B: '#c:steel_blocks',
        D: mc('barrel')
    })
    .id(st('dank_1'));

    // -- DANK 2 -- //
    event.shaped(ds('dank_2'), [
        'BBB',
        'BDB',
        'BBB'
    ],
    {
        B: '#c:aluminum_blocks',
        D: ds('dank_1')
    })
    .modifyResult((inventory, itemstack) => { return keepNBT(ds('dank_1'), inventory, itemstack) })
    .id(st('dank_2'));

    // -- DANK 3 -- //
    event.shaped(ds('dank_3'), [
        'BBB',
        'BDB',
        'BBB'
    ],
    {
        B: '#c:stainless_steel_blocks',
        D: ds('dank_2')
    })
    .modifyResult((inventory, itemstack) => { return keepNBT(ds('dank_2'), inventory, itemstack) })
    .id(st('dank_3'));

    // -- DANK 4 -- // 
    event.shaped(ds('dank_4'), [
        'BBB',
        'BDB',
        'BBB'
    ],
    {
        B: '#c:enderium_blocks',
        D: ds('dank_3')
    })
    .modifyResult((inventory, itemstack) => { return keepNBT(ds('dank_3'), inventory, itemstack) })
    .id(st('dank_4'));

    // -- DANK 5 -- //
    event.shaped(ds('dank_5'), [
        'BBB',
        'BDB',
        'BBB'
    ],
    {
        B: '#c:titanium_blocks',
        D: ds('dank_4')
    })
    .modifyResult((inventory, itemstack) => { return keepNBT(ds('dank_4'), inventory, itemstack) })
    .id(st('dank_5'));

    // -- DANK 6 -- //
    event.shaped(ds('dank_6'), [
        'BBB',
        'BDB',
        'BBB'
    ],
    {
        B: '#c:platinum_blocks',
        D: ds('dank_5')
    })
    .modifyResult((inventory, itemstack) => { return keepNBT(ds('dank_5'), inventory, itemstack) })
    .id(st('dank_6'));
    
    // -- DANK 7 -- //
    event.shaped(ds('dank_7'), [
        'BNB',
        'NDN',
        'BNB'
    ],
    {
        B: '#c:iridium_blocks',
        N: bl('nether_stars_block'),
        D: ds('dank_6')
    })
    .modifyResult((inventory, itemstack) => { return keepNBT(ds('dank_6'), inventory, itemstack) })
    .id(st('dank_7'));

    // -- DANK 1 TO 2 UPGRADE -- //
    event.shaped(ds('1_to_2'), [
        'BBB',
        'BSB',
        'BBB'
    ],
    {
        B: '#c:aluminum_blocks',
        S: '#c:wooden_rods'
    })
    .id(st('1_to_2'));

    // -- DANK 2 TO 3 UPGRADE -- //
    event.shaped(ds('2_to_3'), [
        'BBB',
        'BSB',
        'BBB'
    ],
    {
        B: '#c:stainless_steel_blocks',
        S: '#c:wooden_rods'
    })
    .id(st('2_to_3'));

    // -- DANK 3 TO 4 UPGRADE -- //
    event.shaped(ds('3_to_4'), [
        'BBB',
        'BSB',
        'BBB'
    ],
    {
        B: '#c:enderium_blocks',
        S: '#c:wooden_rods'
    })
    .id(st('3_to_4'));

    // -- DANK 4 TO 5 UPGRADE -- //
    event.shaped(ds('4_to_5'), [
        'BBB',
        'BSB',
        'BBB'
    ],
    {
        B: '#c:titanium_blocks',
        S: '#c:wooden_rods'
    })
    .id(st('4_to_5'));

    // -- DANK 5 TO 6 UPGRADE -- // 
    event.shaped(ds('5_to_6'), [
        'BBB',
        'BSB',
        'BBB'
    ],
    {
        B: '#c:platinum_blocks',
        S: '#c:wooden_rods'
    })
    .id(st('5_to_6'));

    // -- DANK 6 TO 7 UPGRADE -- //
    event.shaped(ds('6_to_7'), [
        'BNB',
        'NSN',
        'BNB'
    ],
    {
        B: '#c:iridium_blocks',
        N: bl('nether_stars_block'),
        S: '#c:wooden_rods'
    })
    .id(st('6_to_7'));
});