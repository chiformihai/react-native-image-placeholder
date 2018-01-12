import React from 'react';
import {WebView} from 'react-native';

const firstHtml = '<html><head><style>html, body { margin:0; padding:0; overflow:hidden } svg { position:fixed; top:0; left:0; height:100%; width:100% }</style></head><body>';
const lastHtml = '</body></html>';

export default ({svgContent}) => (
<WebView
scrollEnabled={false}
source={{html: `${firstHtml}${svgContent}${lastHtml}`}}
/>
);
