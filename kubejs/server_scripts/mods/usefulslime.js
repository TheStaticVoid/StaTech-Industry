// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/${id}`;
    let us = (id) => `usefulslime:${id}`;

    // -- SLIME BOOTS UNBREAKABLE -- //
    e.replaceOutput( {id: us('slime_boots')}, us('slime_boots'), Item.of(us('slime_boots[unbreakable={}]')));

    // -- SLIME SLING UNBREAKABLE -- //
    e.replaceOutput( {id: us('slime_sling')}, us('slime_sling'), Item.of(us('slime_sling[unbreakable={}]')));
});