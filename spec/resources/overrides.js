// Multiple defintions within one file




var globalObj = {};

globalObj.

Ext4.override(Ext4.form.Panel, {
    paramsAsHash: true
});

Ext4.define("IA.Overrides", {
    applied: true
});

Ext.apply(Ext.EventManager, {
});

Ext.define("IA.Application", {
    requires: [
        "IA.nodechooser.AccountManager"
    ]
});
