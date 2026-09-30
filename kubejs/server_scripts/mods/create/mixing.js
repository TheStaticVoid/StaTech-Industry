// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:create/mixing/${id}`;

    // Remove the create compat recipe for ae2 mixing
    event.remove({ type: cr('mixing'), output: ae('fluix_crystal') });

    // -- DOUGH -- //
    mixing(
        event,
        st('wheat_dough'),
        null,
        [
            { item: cr('wheat_flour') },
            { type: 'neoforge:single', amount: 1000, fluid: mc('water') },
        ],
        [{ count: 2, id: cr('dough') }]
    );
});
