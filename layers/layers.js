var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PetaRawanTRANTIBUM2024_1 = new ol.format.GeoJSON();
var features_PetaRawanTRANTIBUM2024_1 = format_PetaRawanTRANTIBUM2024_1.readFeatures(json_PetaRawanTRANTIBUM2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaRawanTRANTIBUM2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetaRawanTRANTIBUM2024_1.addFeatures(features_PetaRawanTRANTIBUM2024_1);
var lyr_PetaRawanTRANTIBUM2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetaRawanTRANTIBUM2024_1, 
                style: style_PetaRawanTRANTIBUM2024_1,
                popuplayertitle: 'Peta Rawan TRANTIBUM 2024',
                interactive: true,
    title: 'Peta Rawan TRANTIBUM 2024<br />\
    <img src="styles/legend/PetaRawanTRANTIBUM2024_1_0.png" /> 32 - 152<br />\
    <img src="styles/legend/PetaRawanTRANTIBUM2024_1_1.png" /> 152 - 211<br />\
    <img src="styles/legend/PetaRawanTRANTIBUM2024_1_2.png" /> 211 - 319<br />\
    <img src="styles/legend/PetaRawanTRANTIBUM2024_1_3.png" /> 319 - 492<br />\
    <img src="styles/legend/PetaRawanTRANTIBUM2024_1_4.png" /> 492 - 4974<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_PetaRawanTRANTIBUM2024_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PetaRawanTRANTIBUM2024_1];
lyr_PetaRawanTRANTIBUM2024_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'MIRAS': 'MIRAS', 'PROSTITUSI': 'PROSTITUSI', 'JOMPO TRLN': 'JOMPO TRLN', 'PMKS': 'PMKS', 'ANAK JLN': 'ANAK JLN', 'ODGJ': 'ODGJ', 'NARKOBA': 'NARKOBA', 'SMP JALAN': 'SMP JALAN', 'SMP SUNGAI': 'SMP SUNGAI', 'KARAMBA JA': 'KARAMBA JA', 'PEMB ANAK': 'PEMB ANAK', 'PENGAMANAN': 'PENGAMANAN', 'UNJUK RASA': 'UNJUK RASA', 'PNGRUSAKAN': 'PNGRUSAKAN', 'TAWURAN': 'TAWURAN', 'YUSTISI': 'YUSTISI', 'PKL': 'PKL', 'BANGUN LIA': 'BANGUN LIA', 'REKLAME': 'REKLAME', 'IZIN MB': 'IZIN MB', 'SENGKETA': 'SENGKETA', 'PCEMAR AIR': 'PCEMAR AIR', 'PCMAR LING': 'PCMAR LING', 'PNAMBANG L': 'PNAMBANG L', 'P TENKERJA': 'P TENKERJA', 'SIUP': 'SIUP', 'TOTAL': 'TOTAL', });
lyr_PetaRawanTRANTIBUM2024_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'MIRAS': 'TextEdit', 'PROSTITUSI': 'TextEdit', 'JOMPO TRLN': 'TextEdit', 'PMKS': 'TextEdit', 'ANAK JLN': 'TextEdit', 'ODGJ': 'TextEdit', 'NARKOBA': 'TextEdit', 'SMP JALAN': 'TextEdit', 'SMP SUNGAI': 'TextEdit', 'KARAMBA JA': 'TextEdit', 'PEMB ANAK': 'TextEdit', 'PENGAMANAN': 'TextEdit', 'UNJUK RASA': 'TextEdit', 'PNGRUSAKAN': 'TextEdit', 'TAWURAN': 'TextEdit', 'YUSTISI': 'TextEdit', 'PKL': 'TextEdit', 'BANGUN LIA': 'TextEdit', 'REKLAME': 'TextEdit', 'IZIN MB': 'TextEdit', 'SENGKETA': 'TextEdit', 'PCEMAR AIR': 'TextEdit', 'PCMAR LING': 'TextEdit', 'PNAMBANG L': 'TextEdit', 'P TENKERJA': 'TextEdit', 'SIUP': 'TextEdit', 'TOTAL': 'TextEdit', });
lyr_PetaRawanTRANTIBUM2024_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'MIRAS': 'inline label - visible with data', 'PROSTITUSI': 'inline label - visible with data', 'JOMPO TRLN': 'inline label - visible with data', 'PMKS': 'inline label - visible with data', 'ANAK JLN': 'inline label - visible with data', 'ODGJ': 'inline label - visible with data', 'NARKOBA': 'inline label - visible with data', 'SMP JALAN': 'inline label - visible with data', 'SMP SUNGAI': 'inline label - visible with data', 'KARAMBA JA': 'inline label - visible with data', 'PEMB ANAK': 'inline label - visible with data', 'PENGAMANAN': 'inline label - visible with data', 'UNJUK RASA': 'inline label - always visible', 'PNGRUSAKAN': 'header label - visible with data', 'TAWURAN': 'inline label - visible with data', 'YUSTISI': 'inline label - visible with data', 'PKL': 'inline label - visible with data', 'BANGUN LIA': 'inline label - visible with data', 'REKLAME': 'inline label - visible with data', 'IZIN MB': 'inline label - visible with data', 'SENGKETA': 'inline label - visible with data', 'PCEMAR AIR': 'inline label - visible with data', 'PCMAR LING': 'inline label - visible with data', 'PNAMBANG L': 'inline label - visible with data', 'P TENKERJA': 'inline label - visible with data', 'SIUP': 'inline label - visible with data', 'TOTAL': 'inline label - visible with data', });
lyr_PetaRawanTRANTIBUM2024_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});