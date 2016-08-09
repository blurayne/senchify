// Multiple defintions within one file


var globalObj = {};

globalObj.objectMap = {
    'key': 'value'
};

Ext4.override(Ext4.form.Panel, {
    paramsAsHash: true
});

Ext4.define("Sencha.Overrides", {
    applied: true
});

Ext.apply(Ext.EventManager, {
});

Ext.define("Sencha.Application", {
    requires: [
        "Sencha.MyStuff"
    ]
});
