// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/supercomputer/${id}`;

    // -- REFINE BASIC DATA -- //
    supercomputer(
        event,
        st('refine_basic_data'),
        128,
        600,
        [{ amount: 1, item: kj('unrefined_simple_stellar_data') }],
        [
            { amount: 1, item: kj('planetary_data'), probability: 0.1 },
            { amount: 1, item: kj('star_data'), probability: 0.2 },
            { amount: 1, item: kj('black_hole_data'), probability: 0.01 },
        ],
        [{ amount: 100, fluid: mi('cryofluid') }]
    );

    // -- REFINE DEEP SPACE DATA -- //
    supercomputer(
        event,
        st('refine_deep_space_data'),
        128,
        1200,
        [{ amount: 1, item: kj('unrefined_deep_space_stellar_data') }],
        [
            { amount: 1, item: kj('black_hole_data'), probability: 0.3 },
            { amount: 1, item: kj('star_data'), probability: 0.4 },
            {
                amount: 1,
                item: kj('anomalous_stellar_data'),
                probability: 0.05,
            },
        ],
        [{ amount: 100, fluid: mi('cryofluid') }]
    );
});
