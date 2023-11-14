// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:dustrial_decor/${id}`;

    // -- SHEET METAL DOOR -- //
    event.shaped('3x ' + dd('sheet_metal_door'), [
        'AA ',
        'AA ',
        'AA '
    ],
    {
        A: dd('sheet_metal')
    })
    .id(st('sheet_metal_door'));
});