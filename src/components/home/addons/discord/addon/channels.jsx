import React from 'react';
import { User } from './';

function Component(props){

    return (
        <div className="bg-white dark:bg-coolGray-700 col-span-3 xl:col-span-2 flex-col mt-2 p-2 border-b-4 border-accent shadow">
            {props.data.channels.map(data => {
                return (
                    <div key={`${data.name}-channel-${new Date()}`} className="cursor-pointer select-none">
                        <div id={data.name} onClick={e => props.showChild(e)} className="flex shadow p-1 rounded-full dark:bg-coolGray-800 bg-coolGray-100 dark:bg-coolGray-900 border border-gray-200 dark:border-gray-600 dark:text-white my-1 shadow">
                            <span className="flex-1 flex truncate">
                                <span className="p-1">
                                    <props.icons.Volume/>
                                </span>
                                <span className="mt-1">
                                    <p className="px-2 truncate">{data.name}</p>
                                </span>
                            </span>
                            <span className="p-1">
                                <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                                    <circle className={`fill-current ${(data.users.length > 0) ? 'text-green-400' : 'text-red-400' }`} cx="10.5" cy="10.5" fill="none" r="8" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                            <span id="up" className="p-1">
                                <props.icons.UpArrow/>
                            </span>
                            <span id="down" className="p-1 hidden">
                                <props.icons.DownArrow/>
                            </span>
                        </div>
                        <div className="flex-0 hidden">
                            {data.users.map(data => {
                                return (
                                    <User key={`${data.id}-user-${new Date()}`} {...data} />
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );

}

export default Component;

