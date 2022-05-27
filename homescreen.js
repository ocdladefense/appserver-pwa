deferredPrompt = window.deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  showInstallPromotion(e);
});

showInstallPromotion = function(e) {



	deferredPrompt = window.deferredPrompt;

	var btnAdd = document.getElementById('btnAdd');
	
	btnAdd.addEventListener('click', (e) => {
	
		// hide our user interface that shows our A2HS button
		btnAdd.style.display = 'none';
		
		// Show the prompt
		deferredPrompt.prompt();
		
		// Wait for the user to respond to the prompt
		deferredPrompt.userChoice
		.then((choiceResult) => {
			if (choiceResult.outcome === 'accepted') {
			
			} else {
			
			}
			deferredPrompt = null;
		});
		
	});
};