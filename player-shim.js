document.addEventListener('musickitconfigured', function(e){
	var apm = MusicKit.getInstance();

	document.addEventListener('keyup', function(e){
		if (e.shiftKey && e.code == 'ArrowRight') {
			apm.skipToNextItem();
		}
		if (e.shiftKey && e.code == 'ArrowLeft') {
			apm.skipToPreviousItem();
		}
	});
	
	apm.addEventListener('nowPlayingItemDidChange', window.notify);
});

window.notify = async function notify(e) {
	if (e.item && e.item.attributes && e.item.attributes.name && 
		e.item.attributes.artistName && e.item.attributes.albumName &&
		e.item.attributes.artwork && e.item.attributes.artwork.url) {
		var title = e.item.attributes.name + ' - ' 
			+ e.item.attributes.artistName + ' - ' 
			+ e.item.attributes.albumName;
		var icon = e.item.attributes.artwork.url.replace("{w}", "100").replace("{h}", "100");
		const result = await Notification(title,{ icon: icon});
	}
}
