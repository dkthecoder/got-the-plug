const { hexStripZeros } = require("ethers/lib/utils")

const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("Wave");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract Deployed by:", owner.address);

    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave();
    await waveTxn.wait();
};

const runMain = async () => {
    try {
        await main();
        process.exit(0); //exit node process without error
    } catch (error) {
        console.log(error);
        process.exit(1); //exit node process while indicating "uncaught fatal exception" error
    }
};

runMain();