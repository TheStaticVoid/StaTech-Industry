ServerEvents.tags('block', (event) => {
    const blocks = /lootr:lootr_\w+/;
    event.add('ftbchunks:interact_whitelist', blocks);
});
