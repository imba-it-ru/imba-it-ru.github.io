import { Tabs } from '../utils/tabs.js';
import { UI_SELECTORS, UI_CLASSES } from '../sections/contacts/map-tabs.js';
import { headerInit } from '../sections/header.js'
import { createMapWarehouses } from '../sections/contacts/map-warehouses.js';
import { createMapOffice } from '../sections/contacts/map-office.js';


function contactsPageInit() {
	try {
		const mapTabs = new Tabs(UI_SELECTORS, UI_CLASSES);
		mapTabs.initTabs();

    const url = new URL(window.location.href);
    const number = url.searchParams.get('tab');

    if (number === '1') {
      mapTabs.setActiveTab(1);
    }


  } catch (error) {}
  headerInit();
  createMapOffice();
  createMapWarehouses();
}

contactsPageInit();