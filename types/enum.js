"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max"; // maximo del enum
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
})();
