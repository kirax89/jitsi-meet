// @flow

import { ColorPalette, getRGBAFormat } from '../styles';

/**
 * The default color scheme of the application.
 */
export default {
    '_defaultTheme': {
        // Generic app theme colors that are used accross the entire app.
        // All scheme definitions below inherit these values.
        background: 'rgb(255, 255, 255)',
        errorText: ColorPalette.red,
        icon: 'rgb(28, 32, 37)',
        text: 'rgb(28, 32, 37)'
    },
    'Chat': {
        displayName: 'rgb(94, 109, 121)',
        // localMsgBackground: 'rgb(215, 230, 249)',
        localMsgBackground: 'rgb(249, 215, 241)',
        // privateMsgBackground: 'rgb(250, 219, 219)',
        privateMsgBackground: 'rgb(230,250,219)',
        privateMsgNotice: 'rgb(186, 39, 58)',
        // remoteMsgBackground: 'rgb(241, 242, 246)',
        remoteMsgBackground: 'rgb(246, 241, 244)',
        replyBorder: 'rgb(219, 197, 200)',
        // replyIcon: 'rgb(94, 109, 121)'
        replyIcon: 'rgb(121,94,114)'
    },
    'Conference': {
        // inviteButtonBackground: 'rgb(0, 119, 225)',
        inviteButtonBackground: 'rgb(225, 0, 169)',
        onVideoText: 'white'
    },
    'Dialog': {
        border: 'rgba(0, 3, 6, 0.6)',
        // buttonBackground: ColorPalette.blue,
        buttonBackground: 'rgb(167, 53, 139)',
        buttonLabel: ColorPalette.white
    },
    'Header': {
        // background: ColorPalette.blue,
        background: 'rgb(167, 53, 139)',
        icon: ColorPalette.white,
        // statusBar: ColorPalette.blueHighlight,
        statusBar: 'rgb(178, 16, 138)',
        statusBarContent: ColorPalette.white,
        text: ColorPalette.white
    },
    'Modal': {},
    'LargeVideo': {
        // background: 'rgb(42, 58, 75)'
        background: 'rgb(74, 41, 66)'
    },
    'LoadConfigOverlay': {
        background: 'rgb(249, 249, 249)'
    },
    'Thumbnail': {
        activeParticipantHighlight: 'rgb(81, 214, 170)',
        activeParticipantTint: 'rgba(49, 183, 106, 0.3)',
        // background: 'rgb(94, 109, 122)'
        background: 'rgb(122, 94, 115)'
    },
    'Toolbox': {
        button: 'rgb(255, 255, 255)',
        buttonToggled: 'rgb(38, 58, 76)',
        buttonToggledBorder: getRGBAFormat('#a4b8d1', 0.6),
        hangup: 'rgb(225, 45, 45)'
    }
};
