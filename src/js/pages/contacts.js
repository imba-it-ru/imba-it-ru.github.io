import { Tabs } from '../utils/tabs.js';
import { UI_SELECTORS, UI_CLASSES } from '../sections/contacts/map-tabs.js';

function tabPageInit() {
	try {
		const mapTabs = new Tabs(UI_SELECTORS, UI_CLASSES);
		mapTabs.initTabs();
  } catch (error) {}
}

tabPageInit();