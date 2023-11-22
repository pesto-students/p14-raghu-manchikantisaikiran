function displayWindowProperties() {
    const userAgent = window.navigator.userAgent;
    const width = window.screen.width;
    const height = window.screen.height;
    const href = window.location.href;
    const pathName = window.location.pathname;

    const json = JSON.stringify({ userAgent, width, height, href, pathName });

    window.localStorage.setItem('sampleData', json);
    window.sessionStorage.setItem('sampleData', json);
    
    const localStorageData = localStorage.getItem('sampleData');
    const sessionStorageData = localStorage.getItem('sampleData');

    console.log('userAgent =', userAgent)
    console.log('screen width =', width)
    console.log('screen height =', height)
    console.log('href =', href)
    console.log('pathName =', pathName)
    if(localStorageData){
        console.log('Local Storage Data =', JSON.parse(localStorageData));
        console.log('Session Storage Data =', JSON.parse(sessionStorageData));
    }
}

displayWindowProperties();