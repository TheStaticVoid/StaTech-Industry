// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:usefulslime/${id}`;

    // -- SLIME SLING UNBREAKABLE -- //
    event.replaceOutput(
        { id: us('slime_sling') },
        us('slime_sling'),
        Item.of(us('slime_sling[unbreakable={}]'))
    );

    // -- SLIME BOOTS UNBREAKABLE -- //
    event.replaceOutput(
        { id: us('slime_boots') },
        us('slime_boots'),
        Item.of(us('slime_boots[unbreakable={}]'))
    );
});
