import React from 'react';

function Component(props){
    
    return (
        <div className="col-auto cursor-pointer hover:bg-other bg-primary border-accent border-b-4 shadow-md m-2 xl:mx-4 p-2 flex flex-col items-center xl:w-4/12 text-center">
            <div className="text-md font-bold flex flex-col text-gray-900 p-2">
                <span className="uppercase text-title tracking-wide text-xl font-bold lg:text-xl break-words xl:text-xl leading-tight">Today</span><span className="font-normal text-accent text-sm" id="location">{props.Weather.Location}</span>
                <span className="font-normal text-paragraph text-sm" id="date">{props.Weather.TodayWeather.date}</span>
            </div>						
            <div className="w-24 h-24 flex items-center justify-center border border-accent rounded-full text-accent p-4 text-5xl" id="weather-icon">{props.Weather.TodayWeather.Icon}</div>
            <p className="text-paragraph mb-2" id="weather-desc">{props.Weather.TodayWeather.Description}</p>
            <div className="text-3xl font-bold text-paragraph mb-6" id="weather-temp">{props.Weather.TodayWeather.MaxTemp} / {props.Weather.TodayWeather.LowTemp}</div>
            <div className="flex justify-around w-full">
                <div className="flex flex-col items-center text-paragraph px-2" >
                    <span id="weather-max-temp">{props.Weather.TodayWeather.MaxFeels}</span>
                </div>
                <div className="flex items-center text-paragraph px-2">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 12 21" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Desktop-HD" transform="translate(-201.000000, -480.000000)" fill="#0ABDE3" fillRule="nonzero"><g id="Group" transform="translate(95.000000, 222.000000)"><g id="Group-3" transform="translate(25.000000, 256.774194)"><g id="wind" transform="translate(87.500000, 11.225806) rotate(-90.000000) translate(-87.500000, -11.225806) translate(77.000000, 5.225806)"><g id="w25"><path d="M16.222113,3.9997453 C16.1020238,4.11833549 16.0351226,4.28256699 16.0372726,4.45349848 C16.0394226,4.62442997 16.1104323,4.78683812 16.2334644,4.90221395 C16.6379853,5.28943966 17.0750123,5.74649295 17.5388698,6.22999608 C17.7684767,6.47016066 18.06,6.8515674 18.2916708,7.08908699 C16.7035135,7.07321708 16.0399754,7.11553683 15.1586978,7.07639107 C14.8000983,7.05999216 14.595258,7.23032915 14.595258,7.58264107 C14.595258,7.93442398 14.7443735,8.11216693 15.1034889,8.11216693 C15.9563882,8.11216693 16.7896806,8.06878918 18.3881572,8.08571708 C17.6494273,8.82722969 16.9039897,9.56168541 16.151941,10.288989 C16.0291152,10.4045196 15.9582985,10.5669407 15.9562468,10.737822 C15.9541952,10.9087034 16.0210908,11.0728624 16.1411057,11.1914577 C16.3966491,11.4436893 16.7995644,11.4483255 17.0605651,11.2020376 C18.1048894,10.2022335 19.4185504,8.91148119 20.2957002,8.02805643 C20.4143735,7.90850313 20.5072482,7.74874608 20.5072482,7.58264107 L20.5072482,7.56465517 C20.5072482,7.39273119 20.3988943,7.22927116 20.2699017,7.11236285 C19.7188452,6.6151058 19.092457,5.97501959 18.5001229,5.35662226 C18.0589126,4.89113359 17.6081986,4.43521373 17.1482801,3.98916536 C16.8847573,3.74276899 16.4802155,3.74739022 16.222113,3.9997453 L16.222113,3.9997453 Z" id="Path"></path><path d="M0,7.255721 C0,7.04623824 0.165110565,6.87695925 0.369434889,6.87695925 L18.7214742,6.87695925 C18.9252826,6.87695925 19.0909091,7.04623824 19.0909091,7.255721 L19.0909091,8.08518809 C19.0909091,8.29467085 18.9257985,8.46394984 18.7214742,8.46394984 L0.369434889,8.46394984 C0.165401634,8.46394984 0,8.29437243 0,8.08518809 L0,7.255721 Z" id="Path"></path><path d="M0.369434889,8.46394984 C0.165401634,8.46394984 0,8.29437243 0,8.08518809 L0,0.378761755 C0,0.169278997 0.165110565,0 0.369434889,0 L1.17847666,0 C1.38228501,0 1.54791155,0.169278997 1.54791155,0.378761755 L1.54791155,8.08518809 C1.54791155,8.29414185 1.38280098,8.46394984 1.17847666,8.46394984 L0.369434889,8.46394984 Z" id="Path"></path></g><path d="M4.108,8.53448276 C3.91028206,8.53448276 3.75,8.3634922 3.75,8.15256466 L3.75,0.381918103 C3.75,0.170689655 3.91,0 4.108,0 L4.892,0 C5.0895,0 5.25,0.170689655 5.25,0.381918103 L5.25,8.15256466 C5.25,8.3632597 5.09,8.53448276 4.892,8.53448276 L4.108,8.53448276 Z" id="Path"></path></g></g></g></g></g></svg>
                    <span id="wind-speed">{props.Weather.TodayWeather.Wind}</span>
                </div>
            </div>
        </div>
    );    
    
}

export default Component;