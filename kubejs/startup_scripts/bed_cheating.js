ForgeEvents.onEvent("net.minecraftforge.event.entity.player.PlayerEvent$PlayerRespawnEvent", (event) => {
    let player = event.getEntity();
    // let pos = player.position();
    // let level = player.level;
    // let block = level.getBlock(pos.offset(0, -1, 0));
    // console.log(block);
    // console.log(level);
    // console.log(pos);
    console.log(player);
    // console.log(player.getLastDeathLocation());
});