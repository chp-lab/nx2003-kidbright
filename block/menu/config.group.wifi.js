const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
    name: "WiFi",
    index: 2,
    color: "30",
    icon: `file:///${dirIcon}/static/icons/wifi.png`,
    blocks: [
            'block_setup_wifi',
            'block_wifi_connect',    
            'block_wifi_ap',
            // {
            //     xml : 
            //         `<block type="wifi_http_get">
            //             <value name="url">
            //                 <shadow type="basic_string">
            //                     <field name="VALUE">Hello world!</field>
            //                 </shadow>
            //             </value>
            //         </block>`
            // },
            // {
            //     xml : 
            //         `<block type="wifi_http_post">
            //             <value name="url">
            //                 <shadow type="basic_string">
            //                     <field name="VALUE">Hello world!</field>
            //                 </shadow>
            //             </value>
            //             <value name="data">
            //                 <shadow type="basic_string">
            //                     <field name="VALUE">Hello world!</field>
            //                 </shadow>
            //             </value>
            //         </block>`
            // },                   
            'block_wifi_start_server',
            'block_wifi_server_on',
            {
                xml : 
                    `<block type="block_wifi_server_send">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                    </block>`
            },
            
            'block_wifi_get_ip_addr',
            'block_wifi_get_ap_ip_addr',
            'block_wifi_get_arg'
        ]
  };
  