module.exports = {
    name: 'SPI (SD card)',
    icon: "/static/icons/icons8_stack_96px.png",
    index: 4,
    color: "230",
    blocks: [
        "spi__sdcard",
        {
            xml:
                `<block type="create_file">
                      <value name="DATA">
                          <shadow type="basic_string">
                              <field name="VALUE">Create-Example</field>
                          </shadow>
                      </value>
                  </block>`
        },
        {
            xml:
                `<block type="read_file">
              <value name="DATA">
                  <shadow type="basic_string">
                      <field name="VALUE">Read-example</field>
                  </shadow>
              </value>
          </block>`
        }


    ]
};