async function displayErrorMessage(message, timed=true, time=2500) {
    if (!($("#error-popup").length)) {
        let fakeJSX = `<div id="error-popup"><p>${message}</p></div>`;
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-error' style="height:${height}px"></div>`);
        if (timed) {
            await sleep(time);
            $("#error-popup").remove();
            $("#block-screen-error").remove();
        }
    }
}

let headshotDisplayed = new Map();

const loadExamples = async() => {
    let batchFakeJSX = "";
    for (let i = 1; i < 101; i++) {
        let punkId = i;
        headshotDisplayed.set(punkId, false);
        batchFakeJSX += `<div id="punk-${punkId}" class="punk-for-sale"><img id="punk-img-${punkId}" src="./images/punk-images/${punkId}.png" onclick="displayHeadshot(${punkId})"><p class="punk-id">#${punkId} ${punkId}<span class="eth-symbol">Ξ</span></p></div>`
    };
    $("#available-punks").append(batchFakeJSX);
}

const displayHeadshot = async(id) => {
    if (headshotDisplayed.get(id)) {
        headshotDisplayed.set(id, false);
        $(`#punk-img-${id}`).attr("src", `./images/punk-images/${id}.png`);
    }
    else {
        headshotDisplayed.set(id, true);
        $(`#punk-img-${id}`).attr("src", `./images/punk-images/headshot.png`);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async() => {
    await loadExamples();
}