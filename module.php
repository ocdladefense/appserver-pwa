<?php



class PwaModule extends Module
{
	public function __construct()
	{
		parent::__construct();

		$this->name = "pwa";
	}

	public function manifest()
	{
		
		$manifest = file_get_contents(BASE_PATH . "/content/uploads/modules/pwa/manifest.json");
		return $manifest;
	}
}