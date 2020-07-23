// =============================================================================
// Buzzer
// =============================================================================
const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
  name: "Music",
  index: 3,
  color: "230",
  icon: `file:///${dirIcon}/static/icons/music.png`,
  blocks: [
    {
      xml: `<sep gap="28"></sep><label text="Block setup NX2003 MUSIC" web-class="headline"></label>`
    },
    "setup_nx2003_Music",
    "setup_tempo",
    // {
    //   xml: `<sep gap="28"></sep><label text="Block setting NX2003 MUSIC" web-class="headline"></label>`
    // },
    "music_note",
    "music_notes",
    {
      xml:
        `<block type="music_play_notes">
                        <value name="note">                    
                            <block type="music_notes">
                                <field name="notes">C4,B4,E4</field>
                            </block>
                        </value>
                    </block>`
    },
    {
      xml: `<sep gap="32"></sep><label text="Example song for NX2003" web-class="headline"></label>`
    },
    // 'music_song_mario_underworld',
    // 'music_song_jingle_bell',
    // 'music_song_cannon_rock',
    // 'music_song_ice_cream',
    'music_ice_cream',
    'music_cat',
    'music_conan',
    'music_mario'
  ]
};
