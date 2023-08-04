<?php

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('dinnerclub_theme', 'Configuration/TypoScript', 'Dinnerclub Theme');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('
<INCLUDE_TYPOSCRIPT: source="FiLE:EXT:dinnerclub_theme/Configuration/TSconfig/css_styled_content.ts">
');
