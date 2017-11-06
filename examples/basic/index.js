
let ganglion;

const onConnectClick = async () => {
    ganglion = new Ganglion();
    await ganglion.connect();
    await ganglion.start();
    let lastSampleNumber;
    ganglion.stream.subscribe(samples => {
        for (let i = 0; i < samples.length; i++) {
            console.log(samples[i].sampleNumber);
        }
    });
};

const onDisconnectClick = async () => {
    ganglion.disconnect();
};

document.getElementById('connect')
    .addEventListener('click', onConnectClick);

document.getElementById('disconnect')
    .addEventListener('click', onDisconnectClick);