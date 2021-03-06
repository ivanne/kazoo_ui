winkstart.module('voip', 'device', {
        css: [
            'css/device.css'
        ],

        templates: {
            device: 'tmpl/device.html',
            general_edit: 'tmpl/general_edit.html',
            smartphone: 'tmpl/smartphone.html',
            landline: 'tmpl/landline.html',
            cellphone: 'tmpl/cellphone.html',
            softphone: 'tmpl/softphone.html',
            sip_device: 'tmpl/edit.html',
            fax: 'tmpl/fax.html',
            device_callflow: 'tmpl/device_callflow.html',
            sip_uri: 'tmpl/sip_uri.html'
        },

        subscribe: {
            'device.activate': 'activate',
            'device.edit': 'edit_device',
            'callflow.define_callflow_nodes': 'define_callflow_nodes',
            'device.popup_edit': 'popup_edit_device'
        },

        validation: {
            sip_uri: [
                { name: '#name',                regex: /^[a-zA-Z0-9\s_']+$/ }
            ],
            sip_device : [
                { name: '#name',                      regex: /^[a-zA-Z0-9\s_'\-]+$/ },
                { name: '#mac_address',               regex: /^(((\d|([a-f]|[A-F])){2}:){5}(\d|([a-f]|[A-F])){2})$|^$|^(((\d|([a-f]|[A-F])){2}-){5}(\d|([a-f]|[A-F])){2})$|^(((\d|([a-f]|[A-F])){2}){5}(\d|([a-f]|[A-F])){2})$/ },
                { name: '#caller_id_name_internal',   regex: /^[0-9A-Za-z ,]{0,15}$/ },
                { name: '#caller_id_number_internal', regex: /^[\+]?[0-9\s\-\.\(\)]*$/ },
                { name: '#caller_id_name_external',   regex: /^[0-9A-Za-z ,]{0,15}$/ },
                { name: '#caller_id_number_external', regex: /^[\+]?[0-9\s\-\.\(\)]*$/ },
                { name: '#caller_id_number_emergency',regex: /^[\+]?[0-9\s\-\.\(\)]*$/ },
                { name: '#caller_id_name_emergency',  regex: /^[0-9A-Za-z ,]{0,15}$/ },
                { name: '#sip_username',              regex: /^[^\s]+$/ },
                { name: '#sip_expire_seconds',        regex: /^[0-9]+$/ }
            ],
            fax : [
                { name: '#name',                      regex: /^[a-zA-Z0-9\s_'\-]+$/ },
                { name: '#mac_address',               regex: /^(((\d|([a-f]|[A-F])){2}:){5}(\d|([a-f]|[A-F])){2})$|^$|^(((\d|([a-f]|[A-F])){2}-){5}(\d|([a-f]|[A-F])){2})$|^(((\d|([a-f]|[A-F])){2}){5}(\d|([a-f]|[A-F])){2})$/ },
                { name: '#caller_id_name_internal',   regex: /^[0-9A-Za-z ,]{0,15}$/ },
                { name: '#caller_id_number_internal', regex: /^[\+]?[0-9\s\-\.\(\)]*$/ },
                { name: '#caller_id_name_external',   regex: /^[0-9A-Za-z ,]{0,15}$/ },
                { name: '#caller_id_number_external', regex: /^[\+]?[0-9\s\-\.\(\)]*$/ },
                { name: '#caller_id_number_emergency',regex: /^[\+]?[0-9\s\-\.\(\)]*$/ },
                { name: '#caller_id_name_emergency',  regex: /^[0-9A-Za-z ,]{0,15}$/ },
                { name: '#sip_username',              regex: /^[^\s]+$/ },
                { name: '#sip_expire_seconds',        regex: /^[0-9]+$/ }
            ],
            cellphone: [
                { name: '#name',                regex: /^[a-zA-Z0-9\s_'\-]+$/ },
                { name: '#call_forward_number', regex: /^[\+]?[0-9\s\-\.\(\)]*$/ }
            ],
            smartphone: [
                { name: '#name',                regex: /^[a-zA-Z0-9\s_'\-]+$/ },
                { name: '#call_forward_number', regex: /^[\+]?[0-9\s\-\.\(\)]*$/ }
            ],
            landline: [
                { name: '#name',                regex: /^[a-zA-Z0-9\s_'\-]+$/ },
                { name: '#call_forward_number', regex: /^[\+]?[0-9\s\-\.\(\)]*$/ }
            ],
            softphone: [
                { name: '#name',                      regex: /^[a-zA-Z0-9\s_'\-]+$/ },
                { name: '#caller_id_name_internal',   regex: /^[0-9A-Za-z ,]{0,15}$/ },
                { name: '#caller_id_number_internal', regex: /^[\+]?[0-9\s\-\.\(\)]*$/ },
                { name: '#caller_id_name_external',   regex: /^[0-9A-Za-z ,]{0,15}$/ },
                { name: '#caller_id_number_external', regex: /^[\+]?[0-9\s\-\.\(\)]*$/ },
                { name: '#caller_id_number_emergency',regex: /^[\+]?[0-9\s\-\.\(\)]*$/ },
                { name: '#caller_id_name_emergency',  regex: /^[0-9A-Za-z ,]{0,15}$/ },
                { name: '#sip_username',              regex: /^[^\s]+$/ },
                { name: '#sip_expire_seconds',        regex: /^[0-9]+$/ }
            ]
        },

        resources: {
            'device.list_classifier': {
                url: '{api_url}/accounts/{account_id}/phone_numbers/classifiers',
                contentType: 'application/json',
                verb: 'GET'
            },
            'device.list': {
                url: '{api_url}/accounts/{account_id}/devices',
                contentType: 'application/json',
                verb: 'GET'
            },
            'device.status': {
                url: '{api_url}/accounts/{account_id}/devices/status',
                contentType: 'application/json',
                verb: 'GET'
            },
            'device.status_no_loading': {
                url: '{api_url}/accounts/{account_id}/devices/status',
                contentType: 'application/json',
                verb: 'GET',
                trigger_events: false
            },
            'device.get': {
                url: '{api_url}/accounts/{account_id}/devices/{device_id}',
                contentType: 'application/json',
                verb: 'GET'
            },
            'device.create': {
                url: '{api_url}/accounts/{account_id}/devices',
                contentType: 'application/json',
                verb: 'PUT'
            },
            'device.update': {
                url: '{api_url}/accounts/{account_id}/devices/{device_id}',
                contentType: 'application/json',
                verb: 'POST'
            },
            'device.filter':{
                url: '{api_url}/accounts/{account_id}/devices?filter_mac_address={mac_address}',
                contentType: 'application/json',
                verb: 'GET'
            },
            'device.delete': {
                url: '{api_url}/accounts/{account_id}/devices/{device_id}',
                contentType: 'application/json',
                verb: 'DELETE'
            },
            'user.list': {
                url: '{api_url}/accounts/{account_id}/users',
                contentType: 'application/json',
                verb: 'GET'
            },
            'account.get': {
                url: '{api_url}/accounts/{account_id}',
                contentType: 'application/json',
                verb: 'GET'
            }
        }
    },

    function(args) {
        var THIS = this;

        winkstart.registerResources(THIS.__whapp, THIS.config.resources);

        //winkstart.publish('statistics.add_stat', THIS.define_stats());

        winkstart.publish('whappnav.subnav.add', {
            whapp: 'voip',
            module: THIS.__module,
            label: 'Devices',
            icon: 'device',
            weight: '20',
            category: 'advanced'
        });
    },

    {
        fix_codecs: function(data, data2) {
            if(typeof data.media == 'object' && typeof data2.media == 'object') {
                (data.media.audio || {}).codecs = (data2.media.audio || {}).codecs;
                (data.media.video || {}).codecs = (data2.media.video || {}).codecs;
            }

            return data;
        },

        save_device: function(form_data, data, success, error) {
            var THIS = this,
                id = (typeof data.data == 'object' && data.data.id) ? data.data.id : undefined,
                normalized_data = THIS.fix_codecs(THIS.normalize_data($.extend(true, {}, data.data, form_data)), form_data);

            if(id) {
                winkstart.request(true, 'device.update', {
                        account_id: winkstart.apps['voip'].account_id,
                        api_url: winkstart.apps['voip'].api_url,
                        device_id: id,
                        data: normalized_data
                    },
                    function(_data, status) {
                        if(typeof success == 'function') {
                            success(_data, status, 'update');
                        }
                    },
                    function(_data, status) {
                        if(typeof error == 'function') {
                            error(_data, status, 'update');
                        }
                    }
                );
            }
            else {
                winkstart.request('device.list', {
                        account_id: winkstart.apps['voip'].account_id,
                        api_url: winkstart.apps['voip'].api_url
                    },
                    function(_data, status) {
                        winkstart.request(true, 'device.create', {
                                account_id: winkstart.apps['voip'].account_id,
                                api_url: winkstart.apps['voip'].api_url,
                                data: normalized_data
                            },
                            function(_data, status) {
                                if(typeof success == 'function') {
                                    success(_data, status, 'create');
                                }
                            },
                            function(_data, status) {
                                if(typeof error == 'function') {
                                    error(_data, status, 'create');
                                }
                            }
                        );
                    }
                );
            }
        },

        edit_device: function(data, _parent, _target, _callbacks, data_defaults) {
            var THIS = this,
                parent = _parent || $('#device-content'),
                target = _target || $('#device-view', parent),
                _callbacks = _callbacks || {},
                callbacks = {
                    save_success: _callbacks.save_success || function(_data) {
                        THIS.render_list(parent);

                        THIS.edit_device({ id: _data.data.id }, parent, target, callbacks);
                    },

                    save_error: _callbacks.save_error || function(_data, status, type) {
                        if(status == 200 && type == 'mac_address') {
                            winkstart.alert('warning', 'This MAC Address is already in use, please verify that it is correct.');
                        }
                    },

                    delete_success: _callbacks.delete_success || function(_data) {
                        target.empty();

                        THIS.render_list(parent);
                    },

                    delete_error: _callbacks.delete_error,

                    after_render: _callbacks.after_render
                },
                defaults = {
                    data: $.extend(true, {
                        enabled: true,
                        caller_id: {
                            external: {},
                            internal: {},
                            emergency: {}
                        },
                        ringtones: {},
                        call_restriction: { closed_groups: 'inherit' },
                        media: {
                            peer_to_peer: 'auto',
                            audio: {
                                codecs: ['PCMU', 'PCMA']
                            },
                            video: {
                                codecs: []
                            },
                            fax: {
                                option: 'auto'
                            },
                            fax_option: 'auto'
                        },
                        sip: {
                            method: 'password',
                            invite_format: 'username',
                            username: 'user_' + winkstart.random_string(6),
                            password: winkstart.random_string(12),
                            expire_seconds: '360'
                        },
                        contact_list: {
                            exclude: false
                        },
                        call_forward: {},
                        music_on_hold: {}
                    }, data_defaults || {}),

                    field_data: {
                        users: [],
                        call_restriction: {},
                        sip: {
                            methods: {
                                'password': 'Password',
                                'ip': 'IP'
                            },
                            invite_formats: {
                                'username': 'Username',
                                'npan': 'NPA NXX XXXX',
                                'e164': 'E. 164'
                            }
                        },
                        media: {
                            peer_to_peer_options: {
                                'auto': 'Automatic',
                                'true': 'Always',
                                'false': 'Never'
                            },
                            fax: {
                                options: {
                                    'auto': 'Auto-detect',
                                    'true': 'Always Force',
                                    'false': 'Disabled'
                                }
                            },
                            audio: {
                                codecs: {
                                    'G729': 'G729 - 8kbps (Requires License)',
                                    'PCMU': 'G711u / PCMU - 64kbps (North America)',
                                    'PCMA': 'G711a / PCMA - 64kbps (Elsewhere)',
                                    'G722_16': 'G722 (HD) @ 16kHz',
                                    'G722_32': 'G722.1 (HD) @ 32kHz',
                                    'CELT_48': 'Siren (HD) @ 48kHz',
                                    'CELT_64': 'Siren (HD) @ 64kHz'
                                }
                            },
                            video: {
                                codecs: {
                                    'H261': 'H261',
                                    'H263': 'H263',
                                    'H264': 'H264'
                                }
                            }
                        },
                        hide_owner: data.hide_owner || false,
                        outbound_flags: data.outbound_flags ? data.outbound_flags.join(", ") : data.outbound_flags
                    },
                    functions: {
                        inArray: function(value, array) {
                            if(array) {
                                return ($.inArray(value, array) == -1) ? false : true;
                            }
                            else return false;
                        }
                    }
                };

            winkstart.parallel({
                list_classifier: function(callback){
                    winkstart.request('device.list_classifier', {
                            api_url: winkstart.apps['voip'].api_url,
                            account_id: winkstart.apps['voip'].account_id
                        },
                        function(_data_classifiers) {
                            if('data' in _data_classifiers) {
                                $.each(_data_classifiers.data, function(k, v) {
                                    defaults.field_data.call_restriction[k] = {
                                        friendly_name: v.friendly_name
                                    };

                                    defaults.data.call_restriction[k] = { action: 'inherit' };
                                });
                            }
                            callback(null, _data_classifiers);
                        }
                    );
                },
                account: function(callback){
                    winkstart.request(true, 'account.get', {
                            account_id: winkstart.apps['voip'].account_id,
                            api_url: winkstart.apps['voip'].api_url
                        },
                        function(_data, status) {
                            $.extend(defaults.field_data.sip, {
                                realm: _data.data.realm,
                            });

                            callback(null, _data);
                        }
                    );
                },
                user_list: function(callback) {
                    winkstart.request(true, 'user.list', {
                            account_id: winkstart.apps['voip'].account_id,
                            api_url: winkstart.apps['voip'].api_url
                        },
                        function(_data, status) {
                            _data.data.unshift({
                                id: '',
                                first_name: '- No',
                                last_name: 'owner -',
                            });

                            defaults.field_data.users = _data.data;

                            callback(null, _data);
                        }
                    );
                },
                media_list: function(callback) {
                    winkstart.request(true, 'media.list', {
                            account_id: winkstart.apps['voip'].account_id,
                            api_url: winkstart.apps['voip'].api_url
                        },
                        function(_data, status) {
                            _data.data.unshift(
                                {
                                    id: '',
                                    name: 'Default Music'
                                },
                                {
                                    id: 'silence_stream://300000',
                                    name: 'Silence'
                                }
                            );

                            defaults.field_data.music_on_hold = _data.data;

                            callback(null, _data);
                        }
                    );
                },
                get_device: function(callback) {
                    if(typeof data == 'object' && data.id) {
                        winkstart.request(true, 'device.get', {
                                account_id: winkstart.apps['voip'].account_id,
                                api_url: winkstart.apps['voip'].api_url,
                                device_id: data.id
                            },
                            function(_data, status) {
                                defaults.data.device_type = 'sip_device';

                                if('sip' in _data.data && 'realm' in _data.data.sip) {
                                    defaults.field_data.sip.realm = _data.data.sip.realm;
                                }

                                THIS.migrate_data(_data);

                                callback(null, _data);
                            }
                        );
                    }
                    else {
                        callback(null, defaults);
                    }
                },
                get_models: function(callback) {
                    if(winkstart.publish('phone.get_models', function(_data_models) { defaults.list_models = _data_models; callback(null, _data_models); } )) {
                        callback(null, {});
                    }
                }
            },
            function(err, results){
                var render_data = defaults;

                if(typeof data === 'object' && data.id) {
                    render_data = $.extend(true, defaults, results.get_device);
                }

                THIS.render_device(render_data, target, callbacks);

                if(typeof callbacks.after_render == 'function') {
                    callbacks.after_render();
                }
            });
        },

        delete_device: function(data, success, error) {
            var THIS = this;

            if(typeof data.data == 'object' && data.data.id) {
                winkstart.request(true, 'device.delete', {
                        account_id: winkstart.apps['voip'].account_id,
                        api_url: winkstart.apps['voip'].api_url,
                        device_id: data.data.id
                    },
                    function(_data, status) {
                        if(typeof success == 'function') {
                            success(_data, status);
                        }
                    },
                    function(_data, status) {
                        if(typeof error == 'function') {
                            error(_data, status);
                        }
                    }
                );
            }
        },

        render_device: function(data, target, callbacks){
            var THIS = this,
                device_html,
                render;

            if(typeof data.data == 'object' && data.data.device_type) {
                device_html = THIS.templates[data.data.device_type].tmpl(data);

                /* Do device type specific things here */
                if($.inArray(data.data.device_type, ['fax', 'softphone', 'sip_device', 'smartphone']) > -1) {
                    device_html.delegate('#sip_password[type="password"]', 'focus', function() {
                        var value = $(this).val();
                        $('<input id="sip_password" name="sip.password" type="text"/>').insertBefore($(this)).val(value).focus();
                        $(this).remove();
                    });

                    device_html.delegate('#sip_password[type="text"]', 'blur', function(ev) {
                        var value;
                        if($(this).attr('removing') != 'true') {
                            $(this).attr('removing', 'true');
                            value = $(this).val();
                            $('<input id="sip_password" name="sip.password" type="password"/>').insertBefore($(this)).val(value);
                            $(this).remove();
                        }
                    });
                }

                winkstart.validate.set(THIS.config.validation[data.data.device_type], device_html);

                if(!$('#owner_id', device_html).val()) {
                    $('#edit_link', device_html).hide();
                }

                $('#owner_id', device_html).change(function() {
                    !$('#owner_id option:selected', device_html).val() ? $('#edit_link', device_html).hide() : $('#edit_link', device_html).show();
                });

                $('.inline_action', device_html).click(function(ev) {
                    var _data = ($(this).dataset('action') == 'edit') ? { id: $('#owner_id', device_html).val() } : {},
                        _id = _data.id;

                    ev.preventDefault();

                    winkstart.publish('user.popup_edit', _data, function(_data) {
                        /* Create */
                        if(!_id) {
                            $('#owner_id', device_html).append('<option id="'+ _data.data.id  +'" value="' + _data.data.id +'">'+ _data.data.first_name + ' ' + _data.data.last_name  +'</option>');
                            $('#owner_id', device_html).val(_data.data.id);
                            $('#edit_link', device_html).show();
                        }
                        else {
                            /* Update */
                            if('id' in _data.data) {
                                $('#owner_id #'+_data.data.id, device_html).text(_data.data.first_name + ' ' + _data.data.last_name);
                            }
                            /* Delete */
                            else {
                                $('#owner_id #'+_id, device_html).remove();
                                $('#edit_link', device_html).hide();
                            }
                        }
                    });
                });

                $('.device-save', device_html).click(function(ev) {
                    ev.preventDefault();

                    winkstart.validate.is_valid(THIS.config.validation[data.data.device_type], device_html, function() {
                            var form_data = form2object('device-form');

                            THIS.clean_form_data(form_data);

                            if(form_data.provision && form_data.provision.endpoint_brand) {
                                form_data.provision.endpoint_model = $('.dropdown_family[data-brand="'+form_data.provision.endpoint_brand+'"]', device_html).val();
                                if($('#'+form_data.provision.endpoint_model, device_html).size() > 0) {
                                    form_data.provision.endpoint_family = $('#'+form_data.provision.endpoint_model, device_html).data('family');
                                }
                            }

                            if('field_data' in data) {
                                delete data.field_data;
                            }

                            THIS.save_device(form_data, data, callbacks.save_success, winkstart.error_message.process_error(callbacks.save_error));
                        },
                        function() {
                            winkstart.alert('There were errors on the form, please correct!');
                        }
                    );
                });

                $('.device-delete', device_html).click(function(ev) {
                    ev.preventDefault();

                    winkstart.confirm('Are you sure you want to delete this device?', function() {
                        THIS.delete_device(data, callbacks.delete_success, callbacks.delete_error);
                    });
                });

                if(!$('#music_on_hold_media_id', device_html).val()) {
                    $('#edit_link_media', device_html).hide();
                }

                if(data.data.sip && data.data.sip.method === 'ip') {
                    $('#username_block', device_html).hide();
                }
                else {
                    $('#ip_block', device_html).hide();
                }

                $('#sip_method', device_html).change(function() {
                    if($('#sip_method option:selected', device_html).val() === 'ip') {
                        $('#ip_block', device_html).slideDown();
                        $('#username_block', device_html).slideUp();
                    }
                    else {
                        $('#username_block', device_html).slideDown();
                        $('#ip_block', device_html).slideUp();
                    }
                });

                $('#music_on_hold_media_id', device_html).change(function() {
                    !$('#music_on_hold_media_id option:selected', device_html).val() ? $('#edit_link_media', device_html).hide() : $('#edit_link_media', device_html).show();
                });

                $('.inline_action_media', device_html).click(function(ev) {
                    var _data = ($(this).dataset('action') == 'edit') ? { id: $('#music_on_hold_media_id', device_html).val() } : {},
                        _id = _data.id;

                    ev.preventDefault();

                    winkstart.publish('media.popup_edit', _data, function(_data) {
                        /* Create */
                        if(!_id) {
                            $('#music_on_hold_media_id', device_html).append('<option id="'+ _data.data.id  +'" value="'+ _data.data.id +'">'+ _data.data.name +'</option>');
                            $('#music_on_hold_media_id', device_html).val(_data.data.id);

                            $('#edit_link_media', device_html).show();
                        }
                        else {
                            /* Update */
                            if('id' in _data.data) {
                                $('#music_on_hold_media_id #'+_data.data.id, device_html).text(_data.data.name);
                            }
                            /* Delete */
                            else {
                                $('#music_on_hold_media_id #'+_id, device_html).remove();
                                $('#edit_link_media', device_html).hide();
                            }
                        }
                    });
                });
            }
            else {
                device_html = THIS.templates.general_edit.tmpl();

                $('.media_pane', device_html).hide();
                $('.media_tabs .buttons', device_html).click(function() {
                    $('.media_pane', device_html).show();

                    if(!$(this).hasClass('current')) {
                        $('.media_tabs .buttons').removeClass('current');
                        $(this).addClass('current');

                        data.data.device_type = $(this).attr('device_type');

                        THIS.format_data(data);

                        THIS.render_device(data, $('.media_pane', device_html), callbacks);
                    }
                });
            }

            $('*[rel=popover]:not([type="text"])', device_html).popover({
                trigger: 'hover'
            });

            $('*[rel=popover][type="text"]', device_html).popover({
                trigger: 'focus'
            });

            winkstart.tabs($('.view-buttons', device_html), $('.tabs', device_html));

            /* Awesome sauce for provisioning goodness */
            render = function() {
                (target)
                    .empty()
                    .append(device_html);
            };

            if(typeof data.data == 'object' && data.data.device_type == 'sip_device') {
                if(winkstart.publish('phone.render_fields', $(device_html), data.data.provision || (data.data.provision = {}), render, data.list_models || {})) {
                    render();
                }
            }
            else {
                render();

                $('.media_tabs .buttons[device_type="sip_device"]', device_html).trigger('click');
            }
        },

        format_data: function(data) {
            if(data.data.device_type === 'smartphone' || data.data.device_type === 'landline' || data.data.device_type === 'cellphone') {
                data.data.call_forward = {
                    enabled: true,
                    require_keypress: true,
                    keep_caller_id: true
                };
            }
            else {
                data.data.call_forward = {
                    enabled: false
                };
            }

            if(data.data.device_type === 'sip_uri') {
                data.data.sip.invite_format = 'route';
            }
        },

        migrate_data: function(data) {

            if(data.data.device_type == 'cell_phone') {
                data.data.device_type = 'cellphone';
            }

            if(typeof data.data.media == 'object' && typeof data.data.media.fax == 'object' && 'codecs' in data.data.media.fax) {
                delete data.data.media.fax.codecs;
            }

            if('status' in data.data) {
                data.data.enabled = data.data.status;
                delete data.data.status;
            }

            return data;
        },

        normalize_data: function(data) {
            if('provision' in data && data.provision.voicemail_beep !== 0) {
                delete data.provision.voicemail_beep;
            }

            if('media' in data && 'fax' in data.media && 'fax_option' in data.media) {
                data.media.fax.option = data.media.fax_option;
            }

            if('media' in data && 'bypass_media' in data.media) {
                delete data.media.bypass_media;
            }

            if(data.caller_id.internal.number == '' && data.caller_id.internal.name == '') {
                delete data.caller_id.internal;
            }

            if(data.caller_id.external.number == '' && data.caller_id.external.name == '') {
                delete data.caller_id.external;
            }

            if(data.caller_id.emergency.number == '' && data.caller_id.emergency.name == '') {
                delete data.caller_id.emergency;
            }

            if(!data.music_on_hold.media_id) {
                delete data.music_on_hold.media_id;
            }

            if(!data.owner_id) {
                delete data.owner_id;
            }

            if($.isEmptyObject(data.call_forward)) {
                delete data.call_forward;
            }

            if(!data.mac_address) {
                delete data.mac_address;
            }

            if(data.sip.method != 'ip') {
                delete data.sip.ip;
            }

            if(typeof data.outbound_flags == "string") {
                data.outbound_flags = data.outbound_flags.split(/,/);

                /* Get rid of empty string */
                var new_flags = [];
                $.each(data.outbound_flags, function(k, v) {
                    if(v.replace(/\s/g, '') !== '') {
                        new_flags.push(v);
                    }
                });
                data.outbound_flags = new_flags;
            }

            if(data.ringtones && 'internal' in data.ringtones && data.ringtones.internal === '') {
                delete data.ringtones.internal;
            }

            if(data.ringtones && 'external' in data.ringtones && data.ringtones.external === '') {
                delete data.ringtones.external;
            }

            if($.inArray(data.device_type, ['fax', 'softphone', 'sip_device', 'smartphone']) < 0) {
                delete data.call_restriction;
            }

            return data;
        },

        clean_form_data: function(form_data) {
            if('provision' in form_data && form_data.provision.voicemail_beep === true) {
                form_data.provision.voicemail_beep = 0;
            }

            if(form_data.mac_address) {
                form_data.mac_address = form_data.mac_address.toLowerCase();

                if(form_data.mac_address.match(/^(((\d|([a-f]|[A-F])){2}-){5}(\d|([a-f]|[A-F])){2})$/)) {
                    form_data.mac_address = form_data.mac_address.replace(/-/g,':');
                }
                else if(form_data.mac_address.match(/^(((\d|([a-f]|[A-F])){2}){5}(\d|([a-f]|[A-F])){2})$/)) {
                    form_data.mac_address = form_data.mac_address.replace(/(.{2})/g,'$1:').slice(0, -1);
                }
            }

            if(form_data.caller_id) {
                form_data.caller_id.internal.number = form_data.caller_id.internal.number.replace(/\s|\(|\)|\-|\./g,'');
                form_data.caller_id.external.number = form_data.caller_id.external.number.replace(/\s|\(|\)|\-|\./g,'');
                form_data.caller_id.emergency.number = form_data.caller_id.emergency.number.replace(/\s|\(|\)|\-|\./g,'');
            }

            if('media' in form_data && 'audio' in form_data.media) {
                form_data.media.audio.codecs = $.map(form_data.media.audio.codecs, function(val) { return (val) ? val : null });
            }

            if('media' in form_data && 'video' in form_data.media) {
                form_data.media.video.codecs = $.map(form_data.media.video.codecs, function(val) { return (val) ? val : null });
            }

            if(form_data.device_type == 'smartphone' || form_data.device_type == 'landline' || form_data.device_type == 'cellphone') {
                form_data.call_forward.number = form_data.call_forward.number.replace(/\s|\(|\)|\-|\./g,'');
                form_data.enabled = form_data.call_forward.enabled;
            }

            if('extra' in form_data && form_data.extra.notify_unregister === true) {
                form_data.suppress_unregister_notifications = false;
            }
            else {
                form_data.suppress_unregister_notifications = true;
            }

            if('extra' in form_data && 'closed_groups' in form_data.extra) {
                form_data.call_restriction.closed_groups = { action: form_data.extra.closed_groups ? 'deny' : 'inherit' };
            }

            delete form_data.extra;

            return form_data;
        },

        render_list: function(parent){
            var THIS = this;

            winkstart.request(true, 'device.list', {
                    account_id: winkstart.apps['voip'].account_id,
                    api_url: winkstart.apps['voip'].api_url
                },
                function (data, status) {
                    var map_crossbar_data = function(data) {
                        var new_list = [];

                        if(data.length > 0) {
                            $.each(data, function(key, val){
                                new_list.push({
                                    id: val.id,
                                    title: val.name || '(no name)'
                                });
                            });
                        }

                        new_list.sort(function(a, b) {
                            return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1;
                        });

                        return new_list;
                    }

                    $('#device-listpanel', parent)
                        .empty()
                        .listpanel({
                            label: 'Devices',
                            identifier: 'device-listview',
                            new_entity_label: 'Add Device',
                            data: map_crossbar_data(data.data),
                            publisher: winkstart.publish,
                            notifyMethod: 'device.edit',
                            notifyCreateMethod: 'device.edit',
                            notifyParent: parent
                        });

                    winkstart.request(true, 'device.status_no_loading', {
                            account_id: winkstart.apps['voip'].account_id,
                            api_url: winkstart.apps['voip'].api_url
                        },
                        function(_data, status) {
                            $.each(_data.data, function(key, val) {
                                $('#' + val.device_id, $('#device-listpanel', parent)).addClass('registered');
                            });
                        }
                    );

                    /* Cell/SmartPhones, SIP URIs, Landlines are always registered */
                    $.each(data.data, function(k, v) {
                        if($.inArray(v.device_type, ['smartphone', 'landline', 'cellphone', 'sip_uri']) > -1) {
                            if(v.enabled === false) {
                                $('#' + v.id, $('#device-listpanel', parent)).addClass('disabled');
                            }
                            else {
                                $('#' + v.id, $('#device-listpanel', parent)).addClass('registered');
                            }
                        }
                        else if(v.enabled === false) {
                            $('#' + v.id, $('#device-listpanel', parent)).addClass('disabled');
                        }
                    });
                }
            );
        },

        activate: function(parent) {
            var THIS = this,
                device_html = THIS.templates.device.tmpl();

            (parent || $('#ws-content'))
                .empty()
                .append(device_html);

            THIS.render_list(device_html);
        },

        popup_edit_device: function(data, callback, data_defaults) {
            var popup, popup_html;

            popup_html = $('<div class="inline_popup"><div class="inline_content main_content"/></div>');

            winkstart.publish('device.edit', data, popup_html, $('.inline_content', popup_html), {
                save_success: function(_data) {
                    popup.dialog('close');

                    if(typeof callback == 'function') {
                        callback(_data);
                    }
                },
                delete_success: function() {
                    popup.dialog('close');

                    if(typeof callback == 'function') {
                        callback({ data: {} });
                    }
                },
                after_render: function() {
                    popup = winkstart.dialog(popup_html, {
                        title: (data.id) ? 'Edit Device' : 'Create Device'
                    });
                }
            }, data_defaults);
        },

        define_stats: function() {
            var stats = {
                'active_calls': {
                    icon: 'device',
                    get_stat: function(callback) {
                        winkstart.request('device.status_no_loading', {
                                account_id: winkstart.apps['voip'].account_id,
                                api_url: winkstart.apps['voip'].api_url
                            },
                            function(_data, status) {
                                var stat_attributes = {
                                    name: 'active_calls',
                                    number: _data.data.length,
                                    active: _data.data.length > 0 ? true : false,
                                    color: _data.data.length < 1 ? 'red' : (_data.data.length > 1 ? 'green' : 'orange')
                                };

                                if(typeof callback === 'function') {
                                    callback(stat_attributes);
                                }
                            },
                            function(_data, status) {
                                callback({error: true});
                            }
                        );
                    },
                    click_handler: function() {
                        winkstart.publish('device.activate');
                    }
                }
            };

            return stats;
        },

        define_callflow_nodes: function(callflow_nodes) {
            var THIS = this;

            $.extend(callflow_nodes, {
                'device[id=*]': {
                    name: 'Device',
                    icon: 'phone',
                    category: 'Advanced',
                    module: 'device',
                    tip: 'Ring a VoIP or cell phone or other device',
                    data: {
                        id: 'null'
                    },
                    rules: [
                        {
                            type: 'quantity',
                            maxSize: '1'
                        }
                    ],
                    isUsable: 'true',
                    caption: function(node, caption_map) {
                        var id = node.getMetadata('id'),
                            returned_value = '';

                        if(id in caption_map) {
                            returned_value = caption_map[id].name;
                        }

                        return returned_value;
                    },
                    edit: function(node, callback) {
                        var _this = this;
                        winkstart.request(true, 'device.list', {
                                account_id: winkstart.apps['voip'].account_id,
                                api_url: winkstart.apps['voip'].api_url
                            },
                            function(data, status) {
                                var popup, popup_html;

                                popup_html = THIS.templates.device_callflow.tmpl({
                                    can_call_self: node.getMetadata('can_call_self') || false,
                                    parameter: {
                                        name: 'timeout (s)',
                                        value: node.getMetadata('timeout') || '20'
                                    },
                                    objects: {
                                        items: data.data,
                                        selected: node.getMetadata('id') || ''
                                    }
                                });

                                if($('#device_selector option:selected', popup_html).val() == undefined) {
                                    $('#edit_link', popup_html).hide();
                                }

                                $('.inline_action', popup_html).click(function(ev) {
                                    var _data = ($(this).dataset('action') == 'edit') ?
                                                    { id: $('#device_selector', popup_html).val() } : {};

                                    ev.preventDefault();

                                    winkstart.publish('device.popup_edit', _data, function(_data) {
                                        node.setMetadata('id', _data.data.id || 'null');
                                        node.setMetadata('timeout', $('#parameter_input', popup_html).val());
                                        node.setMetadata('can_call_self', $('#device_can_call_self', popup_html).is(':checked'));

                                        node.caption = _data.data.name || '';

                                        popup.dialog('close');
                                    });
                                });

                                $('#add', popup_html).click(function() {
                                    node.setMetadata('id', $('#device_selector', popup_html).val());
                                    node.setMetadata('timeout', $('#parameter_input', popup_html).val());
                                    node.setMetadata('can_call_self', $('#device_can_call_self', popup_html).is(':checked'));

                                    node.caption = $('#device_selector option:selected', popup_html).text();

                                    popup.dialog('close');
                                });

                                popup = winkstart.dialog(popup_html, {
                                    title: 'Device',
                                    minHeight: '0',
                                    beforeClose: function() {
                                        if(typeof callback == 'function') {
                                             callback();
                                        }
                                    }
                                });
                            }
                        );
                    }
                }
            });
        }
    }
);

