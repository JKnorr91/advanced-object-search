/**
 * Pimcore
 *
 * This source file is available under two different licenses:
 * - GNU General Public License version 3 (GPLv3)
 * - Pimcore Enterprise License (PEL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 * @copyright  Copyright (c) Pimcore GmbH (http://www.pimcore.org)
 * @license    http://www.pimcore.org/license     GPLv3 and PEL
 */


pimcore.registerNS("pimcore.plugin.esbackendsearch");

pimcore.plugin.esbackendsearch = Class.create(pimcore.plugin.admin, {
    getClassName: function() {
        return "pimcore.plugin.esbackendsearch";
    },

    initialize: function() {
        pimcore.plugin.broker.registerPlugin(this);
    },
 
    pimcoreReady: function (params,broker){

        var perspectiveCfg = pimcore.globalmanager.get("perspective");

        var searchMenu = pimcore.globalmanager.get("layout_toolbar").searchMenu;
        if(searchMenu && perspectiveCfg.inToolbar("search.esBackendSearch")) {
            pimcore.plugin.esbackendsearch.helper.rebuildEsSearchMenu();
        }
    }
});

var esbackendsearchPlugin = new pimcore.plugin.esbackendsearch();

