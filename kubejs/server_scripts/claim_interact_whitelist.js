onEvent('block.tags', (event) => {
    const blocks = [/lootr:lootr_\w+/];
    event.get('ftbchunks:interact_whitelist').add(blocks);
});
