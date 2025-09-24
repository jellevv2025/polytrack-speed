// main.mod.js
export default function SpeedBoostMod(api) {
    const boostMultiplier = 1.5; // 50% faster
    let boosting = false;

    api.on("carSpawn", (car) => {
        const originalSpeed = car.maxSpeed;

        api.onKey("ShiftLeft", "down", () => {
            if (!boosting) {
                car.maxSpeed = originalSpeed * boostMultiplier;
                boosting = true;
                api.log("Boost activated!");
            }
        });

        api.onKey("ShiftLeft", "up", () => {
            if (boosting) {
                car.maxSpeed = originalSpeed;
                boosting = false;
                api.log("Boost deactivated!");
            }
        });
    });
}
