const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
    name: "DHT",
    index: 3,
    color: "230",
    icon: `file:///${dirIcon}/static/icons/DHT11.png`,
    blocks: [
        "dhtesp_setup",
        "dhtesp_read_temp",
        "dhtesp_read_humid",
    ]
};
