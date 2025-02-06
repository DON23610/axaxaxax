var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_MapzenGlobalTerrain_1 = new ol.layer.Tile({
            'title': 'Mapzen Global Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'
            })
        });

        var lyr_SATELLITE_2 = new ol.layer.Tile({
            'title': 'SATELLITE',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_hybrid_3 = new ol.layer.Tile({
            'title': 'hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_ALL_ULB_305_4 = new ol.format.GeoJSON();
var features_ALL_ULB_305_4 = format_ALL_ULB_305_4.readFeatures(json_ALL_ULB_305_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALL_ULB_305_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALL_ULB_305_4.addFeatures(features_ALL_ULB_305_4);
var lyr_ALL_ULB_305_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALL_ULB_305_4, 
                style: style_ALL_ULB_305_4,
                popuplayertitle: 'ALL_ULB_305',
                interactive: true,
                title: '<img src="styles/legend/ALL_ULB_305_4.png" /> ALL_ULB_305'
            });
var format_Export_Output_3_5 = new ol.format.GeoJSON();
var features_Export_Output_3_5 = format_Export_Output_3_5.readFeatures(json_Export_Output_3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_3_5.addFeatures(features_Export_Output_3_5);
var lyr_Export_Output_3_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Export_Output_3_5, 
                style: style_Export_Output_3_5,
                popuplayertitle: 'Export_Output_3',
                interactive: true,
                title: '<img src="styles/legend/Export_Output_3_5.png" /> Export_Output_3'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MapzenGlobalTerrain_1.setVisible(true);lyr_SATELLITE_2.setVisible(true);lyr_hybrid_3.setVisible(true);lyr_ALL_ULB_305_4.setVisible(true);lyr_Export_Output_3_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MapzenGlobalTerrain_1,lyr_SATELLITE_2,lyr_hybrid_3,lyr_ALL_ULB_305_4,lyr_Export_Output_3_5];
lyr_ALL_ULB_305_4.set('fieldAliases', {'S_No': 'S_No', 'Ulb_Name': 'Ulb_Name', 'Ulb_Catego': 'Ulb_Catego', 'Division': 'Division', 'District': 'District', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'ULB_Code': 'ULB_Code', 'Name_of_EO': 'Name_of_EO', 'Mobile_No_': 'Mobile_No_', 'Land_Line': 'Land_Line', 'Link_offic': 'Link_offic', 'Designatio': 'Designatio', 'Mobile_Num': 'Mobile_Num', 'F15': 'F15', 'F16': 'F16', 'F17': 'F17', 'F18': 'F18', 'F19': 'F19', 'F20': 'F20', 'F21': 'F21', 'F22': 'F22', });
lyr_Export_Output_3_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STATE_ID': 'STATE_ID', 'DIST_ID': 'DIST_ID', 'BLOCK_ID': 'BLOCK_ID', 'HAB_ID': 'HAB_ID', 'LinkHab': 'LinkHab', 'Name': 'Name', 'linkid': 'linkid', 'PHASE': 'PHASE', 'blocklink': 'blocklink', 'MAST_STATE': 'MAST_STATE', 'MAST_DISTR': 'MAST_DISTR', 'MAST_BLOCK': 'MAST_BLOCK', 'MAST_HAB_C': 'MAST_HAB_C', 'MAST_HAB_N': 'MAST_HAB_N', 'MAST_HAB_1': 'MAST_HAB_1', 'MAST_HAB_T': 'MAST_HAB_T', 'MAST_HAB_S': 'MAST_HAB_S', 'MAST_MLA_C': 'MAST_MLA_C', 'MAST_MP_CO': 'MAST_MP_CO', 'MAST_RAILW': 'MAST_RAILW', 'MAST_PANCH': 'MAST_PANCH', 'MAST_TOURI': 'MAST_TOURI', 'MAST_PRIMA': 'MAST_PRIMA', 'MAST_MIDDL': 'MAST_MIDDL', 'MAST_HIGH_': 'MAST_HIGH_', 'MAST_INTER': 'MAST_INTER', 'MAST_DEGRE': 'MAST_DEGRE', 'MAST_HEALT': 'MAST_HEALT', 'MAST_DISPE': 'MAST_DISPE', 'MAST_MCW_C': 'MAST_MCW_C', 'MAST_PHCS': 'MAST_PHCS', 'MAST_VETNA': 'MAST_VETNA', 'MAST_TELEG': 'MAST_TELEG', 'MAST_TELEP': 'MAST_TELEP', 'MAST_BUS_S': 'MAST_BUS_S', 'MAST_ELECT': 'MAST_ELECT', 'MAST_PAN_1': 'MAST_PAN_1', 'STATUS': 'STATUS', 'Total_Weig': 'Total_Weig', 'LinkCodeHa': 'LinkCodeHa', 'MAST_IS_DE': 'MAST_IS_DE', 'MAST_IS_TR': 'MAST_IS_TR', });
lyr_ALL_ULB_305_4.set('fieldImages', {'S_No': 'TextEdit', 'Ulb_Name': 'TextEdit', 'Ulb_Catego': 'TextEdit', 'Division': 'TextEdit', 'District': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'ULB_Code': 'TextEdit', 'Name_of_EO': 'TextEdit', 'Mobile_No_': 'TextEdit', 'Land_Line': 'TextEdit', 'Link_offic': 'TextEdit', 'Designatio': 'TextEdit', 'Mobile_Num': 'TextEdit', 'F15': 'TextEdit', 'F16': 'TextEdit', 'F17': 'TextEdit', 'F18': 'TextEdit', 'F19': 'TextEdit', 'F20': 'TextEdit', 'F21': 'TextEdit', 'F22': 'TextEdit', });
lyr_Export_Output_3_5.set('fieldImages', {'OBJECTID': '', 'STATE_ID': '', 'DIST_ID': '', 'BLOCK_ID': '', 'HAB_ID': '', 'LinkHab': '', 'Name': '', 'linkid': '', 'PHASE': '', 'blocklink': '', 'MAST_STATE': '', 'MAST_DISTR': '', 'MAST_BLOCK': '', 'MAST_HAB_C': '', 'MAST_HAB_N': '', 'MAST_HAB_1': '', 'MAST_HAB_T': '', 'MAST_HAB_S': '', 'MAST_MLA_C': '', 'MAST_MP_CO': '', 'MAST_RAILW': '', 'MAST_PANCH': '', 'MAST_TOURI': '', 'MAST_PRIMA': '', 'MAST_MIDDL': '', 'MAST_HIGH_': '', 'MAST_INTER': '', 'MAST_DEGRE': '', 'MAST_HEALT': '', 'MAST_DISPE': '', 'MAST_MCW_C': '', 'MAST_PHCS': '', 'MAST_VETNA': '', 'MAST_TELEG': '', 'MAST_TELEP': '', 'MAST_BUS_S': '', 'MAST_ELECT': '', 'MAST_PAN_1': '', 'STATUS': '', 'Total_Weig': '', 'LinkCodeHa': '', 'MAST_IS_DE': '', 'MAST_IS_TR': '', });
lyr_ALL_ULB_305_4.set('fieldLabels', {'S_No': 'no label', 'Ulb_Name': 'no label', 'Ulb_Catego': 'no label', 'Division': 'no label', 'District': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'ULB_Code': 'no label', 'Name_of_EO': 'no label', 'Mobile_No_': 'no label', 'Land_Line': 'no label', 'Link_offic': 'no label', 'Designatio': 'no label', 'Mobile_Num': 'no label', 'F15': 'no label', 'F16': 'no label', 'F17': 'no label', 'F18': 'no label', 'F19': 'no label', 'F20': 'no label', 'F21': 'no label', 'F22': 'no label', });
lyr_Export_Output_3_5.set('fieldLabels', {'OBJECTID': 'no label', 'STATE_ID': 'no label', 'DIST_ID': 'no label', 'BLOCK_ID': 'no label', 'HAB_ID': 'no label', 'LinkHab': 'no label', 'Name': 'no label', 'linkid': 'no label', 'PHASE': 'no label', 'blocklink': 'no label', 'MAST_STATE': 'no label', 'MAST_DISTR': 'no label', 'MAST_BLOCK': 'no label', 'MAST_HAB_C': 'no label', 'MAST_HAB_N': 'no label', 'MAST_HAB_1': 'no label', 'MAST_HAB_T': 'no label', 'MAST_HAB_S': 'no label', 'MAST_MLA_C': 'no label', 'MAST_MP_CO': 'no label', 'MAST_RAILW': 'no label', 'MAST_PANCH': 'no label', 'MAST_TOURI': 'no label', 'MAST_PRIMA': 'no label', 'MAST_MIDDL': 'no label', 'MAST_HIGH_': 'no label', 'MAST_INTER': 'no label', 'MAST_DEGRE': 'no label', 'MAST_HEALT': 'no label', 'MAST_DISPE': 'no label', 'MAST_MCW_C': 'no label', 'MAST_PHCS': 'no label', 'MAST_VETNA': 'no label', 'MAST_TELEG': 'no label', 'MAST_TELEP': 'no label', 'MAST_BUS_S': 'no label', 'MAST_ELECT': 'no label', 'MAST_PAN_1': 'no label', 'STATUS': 'no label', 'Total_Weig': 'no label', 'LinkCodeHa': 'no label', 'MAST_IS_DE': 'no label', 'MAST_IS_TR': 'no label', });
lyr_Export_Output_3_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});