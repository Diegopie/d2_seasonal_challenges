const Coffee = () => {

    return (
        <>
            <div
                // style="position: fixed; top: 0px; left: 0px; width: 0px; height: 0px; background: rgba(0, 0, 0, 0); text-align: center; z-index: 99999;"
                className="iFrameContainer"
            >
                <iframe
                    title="Buy Me a Coffee"
                    className="iFrame"
                    // style="position: fixed; margin: 0px; border: 0px; right: 18px; bottom: 98px; height: 0px; opacity: 0; width: calc(100% - 38px); max-width: 350px; border-radius: 10px; box-shadow: rgba(13, 12, 34, 0.1) -6px 0px 30px; background: url('https://cdn.buymeacoffee.com/assets/img/widget/loader.svg') center center / 64px no-repeat rgb(255, 255, 255); z-index: 999999; transition: all 0.4s ease 0s; max-height: 620px;"
                ></iframe>
            </div>
            <div
                id="bmc-wbtn"
                className="imageContainer"
                // style="display: flex; align-items: center; justify-content: center; width: 64px; height: 64px; background: rgb(255, 129, 63); color: white; border-radius: 32px; position: fixed; right: 18px; bottom: 18px; box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 8px; z-index: 9999; cursor: pointer; font-weight: 600; transition: all 0.2s ease 0s;"
            >
                <img
                    className="img"
                    src="https://cdn.buymeacoffee.com/widget/assets/coffee%20cup.svg"
                    alt="Buy Me A Coffee"
                    // style="height: 40px; width: 40px; margin: 0; padding: 0;"
                />
            </div>
            <div
                className="msg"
                // style="position: fixed; right: 102px; bottom: 16px; background: rgb(255, 255, 255); z-index: 9999; box-shadow: rgba(13, 12, 34, 0.1) -6px 0px 30px; padding: 23px 24px; border-radius: 4px; font-size: 18px; color: rgb(13, 12, 34); width: auto; max-width: 260px; line-height: 1.5; font-family: 'Avenir Book1', 'Avenir Book2', 'Avenir Book3', 'Avenir Book4', 'Avenir Book5', 'Avenir Book6', sans-serif; display: none; opacity: 0;"
            >If this has helped you save time, show your support! I'll need the caffeine rush to get through the Gambit challenges
            </div>
        </>
    )
}

export default Coffee;