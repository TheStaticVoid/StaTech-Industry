// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------

RecipeViewerEvents.removeEntries('item', event => {

    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let ss = (id) => `sophisticatedstorage:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let cr = (id) => `create:${id}`;


    event.remove([
        "#sophisticatedstorage:all_storage"
    ]);

})
