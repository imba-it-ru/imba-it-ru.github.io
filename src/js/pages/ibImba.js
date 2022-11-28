import { headerInit } from '../sections/header.js';
import { showMoreCases } from '../sections/ibImba/cases.js';
import { numberAnimated } from '../sections/ibImba/number.js';
import { showSolution } from '../sections/ibImba/solution.js';
import { showMoreSolutions } from '../sections/ibImba/solutions.js';
import { makeClientsLogo } from '../sections/index/clientsLogo.js';
import { makePartnersLogo } from '../sections/index/partnersLogo.js';
import { UI_SELECTORS, UI_CLASSES } from '../sections/index/tabs.js';
import { Tabs } from '../utils/tabs.js';


function ibPageInit() {
	try {
    const tabPartners = new Tabs(UI_SELECTORS, UI_CLASSES);
		tabPartners.initTabs();

		const url = new URL(window.location.href);
		const number = url.searchParams.get('tab');

		if (number === '1') {
			tabPartners.setActiveTab(1);
		}

	} catch (error) {}
	headerInit();
	numberAnimated();
  showMoreSolutions();
  showMoreCases();
  showSolution();
  makeClientsLogo();
	makePartnersLogo();
}

ibPageInit();
