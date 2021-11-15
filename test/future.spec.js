import {
    Builder, By, Key, until
} from "selenium-webdriver";

describe(
    "Sign-Out", async function () {
        const driver = await new Builder().forBrowser(
            "chrome").usingServer(
            "http://localhost:4444").build();
        afterEach(
            async function () {
                try {
                    await driver.quit();
                }
                finally {
                    console.debug(
                        "[Debug]",
                        "Exiting ..."
                    );
                }
            });

        it(
            "Sign-Out", async function () {
                // Test name: Sign-Out
                // Step # | name | target | value
                // 1 | open | / |
                await driver.get(
                    "https://localhost:8443/");
                // 2 | setWindowSize | 2260x1358 |
                await driver.manage().window().setRect(
                    {
                        width: 2260,
                        height: 1358
                    });
                // 3 | click | css=#primary-menu-switcher-button > .cds--btn__icon |
                await driver.findElement(
                    By.css("#primary-menu-switcher-button > .cds--btn__icon")).click();
                // 4 | click | id=switcher-side-panel-sign-out-button |
                await driver.findElement(
                    By.id("switcher-side-panel-sign-out-button")).click();
            }
        );
    }
);
