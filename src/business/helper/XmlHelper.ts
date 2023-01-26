export class XmlHelper {
  static readFile(xmlFile): string {
    const fs = require('fs');
    const file_data = fs.readFileSync(xmlFile, {
      encoding: 'utf8',
      flag: 'r',
    });

    return file_data;
  }

  static addCDATA(xml): string {
    xml = xml.replace(/</g, '&lt;');
    xml = xml.replace(/>/g, '&gt;');
    return xml;
    //     $xmlStr=str_replace('<','&lt;',$htmlStr);
    // $xmlStr=str_replace('>','&gt;',$xmlStr);
    // $xmlStr=str_replace('"','&quot;',$xmlStr);
    // $xmlStr=str_replace("'",'&#39;',$xmlStr);
    // $xmlStr=str_replace("&",'&amp;',$xmlStr);
    // return $xmlStr;

    // return xml;
    // // return `<![CDATA[
    // //     ${xml}
    // //  ]]>`;
  }
}
