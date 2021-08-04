export enum WSOpCodes {
    HELLO = 0,
    VOICE_STATE_UPDATE = 1,
    IDENTIFY = 10,
    PING = 11,
    PONG = 12
}

export enum WSCloseCodes {
    UNKNOWN = 4000,
    NO_CLIENT_ID = 4001,
    NO_AUTH = 4002,
    NO_GUILD = 4003,
    DECODE_ERROR = 4004,
    UNKNOWN_OPCODE = 4005,
    SESSION_EXPIRED = 4006,
    SERVER_CLOSED = 4010,
    NOT_ALLOWED = 4011,
    ALREADY_CONNECTED = 4012,
    NOT_IDENTIFIED = 4013
}

export enum WSEvents {
    READY = "READY",
    TRACK_ADD = "TRACK_ADD",
    TRACKS_ADD = "TRACKS_ADD",
    TRACK_START = "TRACK_START",
    TRACK_FINISH = "TRACK_FINISH",
    TRACK_ERROR = "TRACK_ERROR",
    QUEUE_END = "QUEUE_END",
    QUEUE_STATE_UPDATE = "QUEUE_STATE_UPDATE",
    VOICE_CONNECTION_READY = "VOICE_CONNECTION_READY",
    VOICE_CONNECTION_ERROR = "VOICE_CONNECTION_ERROR",
    VOICE_CONNECTION_DISCONNECT = "VOICE_CONNECTION_DISCONNECT",
    AUDIO_PLAYER_ERROR = "AUDIO_PLAYER_ERROR",
    AUDIO_PLAYER_STATUS = "AUDIO_PLAYER_STATUS"
}

export enum Filters {
    bassboost = "bass=g=20",
    eight = "apulsator=hz=0.09",
    vaporwave = "aresample=48000,asetrate=48000*0.8",
    nightcore = "aresample=48000,asetrate=48000*1.25",
    phaser = "aphaser=in_gain=0.4",
    tremolo = "tremolo",
    vibrato = "vibrato=f=6.5",
    reverse = "areverse",
    treble = "treble=g=5",
    normalizer = "dynaudnorm=g=101",
    surrounding = "surround",
    pulsator = "apulsator=hz=1",
    subboost = "asubboost",
    karaoke = "stereotools=mlev=0.03",
    flanger = "flanger",
    gate = "agate",
    haas = "haas",
    mcompand = "mcompand",
    mono = "pan=mono|c0=.5*c0+.5*c1",
    mstlr = "stereotools=mode=ms>lr",
    mstrr = "stereotools=mode=ms>rr",
    compressor = "compand=points=-80/-105|-62/-80|-15.4/-15.4|0/-12|20/-7.6",
    expander = "compand=attacks=0:points=-80/-169|-54/-80|-49.5/-64.6|-41.1/-41.1|-25.8/-15|-10.8/-4.5|0/0|20/8.3",
    softlimiter = "compand=attacks=0:points=-80/-80|-12.4/-12.4|-6/-8|0/-6.8|20/-2.8",
    chorus = "chorus=0.7:0.9:55:0.4:0.25:2",
    chorus2d = "chorus=0.6:0.9:50|60:0.4|0.32:0.25|0.4:2|1.3",
    chorus3d = "chorus=0.5:0.9:50|60|40:0.4|0.32|0.3:0.25|0.4|0.3:2|2.3|1.3",
    fadein = "afade=t=in:ss=0:d=10"
}
