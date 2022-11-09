import { Tabs } from '../utils/tabs.js';
import { UI_SELECTORS, UI_CLASSES } from '../sections/contacts/map-tabs.js';
import { headerInit } from '../sections/header.js'

function contactsPageInit() {
	try {
		const mapTabs = new Tabs(UI_SELECTORS, UI_CLASSES);
		mapTabs.initTabs();
  } catch (error) {}
  headerInit();
}

contactsPageInit();